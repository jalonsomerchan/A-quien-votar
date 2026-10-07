import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.year;
const _forTrack1 = ($index, $item) => $item.partyId;
const _forTrack2 = ($index, $item) => $item.id;
function App_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const edition_r1 = ctx.$implicit;
    i0.ɵɵdomProperty("value", edition_r1.year);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(edition_r1.label);
} }
function App_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "section", 12);
    i0.ɵɵdomElement(1, "span", 18);
    i0.ɵɵdomElementStart(2, "p");
    i0.ɵɵtext(3, "Preparando los programas electorales\u2026");
    i0.ɵɵdomElementEnd()();
} }
function App_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "section", 13)(1, "span", 19);
    i0.ɵɵtext(2, "No se han podido cargar los datos");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "h1");
    i0.ɵɵtext(4, "Prueba de nuevo en un momento.");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "p");
    i0.ɵɵtext(6, "Las preguntas y los programas se cargan desde los archivos de esta web.");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(7, "button", 20);
    i0.ɵɵdomListener("click", function App_Conditional_18_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.restart()); });
    i0.ɵɵtext(8, "Volver al inicio");
    i0.ɵɵdomElementEnd()();
} }
function App_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "section", 21)(1, "div", 22)(2, "p", 19);
    i0.ɵɵdomElement(3, "span", 23);
    i0.ɵɵtext(4, " TU VOTO, TUS PRIORIDADES");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "h1");
    i0.ɵɵtext(6, "\u00BFA qui\u00E9n");
    i0.ɵɵdomElement(7, "br");
    i0.ɵɵdomElementStart(8, "em");
    i0.ɵɵtext(9, "votar?");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(10, "p", 24);
    i0.ɵɵtext(11, "Responde a unas preguntas sencillas y descubre qu\u00E9 programas electorales se parecen m\u00E1s a lo que piensas.");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(12, "div", 25)(13, "button", 26);
    i0.ɵɵdomListener("click", function App_Conditional_19_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.startQuiz()); });
    i0.ɵɵtext(14, " Empezar el test ");
    i0.ɵɵdomElementStart(15, "span", 27);
    i0.ɵɵtext(16, "\u2197");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(17, "span", 28)(18, "span", 29);
    i0.ɵɵtext(19, "\u25F7");
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(20, " Unos 3 minutos");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(21, "div", 30)(22, "span", 31);
    i0.ɵɵtext(23, "\u2713");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(24, "span");
    i0.ɵɵtext(25, "Basado en propuestas, no en etiquetas.");
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(26, "div", 32);
    i0.ɵɵdomElement(27, "div", 33)(28, "div", 34);
    i0.ɵɵdomElementStart(29, "div", 35);
    i0.ɵɵtext(30, "\u2733");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(31, "div", 36);
    i0.ɵɵtext(32, "\u2733");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(33, "div", 37)(34, "div", 38)(35, "span", 39);
    i0.ɵɵdomElement(36, "span", 40);
    i0.ɵɵtext(37);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(38, "span", 41);
    i0.ɵɵtext(39, "01 ");
    i0.ɵɵdomElementStart(40, "span");
    i0.ɵɵtext(41);
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(42, "p", 42);
    i0.ɵɵtext(43, "VIVIENDA");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(44, "h2");
    i0.ɵɵtext(45, "\u00BFDeber\u00EDan poder limitarse los precios del alquiler?");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(46, "div", 43);
    i0.ɵɵdomElement(47, "span", 44);
    i0.ɵɵtext(48, " S\u00ED, estoy de acuerdo");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(49, "div", 45);
    i0.ɵɵdomElement(50, "span", 44);
    i0.ɵɵtext(51, " No, no estoy de acuerdo");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(52, "div", 46);
    i0.ɵɵdomElement(53, "span");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(54, "div", 47)(55, "span");
    i0.ɵɵtext(56);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(57, "small");
    i0.ɵɵtext(58, "partidos");
    i0.ɵɵdomElement(59, "br");
    i0.ɵɵtext(60, "comparados");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(61, "div", 48);
    i0.ɵɵtext(62, "Una decisi\u00F3n m\u00E1s");
    i0.ɵɵdomElement(63, "br");
    i0.ɵɵtext(64, "informada empieza");
    i0.ɵɵdomElement(65, "br");
    i0.ɵɵtext(66, "con una buena pregunta.");
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(67, "section", 49)(68, "div", 50)(69, "span", 51);
    i0.ɵɵtext(70);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(71, "span");
    i0.ɵɵtext(72, "preguntas");
    i0.ɵɵdomElement(73, "br");
    i0.ɵɵtext(74, "claras");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElement(75, "div", 52);
    i0.ɵɵdomElementStart(76, "div", 50)(77, "span", 51);
    i0.ɵɵtext(78);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(79, "span");
    i0.ɵɵtext(80, "programas");
    i0.ɵɵdomElement(81, "br");
    i0.ɵɵtext(82, "comparados");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElement(83, "div", 52);
    i0.ɵɵdomElementStart(84, "div", 50)(85, "span", 53);
    i0.ɵɵtext(86);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(87, "span");
    i0.ɵɵtext(88, "elecciones");
    i0.ɵɵdomElement(89, "br");
    i0.ɵɵtext(90, "generales");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(91, "p", 54);
    i0.ɵɵtext(92, "Solo se punt\u00FAan las posturas expresadas de forma clara en los programas.");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(93, "section", 55)(94, "div")(95, "p", 19);
    i0.ɵɵtext(96, "AS\u00CD FUNCIONA");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(97, "h2");
    i0.ɵɵtext(98, "Tu opini\u00F3n, frente");
    i0.ɵɵdomElement(99, "br");
    i0.ɵɵtext(100, "a las propuestas.");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(101, "div", 56)(102, "article", 57)(103, "span", 58);
    i0.ɵɵtext(104, "01");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(105, "div")(106, "h3");
    i0.ɵɵtext(107, "Responde a tu manera");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(108, "p");
    i0.ɵɵtext(109, "Marca s\u00ED o no. Si una pregunta no te encaja, puedes pasarla.");
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(110, "article", 57)(111, "span", 58);
    i0.ɵɵtext(112, "02");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(113, "div")(114, "h3");
    i0.ɵɵtext(115, "Comparamos los programas");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(116, "p");
    i0.ɵɵtext(117, "La postura de cada partido se contrasta tema por tema con tus respuestas.");
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(118, "article", 57)(119, "span", 58);
    i0.ɵɵtext(120, "03");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(121, "div")(122, "h3");
    i0.ɵɵtext(123, "Consulta tus coincidencias");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(124, "p");
    i0.ɵɵtext(125, "Ver\u00E1s el porcentaje, la cobertura y los documentos usados en el c\u00E1lculo.");
    i0.ɵɵdomElementEnd()()()()();
    i0.ɵɵdomElementStart(126, "section", 59)(127, "span", 60);
    i0.ɵɵtext(128, "i");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(129, "p");
    i0.ɵɵtext(130);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(37);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.pack()?.year);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("/ 0", ctx_r2.questions().length);
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate(ctx_r2.pack()?.parties?.length);
    i0.ɵɵadvance(14);
    i0.ɵɵtextInterpolate(ctx_r2.questions().length);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r2.pack()?.parties?.length);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r2.pack()?.year);
    i0.ɵɵadvance(44);
    i0.ɵɵtextInterpolate1("Esta gu\u00EDa compara programas de ", ctx_r2.pack()?.year, ". Cuando un programa no fija una postura clara, esa pregunta no cuenta para ese partido.");
} }
function App_Conditional_20_Conditional_0_For_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 85)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵdomElementStart(4, "a", 87);
    i0.ɵɵtext(5, "Ver programa \u2197");
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.partyFor(item_r6.partyId)?.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r6.reference, " ");
    i0.ɵɵadvance();
    i0.ɵɵdomProperty("href", item_r6.href, i0.ɵɵsanitizeUrl);
} }
function App_Conditional_20_Conditional_0_For_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 85)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵdomElementStart(4, "a", 87);
    i0.ɵɵtext(5, "Ver programa \u2197");
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.partyFor(item_r7.partyId)?.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r7.reference, " ");
    i0.ɵɵadvance();
    i0.ɵɵdomProperty("href", item_r7.href, i0.ɵɵsanitizeUrl);
} }
function App_Conditional_20_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "section", 61)(1, "div", 62)(2, "button", 63);
    i0.ɵɵdomListener("click", function App_Conditional_20_Conditional_0_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.goBack()); });
    i0.ɵɵdomElementStart(3, "span", 27);
    i0.ɵɵtext(4, "\u2190");
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(6, "div", 64)(7, "span");
    i0.ɵɵtext(8, "Tu opini\u00F3n");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵdomElementStart(11, "i");
    i0.ɵɵtext(12);
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(13, "div", 65);
    i0.ɵɵdomElement(14, "span");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(15, "div", 66)(16, "div", 67)(17, "div", 68);
    i0.ɵɵdomElement(18, "span", 69);
    i0.ɵɵtext(19);
    i0.ɵɵdomElementStart(20, "span", 70);
    i0.ɵɵtext(21, "\u00B7");
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(22);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(23, "h1");
    i0.ɵɵtext(24);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(25, "p", 71);
    i0.ɵɵtext(26, "No hay respuestas correctas: queremos saber qu\u00E9 opinas t\u00FA.");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(27, "div", 72)(28, "button", 73);
    i0.ɵɵdomListener("click", function App_Conditional_20_Conditional_0_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.chooseAnswer(true)); });
    i0.ɵɵdomElementStart(29, "span", 74);
    i0.ɵɵdomElement(30, "span");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(31, "span", 75)(32, "strong");
    i0.ɵɵtext(33, "S\u00ED");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(34, "small");
    i0.ɵɵtext(35, "Estoy de acuerdo");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(36, "span", 76);
    i0.ɵɵtext(37, "\u2197");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(38, "button", 73);
    i0.ɵɵdomListener("click", function App_Conditional_20_Conditional_0_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.chooseAnswer(false)); });
    i0.ɵɵdomElementStart(39, "span", 74);
    i0.ɵɵdomElement(40, "span");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(41, "span", 75)(42, "strong");
    i0.ɵɵtext(43, "No");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(44, "small");
    i0.ɵɵtext(45, "No estoy de acuerdo");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(46, "span", 76);
    i0.ɵɵtext(47, "\u2197");
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(48, "div", 77)(49, "button", 78);
    i0.ɵɵdomListener("click", function App_Conditional_20_Conditional_0_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.skipQuestion()); });
    i0.ɵɵtext(50, "Prefiero pasar ");
    i0.ɵɵdomElementStart(51, "span", 27);
    i0.ɵɵtext(52, "\u2192");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(53, "button", 79);
    i0.ɵɵdomListener("click", function App_Conditional_20_Conditional_0_Template_button_click_53_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.goForward()); });
    i0.ɵɵtext(54);
    i0.ɵɵdomElementStart(55, "span", 27);
    i0.ɵɵtext(56, "\u2192");
    i0.ɵɵdomElementEnd()()()();
    i0.ɵɵdomElementStart(57, "details", 80)(58, "summary")(59, "span", 81);
    i0.ɵɵtext(60, "\u2713");
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(61, " \u00BFDe d\u00F3nde sale esta pregunta?");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(62, "p", 82);
    i0.ɵɵtext(63);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(64, "div", 83)(65, "div", 84)(66, "h3");
    i0.ɵɵtext(67, "Partidos a favor");
    i0.ɵɵdomElementEnd();
    i0.ɵɵrepeaterCreate(68, App_Conditional_20_Conditional_0_For_69_Template, 6, 3, "p", 85, _forTrack1);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(70, "div", 84)(71, "h3");
    i0.ɵɵtext(72, "Partidos en contra");
    i0.ɵɵdomElementEnd();
    i0.ɵɵrepeaterCreate(73, App_Conditional_20_Conditional_0_For_74_Template, 6, 3, "p", 85, _forTrack1);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(75, "p", 86);
    i0.ɵɵtext(76, "Los dem\u00E1s partidos no se cuentan en este tema si el programa no expresa una postura suficientemente clara.");
    i0.ɵɵdomElementEnd()()();
} if (rf & 2) {
    const question_r8 = ctx;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.currentIndex() === 0 ? "Salir" : "Anterior");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", (ctx_r2.currentIndex() + 1).toString().padStart(2, "0"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("/ ", ctx_r2.questions().length.toString().padStart(2, "0"));
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-valuenow", ctx_r2.progress())("aria-label", "Progreso: " + ctx_r2.progress() + " por ciento");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", ctx_r2.progress(), "%");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", question_r8.topic, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Pregunta ", ctx_r2.currentIndex() + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(question_r8.question);
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("answer-selected-yes", ctx_r2.answers()[ctx_r2.currentIndex()] === true);
    i0.ɵɵattribute("aria-pressed", ctx_r2.answers()[ctx_r2.currentIndex()] === true);
    i0.ɵɵadvance(10);
    i0.ɵɵclassProp("answer-selected-no", ctx_r2.answers()[ctx_r2.currentIndex()] === false);
    i0.ɵɵattribute("aria-pressed", ctx_r2.answers()[ctx_r2.currentIndex()] === false);
    i0.ɵɵadvance(15);
    i0.ɵɵdomProperty("disabled", ctx_r2.answers()[ctx_r2.currentIndex()] === undefined);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.currentIndex() === ctx_r2.questions().length - 1 ? "Ver resultados" : "Siguiente", " ");
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(question_r8.context);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r2.evidenceFor(question_r8, "yes"));
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r2.evidenceFor(question_r8, "no"));
} }
function App_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, App_Conditional_20_Conditional_0_Template, 77, 19, "section", 61);
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵconditional((tmp_1_0 = ctx_r2.activeQuestion()) ? 0 : -1, tmp_1_0);
} }
function App_Conditional_21_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 89)(1, "span", 101);
    i0.ɵɵtext(2, "\u2197");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "h2");
    i0.ɵɵtext(4, "Nos faltan tus respuestas.");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "p");
    i0.ɵɵtext(6, "Responde al menos una pregunta para poder comparar los programas.");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(7, "button", 20);
    i0.ɵɵdomListener("click", function App_Conditional_21_Conditional_12_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.startQuiz()); });
    i0.ɵɵtext(8, "Volver a las preguntas");
    i0.ɵɵdomElementEnd()();
} }
function App_Conditional_21_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "article", 102)(1, "div", 103)(2, "span", 104)(3, "span", 105);
    i0.ɵɵtext(4, "\u2733");
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(5, " MAYOR COINCIDENCIA");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(6, "div", 106)(7, "span", 107);
    i0.ɵɵtext(8);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(9, "div")(10, "h2");
    i0.ɵɵtext(11);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(12, "p");
    i0.ɵɵtext(13);
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵdomElementStart(14, "p", 108);
    i0.ɵɵtext(15);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(16, "div", 109)(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵdomElementStart(19, "small");
    i0.ɵɵtext(20, "%");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(21, "span");
    i0.ɵɵtext(22, "de coincidencia");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(23, "div", 110);
    i0.ɵɵtext(24, "TU");
    i0.ɵɵdomElement(25, "br");
    i0.ɵɵtext(26, "VOTO");
    i0.ɵɵdomElement(27, "br");
    i0.ɵɵtext(28, "CUENTA");
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const best_r11 = ctx;
    i0.ɵɵstyleProp("--%NS%party-color", best_r11.color);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(best_r11.name.slice(0, 1));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(best_r11.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(best_r11.area);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", best_r11.matches, " de ", best_r11.compared, " respuestas comparables coinciden con el programa.");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(best_r11.percentage);
} }
function App_Conditional_21_For_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "article", 111)(1, "div", 112);
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "span", 113);
    i0.ɵɵtext(4);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "div", 114)(6, "h3");
    i0.ɵɵtext(7);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(10, "div", 115);
    i0.ɵɵdomElement(11, "span");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(12, "div", 116)(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(15, "small");
    i0.ɵɵtext(16);
    i0.ɵɵdomElementEnd()()();
} if (rf & 2) {
    const result_r12 = ctx.$implicit;
    const ɵ$index_509_r13 = ctx.$index;
    i0.ɵɵstyleProp("--%NS%party-color", result_r12.color);
    i0.ɵɵclassProp("party-result-first", ɵ$index_509_r13 === 0 && result_r12.compared > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ɵ$index_509_r13 + 1).toString().padStart(2, "0"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(result_r12.name.slice(0, 1));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(result_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(result_r12.area);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", result_r12.percentage, "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(result_r12.compared === 0 ? "\u2014" : result_r12.percentage + "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", result_r12.matches, "/", result_r12.compared, " temas");
} }
function App_Conditional_21_For_40_For_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 85)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵdomElementStart(4, "a", 87);
    i0.ɵɵtext(5, "Ver programa \u2197");
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.partyFor(item_r14.partyId)?.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r14.reference, " ");
    i0.ɵɵadvance();
    i0.ɵɵdomProperty("href", item_r14.href, i0.ɵɵsanitizeUrl);
} }
function App_Conditional_21_For_40_For_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 85)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵdomElementStart(4, "a", 87);
    i0.ɵɵtext(5, "Ver programa \u2197");
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.partyFor(item_r15.partyId)?.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r15.reference, " ");
    i0.ɵɵadvance();
    i0.ɵɵdomProperty("href", item_r15.href, i0.ɵɵsanitizeUrl);
} }
function App_Conditional_21_For_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "details", 98)(1, "summary")(2, "span", 117);
    i0.ɵɵtext(3);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(4, "span", 118)(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵdomElementStart(7, "span");
    i0.ɵɵtext(8, "\u00B7");
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(9);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(12, "span", 119);
    i0.ɵɵtext(13, "+");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(14, "p", 82);
    i0.ɵɵtext(15);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(16, "div", 83)(17, "div", 84)(18, "h3");
    i0.ɵɵtext(19, "Partidos a favor");
    i0.ɵɵdomElementEnd();
    i0.ɵɵrepeaterCreate(20, App_Conditional_21_For_40_For_21_Template, 6, 3, "p", 85, _forTrack1);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(22, "div", 84)(23, "h3");
    i0.ɵɵtext(24, "Partidos en contra");
    i0.ɵɵdomElementEnd();
    i0.ɵɵrepeaterCreate(25, App_Conditional_21_For_40_For_26_Template, 6, 3, "p", 85, _forTrack1);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(27, "p", 86);
    i0.ɵɵtext(28, "Los partidos sin postura expl\u00EDcita en este tema no se punt\u00FAan para esta pregunta.");
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const question_r16 = ctx.$implicit;
    const ɵ$index_561_r17 = ctx.$index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((ɵ$index_561_r17 + 1).toString().padStart(2, "0"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", question_r16.topic, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Tu respuesta: ", ctx_r2.answers()[ɵ$index_561_r17] === null ? "Pasada" : ctx_r2.answers()[ɵ$index_561_r17] ? "S\u00ED" : "No");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(question_r16.question);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(question_r16.context);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r2.evidenceFor(question_r16, "yes"));
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r2.evidenceFor(question_r16, "no"));
} }
function App_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "section", 14)(1, "div", 88)(2, "p", 19);
    i0.ɵɵdomElement(3, "span", 23);
    i0.ɵɵtext(4);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "h1");
    i0.ɵɵtext(6, "Esto es lo que");
    i0.ɵɵdomElement(7, "br");
    i0.ɵɵdomElementStart(8, "em");
    i0.ɵɵtext(9, "m\u00E1s coincide contigo.");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(10, "p");
    i0.ɵɵtext(11, "Una comparaci\u00F3n de tus respuestas con las propuestas publicadas. Mira tambi\u00E9n cu\u00E1ntos temas hemos podido contrastar.");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵconditionalCreate(12, App_Conditional_21_Conditional_12_Template, 9, 0, "div", 89)(13, App_Conditional_21_Conditional_13_Template, 29, 8, "article", 90);
    i0.ɵɵdomElementStart(14, "div", 91)(15, "div")(16, "p", 19);
    i0.ɵɵtext(17, "TODOS LOS PARTIDOS");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(18, "h2");
    i0.ɵɵtext(19, "As\u00ED se reparten las coincidencias");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(20, "span", 92);
    i0.ɵɵtext(21);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(22, "section", 93);
    i0.ɵɵrepeaterCreate(23, App_Conditional_21_For_24_Template, 17, 13, "article", 94, _forTrack2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(25, "div", 95)(26, "span", 60);
    i0.ɵɵtext(27, "i");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(28, "p");
    i0.ɵɵtext(29, "El porcentaje se calcula solo con las preguntas que has respondido y para las que hay una postura clara en el programa. Un porcentaje con pocos temas comparados tiene una base m\u00E1s peque\u00F1a.");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(30, "section", 96)(31, "div", 97)(32, "div")(33, "p", 19);
    i0.ɵɵtext(34, "TRANSPARENCIA");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(35, "h2");
    i0.ɵɵtext(36, "Comprueba cada propuesta");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(37, "span", 92);
    i0.ɵɵtext(38);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵrepeaterCreate(39, App_Conditional_21_For_40_Template, 29, 5, "details", 98, _forTrack2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(41, "div", 99)(42, "button", 100);
    i0.ɵɵdomListener("click", function App_Conditional_21_Template_button_click_42_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.startQuiz()); });
    i0.ɵɵdomElementStart(43, "span", 27);
    i0.ɵɵtext(44, "\u21BB");
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(45, " Empezar de nuevo");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(46, "button", 20);
    i0.ɵɵdomListener("click", function App_Conditional_21_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.restart()); });
    i0.ɵɵtext(47, "Volver al inicio ");
    i0.ɵɵdomElementStart(48, "span", 27);
    i0.ɵɵtext(49, "\u2192");
    i0.ɵɵdomElementEnd()()()();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" TUS RESULTADOS \u00B7 ", ctx_r2.pack()?.year);
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(ctx_r2.answeredCount() === 0 ? 12 : (tmp_2_0 = ctx_r2.bestResult()) ? 13 : -1, tmp_2_0);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate2("", ctx_r2.answeredCount(), " ", ctx_r2.answeredCount() === 1 ? "pregunta respondida" : "preguntas respondidas");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.results());
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate1("Programas electorales de ", ctx_r2.pack()?.year);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.questions());
} }
export class App {
    http = inject(HttpClient);
    screen = signal('home', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "screen" }] : /* istanbul ignore next */ []));
    catalog = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "catalog" }] : /* istanbul ignore next */ []));
    selectedEdition = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedEdition" }] : /* istanbul ignore next */ []));
    pack = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "pack" }] : /* istanbul ignore next */ []));
    answers = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "answers" }] : /* istanbul ignore next */ []));
    currentIndex = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "currentIndex" }] : /* istanbul ignore next */ []));
    loading = signal(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    loadError = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "loadError" }] : /* istanbul ignore next */ []));
    questions = computed(() => this.pack()?.questions ?? [], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "questions" }] : /* istanbul ignore next */ []));
    activeQuestion = computed(() => this.questions()[this.currentIndex()], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "activeQuestion" }] : /* istanbul ignore next */ []));
    progress = computed(() => {
        const count = this.questions().length;
        return count === 0 ? 0 : Math.round(((this.currentIndex() + 1) / count) * 100);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "progress" }] : /* istanbul ignore next */ []));
    answeredCount = computed(() => this.answers().filter((answer) => answer !== undefined && answer !== null).length, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "answeredCount" }] : /* istanbul ignore next */ []));
    results = computed(() => {
        const pack = this.pack();
        const answers = this.answers();
        if (!pack)
            return [];
        return pack.parties
            .map((party) => {
            let matches = 0;
            let compared = 0;
            pack.questions.forEach((question, index) => {
                const answer = answers[index];
                if (answer === undefined || answer === null)
                    return;
                const position = this.positionFor(question, party.id);
                if (position === undefined)
                    return;
                compared += 1;
                if ((answer && position === 'yes') || (!answer && position === 'no')) {
                    matches += 1;
                }
            });
            return {
                ...party,
                matches,
                compared,
                percentage: compared === 0 ? 0 : Math.round((matches / compared) * 100),
            };
        })
            .sort((a, b) => b.percentage - a.percentage || b.compared - a.compared || b.matches - a.matches);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "results" }] : /* istanbul ignore next */ []));
    bestResult = computed(() => this.results().find((result) => result.compared > 0) ?? null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "bestResult" }] : /* istanbul ignore next */ []));
    ngOnInit() {
        this.http.get('/data/ediciones.json').subscribe({
            next: (catalog) => {
                this.catalog.set(catalog.editions);
                const firstEdition = catalog.editions[0];
                if (firstEdition)
                    this.loadEdition(firstEdition);
                else {
                    this.loading.set(false);
                    this.loadError.set(true);
                }
            },
            error: () => {
                this.loading.set(false);
                this.loadError.set(true);
            },
        });
    }
    startQuiz() {
        const count = this.questions().length;
        if (count === 0)
            return;
        this.answers.set(Array.from({ length: count }, () => undefined));
        this.currentIndex.set(0);
        this.screen.set('quiz');
    }
    chooseAnswer(answer) {
        this.answers.update((answers) => answers.map((value, index) => (index === this.currentIndex() ? answer : value)));
    }
    skipQuestion() {
        this.answers.update((answers) => answers.map((value, index) => (index === this.currentIndex() ? null : value)));
        this.advance();
    }
    goBack() {
        if (this.currentIndex() === 0) {
            this.screen.set('home');
            return;
        }
        this.currentIndex.update((index) => index - 1);
    }
    goForward() {
        if (this.answers()[this.currentIndex()] === undefined)
            return;
        this.advance();
    }
    restart() {
        this.screen.set('home');
        this.currentIndex.set(0);
        this.answers.set([]);
    }
    evidenceFor(question, position) {
        return question.evidence.filter((item) => item.position === position);
    }
    partyFor(id) {
        return this.pack()?.parties.find((party) => party.id === id);
    }
    onEditionChange(event) {
        const year = Number(event.target.value);
        const edition = this.catalog().find((item) => item.year === year);
        if (edition) {
            this.screen.set('home');
            this.currentIndex.set(0);
            this.answers.set([]);
            this.loadEdition(edition);
        }
    }
    advance() {
        if (this.currentIndex() < this.questions().length - 1) {
            this.currentIndex.update((index) => index + 1);
        }
        else {
            this.screen.set('results');
        }
    }
    positionFor(question, partyId) {
        if (question.yesParties.includes(partyId))
            return 'yes';
        if (question.noParties.includes(partyId))
            return 'no';
        return undefined;
    }
    loadEdition(edition) {
        this.selectedEdition.set(edition);
        this.pack.set(null);
        this.loading.set(true);
        this.loadError.set(false);
        this.http.get(edition.file).subscribe({
            next: (pack) => {
                this.pack.set(pack);
                this.answers.set(Array.from({ length: pack.questions.length }, () => undefined));
                this.loading.set(false);
            },
            error: () => {
                this.loading.set(false);
                this.loadError.set(true);
            },
        });
    }
    static ɵfac = function App_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || App)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: App, selectors: [["app-root"]], decls: 29, vars: 4, consts: [[1, "topbar"], ["href", "#inicio", "aria-label", "Ir al inicio", 1, "brand", 3, "click"], ["aria-hidden", "true", 1, "brand-mark"], ["viewBox", "0 0 32 32", "fill", "none"], ["d", "M16 3.5 19.4 12.6 28.5 16l-9.1 3.4L16 28.5l-3.4-9.1L3.5 16l9.1-3.4L16 3.5Z", "fill", "currentColor"], ["cx", "16", "cy", "16", "r", "3.4", "fill", "#F6F5F0"], [1, "edition-picker"], [1, "edition-caption"], ["aria-label", "Elegir edici\u00F3n electoral", 3, "change", "value", "disabled"], [3, "value"], ["aria-hidden", "true", 1, "select-chevron"], [1, "page-shell"], ["aria-live", "polite", 1, "loading-state"], ["role", "alert", 1, "error-card"], [1, "results-page"], [1, "site-footer"], ["href", "#inicio", 1, "footer-brand", 3, "click"], [1, "footer-year"], [1, "loading-dot"], [1, "eyebrow"], ["type", "button", 1, "button", "button-dark", 3, "click"], ["id", "inicio", 1, "hero"], [1, "hero-copy"], [1, "eyebrow-line"], [1, "hero-intro"], [1, "hero-actions"], ["type", "button", 1, "button", "button-dark", "button-start", 3, "click"], ["aria-hidden", "true"], [1, "time-note"], ["aria-hidden", "true", 1, "time-icon"], [1, "trust-note"], ["aria-hidden", "true", 1, "trust-icon"], ["aria-label", "Vista previa de una pregunta del cuestionario", 1, "hero-art"], [1, "art-ring", "art-ring-one"], [1, "art-ring", "art-ring-two"], [1, "art-spark", "art-spark-one"], [1, "art-spark", "art-spark-two"], [1, "art-card"], [1, "art-card-top"], [1, "mini-brand"], [1, "mini-brand-dot"], [1, "mini-count"], [1, "art-topic"], [1, "art-answer", "art-answer-active"], [1, "art-radio"], [1, "art-answer"], [1, "art-progress"], [1, "art-sticker"], [1, "art-caption"], ["aria-label", "Datos del cuestionario", 1, "fact-strip"], [1, "fact-item"], [1, "fact-number"], [1, "fact-divider"], [1, "fact-year"], [1, "fact-footnote"], [1, "how-section"], [1, "how-steps"], [1, "how-step"], [1, "step-number"], [1, "method-note"], ["aria-hidden", "true", 1, "method-icon"], [1, "quiz-layout"], [1, "quiz-heading"], ["type", "button", 1, "text-button", "back-button", 3, "click"], [1, "quiz-progress-copy"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-track"], [1, "question-panel"], [1, "question-copy"], [1, "question-kicker"], [1, "topic-dot"], [1, "kicker-divider"], [1, "question-context"], ["role", "group", "aria-label", "Elige tu respuesta", 1, "answer-options"], ["type", "button", 1, "answer-option", 3, "click"], [1, "option-radio"], [1, "option-copy"], ["aria-hidden", "true", 1, "option-arrow"], [1, "question-footer"], ["type", "button", 1, "text-button", "skip-button", 3, "click"], ["type", "button", 1, "button", "button-dark", 3, "click", "disabled"], [1, "source-disclosure"], ["aria-hidden", "true", 1, "source-check"], [1, "source-intro"], [1, "source-columns"], [1, "source-group"], [1, "source-item"], [1, "source-footnote"], ["target", "_blank", "rel", "noreferrer", 3, "href"], [1, "results-heading"], [1, "no-results-card"], [1, "best-match", 3, "--%NS%party-color"], [1, "results-section-heading"], [1, "result-base"], ["aria-label", "Resultados por partido", 1, "party-results"], [1, "party-result", 3, "party-result-first", "--%NS%party-color"], [1, "score-explanation"], [1, "result-sources"], [1, "results-section-heading", "source-heading"], [1, "result-question-source"], [1, "results-actions"], ["type", "button", 1, "button", "button-outline", 3, "click"], [1, "empty-symbol"], [1, "best-match"], [1, "best-match-copy"], [1, "match-label"], [1, "match-star"], [1, "best-party-line"], [1, "party-avatar", "best-avatar"], [1, "best-description"], [1, "best-score"], ["aria-hidden", "true", 1, "best-stamp"], [1, "party-result"], [1, "party-rank"], [1, "party-avatar"], [1, "party-result-name"], ["aria-hidden", "true", 1, "party-score-track"], [1, "party-score"], [1, "result-question-number"], [1, "result-question-title"], ["aria-hidden", "true", 1, "summary-plus"]], template: function App_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "header", 0)(1, "a", 1);
            i0.ɵɵdomListener("click", function App_Template_a_click_1_listener($event) { $event.preventDefault(); return ctx.restart(); });
            i0.ɵɵdomElementStart(2, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(3, "svg", 3);
            i0.ɵɵdomElement(4, "path", 4)(5, "circle", 5);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(6, "span");
            i0.ɵɵtext(7, "\u00BFa qui\u00E9n votar?");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(8, "div", 6)(9, "span", 7);
            i0.ɵɵtext(10, "Programas");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(11, "select", 8);
            i0.ɵɵdomListener("change", function App_Template_select_change_11_listener($event) { return ctx.onEditionChange($event); });
            i0.ɵɵrepeaterCreate(12, App_For_13_Template, 2, 2, "option", 9, _forTrack0);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(14, "span", 10);
            i0.ɵɵtext(15, "\u2304");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(16, "main", 11);
            i0.ɵɵconditionalCreate(17, App_Conditional_17_Template, 4, 0, "section", 12)(18, App_Conditional_18_Template, 9, 0, "section", 13)(19, App_Conditional_19_Template, 131, 7)(20, App_Conditional_20_Template, 1, 1)(21, App_Conditional_21_Template, 50, 5, "section", 14);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(22, "footer", 15)(23, "a", 16);
            i0.ɵɵdomListener("click", function App_Template_a_click_23_listener($event) { $event.preventDefault(); return ctx.restart(); });
            i0.ɵɵtext(24, "\u00BFa qui\u00E9n votar?");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(25, "span");
            i0.ɵɵtext(26, "Una gu\u00EDa para comparar propuestas electorales.");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(27, "span", 17);
            i0.ɵɵtext(28);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵdomProperty("value", ctx.selectedEdition()?.year ?? "")("disabled", ctx.catalog().length < 2);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.catalog());
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.loading() ? 17 : ctx.loadError() || !ctx.pack() ? 18 : ctx.screen() === "home" ? 19 : ctx.screen() === "quiz" ? 20 : 21);
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate1("", ctx.pack()?.year, " \u00B7 Fuentes p\u00FAblicas");
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(App, [{
        type: Component,
        args: [{ selector: 'app-root', template: "<header class=\"topbar\">\n  <a class=\"brand\" href=\"#inicio\" (click)=\"$event.preventDefault(); restart()\" aria-label=\"Ir al inicio\">\n    <span class=\"brand-mark\" aria-hidden=\"true\">\n      <svg viewBox=\"0 0 32 32\" fill=\"none\">\n        <path d=\"M16 3.5 19.4 12.6 28.5 16l-9.1 3.4L16 28.5l-3.4-9.1L3.5 16l9.1-3.4L16 3.5Z\" fill=\"currentColor\" />\n        <circle cx=\"16\" cy=\"16\" r=\"3.4\" fill=\"#F6F5F0\" />\n      </svg>\n    </span>\n    <span>\u00BFa qui\u00E9n votar?</span>\n  </a>\n\n  <div class=\"edition-picker\">\n    <span class=\"edition-caption\">Programas</span>\n    <select\n      aria-label=\"Elegir edici\u00F3n electoral\"\n      [value]=\"selectedEdition()?.year ?? ''\"\n      (change)=\"onEditionChange($event)\"\n      [disabled]=\"catalog().length < 2\"\n    >\n      @for (edition of catalog(); track edition.year) {\n        <option [value]=\"edition.year\">{{ edition.label }}</option>\n      }\n    </select>\n    <span class=\"select-chevron\" aria-hidden=\"true\">\u2304</span>\n  </div>\n</header>\n\n<main class=\"page-shell\">\n  @if (loading()) {\n    <section class=\"loading-state\" aria-live=\"polite\">\n      <span class=\"loading-dot\"></span>\n      <p>Preparando los programas electorales\u2026</p>\n    </section>\n  } @else if (loadError() || !pack()) {\n    <section class=\"error-card\" role=\"alert\">\n      <span class=\"eyebrow\">No se han podido cargar los datos</span>\n      <h1>Prueba de nuevo en un momento.</h1>\n      <p>Las preguntas y los programas se cargan desde los archivos de esta web.</p>\n      <button class=\"button button-dark\" type=\"button\" (click)=\"restart()\">Volver al inicio</button>\n    </section>\n  } @else if (screen() === 'home') {\n    <section class=\"hero\" id=\"inicio\">\n      <div class=\"hero-copy\">\n        <p class=\"eyebrow\"><span class=\"eyebrow-line\"></span> TU VOTO, TUS PRIORIDADES</p>\n        <h1>\u00BFA qui\u00E9n<br /><em>votar?</em></h1>\n        <p class=\"hero-intro\">Responde a unas preguntas sencillas y descubre qu\u00E9 programas electorales se parecen m\u00E1s a lo que piensas.</p>\n        <div class=\"hero-actions\">\n          <button class=\"button button-dark button-start\" type=\"button\" (click)=\"startQuiz()\">\n            Empezar el test\n            <span aria-hidden=\"true\">\u2197</span>\n          </button>\n          <span class=\"time-note\"><span class=\"time-icon\" aria-hidden=\"true\">\u25F7</span> Unos 3 minutos</span>\n        </div>\n        <div class=\"trust-note\">\n          <span class=\"trust-icon\" aria-hidden=\"true\">\u2713</span>\n          <span>Basado en propuestas, no en etiquetas.</span>\n        </div>\n      </div>\n\n      <div class=\"hero-art\" aria-label=\"Vista previa de una pregunta del cuestionario\">\n        <div class=\"art-ring art-ring-one\"></div>\n        <div class=\"art-ring art-ring-two\"></div>\n        <div class=\"art-spark art-spark-one\">\u2733</div>\n        <div class=\"art-spark art-spark-two\">\u2733</div>\n        <div class=\"art-card\">\n          <div class=\"art-card-top\">\n            <span class=\"mini-brand\"><span class=\"mini-brand-dot\"></span> {{ pack()?.year }}</span>\n            <span class=\"mini-count\">01 <span>/ 0{{ questions().length }}</span></span>\n          </div>\n          <p class=\"art-topic\">VIVIENDA</p>\n          <h2>\u00BFDeber\u00EDan poder limitarse los precios del alquiler?</h2>\n          <div class=\"art-answer art-answer-active\"><span class=\"art-radio\"></span> S\u00ED, estoy de acuerdo</div>\n          <div class=\"art-answer\"><span class=\"art-radio\"></span> No, no estoy de acuerdo</div>\n          <div class=\"art-progress\"><span></span></div>\n        </div>\n        <div class=\"art-sticker\"><span>{{ pack()?.parties?.length }}</span><small>partidos<br />comparados</small></div>\n        <div class=\"art-caption\">Una decisi\u00F3n m\u00E1s<br />informada empieza<br />con una buena pregunta.</div>\n      </div>\n    </section>\n\n    <section class=\"fact-strip\" aria-label=\"Datos del cuestionario\">\n      <div class=\"fact-item\"><span class=\"fact-number\">{{ questions().length }}</span><span>preguntas<br />claras</span></div>\n      <div class=\"fact-divider\"></div>\n      <div class=\"fact-item\"><span class=\"fact-number\">{{ pack()?.parties?.length }}</span><span>programas<br />comparados</span></div>\n      <div class=\"fact-divider\"></div>\n      <div class=\"fact-item\"><span class=\"fact-year\">{{ pack()?.year }}</span><span>elecciones<br />generales</span></div>\n      <p class=\"fact-footnote\">Solo se punt\u00FAan las posturas expresadas de forma clara en los programas.</p>\n    </section>\n\n    <section class=\"how-section\">\n      <div>\n        <p class=\"eyebrow\">AS\u00CD FUNCIONA</p>\n        <h2>Tu opini\u00F3n, frente<br />a las propuestas.</h2>\n      </div>\n      <div class=\"how-steps\">\n        <article class=\"how-step\">\n          <span class=\"step-number\">01</span>\n          <div><h3>Responde a tu manera</h3><p>Marca s\u00ED o no. Si una pregunta no te encaja, puedes pasarla.</p></div>\n        </article>\n        <article class=\"how-step\">\n          <span class=\"step-number\">02</span>\n          <div><h3>Comparamos los programas</h3><p>La postura de cada partido se contrasta tema por tema con tus respuestas.</p></div>\n        </article>\n        <article class=\"how-step\">\n          <span class=\"step-number\">03</span>\n          <div><h3>Consulta tus coincidencias</h3><p>Ver\u00E1s el porcentaje, la cobertura y los documentos usados en el c\u00E1lculo.</p></div>\n        </article>\n      </div>\n    </section>\n\n    <section class=\"method-note\">\n      <span class=\"method-icon\" aria-hidden=\"true\">i</span>\n      <p>Esta gu\u00EDa compara programas de {{ pack()?.year }}. Cuando un programa no fija una postura clara, esa pregunta no cuenta para ese partido.</p>\n    </section>\n  } @else if (screen() === 'quiz') {\n    @if (activeQuestion(); as question) {\n      <section class=\"quiz-layout\">\n        <div class=\"quiz-heading\">\n          <button class=\"text-button back-button\" type=\"button\" (click)=\"goBack()\"><span aria-hidden=\"true\">\u2190</span> {{ currentIndex() === 0 ? 'Salir' : 'Anterior' }}</button>\n          <div class=\"quiz-progress-copy\"><span>Tu opini\u00F3n</span><strong>{{ (currentIndex() + 1).toString().padStart(2, '0') }} <i>/ {{ questions().length.toString().padStart(2, '0') }}</i></strong></div>\n          <div class=\"progress-track\" role=\"progressbar\" [attr.aria-valuenow]=\"progress()\" aria-valuemin=\"0\" aria-valuemax=\"100\" [attr.aria-label]=\"'Progreso: ' + progress() + ' por ciento'\"><span [style.width.%]=\"progress()\"></span></div>\n        </div>\n\n        <div class=\"question-panel\">\n          <div class=\"question-copy\">\n            <div class=\"question-kicker\"><span class=\"topic-dot\"></span> {{ question.topic }} <span class=\"kicker-divider\">\u00B7</span> Pregunta {{ currentIndex() + 1 }}</div>\n            <h1>{{ question.question }}</h1>\n            <p class=\"question-context\">No hay respuestas correctas: queremos saber qu\u00E9 opinas t\u00FA.</p>\n          </div>\n          <div class=\"answer-options\" role=\"group\" aria-label=\"Elige tu respuesta\">\n            <button class=\"answer-option\" [class.answer-selected-yes]=\"answers()[currentIndex()] === true\" [attr.aria-pressed]=\"answers()[currentIndex()] === true\" type=\"button\" (click)=\"chooseAnswer(true)\">\n              <span class=\"option-radio\"><span></span></span>\n              <span class=\"option-copy\"><strong>S\u00ED</strong><small>Estoy de acuerdo</small></span>\n              <span class=\"option-arrow\" aria-hidden=\"true\">\u2197</span>\n            </button>\n            <button class=\"answer-option\" [class.answer-selected-no]=\"answers()[currentIndex()] === false\" [attr.aria-pressed]=\"answers()[currentIndex()] === false\" type=\"button\" (click)=\"chooseAnswer(false)\">\n              <span class=\"option-radio\"><span></span></span>\n              <span class=\"option-copy\"><strong>No</strong><small>No estoy de acuerdo</small></span>\n              <span class=\"option-arrow\" aria-hidden=\"true\">\u2197</span>\n            </button>\n          </div>\n\n          <div class=\"question-footer\">\n            <button class=\"text-button skip-button\" type=\"button\" (click)=\"skipQuestion()\">Prefiero pasar <span aria-hidden=\"true\">\u2192</span></button>\n            <button class=\"button button-dark\" type=\"button\" [disabled]=\"answers()[currentIndex()] === undefined\" (click)=\"goForward()\">\n              {{ currentIndex() === questions().length - 1 ? 'Ver resultados' : 'Siguiente' }}\n              <span aria-hidden=\"true\">\u2192</span>\n            </button>\n          </div>\n        </div>\n\n        <details class=\"source-disclosure\">\n          <summary><span class=\"source-check\" aria-hidden=\"true\">\u2713</span> \u00BFDe d\u00F3nde sale esta pregunta?</summary>\n          <p class=\"source-intro\">{{ question.context }}</p>\n          <div class=\"source-columns\">\n            <div class=\"source-group\">\n              <h3>Partidos a favor</h3>\n              @for (item of evidenceFor(question, 'yes'); track item.partyId) {\n                <p class=\"source-item\"><strong>{{ partyFor(item.partyId)?.name }}</strong> {{ item.reference }} <a [href]=\"item.href\" target=\"_blank\" rel=\"noreferrer\">Ver programa \u2197</a></p>\n              }\n            </div>\n            <div class=\"source-group\">\n              <h3>Partidos en contra</h3>\n              @for (item of evidenceFor(question, 'no'); track item.partyId) {\n                <p class=\"source-item\"><strong>{{ partyFor(item.partyId)?.name }}</strong> {{ item.reference }} <a [href]=\"item.href\" target=\"_blank\" rel=\"noreferrer\">Ver programa \u2197</a></p>\n              }\n            </div>\n          </div>\n          <p class=\"source-footnote\">Los dem\u00E1s partidos no se cuentan en este tema si el programa no expresa una postura suficientemente clara.</p>\n        </details>\n      </section>\n    }\n  } @else {\n    <section class=\"results-page\">\n      <div class=\"results-heading\">\n        <p class=\"eyebrow\"><span class=\"eyebrow-line\"></span> TUS RESULTADOS \u00B7 {{ pack()?.year }}</p>\n        <h1>Esto es lo que<br /><em>m\u00E1s coincide contigo.</em></h1>\n        <p>Una comparaci\u00F3n de tus respuestas con las propuestas publicadas. Mira tambi\u00E9n cu\u00E1ntos temas hemos podido contrastar.</p>\n      </div>\n\n      @if (answeredCount() === 0) {\n        <div class=\"no-results-card\">\n          <span class=\"empty-symbol\">\u2197</span>\n          <h2>Nos faltan tus respuestas.</h2>\n          <p>Responde al menos una pregunta para poder comparar los programas.</p>\n          <button class=\"button button-dark\" type=\"button\" (click)=\"startQuiz()\">Volver a las preguntas</button>\n        </div>\n      } @else if (bestResult(); as best) {\n        <article class=\"best-match\" [style.--party-color]=\"best.color\">\n          <div class=\"best-match-copy\">\n            <span class=\"match-label\"><span class=\"match-star\">\u2733</span> MAYOR COINCIDENCIA</span>\n            <div class=\"best-party-line\">\n              <span class=\"party-avatar best-avatar\">{{ best.name.slice(0, 1) }}</span>\n              <div><h2>{{ best.name }}</h2><p>{{ best.area }}</p></div>\n            </div>\n            <p class=\"best-description\">{{ best.matches }} de {{ best.compared }} respuestas comparables coinciden con el programa.</p>\n          </div>\n          <div class=\"best-score\"><strong>{{ best.percentage }}<small>%</small></strong><span>de coincidencia</span></div>\n          <div class=\"best-stamp\" aria-hidden=\"true\">TU<br />VOTO<br />CUENTA</div>\n        </article>\n      }\n\n      <div class=\"results-section-heading\">\n        <div><p class=\"eyebrow\">TODOS LOS PARTIDOS</p><h2>As\u00ED se reparten las coincidencias</h2></div>\n        <span class=\"result-base\">{{ answeredCount() }} {{ answeredCount() === 1 ? 'pregunta respondida' : 'preguntas respondidas' }}</span>\n      </div>\n\n      <section class=\"party-results\" aria-label=\"Resultados por partido\">\n        @for (result of results(); track result.id; let rank = $index) {\n          <article class=\"party-result\" [class.party-result-first]=\"rank === 0 && result.compared > 0\" [style.--party-color]=\"result.color\">\n            <div class=\"party-rank\">{{ (rank + 1).toString().padStart(2, '0') }}</div>\n            <span class=\"party-avatar\">{{ result.name.slice(0, 1) }}</span>\n            <div class=\"party-result-name\"><h3>{{ result.name }}</h3><p>{{ result.area }}</p></div>\n            <div class=\"party-score-track\" aria-hidden=\"true\"><span [style.width.%]=\"result.percentage\"></span></div>\n            <div class=\"party-score\"><strong>{{ result.compared === 0 ? '\u2014' : result.percentage + '%' }}</strong><small>{{ result.matches }}/{{ result.compared }} temas</small></div>\n          </article>\n        }\n      </section>\n\n      <div class=\"score-explanation\">\n        <span class=\"method-icon\" aria-hidden=\"true\">i</span>\n        <p>El porcentaje se calcula solo con las preguntas que has respondido y para las que hay una postura clara en el programa. Un porcentaje con pocos temas comparados tiene una base m\u00E1s peque\u00F1a.</p>\n      </div>\n\n      <section class=\"result-sources\">\n        <div class=\"results-section-heading source-heading\"><div><p class=\"eyebrow\">TRANSPARENCIA</p><h2>Comprueba cada propuesta</h2></div><span class=\"result-base\">Programas electorales de {{ pack()?.year }}</span></div>\n        @for (question of questions(); track question.id; let i = $index) {\n          <details class=\"result-question-source\">\n            <summary>\n              <span class=\"result-question-number\">{{ (i + 1).toString().padStart(2, '0') }}</span>\n              <span class=\"result-question-title\"><small>{{ question.topic }} <span>\u00B7</span> Tu respuesta: {{ answers()[i] === null ? 'Pasada' : answers()[i] ? 'S\u00ED' : 'No' }}</small><strong>{{ question.question }}</strong></span>\n              <span class=\"summary-plus\" aria-hidden=\"true\">+</span>\n            </summary>\n            <p class=\"source-intro\">{{ question.context }}</p>\n            <div class=\"source-columns\">\n              <div class=\"source-group\">\n                <h3>Partidos a favor</h3>\n                @for (item of evidenceFor(question, 'yes'); track item.partyId) {\n                  <p class=\"source-item\"><strong>{{ partyFor(item.partyId)?.name }}</strong> {{ item.reference }} <a [href]=\"item.href\" target=\"_blank\" rel=\"noreferrer\">Ver programa \u2197</a></p>\n                }\n              </div>\n              <div class=\"source-group\">\n                <h3>Partidos en contra</h3>\n                @for (item of evidenceFor(question, 'no'); track item.partyId) {\n                  <p class=\"source-item\"><strong>{{ partyFor(item.partyId)?.name }}</strong> {{ item.reference }} <a [href]=\"item.href\" target=\"_blank\" rel=\"noreferrer\">Ver programa \u2197</a></p>\n                }\n              </div>\n            </div>\n            <p class=\"source-footnote\">Los partidos sin postura expl\u00EDcita en este tema no se punt\u00FAan para esta pregunta.</p>\n          </details>\n        }\n      </section>\n\n      <div class=\"results-actions\">\n        <button class=\"button button-outline\" type=\"button\" (click)=\"startQuiz()\"><span aria-hidden=\"true\">\u21BB</span> Empezar de nuevo</button>\n        <button class=\"button button-dark\" type=\"button\" (click)=\"restart()\">Volver al inicio <span aria-hidden=\"true\">\u2192</span></button>\n      </div>\n    </section>\n  }\n</main>\n\n<footer class=\"site-footer\">\n  <a class=\"footer-brand\" href=\"#inicio\" (click)=\"$event.preventDefault(); restart()\">\u00BFa qui\u00E9n votar?</a>\n  <span>Una gu\u00EDa para comparar propuestas electorales.</span>\n  <span class=\"footer-year\">{{ pack()?.year }} \u00B7 Fuentes p\u00FAblicas</span>\n</footer>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 59 }); })();
