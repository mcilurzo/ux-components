import { newE2EPage } from '@stencil/core/testing';

describe('questionaire-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<questionaire-form></questionaire-form>');

    const element = await page.find('questionaire-form');
    expect(element).toHaveClass('hydrated');
  });
});
