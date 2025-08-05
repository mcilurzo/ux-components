import { p as promiseResolve, b as bootstrapLazy } from './index-cc3b2e46.js';
export { s as setNonce } from './index-cc3b2e46.js';

/*
 Stencil Client Patch Browser v3.4.2 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["color-contrast-checker_2",[[1,"color-contrast-checker",{"language":[1],"color1":[32],"color2":[32]}],[1,"questionaire-form",{"currentStep":[32],"answerHistory":[32]}]]]], options);
});

//# sourceMappingURL=ux-components.js.map