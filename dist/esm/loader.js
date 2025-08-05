import { p as promiseResolve, b as bootstrapLazy } from './index-cc3b2e46.js';
export { s as setNonce } from './index-cc3b2e46.js';

/*
 Stencil Client Patch Esm v3.4.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["color-contrast-checker_2",[[1,"color-contrast-checker",{"language":[1],"color1":[32],"color2":[32]}],[1,"questionaire-form",{"currentStep":[32],"answerHistory":[32]}]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map