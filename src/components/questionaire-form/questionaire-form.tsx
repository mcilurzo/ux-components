import { Component, h, State } from '@stencil/core';
import i18next from '../../i18n';

@Component({
  tag: 'questionaire-form',
  styleUrl: 'questionaire-form.scss',
  shadow: true,
})
export class QuestionaireForm {

@State() currentStep = 0;
@State() answerHistory = [];

questions = [
  {
    // Frage 0
    question: i18next.t('question_1'),
    yes: 1,
    no: 2,
  },
  {
    // Frage 1
    question: i18next.t('question_2'),
    yes: 11,
    no: 3,
  },
  {
    // Frage 2
    question: i18next.t('question_3'),
    yes: 3,
    no: 4,
  },
  {
    // Frage 3
    question: i18next.t('question_4'),
    yes: 12,
    no: 13,
  },
  {
    // Frage 4
    question: i18next.t('question_5'),
    yes: 5,
    no: 6,
  },
  {
    // Frage 5
    question: i18next.t('question_6'),
    yes: 7,
    no: 14,
  },
  {
    // Frage 6
    question: i18next.t('question_7'),
    yes: 5,
    no: 15,
  },
  {
    // Frage 7
    question: i18next.t('question_8'),
    yes: 14,
    no: 13,
  }
  // Weitere Fragen hier
];

handleAnswer(answer) {
  const nextStep = this.questions[this.currentStep][answer];
  this.answerHistory = [...this.answerHistory, { question: this.questions[this.currentStep].question, answer }];
  this.currentStep = nextStep;
}
getRecommendation() {

  if (
    this.answerHistory.length >= 2 &&
    this.answerHistory[0].answer === 'yes' &&
    this.answerHistory[1].answer === 'yes'
  ) {
    return i18next.t('recommendation_y_y');
  }
  if (
    this.answerHistory.length >= 3 &&
    this.answerHistory[0].answer === 'yes' &&
    this.answerHistory[1].answer === 'no' &&
    this.answerHistory[2].answer === 'yes'
  ) {
    return i18next.t('recommendation_y_n_y');
  }
  if (
    this.answerHistory.length >= 3 &&
    this.answerHistory[0].answer === 'yes' &&
    this.answerHistory[1].answer === 'no' &&
    this.answerHistory[2].answer === 'no'
  ) {
    return i18next.t('recommendation_y_n_n');
  }
  if (
    this.answerHistory.length >= 3 &&
    this.answerHistory[0].answer === 'no' &&
    this.answerHistory[1].answer === 'yes' &&
    this.answerHistory[2].answer === 'yes'
  ) {
    return i18next.t('recommendation_n_y_y');
  }
  if (
    this.answerHistory.length >= 3 &&
    this.answerHistory[0].answer === 'no' &&
    this.answerHistory[1].answer === 'yes' &&
    this.answerHistory[2].answer === 'no'
  ) {
    return i18next.t('recommendation_n_y_n');
  }
  if (
    this.answerHistory.length >= 4 &&
    this.answerHistory[0].answer === 'no' &&
    this.answerHistory[1].answer === 'no' &&
    this.answerHistory[2].answer === 'no' &&
    this.answerHistory[3].answer === 'no'
  ) {
    return i18next.t('recommendation_n_n_n_n');
  }
  if (
    this.answerHistory.length >= 4 &&
    this.answerHistory[0].answer === 'no' &&
    this.answerHistory[1].answer === 'no' &&
    this.answerHistory[2].answer === 'yes' &&
    this.answerHistory[3].answer === 'no'
  ) {
    return i18next.t('recommendation_n_n_y_n');
  }
  if (
    this.answerHistory.length >= 5 &&
    this.answerHistory[0].answer === 'no' &&
    this.answerHistory[1].answer === 'no' &&
    this.answerHistory[2].answer === 'yes' &&
    this.answerHistory[3].answer === 'yes' &&
    this.answerHistory[4].answer === 'yes'
  ) {
    return i18next.t('recommendation_n_n_y_y_y');
  }
  if (
    this.answerHistory.length >= 5 &&
    this.answerHistory[0].answer === 'no' &&
    this.answerHistory[1].answer === 'no' &&
    this.answerHistory[2].answer === 'yes' &&
    this.answerHistory[3].answer === 'yes' &&
    this.answerHistory[4].answer === 'no'
  ) {
    return i18next.t('recommendation_n_n_y_y_n');
  }
  if (
    this.answerHistory.length >= 5 &&
    this.answerHistory[0].answer === 'no' &&
    this.answerHistory[1].answer === 'no' &&
    this.answerHistory[2].answer === 'no' &&
    this.answerHistory[3].answer === 'yes' &&
    this.answerHistory[4].answer === 'no'
  ) {
    return i18next.t('recommendation_n_n_n_y_n');
  }
  if (
    this.answerHistory.length >= 6 &&
    this.answerHistory[0].answer === 'no' &&
    this.answerHistory[1].answer === 'no' &&
    this.answerHistory[2].answer === 'no' &&
    this.answerHistory[3].answer === 'yes' &&
    this.answerHistory[4].answer === 'yes' &&
    this.answerHistory[5].answer === 'no'
  ) {
    return i18next.t('recommendation_n_n_n_y_y_n');
  }
  if (
    this.answerHistory.length >= 6 &&
    this.answerHistory[0].answer === 'no' &&
    this.answerHistory[1].answer === 'no' &&
    this.answerHistory[2].answer === 'no' &&
    this.answerHistory[3].answer === 'yes' &&
    this.answerHistory[4].answer === 'yes' &&
    this.answerHistory[5].answer === 'yes'
  ) {
    return i18next.t('recommendation_n_n_n_y_y_y');
  }
  // Standardempfehlung, wenn keine Bedingung erfüllt ist
  return i18next.t('default_recommendation');
}
getLocalizedAnswer(answer) {
  return i18next.t(answer);
}



reset() {
  this.currentStep = 0;
  this.answerHistory = [];
}

render() {
  if (this.currentStep >= this.questions.length) {
    return (
      <div class="summary" >
       
       <div class="history" >
          {this.answerHistory.map((entry) => (
            <div class="question">
              <p>{entry.question}</p> <p class={"answer " + entry.answer}>{this.getLocalizedAnswer(entry.answer)}</p>
            </div>
          ))}
        </div>
        <p class="recomondation">{this.getRecommendation()}</p>
        <button onClick={() => this.reset()}>{i18next.t('reset')}</button>
      </div>
    );
  }

  return (
    <div class="question">
      <p>{this.questions[this.currentStep].question}</p>
      <sbb-button class="button-left" onClick={() => this.handleAnswer('no')}>{i18next.t('no')}</sbb-button>
      <sbb-button class="button-right" onClick={() => this.handleAnswer('yes')}>{i18next.t('yes')}</sbb-button>
    </div>
  );
}


}
