import { r as registerInstance, h } from './index-94896ee5.js';

const questionaireFormCss = ".question{width:100%;box-sizing:border-box;border-radius:var(--sbb-border-radius-4x);border:1px solid var(--sbb-color-cloud-default);margin-bottom:var(--sbb-spacing-fixed-3x);padding:var(--sbb-spacing-fixed-4x) var(--sbb-spacing-fixed-4x)}p{margin:0 0 var(--sbb-spacing-fixed-4x) 0}p.answer{margin-bottom:0}.button-left{margin-right:var(--sbb-spacing-fixed-4x)}";

const QuestionaireForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.translations = {
      en: {
        question_1: 'Existiert die Komponente schon?',
        question_2: 'Erfüllt es die Anforderungen?',
        question_3: 'Existiert bereits etwas ähnliches?',
        question_4: 'A Kann es so angepasst werden, dass die bestehenden Anforderungen immer noch erfüllt werden?',
        question_5: 'Kann das Pattern auch an anderen Orten eingesetzt werden?',
        question_6: 'Enthält das Pattern Business-Logik?',
        question_7: 'Kann es generalisiert werden damit es auch an anderen Orten funktioniert?',
        question_8: 'Kann die Business-Logik entfernt oder ausgelagert werden?',
        recommendation_y_y: 'Verwenden ;-)',
        recommendation_y_n_y: 'Vorschlag für eine Erweiterung einer Komponente auf Github einreichen',
        recommendation_y_n_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_y_y: 'Vorschlag für eine Erweiterung einer Komponente auf Github einreichen',
        recommendation_n_y_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_n_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_y_n: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        recommendation_n_n_y_y_y: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        recommendation_n_n_y_y_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_n_y_n: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        recommendation_n_n_n_y_y_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_n_y_y_y: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        default_recommendation: 'Englische Standard-Handlungsempfehlung Text',
        yes: 'Yes',
        no: 'No',
        reset: 'Reset'
      },
      de: {
        question_1: 'Existiert die Komponente schon?',
        question_2: 'Erfüllt es die Anforderungen?',
        question_3: 'Existiert bereits etwas ähnliches?',
        question_4: 'A Kann es so angepasst werden, dass die bestehenden Anforderungen immer noch erfüllt werden?',
        question_5: 'Kann das Pattern auch an anderen Orten eingesetzt werden?',
        question_6: 'Enthält das Pattern Business-Logik?',
        question_7: 'Kann es generalisiert werden damit es auch an anderen Orten funktioniert?',
        question_8: 'Kann die Business-Logik entfernt oder ausgelagert werden?',
        recommendation_y_y: 'Verwenden ;-)',
        recommendation_y_n_y: 'Vorschlag für eine Erweiterung einer Komponente auf Github einreichen',
        recommendation_y_n_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_y_y: 'Vorschlag für eine Erweiterung einer Komponente auf Github einreichen',
        recommendation_n_y_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_n_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_y_n: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        recommendation_n_n_y_y_y: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        recommendation_n_n_y_y_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_n_y_n: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        recommendation_n_n_n_y_y_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_n_y_y_y: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        default_recommendation: 'Deutsche Standard-Handlungsempfehlung Text',
        yes: 'Ja',
        no: 'Nein',
        reset: 'Zurücksetzen'
      },
      fr: {
        question_1: 'Existiert die Komponente schon?',
        question_2: 'Erfüllt es die Anforderungen?',
        question_3: 'Existiert bereits etwas ähnliches?',
        question_4: 'Kann es so angepasst werden, dass die bestehenden Anforderungen immer noch erfüllt werden?',
        question_5: 'Kann das Pattern auch an anderen Orten eingesetzt werden?',
        question_6: 'Enthält das Pattern Business-Logik?',
        question_7: 'Kann es generalisiert werden damit es auch an anderen Orten funktioniert?',
        question_8: 'Kann die Business-Logik entfernt oder ausgelagert werden?',
        recommendation_y_y: 'Verwenden ;-)',
        recommendation_y_n_y: 'Vorschlag für eine Erweiterung einer Komponente auf Github einreichen',
        recommendation_y_n_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_y_y: 'Vorschlag für eine Erweiterung einer Komponente auf Github einreichen',
        recommendation_n_y_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_n_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_y_n: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        recommendation_n_n_y_y_y: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        recommendation_n_n_y_y_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_n_y_n: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        recommendation_n_n_n_y_y_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_n_y_y_y: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        default_recommendation: 'Deutsche Standard-Handlungsempfehlung Text',
        yes: 'Oui',
        no: 'Non',
        reset: 'Réinitialiser'
      },
      it: {
        question_1: 'Existiert die Komponente schon?',
        question_2: 'Erfüllt es die Anforderungen?',
        question_3: 'Existiert bereits etwas ähnliches?',
        question_4: 'Kann es so angepasst werden, dass die bestehenden Anforderungen immer noch erfüllt werden?',
        question_5: 'Kann das Pattern auch an anderen Orten eingesetzt werden?',
        question_6: 'Enthält das Pattern Business-Logik?',
        question_7: 'Kann es generalisiert werden damit es auch an anderen Orten funktioniert?',
        question_8: 'Kann die Business-Logik entfernt oder ausgelagert werden?',
        recommendation_y_y: 'Verwenden ;-)',
        recommendation_y_n_y: 'Vorschlag für eine Erweiterung einer Komponente auf Github einreichen',
        recommendation_y_n_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_y_y: 'Vorschlag für eine Erweiterung einer Komponente auf Github einreichen',
        recommendation_n_y_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_n_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_y_n: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        recommendation_n_n_y_y_y: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        recommendation_n_n_y_y_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_n_y_n: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        recommendation_n_n_n_y_y_n: 'Die Komponente scheint zu projektspezifisch. Bitte entwickle eine eigene Komponente für dein Projekt / Case',
        recommendation_n_n_n_y_y_y: 'Erstellung eines Protoypen in Figma oder textuelle Spezfikation der Anforderung.',
        default_recommendation: 'Deutsche Standard-Handlungsempfehlung Text',
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
      return (h("div", { class: "summary" }, h("div", { class: "history" }, this.answerHistory.map((entry) => (h("div", { class: "question" }, h("p", null, entry.question), " ", h("p", { class: "answer " + entry.answer }, this.getLocalizedAnswer(entry.answer)))))), h("p", { class: "recomondation" }, this.getRecommendation()), h("button", { onClick: () => this.reset() }, this.getLocale().reset)));
    }
    return (h("div", { class: "question" }, h("p", null, this.questions[this.currentStep].question), h("sbb-button", { class: "button-left", onClick: () => this.handleAnswer('no') }, this.getLocale().no), h("sbb-button", { class: "button-right", onClick: () => this.handleAnswer('yes') }, this.getLocale().yes)));
  }
};
QuestionaireForm.style = questionaireFormCss;

export { QuestionaireForm as questionaire_form };

//# sourceMappingURL=questionaire-form.entry.js.map