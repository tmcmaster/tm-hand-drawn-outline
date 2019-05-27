'use strict';

var litElement = require('lit-element');

class NewWebComponent extends litElement.LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
        }
    }

    constructor() {
        super();
        this.mx = 10;
        this.my = 12;
        this.x = this.mx; //15;
        this.y = this.my; //15+5;
        this.w = 800;
        this.h = 800;
        this.o = 10-5;
        this.p = this.h/2;//200+100;
        this.m = 300;
        this.n = 200-100;
        this.q = 80;
        this.width = this.w + 2*this.mx; //+ 5 * this.o;
        this.height = this.h + 2*this.my; //7 * this.o;
        this.strokeWidth = 2;
    }

    render() {
        return litElement.html`
      <style>
        :host {
          display: inline-block;
          //border: solid red 1px;
          box-sizing: border-box;
          //padding: 100px;
          //position: absolute;
          background-color: #fafafa;
        }

        svg {
          position: absolute;
          width: 100%;
          height: 100%;
          //border: solid blue 1px;
          left:0;
          top:0;
          bottom:0;
          right:0;
        }
        
        div.contents {
          display:inline-block;
          box-sizing: border-box;
          
          //border: solid orange 4px;
          
          position: absolute;
          padding: 4vh 4vw 4vh 4vw;
          //border: solid blue 1px;
          left:0;
          top:0;
          bottom:0;
          right:0;
        }
       
      </style>

        <svg viewBox="0 0 ${this.width} ${this.height}" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
          <path d="M${this.x},${this.y} Q${this.x+this.n},${this.y-this.o} ${this.x+this.m},${this.y} T${this.x+this.w} ${this.y}" fill="none" stroke="#000" stroke-width="${this.strokeWidth}px" />
          <path d="M${this.x},${this.y+this.h} Q${this.x+this.n},${this.y+this.h-this.o} ${this.x+this.m},${this.y+this.h} T${this.x+this.w} ${this.y+this.h}" fill="none" stroke="#000" stroke-width="${this.strokeWidth}px" />
          <path d="M${this.x},${this.y} Q${this.x+this.o},${this.y+this.q} ${this.x},${this.y+this.p} T${this.x} ${this.y+this.h}" fill="none" stroke="#000" stroke-width="${this.strokeWidth}px" />
          <path d="M${this.x+this.w},${this.y} Q${this.x+this.w+this.o},${this.y+this.q} ${this.x+this.w},${this.y+this.p} T${this.x+this.w} ${this.y+this.h}" fill="none" stroke="#000" stroke-width="${this.strokeWidth}px" />
        </svg>
        
        <div class="contents">
            <slot></slot>
        </div>
        
        <!-- The following is the SVG that this component was based off -->
<!--      <svg viewBox="0 0 1000 1000" vector-effect="non-scaling-stroke">-->
<!--        <path d="M100,200 Q300,180 600,200 T1000 200" fill="none" stroke="#000" stroke-width="1px" />-->
<!--        <path d="M100,600 Q300,580 600,600 T1000 600" fill="none" stroke="#000" stroke-width="1px" />-->
<!--        <path d="M100,200 Q120,280 100,400 T100 600" fill="none" stroke="#000" stroke-width="1px" />-->
<!--        <path d="M1000,200 Q1020,280 1000,400 T1000 600" fill="none" stroke="#000" stroke-width="1px" />-->
<!--      </svg>-->
    `;
    }
}

window.customElements.define('tm-hand-drawn-outline', NewWebComponent);
