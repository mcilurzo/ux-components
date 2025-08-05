import { h } from '@stencil/core';
import { translations } from './translations';
export class ColorContrastChecker {
  constructor() {
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
  static get is() { return "color-contrast-checker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["color-contrast-checker.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["color-contrast-checker.css"]
    };
  }
  static get properties() {
    return {
      "language": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'en' | 'de' | 'it' | 'fr'",
          "resolved": "\"de\" | \"en\" | \"fr\" | \"it\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "language",
        "reflect": false,
        "defaultValue": "'en'"
      }
    };
  }
  static get states() {
    return {
      "color1": {},
      "color2": {}
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=color-contrast-checker.js.map
