import { LitElement, html } from 'lit-element';

class AXADemoLink extends LitElement {
  render() {
    return html`
      <a href="https://axa.ch">AXA Demo Link</a>
    `;
  }
}

customElements.define('axa-demo-link', AXADemoLink);
