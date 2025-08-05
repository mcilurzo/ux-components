import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const translations = {
  en: {
    color1Label: 'Color 1:',
    color2Label: 'Color 2:',
    contrastRatio: 'Contrast Ratio:',
    wcagCompliance: 'WCAG Compliance:',
    passSmallText: 'Pass (small text)',
    passLargeText: 'Pass (large text)',
    failSmallText: 'Fail (small text)',
    failLargeText: 'Fail (large text)',
    levelAA: 'AA',
    levelAAA: 'AAA',
  },
  de: {
    color1Label: 'Vordergrund:',
    color2Label: 'Hintergrund:',
    contrastRatio: 'Kontrastverhältnis:',
    wcagCompliance: 'WCAG-Konformität:',
    passSmallText: 'Bestanden (kleiner Text)',
    passLargeText: 'Bestanden (großer Text)',
    failSmallText: 'Nicht bestanden (kleiner Text)',
    failLargeText: 'Nicht bestanden (großer Text)',
    levelAA: 'AA',
    levelAAA: 'AAA',
  },
  fr: {
    color1Label: 'Premier plan:',
    color2Label: 'L’arrière-plan:',
    contrastRatio: 'Rapport de contraste:',
    wcagCompliance: 'Conformité aux WCAG:',
    passSmallText: 'Conforme (petit texte)',
    passLargeText: 'Conforme (grand texte)',
    failSmallText: 'Non conforme (petit texte)',
    failLargeText: 'Non conforme (grand texte)',
    levelAA: 'AA',
    levelAAA: 'AAA',
  },
  it: {
    color1Label: 'Primo piano:',
    color2Label: 'Secondo piano::',
    contrastRatio: 'KontrastRapporto di contrasto:',
    wcagCompliance: 'Conformità WCAG:',
    passSmallText: 'Superato (testo piccolo)',
    passLargeText: 'Superato (testo grande)',
    failSmallText: 'Non superato (testo piccolo)',
    failLargeText: 'Non superato (testo grande)',
    levelAA: 'AA',
    levelAAA: 'AAA',
  },
};

const colorContrastCheckerCss = ".color-contrast-checker{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;gap:var(--sbb-spacing-fixed-3x) var(--sbb-spacing-fixed-3x);grid-auto-flow:row;grid-template-areas:\"foreground-color background-color\" \"contrast-ratio contrast-ratio\" \"wcag-compliance wcag-compliance\"}.foreground-color{grid-area:foreground-color}.background-color{grid-area:background-color}.color-box{width:100%;height:var(--sbb-spacing-fixed-30x);border-radius:var(--sbb-border-radius-4x);border:1px solid var(--sbb-color-cloud);margin-top:var(--sbb-spacing-fixed-3x)}sbb-form-field{width:100%}sbb-form-field select{width:100%}.contrast-ratio{grid-area:contrast-ratio;background-color:var(--sbb-color-black);color:var(--sbb-color-white);border-radius:var(--sbb-border-radius-4x);border:solid 2px var(--sbb-color-white);text-align:center;padding:var(--sbb-spacing-fixed-2x) var(--sbb-spacing-fixed-4x);margin:-96px auto 0 auto;height:30px;line-height:30px}.wcag-compliance{grid-area:wcag-compliance;display:flex;gap:var(--sbb-spacing-fixed-6x)}.wcag-level .result{display:flex;gap:var(--sbb-spacing-fixed-2x)}.wcag-level .result.pass .icon{color:var(--sbb-color-green)}.wcag-level .result.fail .icon{color:var(--sbb-color-red)}.wcag-level .result .icon{width:24px;height:24px}.wcag-level .result p{margin:0}.sbb-screen-reader-only{width:0 !important;height:0 !important;opacity:0 !important}";

const ColorContrastChecker$1 = /*@__PURE__*/ proxyCustomElement(class ColorContrastChecker extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.colorOptions = [
      { name: 'Red', value: '#EB0000' },
      { name: 'Red125', value: '#C60018' },
      { name: 'Red150', value: '#C60018' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Milk', value: '#F6F6F6' },
      { name: 'Cloud', value: '#E5E5E5' },
      { name: 'Silver', value: '#DCDCDC' },
      { name: 'Aluminum', value: '#D2D2D2' },
      { name: 'Platinum', value: '#CDCDCD' },
      { name: 'Cement', value: '#BDBDBD' },
      { name: 'Graphite', value: '#B7B7B7' },
      { name: 'Storm', value: '#A8A8A8' },
      { name: 'Smoke', value: '#8D8D8D' },
      { name: 'Metal', value: '#767676' },
      { name: 'Granite', value: '#686868' },
      { name: 'Anthracite', value: '#5A5A5A' },
      { name: 'Iron', value: '#444444' },
      { name: 'Charcoal', value: '#212121' },
      { name: 'Midnight', value: '#151515' },
      { name: 'Black', value: '#000000' },
      { name: 'Blue', value: '#2d327d' },
      { name: 'Green', value: '#008233' },
      { name: 'Turquoise', value: '#007E84' },
      { name: 'Sky', value: '#0074BF' },
      { name: 'Night', value: '#030304ff' },
      { name: 'Violet', value: '#6F2282' },
      { name: 'Pink', value: '#C7387A' },
      { name: 'Brown', value: '#A05400' },
      { name: 'Autumn', value: '#CF3B00' },
      { name: 'Orange', value: '#F27E00' },
      { name: 'Peach', value: '#FCBB00' },
      { name: 'Lemon', value: '#FFDE15' },
    ];
    this.language = 'en';
    this.color1 = '#EB0000';
    this.color2 = '#FFFFFF';
  }
  componentDidLoad() {
    this.host.shadowRoot.getElementById('color1').value = this.color1;
    this.host.shadowRoot.getElementById('color2').value = this.color2;
  }
  calculateContrastRatio(color1, color2) {
    const l1 = this.getLuminance(color1) + 0.05;
    const l2 = this.getLuminance(color2) + 0.05;
    return l1 > l2 ? l1 / l2 : l2 / l1;
  }
  getLuminance(hexColor) {
    const rgb = hexColor
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16) / 255);
    const r = rgb[0] <= 0.03928 ? rgb[0] / 12.92 : Math.pow((rgb[0] + 0.055) / 1.055, 2.4);
    const g = rgb[1] <= 0.03928 ? rgb[1] / 12.92 : Math.pow((rgb[1] + 0.055) / 1.055, 2.4);
    const b = rgb[2] <= 0.03928 ? rgb[2] / 12.92 : Math.pow((rgb[2] + 0.055) / 1.055, 2.4);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  getWCAGCompliance(contrastRatio) {
    return {
      aaNormal: contrastRatio >= 4.5,
      aaLarge: contrastRatio >= 3,
      aaaNormal: contrastRatio >= 7,
      aaaLarge: contrastRatio >= 4.5,
    };
  }
  render() {
    const contrastRatio = this.calculateContrastRatio(this.color1, this.color2);
    const wcagCompliance = this.getWCAGCompliance(contrastRatio);
    const t = translations[this.language];
    return (h("div", { class: "color-contrast-checker" }, h("div", { class: "foreground-color" }, h("sbb-form-field", { "error-space": "none", size: "m", width: "collapse" }, h("label", null, t.color1Label), h("sbb-select", { id: "color1", onInput: (e) => {
        this.color1 = e.target.value;
      } }, this.colorOptions.map((color) => (h("sbb-option", { value: color.value }, color.name))))), h("div", { class: "color-box", style: { backgroundColor: this.color1 } })), h("div", { class: "background-color" }, h("sbb-form-field", { "error-space": "none", size: "m", width: "collapse" }, h("label", null, t.color2Label), h("sbb-select", { id: "color2", onInput: (e) => {
        this.color2 = e.target.value;
      } }, this.colorOptions.map((color) => (h("sbb-option", { value: color.value }, color.name))))), h("div", { class: "color-box", style: { backgroundColor: this.color2 } })), h("div", { class: "contrast-ratio" }, contrastRatio.toFixed(2), ":1"), h("div", { class: "wcag-compliance" }, h("div", { class: "wcag-level" }, h("div", null, t.levelAA), h("div", { class: wcagCompliance.aaNormal ? 'result pass' : 'result fail' }, h("div", { class: "icon" }, wcagCompliance.aaNormal ? h("sbb-icon", { name: "circle-tick-small" }) : h("sbb-icon", { name: "circle-cross-small" })), h("p", null, wcagCompliance.aaNormal ? t.passSmallText : t.failSmallText)), h("div", { class: wcagCompliance.aaLarge ? 'result pass' : 'result fail' }, h("div", { class: "icon" }, wcagCompliance.aaLarge ? h("sbb-icon", { name: "circle-tick-small" }) : h("sbb-icon", { name: "circle-cross-small" })), h("p", null, wcagCompliance.aaLarge ? t.passLargeText : t.failLargeText))), h("div", { class: "wcag-level" }, h("div", null, t.levelAAA), h("div", { class: wcagCompliance.aaaNormal ? 'result pass' : 'result fail' }, h("div", { class: "icon" }, wcagCompliance.aaaNormal ? h("sbb-icon", { name: "circle-tick-small" }) : h("sbb-icon", { name: "circle-cross-small" })), h("p", null, wcagCompliance.aaaNormal ? t.passSmallText : t.failSmallText)), h("div", { class: wcagCompliance.aaaLarge ? 'result pass' : 'result fail' }, h("div", { class: "icon" }, wcagCompliance.aaaLarge ? h("sbb-icon", { name: "circle-tick-small" }) : h("sbb-icon", { name: "circle-cross-small" })), h("p", null, wcagCompliance.aaaLarge ? t.passLargeText : t.failLargeText))))));
  }
  get host() { return this; }
  static get style() { return colorContrastCheckerCss; }
}, [1, "color-contrast-checker", {
    "language": [1],
    "color1": [32],
    "color2": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["color-contrast-checker"];
  components.forEach(tagName => { switch (tagName) {
    case "color-contrast-checker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ColorContrastChecker$1);
      }
      break;
  } });
}

const ColorContrastChecker = ColorContrastChecker$1;
const defineCustomElement = defineCustomElement$1;

export { ColorContrastChecker, defineCustomElement };

//# sourceMappingURL=color-contrast-checker.js.map