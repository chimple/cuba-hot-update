window.__require=function t(e,o,n){function r(c,s){if(!o[c]){if(!e[c]){var l=c.split("/");if(l=l[l.length-1],!e[l]){var a="function"==typeof __require&&__require;if(!s&&a)return a(l,!0);if(i)return i(l,!0);throw new Error("Cannot find module '"+c+"'")}c=l}var p=o[c]={exports:{}};e[c][0].call(p.exports,function(t){return r(e[c][1][t]||t)},p,p.exports,t,e,o,n)}return o[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<n.length;c++)r(n[c]);return r}({missingnumberdrag:[function(t,e,o){"use strict";cc._RF.push(e,"6e907bK6XZOxJods+sqHYNw","missingnumberdrag");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("../../../common/scripts/drag"),s=cc._decorator,l=s.ccclass,a=s.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.missingNumber=null,e}return r(e,t),e.prototype.onTouchEnd=function(e){var o=this.isDragging;t.prototype.onTouchEnd.call(this,e),o&&(this.match?this.missingNumber.emit("missingNumberMatch",this):this.missingNumber.emit("missingNumberNoMatch"))},i([a(cc.Label)],e.prototype,"label",void 0),i([a(cc.Node)],e.prototype,"missingNumber",void 0),i([l],e)}(c.default);o.default=p,cc._RF.pop()},{"../../../common/scripts/drag":void 0}],missingnumberdrop:[function(t,e,o){"use strict";cc._RF.push(e,"ab052ZPDTRCCJUgtl+OEIUn","missingnumberdrop");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("../../../common/scripts/drop"),s=cc._decorator,l=s.ccclass,a=s.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e}return r(e,t),e.prototype.onLoad=function(){},i([a(cc.Label)],e.prototype,"label",void 0),i([l],e)}(c.default);o.default=p,cc._RF.pop()},{"../../../common/scripts/drop":void 0}],sequencebox:[function(t,e,o){"use strict";cc._RF.push(e,"f23c3Abn3REVrlShtrbqkp2","sequencebox");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./missingnumberdrag"),s=t("../../../common/scripts/lib/config"),l=t("../../../common/scripts/util"),a=t("../../../common/scripts/drag"),p=t("../../../common/scripts/lib/error-handler"),u=t("../../../common/scripts/game"),d=cc._decorator,f=d.ccclass,h=d.property,m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.singleCard=null,e.singleDrop=null,e.longCard=null,e.longDrop=null,e.box=null,e.choices=null,e.boxes=null,e.dropClip=null,e.answer=null,e.answerBox=null,e.empty=0,e}return r(e,t),e.prototype.onLoad=function(){var t=this;cc.director.getCollisionManager().enabled=!0,a.default.letDrag=!1,this.node.on("missingNumberMatch",this.onMatch.bind(this)),this.node.on("missingNumberNoMatch",function(){t.node.emit("wrong")});var e=s.default.getInstance().data[0],o=(e[0],e[1],e[2],e[3]),n=e[4],r=e[5],i=e[6],p=e[7],u=e[8],d=[o,n,r,i],f=[];this.answer=u;var h=0,m=null;d.forEach(function(e,o){var n=cc.instantiate(t.box);if("?"==e){var r=n.getChildByName("layout");""==p?t.answer.split("").forEach(function(e){t.createDropBox(t.singleDrop,e,r)}):t.createDropBox(t.longDrop,t.answer,r),m=r.children[r.childrenCount-1],t.answerBox=n}else n.getChildByName("label").getComponent(cc.Label).string=e;t.boxes.addChild(n),"?"!=e&&parseInt(e)<=100?l.Util.loadNumericSound(e,function(t){f[o]=t}):f[o]=null,h+=.5,(new cc.Tween).target(n).set({y:cc.winSize.height}).delay(h).to(.5,{y:0},{progress:null,easing:"cubicIn"}).call(function(){l.Util.playSfx(t.dropClip)}).delay(h+2).call(function(){null!=f[o]&&l.Util.play(f[o],!1),(new cc.Tween).target(n).to(.25,{scale:1.1},{progress:null,easing:"sineOut"}).to(.25,{scale:1},{progress:null,easing:"sineIn"}).call(function(){o+1==d.length&&(l.Util.showHelp(b,m),a.default.letDrag=!0)}).start()}).start()});var g=[];if(""==p)for(var y=0;y<10;y++)g.push(y.toString());else p.split(",").forEach(function(t){g.push(t.trim())});var b=null;g.forEach(function(e){var o=cc.instantiate(""==p?t.singleCard:t.longCard);o.name=e;var n=o.getComponent(c.default);n.missingNumber=t.node,n.label.string=e;var r=new cc.Node;r.width=o.width,r.height=o.height,r.addChild(o),t.choices.addChild(r),e==m.name&&(b=o)})},e.prototype.createDropBox=function(t,e,o){this.empty++;var n=cc.instantiate(t);n.name=e,o.addChild(n)},e.prototype.onMatch=function(){var t=this;if(this.node.emit("correct"),--this.empty<=0){this.answerBox.getChildByName("layout").active=!1,this.answerBox.getChildByName("label").getComponent(cc.Label).string=this.answer;var e=this.answerBox.getComponent(cc.Animation);e.on("finished",function(){var e=t.answerBox.getChildByName("particlesystem");if(null!=e){var o=e.getComponent(cc.ParticleSystem);o.resetSystem(),t.scheduleOnce(function(){o.stopSystem(),t.node.emit("nextProblem")},3)}}),e.play()}},i([h(cc.Prefab)],e.prototype,"singleCard",void 0),i([h(cc.Prefab)],e.prototype,"singleDrop",void 0),i([h(cc.Prefab)],e.prototype,"longCard",void 0),i([h(cc.Prefab)],e.prototype,"longDrop",void 0),i([h(cc.Prefab)],e.prototype,"box",void 0),i([h(cc.Node)],e.prototype,"choices",void 0),i([h(cc.Node)],e.prototype,"boxes",void 0),i([h(cc.AudioClip)],e.prototype,"dropClip",void 0),i([p.default()],e.prototype,"onLoad",null),i([p.default()],e.prototype,"onMatch",null),i([f],e)}(u.default);o.default=m,cc._RF.pop()},{"../../../common/scripts/drag":void 0,"../../../common/scripts/game":void 0,"../../../common/scripts/lib/config":void 0,"../../../common/scripts/lib/error-handler":void 0,"../../../common/scripts/util":void 0,"./missingnumberdrag":"missingnumberdrag"}]},{},["missingnumberdrag","missingnumberdrop","sequencebox"]);