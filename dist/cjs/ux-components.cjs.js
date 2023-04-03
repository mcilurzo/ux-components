'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3d55595d.js');

/*
 Stencil Client Patch Browser v3.2.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('ux-components.cjs.js', document.baseURI).href));
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["color-contrast-checker.cjs",[[1,"color-contrast-checker",{"language":[1],"color1":[32],"color2":[32]}]]],["questionaire-form.cjs",[[1,"questionaire-form",{"currentStep":[32],"answerHistory":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=ux-components.cjs.js.map