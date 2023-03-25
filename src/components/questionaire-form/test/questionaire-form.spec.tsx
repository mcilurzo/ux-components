import { newSpecPage } from '@stencil/core/testing';
import { QuestionaireForm } from '../questionaire-form';

describe('questionaire-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [QuestionaireForm],
      html: `<questionaire-form></questionaire-form>`,
    });
    expect(page.root).toEqualHtml(`
      <questionaire-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </questionaire-form>
    `);
  });
});
