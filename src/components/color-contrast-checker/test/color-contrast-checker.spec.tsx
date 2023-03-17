import { newSpecPage } from '@stencil/core/testing';
import { ColorContrastChecker } from '../color-contrast-checker';

describe('color-contrast-checker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ColorContrastChecker],
      html: `<color-contrast-checker></color-contrast-checker>`,
    });
    expect(page.root).toEqualHtml(`
      <color-contrast-checker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </color-contrast-checker>
    `);
  });
});
