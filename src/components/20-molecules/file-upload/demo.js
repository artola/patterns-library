/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';
import './index';

storiesOf('Components|Molecules/File Upload/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Feature - file-upload in a form', () => {
    const handleSubmit = e => {
      e.preventDefault();

      const imgUpload = document.querySelector('.js-file-upload__file-upload');

      if (imgUpload.files.length > 0) {
        const listWrapper = html`
          <div class="js-file-upload__list-wrapper">
            <h3>The following files were selected:</h3>
            <ol>
              ${imgUpload.files.map(file => {
                return html`
                  <li>${file.name}</li>
                `;
              })}
            </ol>
          </div>
        `;

        render(listWrapper, document.getElementById('listWrapper'));
      }
    };

    const template = html`
      <div style="width:455px; display:flex; align-items:center">
        <axa-file-upload class="js-file-upload__file-upload"
          >These files are going to be uploaded</axa-file-upload
        >
        <div
          draggable="true"
          style="margin:2rem;padding: 0 1rem;border:2px dotted blue;border-radius:5px; white-space:nowrap; cursor: move"
        >
          drag-test item
        </div>
      </div>
      <form @click="${handleSubmit}" style="margin-top:40px;">
        <axa-button type="submit">Submit</axa-button>
      </form>
      <div id="listWrapper"></div>
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);
    return wrapper;
  });
