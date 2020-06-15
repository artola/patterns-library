/* global document */
import { storiesOf } from '@storybook/html';
import { select, boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import { iconList } from '../icon/icon-list';
import './index';

import Readme from './README.md';
import Changelog from './CHANGELOG.md';

const variantOptions = {
  none: '',
  icon: 'icon',
  red: 'red',
  white: 'white',
  'icon-red': 'icon-red',
  'icon-white': 'icon-white',
  arrowright: 'arrowright',
  arrowleft: 'arrowleft',
  'arrowright-animated': 'arrowright-animated',
  'arrowleft-animated': 'arrowleft-animated',
  'arrowright-red': 'arrowright-red',
  'arrowleft-red': 'arrowleft-red',
  'arrowright-white': 'arrowright-white',
  'arrowleft-white': 'arrowleft-white',
  'arrowright-animated-red': 'arrowright-animated-red',
  'arrowleft-animated-red': 'arrowleft-animated-red',
  'arrowright-animated-white': 'arrowright-animated-white',
  'arrowleft-animated-white': 'arrowleft-animated-white',
  'hyperlink-white': 'hyperlink-white',
  'hyperlink-white-underline': 'hyperlink-white-underline',
  'hyperlink-red': 'hyperlink-red',
  'hyperlink-red-underline': 'hyperlink-red-underline',
};

storiesOf('Components|Atoms/Link', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Link', () => {
    const link = text(
      'link',
      'https://www.axa.ch/en/information/data-protection.html'
    );
    const linkText = text('Link text', 'Data protection statement');
    const external = boolean('external', false);
    const variant = select('variant', variantOptions, '');
    const icon = select('icon', iconList, '');
    const backgrounds = select(
      'Background color',
      ['red', 'blue', 'white', 'black'],
      'white'
    );

    const wrapper = document.createElement('div');
    const template = html`
      <style>
        body {
          background-color: ${backgrounds};
        }
      </style>
      <axa-link
        href="${link}"
        ?external="${external}"
        variant="${variant}"
        icon="${icon}"
        >${linkText}</axa-link
      >
    `;

    render(template, wrapper);
    return wrapper;
  });
