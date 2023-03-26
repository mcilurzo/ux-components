/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface ColorContrastChecker {
        "language": 'en' | 'de' | 'it' | 'fr';
    }
    interface QuestionaireForm {
    }
}
declare global {
    interface HTMLColorContrastCheckerElement extends Components.ColorContrastChecker, HTMLStencilElement {
    }
    var HTMLColorContrastCheckerElement: {
        prototype: HTMLColorContrastCheckerElement;
        new (): HTMLColorContrastCheckerElement;
    };
    interface HTMLQuestionaireFormElement extends Components.QuestionaireForm, HTMLStencilElement {
    }
    var HTMLQuestionaireFormElement: {
        prototype: HTMLQuestionaireFormElement;
        new (): HTMLQuestionaireFormElement;
    };
    interface HTMLElementTagNameMap {
        "color-contrast-checker": HTMLColorContrastCheckerElement;
        "questionaire-form": HTMLQuestionaireFormElement;
    }
}
declare namespace LocalJSX {
    interface ColorContrastChecker {
        "language"?: 'en' | 'de' | 'it' | 'fr';
    }
    interface QuestionaireForm {
    }
    interface IntrinsicElements {
        "color-contrast-checker": ColorContrastChecker;
        "questionaire-form": QuestionaireForm;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "color-contrast-checker": LocalJSX.ColorContrastChecker & JSXBase.HTMLAttributes<HTMLColorContrastCheckerElement>;
            "questionaire-form": LocalJSX.QuestionaireForm & JSXBase.HTMLAttributes<HTMLQuestionaireFormElement>;
        }
    }
}