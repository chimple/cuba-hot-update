window.__require=function t(o,e,r){function n(c,u){if(!e[c]){if(!o[c]){var s=c.split("/");if(s=s[s.length-1],!o[s]){var f="function"==typeof __require&&__require;if(!u&&f)return f(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+c+"'")}c=s}var p=e[c]={exports:{}};o[c][0].call(p.exports,function(t){return n(o[c][1][t]||t)},p,p.exports,t,o,e,r)}return e[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<r.length;c++)n(r[c]);return n}({youtube:[function(t,o,e){"use strict";cc._RF.push(o,"e18f9pexvhKHboH6tNo+Bsg","youtube");var r,n=this&&this.__extends||(r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),i=this&&this.__decorate||function(t,o,e,r){var n,i=arguments.length,c=i<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,o,e,r);else for(var u=t.length-1;u>=0;u--)(n=t[u])&&(c=(i<3?n(c):i>3?n(o,e,c):n(o,e))||c);return i>3&&c&&Object.defineProperty(o,e,c),c};Object.defineProperty(e,"__esModule",{value:!0}),e.Youtube=void 0;var c=cc._decorator.ccclass,u=t("../../../common/scripts/lib/config"),s=t("../../../common/scripts/lib/error-handler"),f=t("../../../common/scripts/util-logger"),p=null;cc.nextYoutube=function(){cc.log("started nextYoutube"),p.node.emit("nextProblem")};var l=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o._currentConfig=null,o}return n(o,t),o.prototype.onLoad=function(){p=this,this._currentConfig=this.processConfiguration(u.default.getInstance().data[0])},o.prototype.start=function(){f.default.launchYoutube(this._currentConfig.videoId)},o.prototype.processConfiguration=function(t){void 0===t&&(t=[]);var o=[].concat.apply([],t);return{name:o[0],version:o[1],description:o[2],videoId:o[3]}},i([s.default()],o.prototype,"processConfiguration",null),i([c],o)}(cc.Component);e.Youtube=l,cc._RF.pop()},{"../../../common/scripts/lib/config":void 0,"../../../common/scripts/lib/error-handler":void 0,"../../../common/scripts/util-logger":void 0}]},{},["youtube"]);