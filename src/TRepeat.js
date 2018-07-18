import { templiteral } from './templiteral';

export class TRepeat extends HTMLElement {
  constructor() {
    super();
    this.templiteral = templiteral;
  }

  connectedCallback() {
    console.warn('t-repeat is being deprecated in favor of inline array methods.');
    this._render();
  }

  _render() {
    this.templiteral()(this.items.map(this.templatecallback()));
  }
}

if (!customElements.get('t-repeat')) {
  customElements.define('t-repeat', TRepeat);
}
