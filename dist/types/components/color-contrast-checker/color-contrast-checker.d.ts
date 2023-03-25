export declare class ColorContrastChecker {
  private host;
  language: 'en' | 'de' | 'it' | 'fr';
  color1: string;
  color2: string;
  private colorOptions;
  componentDidLoad(): void;
  private calculateContrastRatio;
  private getLuminance;
  private getWCAGCompliance;
  render(): any;
}
