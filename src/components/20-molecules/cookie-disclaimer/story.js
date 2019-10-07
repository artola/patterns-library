/* global document */
import { storiesOf } from '@storybook/html';
import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import withNoBorder from '../../../../.storybook/addons/no-border';

storiesOf('Molecules/Cookie disclaimer', module)
  .addDecorator(withNoBorder)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Cookie disclaimer', () => {
    const buttonname = text('buttonname', 'Accept');
    const title = text('text', 'This website uses cookies');
    const description = text(
      'Description (not an attribute)',
      'Any Description for the cookie disclaimer'
    );
    const dataProtection = text(
      'Link text (not an attribute)',
      'Data protection'
    );
    const link = text(
      'Link address (not an attribute)',
      'https://axa.ch/de/informationen/datenschutz.html'
    );

    const wrapper = document.createElement('div');
    const template = html`
      <axa-cookie-disclaimer buttonname="${buttonname}" title="${title}">
        <p>${description}</p>
        <axa-link variant="arrowright-animated-white" href="${link}">
          ${dataProtection}
        </axa-link>
      </axa-cookie-disclaimer>

      <!-- This is code only for the demo -->
      <br />
      <div style="border: 1px solid red; padding: 10px;">
        <h1>
          This is not rendered by the component. This story disappears after
          click (Empty your cache and/or localStorage if this page is only
          showing this message)
        </h1>
      </div>
    `;
    render(template, wrapper);
    return wrapper;
  });
