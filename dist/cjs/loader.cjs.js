'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7b93b33a.js');

/*
 Stencil Client Patch Esm v3.4.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["color-contrast-checker_2.cjs",[[1,"color-contrast-checker",{"language":[1],"color1":[32],"color2":[32]}],[1,"questionaire-form",{"currentStep":[32],"answerHistory":[32]}]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map