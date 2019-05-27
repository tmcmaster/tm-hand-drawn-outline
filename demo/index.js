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
        display: inline-block;
        width: 100px;
        height: 50px;
        background: lightgray;
        padding:10px;
        margin-bottom: 5px;
    }
  </style>
  
  <tm-hand-drawn-outline>
    <div>:-)</div>
    <div>:-)</div>
    <div>:-)</div>
    <div>:-)</div>
    <div>:-)</div>
    <div>:-)</div>
  </tm-hand-drawn-outline>
  
`, document.querySelector('body'));
