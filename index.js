function t(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const e=new WeakMap,s=t=>"function"==typeof t&&e.has(t),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=function(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},o={},r={},a="{{lit-".concat(String(Math.random()).slice(2),"}}"),h="\x3c!--".concat(a,"--\x3e"),l=new RegExp("".concat(a,"|").concat(h)),d="$lit$";class c{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],n=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,h=0;const{strings:c,values:{length:u}}=t;for(;h<u;){const t=n.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)p(e[t].name,d)&&i++;for(;i-- >0;){const e=c[h],s=_.exec(e)[2],i=s.toLowerCase()+d,n=t.getAttribute(i);t.removeAttribute(i);const o=n.split(l);this.parts.push({type:"attribute",index:r,name:s,strings:o}),h+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const i=t.parentNode,n=e.split(l),o=n.length-1;for(let e=0;e<o;e++){let s,o=n[e];if(""===o)s=m();else{const t=_.exec(o);null!==t&&p(t[2],d)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-d.length)+t[3]),s=document.createTextNode(o)}i.insertBefore(s,t),this.parts.push({type:"node",index:++r})}""===n[o]?(i.insertBefore(m(),t),s.push(t)):t.data=n[o],h+=o}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(m(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(s.push(t),r--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),h++}}else n.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const p=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},u=t=>-1!==t.index,m=()=>document.createComment(""),_=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class f{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,r=0,a=0,h=n.nextNode();for(;r<s.length;)if(o=s[r],u(o)){for(;a<o.index;)a++,"TEMPLATE"===h.nodeName&&(e.push(h),n.currentNode=h.content),null===(h=n.nextNode())&&(n.currentNode=e.pop(),h=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(h.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(h,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return i&&(document.adoptNode(t),customElements.upgrade(t)),t}}class y{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===t.indexOf("--\x3e",n+1);const o=_.exec(t);e+=null===o?t+(s?a:h):t.substr(0,o.index)+o[1]+o[2]+d+o[3]+a}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const g=t=>null===t||!("object"==typeof t||"function"==typeof t),v=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class w{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(g(t)||!v(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o||g(t)&&t===this.value||(this.value=t,s(t)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const t=this.value;this.value=o,t(this)}this.value!==o&&this.committer.commit()}}class x{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}const t=this.__pendingValue;t!==o&&(g(t)?t!==this.value&&this.__commitText(t):t instanceof y?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):v(t)?this.__commitIterable(t):t===r?(this.value=r,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this.__commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof f&&this.value.template===e)this.value.update(t.values);else{const s=new f(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)void 0===(s=e[i])&&(s=new x(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class b{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=o}}class P extends w{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends S{}let C=!1;try{const t={get capture(){return C=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class A{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=T(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=o}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const E=new class{handleAttributeExpressions(t,e,s,i){const n=e[0];return"."===n?new P(t,e.slice(1),s).parts:"@"===n?[new A(t,e.slice(1),i.eventContext)]:"?"===n?[new b(t,e.slice(1),s)]:new w(t,e,s).parts}handleTextExpression(t){return new x(t)}};function k(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(a);return void 0===(s=e.keyString.get(i))&&(s=new c(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const V=new Map,O=new WeakMap,M=(t,e,s)=>{let i=O.get(e);void 0===i&&(n(e,e.firstChild),O.set(e,i=new x(Object.assign({templateFactory:k},s))),i.appendInto(e)),i.setValue(t),i.commit()};(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const R=function(t){for(var e=arguments.length,s=new Array(e>1?e-1:0),i=1;i<e;i++)s[i-1]=arguments[i];return new y(t,s,"html",E)},U=133;function z(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,U,null,!1);let o=j(i),r=i[o],a=-1,h=0;const l=[];let d=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&h++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-h,r=i[o=j(i,o)]}l.forEach(t=>t.parentNode.removeChild(t))}const q=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,U,null,!1);for(;s.nextNode();)e++;return e},j=function(t){for(let e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;e<t.length;e++){const s=t[e];if(u(s))return e}return-1};const W=(t,e)=>"".concat(t,"--").concat(e);let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const I=t=>e=>{const s=W(e.type,t);let i=V.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},V.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(a);if(void 0===(n=i.keyString.get(o))){const s=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(s,t),n=new c(e,s),i.keyString.set(o,n)}return i.stringsArray.set(e.strings,n),n},L=["html","svg"],B=new Set,H=(t,e,s)=>{B.add(s);const i=t.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(e.element,s);const o=document.createElement("style");for(let t=0;t<n;t++){const e=i[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{L.forEach(e=>{const s=V.get(W(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),z(t,s)})})})(s);const r=e.element.content;!function(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const o=document.createTreeWalker(i,U,null,!1);let r=j(n),a=0,h=-1;for(;o.nextNode();)for(h++,o.currentNode===s&&(a=q(e),s.parentNode.insertBefore(e,s));-1!==r&&n[r].index===h;){if(a>0){for(;-1!==r;)n[r].index+=a,r=j(n,r);return}r=j(n,r)}}(e,o,r.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,s);const a=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)t.insertBefore(a.cloneNode(!0),t.firstChild);else{r.insertBefore(o,r.firstChild);const t=new Set;t.add(o),z(e,t)}};window.JSCompiler_renameProperty=((t,e)=>t);const J={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},D=(t,e)=>e!==t&&(e==e||t==t),Q={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:D},$=Promise.resolve(!0),G=1,K=4,X=8,Y=16,Z=32;class tt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=$,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Q;if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():"__".concat(t);Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:D)(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||J,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||J.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Z,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Q;const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|X,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=this._updateState&~X}}_attributeToProperty(t,e){if(this._updateState&X)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||Q;this._updateState=this._updateState|Y,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~Y}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,n=i._classProperties.get(t)||Q;i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||this._updateState&Y||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|K;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{t=s,e=i});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Z}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&G}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}tt.finalized=!0;const et="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const st=t=>t.flat?t.flat(1/0):function t(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let i=0,n=e.length;i<n;i++){const n=e[i];Array.isArray(n)?t(n,s):s.push(n)}return s}(t);class it extends tt{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){st(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?et?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof y&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}function nt(){const e=t(['<style>:host{display:inline-block;box-sizing:border-box;background-color:#fafafa}svg{position:absolute;width:100%;height:100%;left:0;top:0;bottom:0;right:0}div.contents{display:inline-block;box-sizing:border-box;position:absolute;padding:4vh 4vw 4vh 4vw;left:0;top:0;bottom:0;right:0}</style><svg viewBox="0 0 '," ",'" vector-effect=non-scaling-stroke preserveAspectRatio=none><path d="M',","," Q",","," ",","," T"," ",'" fill=none stroke=#000 stroke-width=','px /><path d="M',","," Q",","," ",","," T"," ",'" fill=none stroke=#000 stroke-width=','px /><path d="M',","," Q",","," ",","," T"," ",'" fill=none stroke=#000 stroke-width=','px /><path d="M',","," Q",","," ",","," T"," ",'" fill=none stroke=#000 stroke-width=',"px /></svg><div class=contents><slot></slot></div>"]);return nt=function(){return e},e}it.finalized=!0,it.render=((t,e,s)=>{const i=s.scopeName,o=O.has(e),r=F&&11===e.nodeType&&!!e.host&&t instanceof y,a=r&&!B.has(i),h=a?document.createDocumentFragment():e;if(M(t,h,Object.assign({templateFactory:I(i)},s)),a){const t=O.get(h);O.delete(h),t.value instanceof f&&H(h,t.value.template,i),n(e,e.firstChild),e.appendChild(h),O.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)});function ot(){const e=t(["<style>body{background-color:#ededed}div{display:inline-block;width:100px;height:50px;background:#d3d3d3;padding:10px;margin-bottom:5px}</style><tm-hand-drawn-outline><div>:-)</div><div>:-)</div><div>:-)</div><div>:-)</div><div>:-)</div><div>:-)</div></tm-hand-drawn-outline>"]);return ot=function(){return e},e}window.customElements.define("tm-hand-drawn-outline",class extends it{static get properties(){return{}}constructor(){super(),this.mx=10,this.my=12,this.x=this.mx,this.y=this.my,this.w=800,this.h=800,this.o=5,this.p=this.h/2,this.m=300,this.n=100,this.q=80,this.width=this.w+2*this.mx,this.height=this.h+2*this.my,this.strokeWidth=2}render(){return R(nt(),this.width,this.height,this.x,this.y,this.x+this.n,this.y-this.o,this.x+this.m,this.y,this.x+this.w,this.y,this.strokeWidth,this.x,this.y+this.h,this.x+this.n,this.y+this.h-this.o,this.x+this.m,this.y+this.h,this.x+this.w,this.y+this.h,this.strokeWidth,this.x,this.y,this.x+this.o,this.y+this.q,this.x,this.y+this.p,this.x,this.y+this.h,this.strokeWidth,this.x+this.w,this.y,this.x+this.w+this.o,this.y+this.q,this.x+this.w,this.y+this.p,this.x+this.w,this.y+this.h,this.strokeWidth)}}),M(R(ot()),document.querySelector("body"));
//# sourceMappingURL=index.js.map
