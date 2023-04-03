import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .init({
    resources: {
        en: {
          translation: {
            question_1: 'Existiert die Komponente schon?',
            question_2: 'Erfüllt es die Anforderungen?',
            question_3: 'Existiert bereits etwas ähnliches?',
            question_4: 'A Kann es so angepasst werden, dass die bestehenden Anforderungen immer noch erfüllt werden?',
            question_5: 'Kann das Pattern auch an anderen Orten eingesetzt werden?',
            question_6: 'Enthält das Pattern Business-Logik?',
            question_7: 'Kann es generalisiert werden damit es auch an anderen Orten funktioniert?',
            question_8: 'Kann die Business-Logik entfernt oder ausgelagert werden?',
            // Weitere englische Fragen
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
        },
        de: {
          translation: {
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
        },
        fr: {
          translation: {
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
        },
        it: {
          translation: {
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
          },
        },
      },      
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
