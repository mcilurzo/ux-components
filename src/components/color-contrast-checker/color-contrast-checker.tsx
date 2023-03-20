import { Component, h, State, Element, Prop } from '@stencil/core';
import { translations } from './translations';

@Component({
  tag: 'color-contrast-checker',
  styleUrl: 'color-contrast-checker.scss',
  shadow: true,
})
export class ColorContrastChecker {
  @Element() private host: HTMLElement;
  @Prop() language: 'en' | 'de' | 'it' | 'fr' = 'en';
  @State() color1: string = '#EB0000';
  @State() color2: string = '#FFFFFF';

  private colorOptions: { name: string; value: string }[] = [
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
    { name: 'Sky', value: '#0079C7' },
    { name: 'Night', value: '#143A85' },
    { name: 'Violet', value: '#6F2282' },
    { name: 'Autumn', value: '#E84E10' },
    { name: 'Orange', value: '#F27E00' },
    { name: 'Peach', value: '#FCBB00' },
    { name: 'Lemon', value: '#FFDE15' },
    { name: 'Brown', value: '#B76000' },
    { name: 'Green', value: '#00973B' },
    { name: 'Turquoise', value: '#00A59B' },
  ];

  componentDidLoad() {
    (this.host.shadowRoot.getElementById('color1') as HTMLSelectElement).value = this.color1;
    (this.host.shadowRoot.getElementById('color2') as HTMLSelectElement).value = this.color2;
  }

  private calculateContrastRatio(color1: string, color2: string): number {
    const l1 = this.getLuminance(color1) + 0.05;
    const l2 = this.getLuminance(color2) + 0.05;
    return l1 > l2 ? l1 / l2 : l2 / l1;
  }

  private getLuminance(hexColor: string): number {
    const rgb = hexColor
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16) / 255);
    const r = rgb[0] <= 0.03928 ? rgb[0] / 12.92 : Math.pow((rgb[0] + 0.055) / 1.055, 2.4);
    const g = rgb[1] <= 0.03928 ? rgb[1] / 12.92 : Math.pow((rgb[1] + 0.055) / 1.055, 2.4);
    const b = rgb[2] <= 0.03928 ? rgb[2] / 12.92 : Math.pow((rgb[2] + 0.055) / 1.055, 2.4);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  private getWCAGCompliance(contrastRatio: number) {
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
  
    return (
      <div class="color-contrast-checker">
        <div class="foreground-color">
        <sbb-form-field error-space="none" label={t.color1Label} size="m" width="default">
          <select
            id="color1"
            onInput={(e: any) => {
              this.color1 = e.target.value;
            }}
          >
            {this.colorOptions.map((color) => (
              <option value={color.value}>{color.name} ({color.value})</option>
            ))}
          </select>
        </sbb-form-field>
        <div class="color-box" style={{ backgroundColor: this.color1 }}></div>
        </div>
        <div class="background-color">
          <sbb-form-field error-space="none" label={t.color2Label} size="m" width="default">
          <select
            id="color2"
            onInput={(e: any) => {
              this.color2 = e.target.value;
            }}
          >
            {this.colorOptions.map((color) => (
              <option value={color.value}>{color.name} ({color.value})</option>
            ))}
          </select>
          </sbb-form-field>
          <div class="color-box" style={{ backgroundColor: this.color2 }}></div>
        </div>
        <div class="wcag-compliance">
          <p class="contrast-ratio">
          {t.contrastRatio} {contrastRatio.toFixed(2)}:1
          </p>
          <div class="wcag-levels">
          <div class="wcag-level">
            <div>{t.levelAA}</div>
            <div class={wcagCompliance.aaNormal ? 'pass' : 'fail'}>
              {wcagCompliance.aaNormal ? t.passSmallText : t.failSmallText}
            </div>
            <div class={wcagCompliance.aaLarge ? 'pass' : 'fail'}>
              {wcagCompliance.aaLarge ? t.passLargeText : t.failLargeText}
            </div>
          </div>
          <div class="wcag-level">
            <div>{t.levelAAA}</div>
            <div class={wcagCompliance.aaaNormal ? 'pass' : 'fail'}>
              {wcagCompliance.aaaNormal ? t.passSmallText : t.failSmallText}
            </div>
            <div class={wcagCompliance.aaaLarge ? 'pass' : 'fail'}>
              {wcagCompliance.aaaLarge ? t.passLargeText : t.failLargeText}
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}  