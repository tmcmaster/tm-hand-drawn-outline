'use strict';

var litElement = require('lit-element');

class NewWebComponent extends litElement.LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String}
        }
    }

    constructor() {
        super();
        this.heading = 'Hello world!';
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        return litElement.html`
      <style>
        :host {
          display: inline-block;
        }
        h2 {
            color: red;
        }
      </style>
      <h2>${this.heading}</h2>
    `;
    }
}

window.customElements.define('tm-hand-drawn-outline', NewWebComponent);
