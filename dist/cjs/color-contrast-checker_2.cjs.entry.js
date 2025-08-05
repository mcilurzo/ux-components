'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7b93b33a.js');

const translations = {
  en: {
    color1Label: 'Color 1:',
    color2Label: 'Color 2:',
    contrastRatio: 'Contrast Ratio:',
    wcagCompliance: 'WCAG Compliance:',
    passSmallText: 'Pass (small text)',
    passLargeText: 'Pass (large text)',
    failSmallText: 'Fail (small text)',
    failLargeText: 'Fail (large text)',
    levelAA: 'AA',
    levelAAA: 'AAA',
  },
  de: {
    color1Label: 'Vordergrund:',
    color2Label: 'Hintergrund:',
    contrastRatio: 'Kontrastverhältnis:',
    wcagCompliance: 'WCAG-Konformität:',
    passSmallText: 'Bestanden (kleiner Text)',
    passLargeText: 'Bestanden (großer Text)',
    failSmallText: 'Nicht bestanden (kleiner Text)',
    failLargeText: 'Nicht bestanden (großer Text)',
    levelAA: 'AA',
    levelAAA: 'AAA',
  },
  fr: {
    color1Label: 'Premier plan:',
    color2Label: 'L’arrière-plan:',
    contrastRatio: 'Rapport de contraste:',
    wcagCompliance: 'Conformité aux WCAG:',
    passSmallText: 'Conforme (petit texte)',
    passLargeText: 'Conforme (grand texte)',
    failSmallText: 'Non conforme (petit texte)',
    failLargeText: 'Non conforme (grand texte)',
    levelAA: 'AA',
    levelAAA: 'AAA',
  },
  it: {
    color1Label: 'Primo piano:',
    color2Label: 'Secondo piano::',
    contrastRatio: 'KontrastRapporto di contrasto:',
    wcagCompliance: 'Conformità WCAG:',
    passSmallText: 'Superato (testo piccolo)',
    passLargeText: 'Superato (testo grande)',
    failSmallText: 'Non superato (testo piccolo)',
    failLargeText: 'Non superato (testo grande)',
    levelAA: 'AA',
    levelAAA: 'AAA',
  },
};

const colorContrastCheckerCss = ".color-contrast-checker{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;gap:var(--sbb-spacing-fixed-3x) var(--sbb-spacing-fixed-3x);grid-auto-flow:row;grid-template-areas:\"foreground-color background-color\" \"contrast-ratio contrast-ratio\" \"wcag-compliance wcag-compliance\"}.foreground-color{grid-area:foreground-color}.background-color{grid-area:background-color}.color-box{width:100%;height:var(--sbb-spacing-fixed-30x);border-radius:var(--sbb-border-radius-4x);border:1px solid var(--sbb-color-cloud);margin-top:var(--sbb-spacing-fixed-3x)}sbb-form-field{width:100%}sbb-form-field select{width:100%}.contrast-ratio{grid-area:contrast-ratio;background-color:var(--sbb-color-black);color:var(--sbb-color-white);border-radius:var(--sbb-border-radius-4x);border:solid 2px var(--sbb-color-white);text-align:center;padding:var(--sbb-spacing-fixed-2x) var(--sbb-spacing-fixed-4x);margin:-96px auto 0 auto;height:30px;line-height:30px}.wcag-compliance{grid-area:wcag-compliance;display:flex;gap:var(--sbb-spacing-fixed-6x)}.wcag-level .result{display:flex;gap:var(--sbb-spacing-fixed-2x)}.wcag-level .result.pass .icon{color:var(--sbb-color-green)}.wcag-level .result.fail .icon{color:var(--sbb-color-red)}.wcag-level .result .icon{width:24px;height:24px}.wcag-level .result p{margin:0}.sbb-screen-reader-only{width:0 !important;height:0 !important;opacity:0 !important}";

const ColorContrastChecker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.colorOptions = [
      { name: 'Red', value: '#EB0000' },
      { name: 'Red125', value: '#C60018' },
      { name: 'Red150', value: '#C60018' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Milk', value: '#F6F6F6' },
      { name: 'Cloud', value: '#E5E5E5' },
      { name: 'Silver', value: '#DCDCDC' },
      { name: 'Aluminum', value: '#D2D2D2' },
      { name: 'Platinum', value: '#CDCDCD' },
      { name: 'Cement', value: '#BDBDBD' },
      { name: 'Graphite', value: '#B7B7B7' },
      { name: 'Storm', value: '#A8A8A8' },
      { name: 'Smoke', value: '#8D8D8D' },
      { name: 'Metal', value: '#767676' },
      { name: 'Granite', value: '#686868' },
      { name: 'Anthracite', value: '#5A5A5A' },
      { name: 'Iron', value: '#444444' },
      { name: 'Charcoal', value: '#212121' },
      { name: 'Midnight', value: '#151515' },
      { name: 'Black', value: '#000000' },
      { name: 'Blue', value: '#2d327d' },
      { name: 'Green', value: '#008233' },
      { name: 'Turquoise', value: '#007E84' },
      { name: 'Sky', value: '#0074BF' },
      { name: 'Night', value: '#143A85' },
      { name: 'Violet', value: '#6F2282' },
      { name: 'Pink', value: '#C7387A' },
      { name: 'Brown', value: '#A05400' },
      { name: 'Autumn', value: '#CF3B00' },
      { name: 'Orange', value: '#F27E00' },
      { name: 'Peach', value: '#FCBB00' },
      { name: 'Lemon', value: '#FFDE15' },
    ];
    this.language = 'en';
    this.color1 = '#EB0000';
    this.color2 = '#FFFFFF';
  }
  componentDidLoad() {
    this.host.shadowRoot.getElementById('color1').value = this.color1;
    this.host.shadowRoot.getElementById('color2').value = this.color2;
  }
  calculateContrastRatio(color1, color2) {
    const l1 = this.getLuminance(color1) + 0.05;
    const l2 = this.getLuminance(color2) + 0.05;
    return l1 > l2 ? l1 / l2 : l2 / l1;
  }
  getLuminance(hexColor) {
    const rgb = hexColor
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16) / 255);
    const r = rgb[0] <= 0.03928 ? rgb[0] / 12.92 : Math.pow((rgb[0] + 0.055) / 1.055, 2.4);
    const g = rgb[1] <= 0.03928 ? rgb[1] / 12.92 : Math.pow((rgb[1] + 0.055) / 1.055, 2.4);
    const b = rgb[2] <= 0.03928 ? rgb[2] / 12.92 : Math.pow((rgb[2] + 0.055) / 1.055, 2.4);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  getWCAGCompliance(contrastRatio) {
    return {
      aaNormal: contrastRatio >= 4.5,
      aaLarge: contrastRatio >= 3,
      aaaNormal: contrastRatio >= 7,
      aaaLarge: contrastRatio >= 4.5,
    };
  }
  render() {
    const contrastRatio = this.calculateContrastRatio(this.color1, this.color2);
    const wcagCompliance = this.getWCAGCompliance(contrastRatio);
    const t = translations[this.language];
    return (index.h("div", { class: "color-contrast-checker" }, index.h("div", { class: "foreground-color" }, index.h("sbb-form-field", { "error-space": "none", size: "m", width: "collapse" }, index.h("label", null, t.color1Label), index.h("sbb-select", { id: "color1", onInput: (e) => {
        this.color1 = e.target.value;
      } }, this.colorOptions.map((color) => (index.h("sbb-option", { value: color.value }, color.name))))), index.h("div", { class: "color-box", style: { backgroundColor: this.color1 } })), index.h("div", { class: "background-color" }, index.h("sbb-form-field", { "error-space": "none", size: "m", width: "collapse" }, index.h("label", null, t.color2Label), index.h("sbb-select", { id: "color2", onInput: (e) => {
        this.color2 = e.target.value;
      } }, this.colorOptions.map((color) => (index.h("sbb-option", { value: color.value }, color.name))))), index.h("div", { class: "color-box", style: { backgroundColor: this.color2 } })), index.h("div", { class: "contrast-ratio" }, contrastRatio.toFixed(2), ":1"), index.h("div", { class: "wcag-compliance" }, index.h("div", { class: "wcag-level" }, index.h("div", null, t.levelAA), index.h("div", { class: wcagCompliance.aaNormal ? 'result pass' : 'result fail' }, index.h("div", { class: "icon" }, wcagCompliance.aaNormal ? index.h("sbb-icon", { name: "circle-tick-small" }) : index.h("sbb-icon", { name: "circle-cross-small" })), index.h("p", null, wcagCompliance.aaNormal ? t.passSmallText : t.failSmallText)), index.h("div", { class: wcagCompliance.aaLarge ? 'result pass' : 'result fail' }, index.h("div", { class: "icon" }, wcagCompliance.aaLarge ? index.h("sbb-icon", { name: "circle-tick-small" }) : index.h("sbb-icon", { name: "circle-cross-small" })), index.h("p", null, wcagCompliance.aaLarge ? t.passLargeText : t.failLargeText))), index.h("div", { class: "wcag-level" }, index.h("div", null, t.levelAAA), index.h("div", { class: wcagCompliance.aaaNormal ? 'result pass' : 'result fail' }, index.h("div", { class: "icon" }, wcagCompliance.aaaNormal ? index.h("sbb-icon", { name: "circle-tick-small" }) : index.h("sbb-icon", { name: "circle-cross-small" })), index.h("p", null, wcagCompliance.aaaNormal ? t.passSmallText : t.failSmallText)), index.h("div", { class: wcagCompliance.aaaLarge ? 'result pass' : 'result fail' }, index.h("div", { class: "icon" }, wcagCompliance.aaaLarge ? index.h("sbb-icon", { name: "circle-tick-small" }) : index.h("sbb-icon", { name: "circle-cross-small" })), index.h("p", null, wcagCompliance.aaaLarge ? t.passLargeText : t.failLargeText))))));
  }
  get host() { return index.getElement(this); }
};
ColorContrastChecker.style = colorContrastCheckerCss;

const questionaireFormCss = "sbb-title{margin-block-start:0}.summary{display:grid;width:100%;grid-template-columns:1fr 1fr;grid-template-rows:auto;gap:32px;grid-template-areas:\"recommendation history\"}.back{grid-area:back;text-align:right}.recommendation{grid-area:recommendation}.recommendation .question{padding-bottom:12px}.title-answer,.title-question{width:100%;display:block;border-bottom:solid 1px var(--sbb-color-cloud);padding-bottom:12px}.history{grid-area:history}.history .question{margin-top:12px;padding-bottom:12px;margin-bottom:12px;border-bottom:solid 1px var(--sbb-color-cloud)}.history .question sbb-title{margin-block-start:0}p{margin:0 0 var(--sbb-spacing-fixed-4x) 0}p.answer{margin-bottom:0}.button-left{margin-right:var(--sbb-spacing-fixed-4x)}";

const QuestionaireForm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.translations = {
      en: {
        question_1: 'Existiert die Komponente schon?',
        question_2: 'Erfüllt es die Anforderungen?',
        question_3: 'Existiert bereits etwas ähnliches?',
        question_4: 'Kann es so angepasst werden, dass die bestehenden Anforderungen immer noch erfüllt werden?',
        question_5: 'Kann die Komponente auch an anderen Orten eingesetzt werden?',
        question_6: 'Enthält die Komponente Business-Logik?',
        question_7: 'Kann die Komponente generalisiert werden damit diese auch an anderen Orten eingesetzt werden kann?',
        question_8: 'Kann die Business-Logik entfernt oder ausgelagert werden?',
        recommendation_y_y: 'Ob du wirklich richtig stehst, siehst du wenn das Licht angeht. Bist du sicher, dass du richtig geklickt hast? Wenn ja, brauchst du nichts neues vom Design System.',
        recommendation_y_n_y: 'Es scheint also ob wir eine besthende Komponente erweitern können um dein Bedürfnis zu erfüllen. Kannst du auf Github ein entsprechendes Ticket erstellen?',
        recommendation_y_n_n: 'Hmm, schwieriger Fall. Es scheint als ob du die Komponente für andere Zwecke einsetzten willst als von uns angedacht. Oder hab wir was falsch verstanden? Bevor du eine eigene Komponente entwickelst macht es Sinn kurz zu klären ob wir wirklich nicht helfen können.',
        recommendation_n_y_y: 'Yeah, scheint so als ob wir mit einer Anpassung an einer bestehenden Komponente ans Ziel kommen. Kannst du ein Ticket eröffnen?',
        recommendation_n_y_n: 'Oh no. Funktionale Änderungen an Komponenten, welche dazu führen, dass andere Anforderungen nicht mehr erfüllt werden, können wir leider nicht umsetzen. Somit würdest zwar du glücklich werden, aber Andere vermutlich nicht. Vielleicht kannst du dein Ziel mit einer anderen Komponente erreichen? Wenn nicht, sieht es so aus als ob dies eine projektspezifische Komponente ist, welche nicht von uns entwickelt werden kann.',
        recommendation_n_n_n_n: 'Oh, dein Wunsch sieht nach der ultimativen «Schneeflocke» aus. Bitte setzte die Komponente in deinem Projekt um. Schneeflocken sind zwar schön, überleben in unserem warmen Design-System-Klima nicht.',
        recommendation_n_n_y_n: 'Danke Sherlock, du hast vermutlich einen Blinden Fleck in unserem System gefunden. Gerne erfahren wir mehr über deine Komponente. Willst du ein Ticket eröffnen und wir schauen uns das gemeinsam an?',
        recommendation_n_n_y_y_y: 'Es scheint so als könnten wir helfen, zwar muss die Bussiness-Logik noch ausgelagert werden, aber das gelingt sicher irgendwie. Gerne erfahren wir mehr über deine Komponente. Willst du ein Ticket eröffnen und wir schauen uns das gemeinsam an?',
        recommendation_n_n_y_y_n: 'Deine Komponente scheint an Business-Logik geknüpft zu sein. Oft lässt sich diese entfernen, aber in deinem Fall vermutlich nicht. Wenn du ganz sicher sein willst, kannst du uns gerne kontaktiern. Ansonsten bleibt dir nichts anderes übrig als die Komponente in eurem Projekt umzusetzen. Evtl. wäre es dann etwas für das Community-Asset-Repository?',
        recommendation_n_n_n_y_n: 'Yeah, sieht so aus als ob wir mit etwas «Generalisierung» zu einer neuen Komponente kommen. Willst du ein Ticket erstellen? Vielleicht sogar mit ein paar konkreten Figma-Screens anreichern?',
        recommendation_n_n_n_y_y_n: 'Hmm, schwieriger Fall. Deine Komponente scheint an Business-Logik geknüpft und eine "Schneeflocke zu sein". Es bleibt dir nichts anderes übrig als die Komponente in eurem Projekt umzusetzen.',
        recommendation_n_n_n_y_y_y: 'Yeah, sieht so aus als ob wir mit etwas «Generalisierung» und der Entfernung der Business-Logik zu einer neuen Komponente kommen. Willst du ein Ticket erstellen? Vielleicht sogar mit ein paar konkreten Figma-Screens anreichern?',
        default_recommendation: 'Ops da ging was schief!',
        yes: 'Yes',
        no: 'No',
        reset: 'Reset'
      },
      de: {
        question_1: 'Existiert die Komponente schon?',
        question_2: 'Erfüllt es die Anforderungen?',
        question_3: 'Existiert bereits etwas ähnliches?',
        question_4: 'Kann es so angepasst werden, dass die bestehenden Anforderungen immer noch erfüllt werden?',
        question_5: 'Kann die Komponente auch an anderen Orten eingesetzt werden?',
        question_6: 'Enthält die Komponente Business-Logik?',
        question_7: 'Kann die Komponente generalisiert werden damit diese auch an anderen Orten eingesetzt werden kann?',
        question_8: 'Kann die Business-Logik entfernt oder ausgelagert werden?',
        recommendation_y_y: 'Ob du wirklich richtig stehst, siehst du wenn das Licht angeht. Bist du sicher, dass du richtig geklickt hast? Wenn ja, brauchst du nichts neues vom Design System.',
        recommendation_y_n_y: 'Es scheint also ob wir eine besthende Komponente erweitern können um dein Bedürfnis zu erfüllen. Kannst du auf Github ein entsprechendes Ticket erstellen?',
        recommendation_y_n_n: 'Hmm, schwieriger Fall. Es scheint als ob du die Komponente für andere Zwecke einsetzten willst als von uns angedacht. Oder hab wir was falsch verstanden? Bevor du eine eigene Komponente entwickelst macht es Sinn kurz zu klären ob wir wirklich nicht helfen können.',
        recommendation_n_y_y: 'Yeah, scheint so als ob wir mit einer Anpassung an einer bestehenden Komponente ans Ziel kommen. Kannst du ein Ticket eröffnen?',
        recommendation_n_y_n: 'Oh no. Funktionale Änderungen an Komponenten, welche dazu führen, dass andere Anforderungen nicht mehr erfüllt werden, können wir leider nicht umsetzen. Somit würdest zwar du glücklich werden, aber Andere vermutlich nicht. Vielleicht kannst du dein Ziel mit einer anderen Komponente erreichen? Wenn nicht, sieht es so aus als ob dies eine projektspezifische Komponente ist, welche nicht von uns entwickelt werden kann.',
        recommendation_n_n_n_n: 'Oh, dein Wunsch sieht nach der ultimativen «Schneeflocke» aus. Bitte setzte die Komponente in deinem Projekt um. Schneeflocken sind zwar schön, überleben in unserem warmen Design-System-Klima nicht.',
        recommendation_n_n_y_n: 'Danke Sherlock, du hast vermutlich einen Blinden Fleck in unserem System gefunden. Gerne erfahren wir mehr über deine Komponente. Willst du ein Ticket eröffnen und wir schauen uns das gemeinsam an?',
        recommendation_n_n_y_y_y: 'Es scheint so als könnten wir helfen, zwar muss die Bussiness-Logik noch ausgelagert werden, aber das gelingt sicher irgendwie. Gerne erfahren wir mehr über deine Komponente. Willst du ein Ticket eröffnen und wir schauen uns das gemeinsam an?',
        recommendation_n_n_y_y_n: 'Deine Komponente scheint an Business-Logik geknüpft zu sein. Oft lässt sich diese entfernen, aber in deinem Fall vermutlich nicht. Wenn du ganz sicher sein willst, kannst du uns gerne kontaktiern. Ansonsten bleibt dir nichts anderes übrig als die Komponente in eurem Projekt umzusetzen. Evtl. wäre es dann etwas für das Community-Asset-Repository?',
        recommendation_n_n_n_y_n: 'Yeah, sieht so aus als ob wir mit etwas «Generalisierung» zu einer neuen Komponente kommen. Willst du ein Ticket erstellen? Vielleicht sogar mit ein paar konkreten Figma-Screens anreichern?',
        recommendation_n_n_n_y_y_n: 'Hmm, schwieriger Fall. Deine Komponente scheint an Business-Logik geknüpft und eine "Schneeflocke zu sein". Es bleibt dir nichts anderes übrig als die Komponente in eurem Projekt umzusetzen.',
        recommendation_n_n_n_y_y_y: 'Yeah, sieht so aus als ob wir mit etwas «Generalisierung» und der Entfernung der Business-Logik zu einer neuen Komponente kommen. Willst du ein Ticket erstellen? Vielleicht sogar mit ein paar konkreten Figma-Screens anreichern?',
        default_recommendation: 'Ops da ging was schief!',
        yes: 'Ja',
        no: 'Nein',
        reset: 'Zurücksetzen'
      },
      fr: {
        question_1: 'Existiert die Komponente schon?',
        question_2: 'Erfüllt es die Anforderungen?',
        question_3: 'Existiert bereits etwas ähnliches?',
        question_4: 'Kann es so angepasst werden, dass die bestehenden Anforderungen immer noch erfüllt werden?',
        question_5: 'Kann die Komponente auch an anderen Orten eingesetzt werden?',
        question_6: 'Enthält die Komponente Business-Logik?',
        question_7: 'Kann die Komponente generalisiert werden damit diese auch an anderen Orten eingesetzt werden kann?',
        question_8: 'Kann die Business-Logik entfernt oder ausgelagert werden?',
        recommendation_y_y: 'Ob du wirklich richtig stehst, siehst du wenn das Licht angeht. Bist du sicher, dass du richtig geklickt hast? Wenn ja, brauchst du nichts neues vom Design System.',
        recommendation_y_n_y: 'Es scheint also ob wir eine besthende Komponente erweitern können um dein Bedürfnis zu erfüllen. Kannst du auf Github ein entsprechendes Ticket erstellen?',
        recommendation_y_n_n: 'Hmm, schwieriger Fall. Es scheint als ob du die Komponente für andere Zwecke einsetzten willst als von uns angedacht. Oder hab wir was falsch verstanden? Bevor du eine eigene Komponente entwickelst macht es Sinn kurz zu klären ob wir wirklich nicht helfen können.',
        recommendation_n_y_y: 'Yeah, scheint so als ob wir mit einer Anpassung an einer bestehenden Komponente ans Ziel kommen. Kannst du ein Ticket eröffnen?',
        recommendation_n_y_n: 'Oh no. Funktionale Änderungen an Komponenten, welche dazu führen, dass andere Anforderungen nicht mehr erfüllt werden, können wir leider nicht umsetzen. Somit würdest zwar du glücklich werden, aber Andere vermutlich nicht. Vielleicht kannst du dein Ziel mit einer anderen Komponente erreichen? Wenn nicht, sieht es so aus als ob dies eine projektspezifische Komponente ist, welche nicht von uns entwickelt werden kann.',
        recommendation_n_n_n_n: 'Oh, dein Wunsch sieht nach der ultimativen «Schneeflocke» aus. Bitte setzte die Komponente in deinem Projekt um. Schneeflocken sind zwar schön, überleben in unserem warmen Design-System-Klima nicht.',
        recommendation_n_n_y_n: 'Danke Sherlock, du hast vermutlich einen Blinden Fleck in unserem System gefunden. Gerne erfahren wir mehr über deine Komponente. Willst du ein Ticket eröffnen und wir schauen uns das gemeinsam an?',
        recommendation_n_n_y_y_y: 'Es scheint so als könnten wir helfen, zwar muss die Bussiness-Logik noch ausgelagert werden, aber das gelingt sicher irgendwie. Gerne erfahren wir mehr über deine Komponente. Willst du ein Ticket eröffnen und wir schauen uns das gemeinsam an?',
        recommendation_n_n_y_y_n: 'Deine Komponente scheint an Business-Logik geknüpft zu sein. Oft lässt sich diese entfernen, aber in deinem Fall vermutlich nicht. Wenn du ganz sicher sein willst, kannst du uns gerne kontaktiern. Ansonsten bleibt dir nichts anderes übrig als die Komponente in eurem Projekt umzusetzen. Evtl. wäre es dann etwas für das Community-Asset-Repository?',
        recommendation_n_n_n_y_n: 'Yeah, sieht so aus als ob wir mit etwas «Generalisierung» zu einer neuen Komponente kommen. Willst du ein Ticket erstellen? Vielleicht sogar mit ein paar konkreten Figma-Screens anreichern?',
        recommendation_n_n_n_y_y_n: 'Hmm, schwieriger Fall. Deine Komponente scheint an Business-Logik geknüpft und eine "Schneeflocke zu sein". Es bleibt dir nichts anderes übrig als die Komponente in eurem Projekt umzusetzen.',
        recommendation_n_n_n_y_y_y: 'Yeah, sieht so aus als ob wir mit etwas «Generalisierung» und der Entfernung der Business-Logik zu einer neuen Komponente kommen. Willst du ein Ticket erstellen? Vielleicht sogar mit ein paar konkreten Figma-Screens anreichern?',
        default_recommendation: 'Ops da ging was schief!',
        yes: 'Oui',
        no: 'Non',
        reset: 'Réinitialiser'
      },
      it: {
        question_1: 'Existiert die Komponente schon?',
        question_2: 'Erfüllt es die Anforderungen?',
        question_3: 'Existiert bereits etwas ähnliches?',
        question_4: 'Kann es so angepasst werden, dass die bestehenden Anforderungen immer noch erfüllt werden?',
        question_5: 'Kann die Komponente auch an anderen Orten eingesetzt werden?',
        question_6: 'Enthält die Komponente Business-Logik?',
        question_7: 'Kann die Komponente generalisiert werden damit diese auch an anderen Orten eingesetzt werden kann?',
        question_8: 'Kann die Business-Logik entfernt oder ausgelagert werden?',
        recommendation_y_y: 'Ob du wirklich richtig stehst, siehst du wenn das Licht angeht. Bist du sicher, dass du richtig geklickt hast? Wenn ja, brauchst du nichts neues vom Design System.',
        recommendation_y_n_y: 'Es scheint also ob wir eine besthende Komponente erweitern können um dein Bedürfnis zu erfüllen. Kannst du auf Github ein entsprechendes Ticket erstellen?',
        recommendation_y_n_n: 'Hmm, schwieriger Fall. Es scheint als ob du die Komponente für andere Zwecke einsetzten willst als von uns angedacht. Oder hab wir was falsch verstanden? Bevor du eine eigene Komponente entwickelst macht es Sinn kurz zu klären ob wir wirklich nicht helfen können.',
        recommendation_n_y_y: 'Yeah, scheint so als ob wir mit einer Anpassung an einer bestehenden Komponente ans Ziel kommen. Kannst du ein Ticket eröffnen?',
        recommendation_n_y_n: 'Oh no. Funktionale Änderungen an Komponenten, welche dazu führen, dass andere Anforderungen nicht mehr erfüllt werden, können wir leider nicht umsetzen. Somit würdest zwar du glücklich werden, aber Andere vermutlich nicht. Vielleicht kannst du dein Ziel mit einer anderen Komponente erreichen? Wenn nicht, sieht es so aus als ob dies eine projektspezifische Komponente ist, welche nicht von uns entwickelt werden kann.',
        recommendation_n_n_n_n: 'Oh, dein Wunsch sieht nach der ultimativen «Schneeflocke» aus. Bitte setzte die Komponente in deinem Projekt um. Schneeflocken sind zwar schön, überleben in unserem warmen Design-System-Klima nicht.',
        recommendation_n_n_y_n: 'Danke Sherlock, du hast vermutlich einen Blinden Fleck in unserem System gefunden. Gerne erfahren wir mehr über deine Komponente. Willst du ein Ticket eröffnen und wir schauen uns das gemeinsam an?',
        recommendation_n_n_y_y_y: 'Es scheint so als könnten wir helfen, zwar muss die Bussiness-Logik noch ausgelagert werden, aber das gelingt sicher irgendwie. Gerne erfahren wir mehr über deine Komponente. Willst du ein Ticket eröffnen und wir schauen uns das gemeinsam an?',
        recommendation_n_n_y_y_n: 'Deine Komponente scheint an Business-Logik geknüpft zu sein. Oft lässt sich diese entfernen, aber in deinem Fall vermutlich nicht. Wenn du ganz sicher sein willst, kannst du uns gerne kontaktiern. Ansonsten bleibt dir nichts anderes übrig als die Komponente in eurem Projekt umzusetzen. Evtl. wäre es dann etwas für das Community-Asset-Repository?',
        recommendation_n_n_n_y_n: 'Yeah, sieht so aus als ob wir mit etwas «Generalisierung» zu einer neuen Komponente kommen. Willst du ein Ticket erstellen? Vielleicht sogar mit ein paar konkreten Figma-Screens anreichern?',
        recommendation_n_n_n_y_y_n: 'Hmm, schwieriger Fall. Deine Komponente scheint an Business-Logik geknüpft und eine "Schneeflocke zu sein". Es bleibt dir nichts anderes übrig als die Komponente in eurem Projekt umzusetzen.',
        recommendation_n_n_n_y_y_y: 'Yeah, sieht so aus als ob wir mit etwas «Generalisierung» und der Entfernung der Business-Logik zu einer neuen Komponente kommen. Willst du ein Ticket erstellen? Vielleicht sogar mit ein paar konkreten Figma-Screens anreichern?',
        default_recommendation: 'Ops da ging was schief!',
        yes: 'Sì',
        no: 'No',
        reset: 'Reset'
      }
    };
    this.questions = [
      {
        // Frage 0
        question: this.getLocale().question_1,
        yes: 1,
        no: 2,
      },
      {
        // Frage 1
        question: this.getLocale().question_2,
        yes: 11,
        no: 3,
      },
      {
        // Frage 2
        question: this.getLocale().question_3,
        yes: 3,
        no: 4,
      },
      {
        // Frage 3
        question: this.getLocale().question_4,
        yes: 12,
        no: 13,
      },
      {
        // Frage 4
        question: this.getLocale().question_5,
        yes: 5,
        no: 6,
      },
      {
        // Frage 5
        question: this.getLocale().question_6,
        yes: 7,
        no: 14,
      },
      {
        // Frage 6
        question: this.getLocale().question_7,
        yes: 5,
        no: 15,
      },
      {
        // Frage 7
        question: this.getLocale().question_8,
        yes: 14,
        no: 13,
      }
      // Weitere Fragen hier
    ];
    this.currentStep = 0;
    this.answerHistory = [];
  }
  getLocale() {
    const language = navigator.language.split('-')[0];
    return this.translations[language] || this.translations.en;
  }
  handleAnswer(answer) {
    const nextStep = this.questions[this.currentStep][answer];
    this.answerHistory = [...this.answerHistory, { question: this.questions[this.currentStep].question, answer }];
    this.currentStep = nextStep;
  }
  getRecommendation() {
    if (this.answerHistory.length >= 2 &&
      this.answerHistory[0].answer === 'yes' &&
      this.answerHistory[1].answer === 'yes') {
      return this.getLocale().recommendation_y_y;
    }
    if (this.answerHistory.length >= 3 &&
      this.answerHistory[0].answer === 'yes' &&
      this.answerHistory[1].answer === 'no' &&
      this.answerHistory[2].answer === 'yes') {
      return this.getLocale().recommendation_y_n_y;
    }
    if (this.answerHistory.length >= 3 &&
      this.answerHistory[0].answer === 'yes' &&
      this.answerHistory[1].answer === 'no' &&
      this.answerHistory[2].answer === 'no') {
      return this.getLocale().recommendation_y_n_n;
    }
    if (this.answerHistory.length >= 3 &&
      this.answerHistory[0].answer === 'no' &&
      this.answerHistory[1].answer === 'yes' &&
      this.answerHistory[2].answer === 'yes') {
      return this.getLocale().recommendation_n_y_y;
    }
    if (this.answerHistory.length >= 3 &&
      this.answerHistory[0].answer === 'no' &&
      this.answerHistory[1].answer === 'yes' &&
      this.answerHistory[2].answer === 'no') {
      return this.getLocale().recommendation_n_y_n;
    }
    if (this.answerHistory.length >= 4 &&
      this.answerHistory[0].answer === 'no' &&
      this.answerHistory[1].answer === 'no' &&
      this.answerHistory[2].answer === 'no' &&
      this.answerHistory[3].answer === 'no') {
      return this.getLocale().recommendation_n_n_n_n;
    }
    if (this.answerHistory.length >= 4 &&
      this.answerHistory[0].answer === 'no' &&
      this.answerHistory[1].answer === 'no' &&
      this.answerHistory[2].answer === 'yes' &&
      this.answerHistory[3].answer === 'no') {
      return this.getLocale().recommendation_n_n_y_n;
    }
    if (this.answerHistory.length >= 5 &&
      this.answerHistory[0].answer === 'no' &&
      this.answerHistory[1].answer === 'no' &&
      this.answerHistory[2].answer === 'yes' &&
      this.answerHistory[3].answer === 'yes' &&
      this.answerHistory[4].answer === 'yes') {
      return this.getLocale().recommendation_n_n_y_y_y;
    }
    if (this.answerHistory.length >= 5 &&
      this.answerHistory[0].answer === 'no' &&
      this.answerHistory[1].answer === 'no' &&
      this.answerHistory[2].answer === 'yes' &&
      this.answerHistory[3].answer === 'yes' &&
      this.answerHistory[4].answer === 'no') {
      return this.getLocale().recommendation_n_n_y_y_n;
    }
    if (this.answerHistory.length >= 5 &&
      this.answerHistory[0].answer === 'no' &&
      this.answerHistory[1].answer === 'no' &&
      this.answerHistory[2].answer === 'no' &&
      this.answerHistory[3].answer === 'yes' &&
      this.answerHistory[4].answer === 'no') {
      return this.getLocale().recommendation_n_n_n_y_n;
    }
    if (this.answerHistory.length >= 6 &&
      this.answerHistory[0].answer === 'no' &&
      this.answerHistory[1].answer === 'no' &&
      this.answerHistory[2].answer === 'no' &&
      this.answerHistory[3].answer === 'yes' &&
      this.answerHistory[4].answer === 'yes' &&
      this.answerHistory[5].answer === 'no') {
      return this.getLocale().recommendation_n_n_n_y_y_n;
    }
    if (this.answerHistory.length >= 6 &&
      this.answerHistory[0].answer === 'no' &&
      this.answerHistory[1].answer === 'no' &&
      this.answerHistory[2].answer === 'no' &&
      this.answerHistory[3].answer === 'yes' &&
      this.answerHistory[4].answer === 'yes' &&
      this.answerHistory[5].answer === 'yes') {
      return this.getLocale().recommendation_n_n_n_y_y_y;
    }
    // Standardempfehlung, wenn keine Bedingung erfüllt ist
    return this.getLocale().default_recommendation;
  }
  getLocalizedAnswer(answer) {
    const locale = this.getLocale();
    if (answer === 'yes') {
      return locale.yes;
    }
    else if (answer === 'no') {
      return locale.no;
    }
    return answer;
  }
  reset() {
    this.currentStep = 0;
    this.answerHistory = [];
  }
  render() {
    if (this.currentStep >= this.questions.length) {
      return (index.h("sbb-group", { color: "milk", padding: "l-l" }, index.h("div", { class: "summary" }, index.h("div", { class: "history" }, index.h("sbb-title", { class: "title-answer", level: "4" }, "Deine Antworten"), this.answerHistory.map((entry) => (index.h("div", { class: "question" }, index.h("sbb-title", { level: "6" }, entry.question), index.h("p", { class: "answer " + entry.answer }, this.getLocalizedAnswer(entry.answer)))))), index.h("div", { class: "recommendation" }, index.h("sbb-title", { class: "title-answer", level: "4" }, "Unsere Empfehlung"), index.h("p", null, this.getRecommendation()), index.h("p", null, index.h("sbb-link", { onClick: () => this.reset() }, this.getLocale().reset))))));
    }
    return (index.h("sbb-group", { color: "milk", padding: "l-l" }, index.h("div", { class: "summary" }, index.h("div", { class: "history" }, index.h("sbb-title", { class: "title-answer", level: "4" }, "Deine Antworten"), this.answerHistory.map((entry) => (index.h("div", { class: "question" }, index.h("sbb-title", { level: "6" }, entry.question), index.h("p", { class: "answer " + entry.answer }, this.getLocalizedAnswer(entry.answer)))))), index.h("div", { class: "recommendation" }, index.h("sbb-title", { class: "title-question", level: "4" }, "Unsere Fragen"), index.h("sbb-title", { class: "question", level: "6" }, this.questions[this.currentStep].question), index.h("sbb-button", { variant: "secondary", size: "m", class: "button-left", onClick: () => this.handleAnswer('no') }, this.getLocale().no), index.h("sbb-button", { variant: "secondary", size: "m", class: "button-right", onClick: () => this.handleAnswer('yes') }, this.getLocale().yes)))));
  }
};
QuestionaireForm.style = questionaireFormCss;

exports.color_contrast_checker = ColorContrastChecker;
exports.questionaire_form = QuestionaireForm;

//# sourceMappingURL=color-contrast-checker_2.cjs.entry.js.map