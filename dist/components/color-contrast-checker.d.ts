import type { Components, JSX } from "../types/components";

interface ColorContrastChecker extends Components.ColorContrastChecker, HTMLElement {}
export const ColorContrastChecker: {
  prototype: ColorContrastChecker;
  new (): ColorContrastChecker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
