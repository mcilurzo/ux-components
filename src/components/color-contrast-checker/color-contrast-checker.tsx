import { Component, h, State, Element } from '@stencil/core';

@Component({
  tag: 'color-contrast-checker',
  styleUrl: 'color-contrast-checker.css',
  shadow: true,
})
export class ColorContrastChecker {
  @Element() private host: HTMLElement;

  @State() color1: string = '#000000';
  @State() color2: string = '#ffffff';

  private colorOptions: { name: string; value: string }[] = [
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#ffffff' },
    { name: 'Red', value: '#ff0000' },
    { name: 'Green', value: '#00ff00' },
    { name: 'Blue', value: '#0000ff' },
    { name: 'Yellow', value: '#ffff00' },
    { name: 'Cyan', value: '#00ffff' },
    { name: 'Magenta', value: '#ff00ff' },
    { name: 'Purple', value: '#800080' },
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

  private getWCAGCompliance(contrastRatio: number): string {
    if (contrastRatio >= 7) {
      return 'AAA';
    } else if (contrastRatio >= 4.5) {
      return 'AA';
    } else if (contrastRatio >= 3) {
      return 'A';
    } else {
      return 'Fail';
    }
  }

  render() {
    const contrastRatio = this.calculateContrastRatio(this.color1, this.color2);
    const wcagCompliance = this.getWCAGCompliance(contrastRatio);
  
    return (
      <div class="container">
        <div>
          <label htmlFor="color1">Color 1:</label>
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
        </div>
        <div>
          <label htmlFor="color2">Color 2:</label>
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
        </div>
        <div class="color-display">
          <div class="color-box" style={{ backgroundColor: this.color1 }}></div>
          <div class="color-box" style={{ backgroundColor: this.color2 }}></div>
        </div>
        <div>
          <p>
            Contrast Ratio: {contrastRatio.toFixed(2)}:1
          </p>
          <p>
            WCAG Compliance: {wcagCompliance}
          </p>
        </div>
      </div>
    );
  }
}  