import { HttpClient } from '@angular/common/http';
import { Component, computed, ElementRef, inject, OnInit, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';

type Screen = 'home' | 'elections' | 'parties' | 'how-it-works' | 'more-info' | 'test-type' | 'quiz' | 'results';
type Answer = boolean | null | undefined;
type Position = 'yes' | 'no';
type TestLevel = 'rapido' | 'normal' | 'extenso';

interface Party {
  id: string;
  name: string;
  area: string;
  color: string;
  logo: string;
}

interface Evidence {
  partyId: string;
  position: Position;
  reference: string;
  href: string;
}

interface Question {
  id: string;
  topic: string;
  question: string;
  context: string;
  testLevel: TestLevel;
  yesParties: string[];
  noParties: string[];
  evidence: Evidence[];
}

interface QuestionPack {
  year: number;
  election: string;
  parties: Party[];
  questions: Question[];
}

interface Edition {
  year: number;
  label: string;
  file: string;
}

interface EditionCatalog {
  editions: Edition[];
}

interface PartyResult extends Party {
  points: number;
  matches: number;
  compared: number;
  score: number;
}

interface PartyAnswerFeedback extends Party {
  delta: 1 | -1;
}

interface AnswerFeedback {
  answer: boolean;
  parties: PartyAnswerFeedback[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App implements OnInit {
  private readonly http = inject(HttpClient);
  private answerAdvanceTimer: ReturnType<typeof setTimeout> | null = null;

  @ViewChild('feedbackList') private feedbackList?: ElementRef<HTMLDivElement>;
  @ViewChildren('feedbackStep') private feedbackSteps?: QueryList<ElementRef<HTMLDivElement>>;

  readonly screen = signal<Screen>('home');
  readonly catalog = signal<Edition[]>([]);
  readonly selectedEdition = signal<Edition | null>(null);
  readonly selectedPartyIds = signal<string[]>([]);
  readonly showAnswerFeedback = signal(true);
  readonly selectedTestType = signal<TestLevel | null>(null);
  readonly pack = signal<QuestionPack | null>(null);
  readonly quizOrder = signal<Question[] | null>(null);
  readonly answers = signal<Answer[]>([]);
  readonly answerFeedback = signal<AnswerFeedback | null>(null);
  readonly answerFeedbackIndex = signal(0);
  readonly currentIndex = signal(0);
  readonly loading = signal(true);
  readonly loadError = signal(false);
  readonly sharingResults = signal(false);
  readonly shareMessage = signal('');

  readonly allQuestions = computed(() => this.pack()?.questions ?? []);
  readonly questions = computed(() => {
    const quizOrder = this.quizOrder();
    if (quizOrder) return quizOrder;

    const level = this.selectedTestType();
    const questions = this.questionsForSelectedParties();
    if (level === 'rapido') return questions.filter((question) => question.testLevel === 'rapido');
    if (level === 'normal') return questions.filter((question) => question.testLevel !== 'extenso');
    return questions;
  });
  readonly estimatedMinutes = computed(() => Math.max(3, Math.ceil(this.questions().length * 0.25)));
  readonly hasUpcoming2026 = computed(() => !this.catalog().some((edition) => edition.year === 2026));
  readonly activeQuestion = computed(() => this.questions()[this.currentIndex()]);
  readonly progress = computed(() => {
    const count = this.questions().length;
    return count === 0 ? 0 : Math.round(((this.currentIndex() + 1) / count) * 100);
  });
  readonly answeredCount = computed(
    () => this.answers().filter((answer) => answer !== undefined && answer !== null).length,
  );
  readonly results = computed<PartyResult[]>(() => {
    const pack = this.pack();
    const answers = this.answers();
    if (!pack) return [];

    return pack.parties
      .filter((party) => this.selectedPartyIds().includes(party.id))
      .map((party) => {
        let matches = 0;
        let compared = 0;
        let points = 0;

        this.questions().forEach((question, index) => {
          const answer = answers[index];
          if (answer === undefined || answer === null) return;

          const position = this.positionFor(question, party.id);
          if (position === undefined) return;

          compared += 1;
          if ((answer && position === 'yes') || (!answer && position === 'no')) {
            matches += 1;
            points += 1;
          } else {
            points -= 1;
          }
        });

        return {
          ...party,
          points,
          matches,
          compared,
          score: compared === 0 ? 0 : ((points + compared) / (2 * compared)) * 10,
        };
      })
      .sort((a, b) => b.score - a.score || b.compared - a.compared || b.matches - a.matches);
  });
  readonly bestResult = computed(() => this.results().find((result) => result.compared > 0) ?? null);

  ngOnInit(): void {
    this.loadCatalog();
  }

  private loadCatalog(): void {
    this.loading.set(true);
    this.loadError.set(false);
    this.http.get<EditionCatalog>('/data/ediciones.json').subscribe({
      next: (catalog) => {
        this.catalog.set(catalog.editions);
        this.loading.set(false);
        this.loadError.set(catalog.editions.length === 0);
      },
      error: () => {
        this.loading.set(false);
        this.loadError.set(true);
      },
    });
  }

  chooseEdition(edition: Edition): void {
    this.clearAnswerAdvanceTimer();
    this.selectedEdition.set(edition);
    this.selectedTestType.set(null);
    this.quizOrder.set(null);
    this.currentIndex.set(0);
    this.answers.set([]);

    if (this.pack()?.year === edition.year) {
      this.selectAllParties();
      this.screen.set('parties');
      return;
    }

    this.loadEdition(edition, 'parties');
  }

  toggleParty(partyId: string): void {
    this.selectedPartyIds.update((ids) =>
      ids.includes(partyId) ? ids.filter((id) => id !== partyId) : [...ids, partyId],
    );
  }

  selectAllParties(): void {
    this.selectedPartyIds.set(this.pack()?.parties.map((party) => party.id) ?? []);
  }

  clearPartySelection(): void {
    this.selectedPartyIds.set([]);
  }

  toggleAnswerFeedback(): void {
    this.showAnswerFeedback.update((value) => !value);
  }

  continueToTestType(): void {
    if (this.selectedPartyIds().length < 2) return;
    this.screen.set('test-type');
  }

  backToParties(): void {
    this.clearAnswerAdvanceTimer();
    this.selectedTestType.set(null);
    this.quizOrder.set(null);
    this.currentIndex.set(0);
    this.answers.set([]);
    this.screen.set('parties');
  }

  questionCountFor(level: TestLevel): number {
    const questions = this.questionsForSelectedParties();
    if (level === 'rapido') return questions.filter((question) => question.testLevel === 'rapido').length;
    if (level === 'normal') return questions.filter((question) => question.testLevel !== 'extenso').length;
    return questions.length;
  }

  minutesFor(level: TestLevel): number {
    return Math.max(3, Math.ceil(this.questionCountFor(level) * 0.25));
  }

  startQuiz(level: TestLevel | null = this.selectedTestType()): void {
    if (!level) return;
    this.clearAnswerAdvanceTimer();
    this.selectedTestType.set(level);
    const pool = this.questionsForLevel(level);
    if (pool.length === 0) return;
    const randomized = this.shuffle(pool);
    this.quizOrder.set(randomized);
    this.answers.set(Array.from({ length: randomized.length }, () => undefined));
    this.currentIndex.set(0);
    this.screen.set('quiz');
  }

  chooseAnswer(answer: boolean): void {
    if (this.answerAdvanceTimer !== null) return;

    const question = this.activeQuestion();
    const pack = this.pack();
    if (!question || !pack) return;

    const gains: PartyAnswerFeedback[] = [];
    const losses: PartyAnswerFeedback[] = [];
    for (const party of pack.parties) {
      if (!this.selectedPartyIds().includes(party.id)) continue;
      const position = this.positionFor(question, party.id);
      if (position === undefined) continue;
      const impact = { ...party, delta: answer === (position === 'yes') ? 1 as const : -1 as const };
      (impact.delta > 0 ? gains : losses).push(impact);
    }

    this.answers.update((answers) =>
      answers.map((value, index) => (index === this.currentIndex() ? answer : value)),
    );

    if (!this.showAnswerFeedback()) {
      this.advance();
      return;
    }

    const parties = [...gains, ...losses];
    this.answerFeedbackIndex.set(0);
    this.answerFeedback.set({ answer, parties });
    this.scheduleAnswerFeedbackStep(0, parties.length);
  }

  skipQuestion(): void {
    if (this.answerAdvanceTimer !== null) return;
    this.clearAnswerAdvanceTimer();
    this.answers.update((answers) =>
      answers.map((value, index) => (index === this.currentIndex() ? null : value)),
    );
    this.advance();
  }

  goBack(): void {
    this.clearAnswerAdvanceTimer();
    if (this.currentIndex() === 0) {
      this.screen.set('test-type');
      return;
    }
    this.currentIndex.update((index) => index - 1);
  }

  restart(): void {
    this.clearAnswerAdvanceTimer();
    this.screen.set('home');
    this.selectedTestType.set(null);
    this.quizOrder.set(null);
    this.currentIndex.set(0);
    this.answers.set([]);
  }

  backToElections(): void {
    this.clearAnswerAdvanceTimer();
    this.screen.set('elections');
    this.selectedTestType.set(null);
    this.quizOrder.set(null);
    this.currentIndex.set(0);
    this.answers.set([]);
  }

  showElections(): void {
    this.screen.set('elections');
  }

  showHome(): void {
    this.screen.set('home');
  }

  showHowItWorks(): void {
    this.screen.set('how-it-works');
  }

  showMoreInfo(): void {
    this.screen.set('more-info');
  }

  retry(): void {
    const edition = this.selectedEdition();
    if (edition) this.loadEdition(edition, 'parties');
    else this.loadCatalog();
  }

  evidenceFor(question: Question, position: Position): Evidence[] {
    return question.evidence.filter(
      (item) => item.position === position && this.selectedPartyIds().includes(item.partyId),
    );
  }

  partyFor(id: string): Party | undefined {
    return this.pack()?.parties.find((party) => party.id === id);
  }

  async shareResults(): Promise<void> {
    if (this.sharingResults() || this.answeredCount() === 0) return;
    this.sharingResults.set(true);
    this.shareMessage.set('');

    try {
      const blob = await this.createResultsImage();
      const file = new File([blob], 'mis-resultados-a-quien-votar.png', { type: 'image/png' });
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: 'Mis resultados · ¿A quién votar?',
          text: `Mi comparación de propuestas electorales de ${this.pack()?.year}: ${window.location.href}`,
          files: [file],
        });
        this.shareMessage.set('Imagen lista para compartir.');
      } else {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        link.click();
        URL.revokeObjectURL(url);
        this.shareMessage.set('Imagen descargada. Ya puedes compartirla.');
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        this.shareMessage.set('Compartir cancelado.');
      } else {
        this.shareMessage.set('No se pudo crear la imagen. Prueba de nuevo.');
      }
    } finally {
      this.sharingResults.set(false);
    }
  }

  private async createResultsImage(): Promise<Blob> {
    const results = this.results();
    const best = this.bestResult();
    const pack = this.pack();
    if (!pack || results.length === 0) throw new Error('No hay resultados para compartir.');

    const width = 1080;
    const rowHeight = 92;
    const height = Math.max(1350, 720 + results.length * rowHeight);
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('No se pudo preparar la imagen.');

    const roundedRect = (x: number, y: number, w: number, h: number, radius: number): void => {
      context.beginPath();
      context.roundRect(x, y, w, h, radius);
    };

    context.fillStyle = '#f3f2eb';
    context.fillRect(0, 0, width, height);
    context.fillStyle = '#fffefa';
    roundedRect(36, 36, width - 72, height - 72, 34);
    context.fill();

    context.fillStyle = '#617344';
    context.font = '700 22px Arial, sans-serif';
    context.letterSpacing = '4px';
    context.fillText(`¿A QUIÉN VOTAR?  ·  ${pack.year}`, 82, 112);
    context.letterSpacing = '0px';
    context.fillStyle = '#182e25';
    context.font = '700 62px Georgia, serif';
    context.fillText('Mi mapa de afinidad', 82, 202);
    context.fillStyle = '#68716a';
    context.font = '25px Arial, sans-serif';
    context.fillText(`${this.answeredCount()} respuestas · propuestas de los programas electorales`, 84, 252);

    let rowStart = 318;
    if (best) {
      context.fillStyle = '#183d2e';
      roundedRect(76, 292, width - 152, 154, 24);
      context.fill();
      context.fillStyle = '#c9d99a';
      context.font = '700 18px Arial, sans-serif';
      context.letterSpacing = '3px';
      context.fillText('MÁS AFINIDAD', 110, 338);
      context.letterSpacing = '0px';
      context.fillStyle = '#fffefa';
      context.font = '700 39px Georgia, serif';
      context.fillText(best.name, 110, 392);
      context.textAlign = 'right';
      context.font = '700 47px Georgia, serif';
      context.fillText(`${best.score.toFixed(1)}/10`, width - 112, 385);
      context.textAlign = 'left';
      rowStart = 488;
    }

    context.fillStyle = '#26352d';
    context.font = '700 22px Arial, sans-serif';
    context.fillText('PUNTUACIÓN POR PARTIDO', 84, rowStart);
    const listTop = rowStart + 34;
    results.forEach((result, index) => {
      const y = listTop + index * rowHeight;
      if (index > 0) {
        context.strokeStyle = '#e8e7df';
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(82, y);
        context.lineTo(width - 82, y);
        context.stroke();
      }
      context.fillStyle = index === 0 && result.compared > 0 ? '#183d2e' : '#848a80';
      context.font = '700 20px Arial, sans-serif';
      context.fillText(String(index + 1).padStart(2, '0'), 88, y + 55);
      context.fillStyle = result.color || '#9baa68';
      roundedRect(145, y + 24, 10, 42, 5);
      context.fill();
      context.fillStyle = '#26332c';
      context.font = '700 27px Arial, sans-serif';
      context.fillText(result.name, 180, y + 48);
      context.fillStyle = '#798078';
      context.font = '19px Arial, sans-serif';
      context.fillText(`${result.compared} temas comparables`, 180, y + 74);
      context.textAlign = 'right';
      context.fillStyle = '#20382c';
      context.font = '700 30px Georgia, serif';
      context.fillText(result.compared === 0 ? '—' : `${result.score.toFixed(1)}/10`, width - 90, y + 58);
      context.textAlign = 'left';
    });

    const footerY = height - 100;
    context.strokeStyle = '#e8e7df';
    context.beginPath();
    context.moveTo(82, footerY - 26);
    context.lineTo(width - 82, footerY - 26);
    context.stroke();
    context.fillStyle = '#68716a';
    context.font = '19px Arial, sans-serif';
    context.fillText('Una comparación orientativa basada en programas electorales.', 84, footerY + 10);
    context.fillStyle = '#183d2e';
    context.font = '700 20px Arial, sans-serif';
    context.textAlign = 'right';
    context.fillText('aquienvotar', width - 84, footerY + 10);
    context.textAlign = 'left';

    return new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('No se pudo exportar la imagen.')), 'image/png');
    });
  }

  private advance(): void {
    if (this.currentIndex() < this.questions().length - 1) {
      this.currentIndex.update((index) => index + 1);
    } else {
      this.screen.set('results');
    }
  }

  private clearAnswerAdvanceTimer(): void {
    if (this.answerAdvanceTimer !== null) {
      clearTimeout(this.answerAdvanceTimer);
      this.answerAdvanceTimer = null;
    }
    this.answerFeedback.set(null);
    this.answerFeedbackIndex.set(0);
  }

  private scheduleAnswerFeedbackStep(index: number, count: number): void {
    this.answerAdvanceTimer = setTimeout(() => {
      if (index + 1 < count) {
        this.answerFeedbackIndex.set(index + 1);
        this.scrollFeedbackStepIntoView(index + 1);
        this.scheduleAnswerFeedbackStep(index + 1, count);
        return;
      }

      this.answerAdvanceTimer = null;
      this.answerFeedback.set(null);
      this.answerFeedbackIndex.set(0);
      this.advance();
    }, index + 1 < count ? 580 : 760);
  }

  private scrollFeedbackStepIntoView(index: number): void {
    requestAnimationFrame(() => {
      const list = this.feedbackList?.nativeElement;
      const step = this.feedbackSteps?.get(index)?.nativeElement;
      if (!list || !step) return;

      const listBounds = list.getBoundingClientRect();
      const stepBounds = step.getBoundingClientRect();
      const behavior: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth';

      if (stepBounds.bottom > listBounds.bottom) {
        list.scrollBy({ top: stepBounds.bottom - listBounds.bottom, behavior });
      } else if (stepBounds.top < listBounds.top) {
        list.scrollBy({ top: stepBounds.top - listBounds.top, behavior });
      }
    });
  }

  private questionsForLevel(level: TestLevel): Question[] {
    const questions = this.questionsForSelectedParties();
    if (level === 'rapido') return questions.filter((question) => question.testLevel === 'rapido');
    if (level === 'normal') return questions.filter((question) => question.testLevel !== 'extenso');
    return questions;
  }

  private questionsForSelectedParties(): Question[] {
    const questions = this.allQuestions();
    const selected = new Set(this.selectedPartyIds());
    if (selected.size === 0) return questions;
    return questions.filter(
      (question) =>
        question.yesParties.some((partyId) => selected.has(partyId)) ||
        question.noParties.some((partyId) => selected.has(partyId)),
    );
  }

  private shuffle(questions: Question[]): Question[] {
    const shuffled = [...questions];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const otherIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[otherIndex]] = [shuffled[otherIndex], shuffled[index]];
    }
    return shuffled;
  }

  private positionFor(question: Question, partyId: string): Position | undefined {
    if (question.yesParties.includes(partyId)) return 'yes';
    if (question.noParties.includes(partyId)) return 'no';
    return undefined;
  }

  private loadEdition(edition: Edition, nextScreen?: Screen): void {
    this.selectedEdition.set(edition);
    this.pack.set(null);
    this.quizOrder.set(null);
    this.loading.set(true);
    this.loadError.set(false);

    this.http.get<QuestionPack>(edition.file).subscribe({
      next: (pack) => {
        this.pack.set(pack);
        this.selectedPartyIds.set(pack.parties.map((party) => party.id));
        this.answers.set(Array.from({ length: pack.questions.length }, () => undefined));
        this.loading.set(false);
        if (nextScreen) this.screen.set(nextScreen);
      },
      error: () => {
        this.loading.set(false);
        this.loadError.set(true);
      },
    });
  }
}
