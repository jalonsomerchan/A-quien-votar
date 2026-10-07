import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const publicRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../public');
const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'));
const normalize = (text) => text.normalize('NFKC').trim().toLocaleLowerCase('es').replace(/\s+/g, ' ');

function localAsset(href) {
  assert.equal(typeof href, 'string', 'La ruta de una fuente debe ser texto');
  assert(href.startsWith('/') && !href.startsWith('//'), `Ruta no local: ${href}`);
  const path = resolve(publicRoot, `.${href.split('#')[0]}`);
  assert(path.startsWith(`${publicRoot}${sep}`), `Ruta fuera de public: ${href}`);
  assert(existsSync(path), `No existe el archivo: ${href}`);
  return path;
}

const { editions } = readJson(resolve(publicRoot, 'data/ediciones.json'));
assert(Array.isArray(editions) && editions.length > 0, 'El catálogo está vacío');
const years = new Set();
for (const edition of editions) {
  assert(!years.has(edition.year), `Edición duplicada: ${edition.year}`);
  years.add(edition.year);
  const pack = readJson(localAsset(edition.file));
  assert.equal(pack.year, edition.year, 'El año del catálogo no coincide con el paquete');
  assert(typeof pack.election === 'string' && pack.election.trim(), `${pack.year}: falta el nombre de las elecciones`);
  assert(pack.questions.length >= 100, `${pack.year}: se requieren al menos 100 preguntas`);
  const partyIds = new Set(pack.parties.map((party) => party.id));
  assert(partyIds.size > 0 && partyIds.size === pack.parties.length, 'Partidos vacíos o duplicados');
  const programs = new Map();
  for (const party of pack.parties) {
    for (const field of ['name', 'area', 'color', 'logo']) {
      assert(typeof party[field] === 'string' && party[field].trim(), `${pack.year}/${party.id}: falta ${field}`);
    }
    localAsset(party.logo);
    const legacyName = party.id === 'ehbildu' ? 'bildu' : party.id;
    const program = party.program ?? `/programas/${pack.year}/programa_electoral_${legacyName}.pdf`;
    assert(program.endsWith('.pdf') && !program.includes('#'), `${pack.year}/${party.id}: programa inválido`);
    localAsset(program);
    programs.set(party.id, program);
  }
  const ids = new Set();
  const statements = new Set();
  const levels = { rapido: 0, normal: 0, extenso: 0 };

  for (const question of pack.questions) {
    const label = `${pack.year}/${question.id}`;
    assert.match(question.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${label}: identificador inválido`);
    assert(!ids.has(question.id), `${label}: identificador duplicado`);
    ids.add(question.id);
    for (const field of ['topic', 'question', 'context']) {
      assert(typeof question[field] === 'string' && question[field].trim(), `${label}: falta ${field}`);
    }
    const statement = normalize(question.question);
    assert(!statements.has(statement), `${label}: enunciado duplicado`);
    statements.add(statement);
    assert(Object.hasOwn(levels, question.testLevel), `${label}: nivel desconocido`);
    levels[question.testLevel] += 1;

    const positions = new Map();
    for (const [field, position] of [['yesParties', 'yes'], ['noParties', 'no']]) {
      assert(Array.isArray(question[field]), `${label}: falta ${field}`);
      for (const partyId of question[field]) {
        assert(partyIds.has(partyId), `${label}: partido desconocido ${partyId}`);
        assert(!positions.has(partyId), `${label}: postura duplicada o contradictoria de ${partyId}`);
        positions.set(partyId, position);
      }
    }
    assert(positions.size > 0, `${label}: pregunta sin posturas documentadas`);
    assert(Array.isArray(question.evidence), `${label}: faltan evidencias`);
    const supported = new Set();
    for (const evidence of question.evidence) {
      assert(positions.has(evidence.partyId), `${label}: evidencia sin postura de ${evidence.partyId}`);
      assert.equal(evidence.position, positions.get(evidence.partyId), `${label}: evidencia contradictoria`);
      assert(!supported.has(evidence.partyId), `${label}: evidencia duplicada de ${evidence.partyId}`);
      supported.add(evidence.partyId);
      assert(typeof evidence.reference === 'string' && evidence.reference.trim(), `${label}: referencia vacía`);
      localAsset(evidence.href);
      const pdf = programs.get(evidence.partyId);
      assert(evidence.href === pdf || evidence.href.startsWith(`${pdf}#page=`), `${label}: programa de otro partido o edición`);
      if (evidence.href.includes('#')) {
        assert.match(evidence.href, /#page=[1-9]\d*$/, `${label}: página inválida`);
      }
    }
    assert.equal(supported.size, positions.size, `${label}: postura sin evidencia`);
  }
  assert(levels.rapido > 0 && levels.normal > 0 && levels.extenso > 0, `${pack.year}: faltan preguntas en algún nivel`);
  for (const partyId of partyIds) {
    for (const level of ['rapido', 'normal', 'extenso']) {
      const questions = pack.questions.filter((question) => level === 'extenso' || question.testLevel === 'rapido' || (level === 'normal' && question.testLevel === 'normal'));
      assert(questions.some((question) => question.yesParties.includes(partyId) || question.noParties.includes(partyId)), `${pack.year}/${partyId}: sin posturas en el test ${level}`);
    }
  }
  console.log(`${pack.year}: ${pack.questions.length} preguntas válidas; rápido ${levels.rapido}, normal ${levels.rapido + levels.normal}, extenso ${pack.questions.length}.`);
}
