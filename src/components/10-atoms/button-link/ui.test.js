import { Selector, ClientFunction } from 'testcafe';

fixture('Button Link - basic functionality').page('http://localhost:9999/iframe.html?id=atoms-button-link--button-link-click-event');

test('should render button', async t => {
  const $axaButton = await Selector('axa-button-link');
  await t.expect($axaButton.exists).ok();
  const $axaButtonShadow = await Selector(() => document.querySelector('axa-button-link').shadowRoot);
  const $axaButtonShadowEl = await $axaButtonShadow.find('.a-button-link');
  await t.expect($axaButtonShadowEl.exists).ok();
});

test('should style button default css (test axa blue bg color)', async t => {
  const $axaButtonShadow = await Selector(() => document.querySelector('axa-button-link').shadowRoot);
  const $axaButtonShadowEl = await $axaButtonShadow.find('.a-button-link');
  await t.expect(await $axaButtonShadowEl.getStyleProperty('background-color')).eql('rgb(0, 0, 143)');
});

// test('should clickable (set different text after click)', async t => {
//   const $axaButton = await Selector('axa-button-link');
//   await t.click($axaButton);
//   const $axaButtonShadow = await Selector(() => document.querySelector('axa-button-link').shadowRoot);
//   const $axaButtonShadowEl = await $axaButtonShadow.find('.a-button-link');
//   await t.expect($axaButtonShadowEl.innerText).contains('1');
// });

fixture('Button Link - set properties').page('http://localhost:9999/iframe.html?id=atoms-button-link--button-link-default');

test('should set button element disabled', async t => {
  const setDisabled = ClientFunction( () => {
    document.querySelector('axa-button-link').disabled = true;
  });
  await setDisabled();
  const $axaButtonLink = await Selector('axa-button-link');
  await t.expect(await $axaButtonLink.hasAttribute('disabled')).ok();
});

fixture('Button Link - icon').page('http://localhost:9999/iframe.html?id=atoms-button-link--button-link-icon');

test('should render icon', async t => {
  const $axaButtonShadow = await Selector(() => document.querySelector('axa-button-link').shadowRoot);
  const $axaIcon = await $axaButtonShadow.find('axa-icon');
  await t.expect($axaIcon.exists).ok();
});
