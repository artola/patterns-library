/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/html';
import {
  boolean,
  select,
  radios,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import AXAButton from './AXAButton';
import { iconOptions } from '../../icon/story';
import {
  variantOptions,
  sizeOptions,
  typesOptions,
  invertedBgs,
} from '../story';
import Readme from './../README.md';

const storyButton = storiesOf('Atoms/Button/React', module);
storyButton.addDecorator(withKnobs);
storyButton.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyButton.add('Button', () => {
  const buttonText = text('text', 'Click me');
  const variants = radios('variant', variantOptions, '');
  const sizes = radios('size', sizeOptions, '');
  const icons = select('icon', iconOptions, '');
  const motionOff = boolean('motionOff', false);
  const disabled = boolean('disabled', false);
  const types = radios('types', typesOptions, 'button');

  const wrapper = document.createElement('div');
  ReactDOM.render(
    <div style={{ backgroundColor: invertedBgs[variants], padding: '10px' }}>
      <AXAButton
        type={types}
        variant={variants}
        size={sizes}
        icon={icons}
        disabled={disabled}
        motionOff={motionOff}
      >
        {buttonText}
      </AXAButton>
    </div>,
    wrapper
  );

  return wrapper;
});
