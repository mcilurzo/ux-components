import { r as registerInstance, h } from './index-94896ee5.js';

const questionaireFormCss = "sbb-title{margin-block-start:0}.summary{display:grid;width:100%;grid-template-columns:1fr 1fr;grid-template-rows:auto;gap:32px;grid-template-areas:\"recommendation history\"}.back{grid-area:back;text-align:right}.recommendation{grid-area:recommendation}.history{grid-area:history}.history .question{padding-bottom:12px;margin-bottom:12px;border-bottom:solid 1px var(--sbb-color-smoke-default)}.history .question sbb-title{margin-block-start:0}.history .question:last-child{border-bottom:none}p{margin:0 0 var(--sbb-spacing-fixed-4x) 0}p.answer{margin-bottom:0}.button-left{margin-right:var(--sbb-spacing-fixed-4x)}";

const QuestionaireForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      return (h("sbb-group", { color: "milk", padding: "l-l" }, h("div", { class: "summary" }, h("div", { class: "history" }, this.answerHistory.map((entry) => (h("div", { class: "question" }, h("sbb-title", { level: "5" }, entry.question), h("p", { class: "answer " + entry.answer }, this.getLocalizedAnswer(entry.answer)))))), h("div", { class: "recommendation" }, h("sbb-title", { level: "4" }, "Unsere Empfehlung"), h("p", null, this.getRecommendation()), h("sbb-button", { variant: "secondary", size: "m", onClick: () => this.reset() }, this.getLocale().reset)))));
    }
    return (h("sbb-group", { color: "milk", padding: "l-l" }, h("sbb-title", { class: "question", level: "4" }, this.questions[this.currentStep].question), h("sbb-button", { variant: "secondary", size: "m", class: "button-left", onClick: () => this.handleAnswer('no') }, this.getLocale().no), h("sbb-button", { variant: "secondary", size: "m", class: "button-right", onClick: () => this.handleAnswer('yes') }, this.getLocale().yes)));
  }
};
QuestionaireForm.style = questionaireFormCss;

export { QuestionaireForm as questionaire_form };

//# sourceMappingURL=questionaire-form.entry.js.map