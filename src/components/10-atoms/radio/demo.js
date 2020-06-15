/* global document */
import { storiesOf } from '@storybook/html';
/* eslint-disable import/no-extraneous-dependencies */
import { CarSvg } from '@axa-ch/materials/images';
import { html, render } from 'lit-html';
import './index';

import Readme from './README.md';
import Changelog from './CHANGELOG.md';

storiesOf('Components|Atoms/Radio/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Radio - default', () => {
    const root = document.createElement('div');
    const error = 'Bitte wählen Sie eine Option aus.';

    const handleClick = () => {
      setTimeout(() => {
        const atLeastOneChecked = [
          ...document.querySelectorAll('axa-radio[name="contract"]'),
        ]
          .map(radio => radio.checked)
          .reduce((acc, curr) => acc | curr, 0);
        document.querySelector('axa-fieldset').error = atLeastOneChecked
          ? ''
          : error;
      }, 0);
    };

    const template = html`
    <axa-fieldset error="${error}" @click="${handleClick}" >
    <axa-radio name="contract" label="Ja,
    Versicherungsvertrag abschliessen." value="1"></axa-radio>
    <axa-radio name="contract" label="Ich brauche noch mehr Informationen" value="2"></axa-radio>
    <axa-radio name="contract" label="Nein, ich möchte keinen Versicherungsvertrag" value="3"></axa-radio>
    <axa-radio name="contract" label="Nein, ich bin bereits versichert" disabled></<axa-radio>
    </axa-fieldset>`;
    render(template, root);
    return root;
  })
  .add(
    'Radio - button, autowidth',
    () => `
<axa-fieldset horizontal>
<axa-radio button name="insurance" label="No, I'm already insured"></axa-radio>
<axa-radio button name="insurance" label="No, no need" ></axa-radio>
<axa-radio button name="insurance" label="Yes, take out insurance" checked></axa-radio>
<axa-radio button name="insurance" label="Yes, call me" disabled></axa-radio>
</axa-fieldset>`
  )
  .add(
    'Radio - button, nogap',
    () => `
<axa-fieldset horizontal>
<axa-radio button nogap name="insurance" label="No, I'm already insured"></axa-radio>
<axa-radio button nogap name="insurance" label="Yes, take out insurance" checked></axa-radio>
</axa-fieldset>`
  )
  .add(
    'Radio - button, noautowidth',
    () => `
<axa-fieldset horizontal>
<axa-radio button name="insurance" noautowidth label="No, I'm already insured"></axa-radio>
<axa-radio button name="insurance" noautowidth label="No, no need" ></axa-radio>
<axa-radio button name="insurance" noautowidth label="Yes, take out insurance" checked></axa-radio>
</axa-fieldset>`
  )
  .add('Radio - button, icon', () => {
    const root = document.createElement('div');
    const template = html`
      <axa-fieldset horizontal>
        <axa-radio
          button
          name="insurance"
          label="Option 1"
          .icon="${CarSvg}"
        ></axa-radio>
        <axa-radio
          button
          name="insurance"
          label="Option 2"
          .icon="${CarSvg}"
        ></axa-radio>
        <axa-radio
          button
          name="insurance"
          label="Option 3"
          checked
          .icon="${CarSvg}"
        ></axa-radio>
        <axa-radio
          button
          name="insurance"
          label="Option 4"
          disabled
          .icon="${CarSvg}"
        ></axa-radio>
      </axa-fieldset>
    `;

    render(template, root);
    return root;
  });
