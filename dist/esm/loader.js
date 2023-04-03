import { p as promiseResolve, b as bootstrapLazy } from './index-0e59f192.js';
export { s as setNonce } from './index-0e59f192.js';

/*
 Stencil Client Patch Esm v3.2.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["color-contrast-checker",[[1,"color-contrast-checker",{"language":[1],"color1":[32],"color2":[32]}]]],["questionaire-form",[[1,"questionaire-form",{"currentStep":[32],"answerHistory":[32]}]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map