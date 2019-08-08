/* global document */
import { storiesOf } from '@storybook/html';
import {
  boolean,
  select,
  radios,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

const story = storiesOf('Organisms/Testimonials', module);
story.addDecorator(withKnobs);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
});

story.add('Testimonials', () => {
  const buttonText = text('Text', 'Click me');
  const motionOff = boolean('motionOff', false);
  const disabled = boolean('disabled', false);
  const large = boolean('large', false); // should probably be a variant.
  const type = radios('Types', { submit: 'submit', reset: 'reset' });

  const wrapper = document.createElement('div');
  const template = html`
    <axa-testimonials
      autorotatedisabled
      title="Customer Reviews"
      subtitle="AXA works hard to provide the best service possible to its customers."
    >
      <span
        >Very helpful once I got through to the correct person but I was
        constantly being transferred from person to person, in the end I called
        into my local axa once in the city and got sorted in 10 minutes after 3
        weeks of phone calls.</span
      >
      <span
        >Very helpful once I got through to the correct person but I was
        constantly being transferred from person to person, in the end I called
        into my local axa once in the city and got sorted in 10 minutes after 3
        weeks of phone calls. Very helpful once I got through to the correct
        person but I was constantly being transferred from person to person, in
        the end I called into my local axa once in the city and got sorted in 10
        minutes after 3 weeks of phone calls. Very helpful once I got through to
        the correct person but I was constantly being transferred from person to
        person, in the end I called into my local axa once in the city and got
        sorted in 10 minutes after 3 weeks of phone calls. Very helpful once I
        got through to the correct person but I was constantly being transferred
        from person to person, in the end I called into my local axa once in the
        city and got sorted in 10 minutes after 3 weeks of phone calls.</span
      >
      <span>This is a small text.</span>
    </axa-testimonials>
  `;

  render(template, wrapper);
  return wrapper;
});
