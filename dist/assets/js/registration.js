!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=272)}({0:function(e,t,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function u(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(m(r.parts[a],t))}else{for(var s=[];a<r.parts.length;a++)s.push(m(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach(function(n){t.setAttribute(n,e.attributes[n])}),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}var p=null,v=0;function m(e,t){var n,r,o;if(t.singleton){var i=v++;n=p||(p=c(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=c(t),r=function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e,t);return u(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i],c=o[a.id];c&&(c.refs--,r.push(c))}e&&u(s(e,t),t);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}},272:function(e,t,n){"use strict";n.r(t);n(273),n(275)},273:function(e,t,n){var r=n(274);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(0)(r,o);r.locals&&(e.exports=r.locals)},274:function(e,t,n){},275:function(e,t){window.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelectorAll(".header__login-button"),t=document.querySelectorAll(".header__register-button"),n=document.querySelectorAll(".main__enterForm"),r=document.querySelectorAll(".main__regForm"),o=function(t){e[t].addEventListener("click",function(){r[t].classList.contains("main__regForm__active")&&(r[t].classList.remove("main__regForm__active"),setTimeout(function(){n[t].classList.add("main__enterForm__active")},100))})},i=0;i<e.length;i++)o(i);var a=function(e){t[e].addEventListener("click",function(){n[e].classList.contains("main__enterForm__active")&&(setTimeout(function(){},100),n[e].classList.remove("main__enterForm__active"),setTimeout(function(){r[e].classList.add("main__regForm__active")},100))})};for(i=0;i<t.length;i++)a(i)})}});
//# sourceMappingURL=registration.js.map