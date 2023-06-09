import { p as promiseResolve, b as bootstrapLazy } from './index-0e59f192.js';
export { s as setNonce } from './index-0e59f192.js';

/*
 Stencil Client Patch Browser v3.2.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["color-contrast-checker",[[1,"color-contrast-checker",{"language":[1],"color1":[32],"color2":[32]}]]],["questionaire-form",[[1,"questionaire-form",{"currentStep":[32],"answerHistory":[32]}]]]], options);
});

//# sourceMappingURL=ux-components.js.map