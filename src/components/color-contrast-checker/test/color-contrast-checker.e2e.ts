import { newE2EPage } from '@stencil/core/testing';

describe('color-contrast-checker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<color-contrast-checker></color-contrast-checker>');

    const element = await page.find('color-contrast-checker');
    expect(element).toHaveClass('hydrated');
  });
});
