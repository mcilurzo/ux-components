import type { Components, JSX } from "../types/components";

interface QuestionaireForm extends Components.QuestionaireForm, HTMLElement {}
export const QuestionaireForm: {
  prototype: QuestionaireForm;
  new (): QuestionaireForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
