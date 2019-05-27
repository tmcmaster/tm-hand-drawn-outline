import {html, render} from 'lit-html';

import '../src/tm-hand-drawn-outline.js';

render(html`
    <style>
    :host {
    }

    body {
      background-color: #ededed;
    }
    div { 
        width: 100px;
        height: 50px;
    }
  </style>
  
  <tm-hand-drawn-outline><div>:-)</div></tm-hand-drawn-outline>
  

`, document.querySelector('body'));
