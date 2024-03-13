window.__require=function t(e,o,r){function i(a,s){if(!o[a]){if(!e[a]){var c=a.split("/");if(c=c[c.length-1],!e[c]){var u="function"==typeof __require&&__require;if(!s&&u)return u(c,!0);if(n)return n(c,!0);throw new Error("Cannot find module '"+a+"'")}a=c}var l=o[a]={exports:{}};e[a][0].call(l.exports,function(t){return i(e[a][1][t]||t)},l,l.exports,t,e,o,r)}return o[a].exports}for(var n="function"==typeof __require&&__require,a=0;a<r.length;a++)i(r[a]);return i}({"option-script":[function(t,e,o){"use strict";cc._RF.push(e,"fb2a7oTrVlEz7JWrmmIbWHj","option-script");var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),n=this&&this.__decorate||function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=cc._decorator.ccclass,s=t("./questionboard"),c=t("../../../common/scripts/lib/error-handler"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._text=null,e._correctAnswer=null,e}return i(e,t),e.prototype.onButtonClick=function(){if(this._text===this._correctAnswer)this.node.dispatchEvent(new cc.Event.EventCustom(s.CORRECT_ANSWER,!0));else{var t=new cc.Event.EventCustom(s.WRONG_ANSWER,!0);t.setUserData({node:this.node}),this.node.dispatchEvent(t)}},e.prototype.onLoad=function(){this.node.getComponent(cc.Button).interactable=!1},Object.defineProperty(e.prototype,"correctAnswer",{set:function(t){this._correctAnswer=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{set:function(t){this._text=t},enumerable:!1,configurable:!0}),n([c.catchError()],e.prototype,"onLoad",null),n([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{"../../../common/scripts/lib/error-handler":void 0,"./questionboard":"questionboard"}],questionboard:[function(t,e,o){"use strict";cc._RF.push(e,"40970aonR9HOIRy321YWN8O","questionboard");var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),n=this&&this.__decorate||function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},a=this&&this.__spreadArrays||function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<o;e++)for(var n=arguments[e],a=0,s=n.length;a<s;a++,i++)r[i]=n[a];return r};Object.defineProperty(o,"__esModule",{value:!0}),o.SEQUENCE_TYPE_EQUATION=o.SEQUENCE_TYPE_INCLUSION=o.SEQUENCE_TYPE_COMPARISION=o.SEQUENCE_TYPE_MULTIPLY=o.SEQUENCE_TYPE_SUBTRACTION=o.SEQUENCE_TYPE_ADDITION=o.SEQUENCE_TYPE_NONE=o.DISABLE_BUTTONS=o.ENABLE_BUTTONS=o.WRONG_ANSWER=o.CORRECT_ANSWER=void 0;var s=cc._decorator.ccclass,c=cc._decorator.property,u=cc.Vec2,l=t("../../../common/scripts/countingLayout"),p=t("../../../common/scripts/game"),h=t("../../../common/scripts/lib/config"),d=t("../../../common/scripts/lib/error-handler"),f=t("../../../common/scripts/util"),_=t("./option-script"),y=t("../../../common/scripts/lib/profile"),m=t("../../../common/scripts/lib/constants"),E=t("../../../common/scripts/chimple-richtext");o.CORRECT_ANSWER="CORRECT_ANSWER",o.WRONG_ANSWER="WRONG_ANSWER",o.ENABLE_BUTTONS="ENABLE_BUTTONS",o.DISABLE_BUTTONS="DISABLE_BUTTONS",o.SEQUENCE_TYPE_NONE="0",o.SEQUENCE_TYPE_ADDITION="1",o.SEQUENCE_TYPE_SUBTRACTION="2",o.SEQUENCE_TYPE_MULTIPLY="3",o.SEQUENCE_TYPE_COMPARISION="4",o.SEQUENCE_TYPE_INCLUSION="5",o.SEQUENCE_TYPE_EQUATION="6";var g=function(){},b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._currentConfig=null,e.questionLayoutPrefab=null,e.answerLayoutPrefab=null,e.whiteCardPrefab=null,e.yellowCardPrefab=null,e.greenCardPrefab=null,e.plusSignPrefab=null,e.minusSignPrefab=null,e.questionSignPrefab=null,e.countingLayout=null,e.equalSignPrefab=null,e.answerEquationLayoutPrefab=null,e.hLayoutPrefab=null,e.shadowLayoutPrefab=null,e.optionsLayoutPrefab=null,e.equationTextPrefab=null,e.optionPrefab=null,e.takeClip=null,e.putClip=null,e.fruit1Texture=null,e.fruit2Texture=null,e._equations=null,e._options=null,e._question=null,e._answer=null,e._fruitTextures=[],e._optionNodes=[],e._correctAnswer=null,e._equationFormula=null,e._textures=[],e._wasAnsweredCorrectly=!1,e._fruitNodes=[],e._registeredForReAsk=!1,e._fruits=["acorn","apple","cherry"],e._helpMode=!1,e._helpNode=null,e._correctAnswered=!1,e}return i(e,t),e.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0,this._currentConfig=this.processConfiguration(h.default.getInstance().data[0]),this._equationFormula=this.createFormula(),this._fruitTextures.push(this.fruit1Texture,this.fruit2Texture),this._options=cc.instantiate(this.optionsLayoutPrefab),this._question=cc.instantiate(this.questionLayoutPrefab),this._answer=cc.instantiate(this.answerLayoutPrefab),this._equations=cc.instantiate(this.answerEquationLayoutPrefab),this.node.addChild(this._answer),this.createQuestion(this._currentConfig.problemSentence),this.node.addChild(this._question),this.node.addChild(this._equations),this._answer.opacity=0,this._answer.setPosition(new cc.Vec2(0,120)),this._question.setPosition(new cc.Vec2(0,110)),this._options.setPosition(new cc.Vec2(0,-235)),this.node.addChild(this._options),this.friendPos.removeFromParent(),this.node.addChild(this.friendPos),this.subscribeToEvents(),this._helpMode=!0,this.createOptions(),this.configureSound(),this.enableButtons()},e.prototype.createFormula=function(){var t=new g,e=this._currentConfig.rightFormula.indexOf("="),o=this._currentConfig.rightFormula.indexOf("+"),r=this._currentConfig.rightFormula.indexOf("-"),i=this._currentConfig.rightFormula.indexOf("X"),n=e<o||e<r||e<i,a=-1!==this._currentConfig.rightFormula.lastIndexOf("+"),s=-1!==this._currentConfig.rightFormula.lastIndexOf("-"),c=-1!==this._currentConfig.rightFormula.lastIndexOf("X"),u=this._currentConfig.rightFormula.split(/\+ | - | X | =/)||[];return null!==u&&3===u.length&&(t.sign="=",n?(t.resultBold=u[0].trim().startsWith("<"),t.result=u[0].trim().replace("<","").replace(">",""),t.operand1Bold=u[1].trim().startsWith("<"),t.operator=a?"+":s?"-":c?"X":"",t.operand1=u[1].trim().replace("<","").replace(">",""),t.operand2Bold=u[2].trim().startsWith("<"),t.operand2=u[2].trim().replace("<","").replace(">","")):(t.operand1Bold=u[0].trim().startsWith("<"),t.operand1=u[0].trim().replace("<","").replace(">",""),t.operand2Bold=u[1].trim().startsWith("<"),t.operator=a?"+":s?"-":c?"X":"",t.operand2=u[1].trim().replace("<","").replace(">",""),t.resultBold=u[2].trim().startsWith("<"),t.result=u[2].trim().replace("<","").replace(">",""))),t},e.prototype.configureSound=function(){var t=this,e=y.default.lang||h.Lang.ENGLISH;console.log("url ",m.ASSET_URL+"/"+e+"-help-remote/questionboard/"+this._currentConfig.voiceSource),cc.assetManager.loadRemote(m.ASSET_URL+"/"+e+"-help-remote/questionboard/"+this._currentConfig.voiceSource,function(e,o){o&&!e&&(t.friend.extraClip=o)})},e.prototype.createOptions=function(){for(var t=1;t<=4;t++)this._currentConfig.rightAnswer===String(t)&&(this._correctAnswer=this._currentConfig["exampleNumber"+t]),this.createOption(this._currentConfig["exampleNumber"+t],this._currentConfig["exampleWord"+t],this._currentConfig.rightAnswer===String(t))},e.prototype.createQuestion=function(t){var e=this._question.getChildByName("questionText").getComponent(cc.Label);e.enableWrapText=!0,e.string=t},e.prototype.subscribeToEvents=function(){var t=this;this.node.on(o.CORRECT_ANSWER,function(e){t._correctAnswered||(e.stopPropagation(),t._wasAnsweredCorrectly=!0,t.node.emit("correct"),t._options.opacity=0,t._equations.opacity=255,t.showBox(!1),t.showEquationFormula(),t._correctAnswered=!0)}),this.node.on(o.WRONG_ANSWER,function(e){e.stopPropagation(),t._correctAnswered||(e.getUserData().node,t._wasAnsweredCorrectly=!1,t._equations.opacity=0,t._options.opacity=255,t.disableButtons(),t.node.emit("wrong"),t.showBox(!1),t.showEquationFormula())}),this.node.on(o.ENABLE_BUTTONS,function(e){e.stopPropagation(),t.enableButtons()}),this.node.on(o.DISABLE_BUTTONS,function(e){e.stopPropagation(),t.disableButtons()})},e.prototype.createCountingLayout=function(t,e){var o=cc.instantiate(this.countingLayout);o.width=o.height=125,o.setAnchorPoint(new u(.5,.5));var r=o.getComponent(l.default),i=r.getComponent(cc.Layout);return"-"===this._equationFormula.operator?this._equationFormula.operand1:this._equationFormula.result,i.cellSize=new cc.Size(31.25,31.25),i.resizeMode=cc.Layout.ResizeMode.CHILDREN,r.fullCount=parseInt(e),r.scale=.8,r.fullTexture=this._fruitTextures[0],t.addChild(o),o},e.prototype.showEquation=function(){var t=this,e=this.createLayout(960);e.paddingTop=75,e.paddingBottom=75,e.cellSize=new cc.Size(150,150);var o=cc.instantiate(this.whiteCardPrefab);o.name="operand1",this.createCountingLayout(o,this._equationFormula.operand1),this.addEquationToLayout(e,o);var r=cc.instantiate(this.greenCardPrefab),i="-"===this._equationFormula.operator?cc.instantiate(this.minusSignPrefab):"+"===this._equationFormula.operator?cc.instantiate(this.plusSignPrefab):null;r.addChild(i),this.addEquationToLayout(e,r);var n=cc.instantiate(this.yellowCardPrefab),a=cc.instantiate(this.questionSignPrefab);n.addChild(a);var s=this.createCountingLayout(n,this._equationFormula.operand2);s.active=!1,this.addEquationToLayout(e,n);var c=cc.instantiate(this.greenCardPrefab);c.addChild(cc.instantiate(this.equalSignPrefab)),this.addEquationToLayout(e,c);var u=cc.instantiate(this.whiteCardPrefab);this.createCountingLayout(u,this._equationFormula.result),this.addEquationToLayout(e,u),this.showFruits(this._fruitNodes,!1,function(){t.scheduleOnce(function(){a.active=!1,s.active=!0},.25)}),this.registerForReAskCall()},e.prototype.addEquationToLayout=function(t,e){t.node.addChild(e),this._fruitNodes.push(e),e.active=!1},e.prototype.showSubtraction=function(){var t=this,e=this.createLayout(960);this.createFruits(e.node,Number(this._equationFormula.operand1),0,!0),this.showFruits(this._fruitNodes,!1,function(){t.removeFruits(e.node,Number(t._equationFormula.operand2))},3),this.registerForReAskSubstractionCall()},e.prototype.removeFruits=function(t,e){var o=this,r=0;this.schedule(function(){var t=o._fruitNodes[o._fruitNodes.length-1-r];if(t){try{o.takeClip&&f.Util.play(o.takeClip,!1)}catch(i){}r++,t.getChildByName("top").active=!1,t.getChildByName("shadow")&&(t.getChildByName("shadow").active=!0),r===e&&o.scheduleOnce(function(){o.node.emit("REMOVE_FRUITS_COMPLETED")},1)}},1,e-1)},e.prototype.createLayout=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0);var o=cc.instantiate(this.hLayoutPrefab);return this._answer.addChild(o),t>0&&(o.width=t),e>0&&(o.height=e),o.getComponent(cc.Layout)},e.prototype.showAddition=function(){var t=this.createLayout(960);this.createFruits(t.node,Number(this._equationFormula.operand1),Number(this._equationFormula.operand2)),this.showFruits(),this.registerForReAskCall()},e.prototype.registerForReAskCall=function(){var t=this;this._registeredForReAsk||(this._registeredForReAsk=!0,this.node.on("SHOW_FRUIT_COMPLETED",function(){t.reAsk()}))},e.prototype.registerForReAskSubstractionCall=function(){var t=this;this._registeredForReAsk||(this._registeredForReAsk=!0,this.node.on("REMOVE_FRUITS_COMPLETED",function(){t.reAsk()},3))},e.prototype.showInclusion=function(){var t=this.createLayout(960);this.createFruits(t.node,Number(this._equationFormula.operand1),Number(this._equationFormula.operand2),!0),this.showFruits(this._fruitNodes,!0),this.registerForReAskCall()},e.prototype.createFruits=function(t,e,o,r){void 0===o&&(o=0),void 0===r&&(r=!1);for(var i=0;i<e;i++)this._fruitNodes.push(this.createFruit(t,0,r));for(i=0;i<o;i++)this._fruitNodes.push(this.createFruit(t,1,r))},e.prototype.createFruitsForMultiplication=function(t,e,o,r){void 0===o&&(o=0),void 0===r&&(r=!1);for(var i=0;i<e;i++)for(var n=0;n<o;n++)this._fruitNodes.push(this.createFruit(t,0,r))},e.prototype.showFruits=function(t,e,o,r){void 0===t&&(t=this._fruitNodes),void 0===e&&(e=!1),void 0===o&&(o=null),void 0===r&&(r=2),e&&t.forEach(function(t){var o=t.getChildByName("shadow");e&&null!=o&&(t.getChildByName("shadow").zIndex=e?2:1,t.getChildByName("top").zIndex=e?1:2,t.active=!0)}),this.iterateAndShowNodesWithScheduler(t,e,o,r)},e.prototype.iterateAndShowNodesWithScheduler=function(t,e,o,r){var i=this;void 0===r&&(r=2);var n=0;this.unscheduleAllCallbacks(),this.schedule(function(){var a=t[n];if(a){try{i.putClip&&f.Util.play(i.putClip,!1)}catch(c){}n++,a.active=!0;var s=a.getChildByName("shadow");e&&null!=s&&(s.active=!1)}t.length===n&&(o&&o.apply(i),-1!==r&&i.scheduleOnce(function(){i.node.emit("SHOW_FRUIT_COMPLETED")},r))},1,t.length-1)},e.prototype.iterateAndShowNodes=function(t,e,o){var r=this;void 0===o&&(o=2),t.forEach(function(i,n){(new cc.Tween).target(i).to(1+.25*n,{opacity:255},{progress:null,easing:"quadOut"}).call(function(){try{i.active=!0;var a=i.getChildByName("shadow");e&&null!=a&&(a.active=!1);try{r.putClip&&f.Util.play(r.putClip,!1)}catch(s){}}catch(s){}console.log("index",n,"array.length - 1",t.length-1),t.length-1===n&&r.scheduleOnce(function(){r.node.emit("SHOW_FRUIT_COMPLETED")},o)}).start()})},e.prototype.clear=function(){this._answer.removeAllChildren(!0),this._fruitNodes.forEach(function(t){return t.removeFromParent(!0)}),this._equations.removeAllChildren(!0),this._fruitNodes=[]},e.prototype.reAsk=function(){this.clear(),this._wasAnsweredCorrectly?this.node.emit("nextProblem"):(this.showBox(!0),this.enableButtons())},e.prototype.createFruit=function(t,e,o){void 0===o&&(o=!1);var r=new cc.Node,i=new cc.Node;if(i.name="top",i.addComponent(cc.Sprite).spriteFrame=this._fruitTextures[e],i.scale=.75,o){var n=cc.instantiate(this.shadowLayoutPrefab);n.name="shadow";var a=n.getComponent(cc.Sprite);n.scale=.75,a.spriteFrame=this._fruitTextures[e],r.addChild(n)}return r.addChild(i),r.width=i.width,r.height=i.height,r.active=!1,t.addChild(r),r},e.prototype.showEquationFormula=function(){switch(this.buildEquation(this._equationFormula.operand1,this._equationFormula.operand1Bold),this.buildEquation(this._equationFormula.operator),this.buildEquation(this._equationFormula.operand2,this._equationFormula.operand2Bold),this.buildEquation(this._equationFormula.sign),this.buildEquation(this._equationFormula.result,this._equationFormula.resultBold),this._equationFormula.operator){case"+":this._currentConfig.sequenceType===o.SEQUENCE_TYPE_ADDITION?this.showAddition():this._currentConfig.sequenceType===o.SEQUENCE_TYPE_INCLUSION?this.showInclusion():this._currentConfig.sequenceType===o.SEQUENCE_TYPE_COMPARISION?this.showComparision():this._currentConfig.sequenceType===o.SEQUENCE_TYPE_EQUATION&&this.showEquation();break;case"-":this._currentConfig.sequenceType===o.SEQUENCE_TYPE_SUBTRACTION?this.showSubtraction():this._currentConfig.sequenceType===o.SEQUENCE_TYPE_COMPARISION?this.showComparision():this._currentConfig.sequenceType===o.SEQUENCE_TYPE_EQUATION&&this.showEquation();break;case"X":this._currentConfig.sequenceType===o.SEQUENCE_TYPE_MULTIPLY&&this.showMultiplication()}},e.prototype.showComparision=function(){var t=this,e=this.createLayout(960,150),o=this.createLayout(960,150);e.node.setPosition(new cc.Vec2(e.node.x,e.node.y+this._answer.height/4)),o.node.setPosition(new cc.Vec2(o.node.x,o.node.y-this._answer.height/4));var r=Number(this._equationFormula.operand1),i=Number(this._equationFormula.operand2);this.createFruits(e.node,r,0),this.createFruits(o.node,0,i);for(var n=[],a=0;a<r;a++)n.push(this._fruitNodes[a]);var s=[];for(a=r;a<r+i;a++)s.push(this._fruitNodes[a]);this.showFruits(n,!1,function(){t.showFruits(s,!1,function(){t.registerForReAskCall()})},-1)},e.prototype.showMultiplication=function(){var t=this.createLayout(96*(1+Number(this._equationFormula.operand2)));this.createFruitsForMultiplication(t.node,Number(this._equationFormula.operand1),Number(this._equationFormula.operand2),!1),this.showFruitsForMultiplication(Number(this._equationFormula.operand2)),this.registerForReAskCall()},e.prototype.showFruitsForMultiplication=function(t,e){var o=this;void 0===e&&(e=2);var r=0,i=a(this._fruitNodes);this.schedule(function(){for(var n=[],a=0;a<t;a++)n.push(i.pop());if(n&&n.length>0){try{o.putClip&&f.Util.play(o.putClip,!1)}catch(s){}n.forEach(function(t){t&&(t.active=!0)}),r+=t}o._fruitNodes.length===r&&o.scheduleOnce(function(){o.node.emit("SHOW_FRUIT_COMPLETED")},e)},1,this._fruitNodes.length/t-1)},e.prototype.buildEquation=function(t,e){void 0===e&&(e=!1);var o=cc.instantiate(this.equationTextPrefab);o.setPosition(new cc.Vec2(o.x,o.y+30));var r=o.getComponent(E.default);r.string=e?"<color=#FFFFFFF><bold>"+t+"</bold></color>":"<color=#FFFFFFF>"+t+"</color>",r.fontSize=80,this._equations.getComponent(cc.Layout).node.addChild(r.node)},e.prototype.showBox=function(t){var e=this;(new cc.Tween).target(t?this._answer:this._question).to(.25,{opacity:255},{progress:null,easing:"quadOut"}).to(.15,{scaleX:0},{progress:null,easing:"quadOut"}).call(function(){(new cc.Tween).target(t?e._question:e._answer).to(.25,{opacity:255},{progress:null,easing:"quadOut"}).to(.15,{scaleX:1},{progress:null,easing:"quadOut"}).start()}).start()},e.prototype.enableButtons=function(){var t=this;this._optionNodes.forEach(function(t){t.getComponent(cc.Button).interactable=!0}),this.scheduleOnce(function(){t._helpMode=!1,f.Util.showHelp(t._helpNode,t._helpNode)},.5)},e.prototype.disableButtons=function(){this._optionNodes.forEach(function(t){t.getComponent(cc.Button).interactable=!1})},e.prototype.createOption=function(t,e,o){void 0===o&&(o=!1);var r=cc.instantiate(this.optionPrefab),i=r.getChildByName("Background"),n=r.getComponent(_.default);n.correctAnswer=this._correctAnswer,r.getComponent(cc.Button).interactable=!1;var a=i.getChildByName("exampleNumber"),s=i.getChildByName("exampleWord");a.getComponent(cc.Label).string=t,n.text=t,r.name=""+t,s.getComponent(cc.Label).string=e,this._options.addChild(r),this._optionNodes.push(r),this._helpMode&&o&&(this._helpNode=r)},e.prototype.processConfiguration=function(t){void 0===t&&(t=[]);var e=[].concat.apply([],t);return{level:e[0],workSheet:e[1],problemNo:e[2],sequenceType:e[3],voiceSource:e[4],problemSentence:e[5],exampleNumber1:e[6],exampleNumber2:e[7],exampleNumber3:e[8],exampleNumber4:e[9],exampleWord1:e[10],exampleWord2:e[11],exampleWord3:e[12],exampleWord4:e[13],rightFormula:e[14],rightAnswer:e[15],objectValueA:e[16],objectValueB:e[17],objectValueC:e[18],objectValueD:e[19],equationValueA:e[20],equationValueB:e[21],equationSign:e[22],equationUnknown:e[23]}},e.prototype.onDestroy=function(){cc.audioEngine.stopAllEffects()},n([c(cc.Prefab)],e.prototype,"questionLayoutPrefab",void 0),n([c(cc.Prefab)],e.prototype,"answerLayoutPrefab",void 0),n([c(cc.Prefab)],e.prototype,"whiteCardPrefab",void 0),n([c(cc.Prefab)],e.prototype,"yellowCardPrefab",void 0),n([c(cc.Prefab)],e.prototype,"greenCardPrefab",void 0),n([c(cc.Prefab)],e.prototype,"plusSignPrefab",void 0),n([c(cc.Prefab)],e.prototype,"minusSignPrefab",void 0),n([c(cc.Prefab)],e.prototype,"questionSignPrefab",void 0),n([c(cc.Prefab)],e.prototype,"countingLayout",void 0),n([c(cc.Prefab)],e.prototype,"equalSignPrefab",void 0),n([c(cc.Prefab)],e.prototype,"answerEquationLayoutPrefab",void 0),n([c(cc.Prefab)],e.prototype,"hLayoutPrefab",void 0),n([c(cc.Prefab)],e.prototype,"shadowLayoutPrefab",void 0),n([c(cc.Prefab)],e.prototype,"optionsLayoutPrefab",void 0),n([c(cc.Prefab)],e.prototype,"equationTextPrefab",void 0),n([c(cc.Prefab)],e.prototype,"optionPrefab",void 0),n([c(cc.AudioClip)],e.prototype,"takeClip",void 0),n([c(cc.AudioClip)],e.prototype,"putClip",void 0),n([c(cc.SpriteFrame)],e.prototype,"fruit1Texture",void 0),n([c(cc.SpriteFrame)],e.prototype,"fruit2Texture",void 0),n([d.catchError()],e.prototype,"onLoad",null),n([d.catchError()],e.prototype,"createFormula",null),n([d.catchError()],e.prototype,"configureSound",null),n([d.catchError()],e.prototype,"createOptions",null),n([d.catchError()],e.prototype,"createQuestion",null),n([d.catchError()],e.prototype,"subscribeToEvents",null),n([d.catchError()],e.prototype,"createCountingLayout",null),n([d.catchError()],e.prototype,"showEquation",null),n([d.catchError()],e.prototype,"addEquationToLayout",null),n([d.catchError()],e.prototype,"showSubtraction",null),n([d.catchError()],e.prototype,"removeFruits",null),n([d.catchError()],e.prototype,"createLayout",null),n([d.catchError()],e.prototype,"showAddition",null),n([d.catchError()],e.prototype,"registerForReAskCall",null),n([d.catchError()],e.prototype,"registerForReAskSubstractionCall",null),n([d.catchError()],e.prototype,"showInclusion",null),n([d.catchError()],e.prototype,"createFruits",null),n([d.catchError()],e.prototype,"createFruitsForMultiplication",null),n([d.catchError()],e.prototype,"showFruits",null),n([d.catchError()],e.prototype,"iterateAndShowNodesWithScheduler",null),n([d.catchError()],e.prototype,"clear",null),n([d.catchError()],e.prototype,"reAsk",null),n([d.catchError()],e.prototype,"createFruit",null),n([d.catchError()],e.prototype,"showEquationFormula",null),n([d.catchError()],e.prototype,"showComparision",null),n([d.catchError()],e.prototype,"showMultiplication",null),n([d.catchError()],e.prototype,"showFruitsForMultiplication",null),n([d.catchError()],e.prototype,"buildEquation",null),n([d.catchError()],e.prototype,"showBox",null),n([d.catchError()],e.prototype,"enableButtons",null),n([d.catchError()],e.prototype,"disableButtons",null),n([d.catchError()],e.prototype,"createOption",null),n([s],e)}(p.default);o.default=b,cc._RF.pop()},{"../../../common/scripts/chimple-richtext":void 0,"../../../common/scripts/countingLayout":void 0,"../../../common/scripts/game":void 0,"../../../common/scripts/lib/config":void 0,"../../../common/scripts/lib/constants":void 0,"../../../common/scripts/lib/error-handler":void 0,"../../../common/scripts/lib/profile":void 0,"../../../common/scripts/util":void 0,"./option-script":"option-script"}],"sound-button":[function(t,e,o){"use strict";cc._RF.push(e,"6475dW/WZdJO6x5522s86Ja","sound-button");var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),n=this&&this.__decorate||function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=cc._decorator.ccclass,s=t("../../../common/scripts/util"),c=t("./questionboard"),u=t("../../../common/scripts/lib/error-handler"),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._isSoundPlaying=!1,e._soundClip=null,e._normalSpriteFrame=null,e._pressedSpriteFrame=null,e}return i(e,t),e.prototype.onLoad=function(){var t=this.node.getComponent(cc.Button);this._normalSpriteFrame=t.normalSprite,this._pressedSpriteFrame=t.pressedSprite},e.prototype.playSound=function(t){var e=t.getComponent(cc.Button);this._isSoundPlaying||(this._isSoundPlaying=!0,e.normalSprite=this._pressedSpriteFrame,this._soundClip,s.Util.loadGameSound(""+this._soundClip,function(t){var o=this;if(null!=t){var r=s.Util.play(t,!1);-1!=r&&cc.audioEngine.setFinishCallback(r,function(){o._isSoundPlaying=!1,e.normalSprite=o._normalSpriteFrame,null!=o.node&&o.node.dispatchEvent(new cc.Event.EventCustom(c.ENABLE_BUTTONS,!0))})}}))},e.prototype.stopSound=function(){this._isSoundPlaying=!1,cc.audioEngine.stopAllEffects(),this.node.getComponent(cc.Button).normalSprite=this._normalSpriteFrame},e.prototype.soundOnLoad=function(){var t=this,e=this.node.getComponent(cc.Button);e.interactable=!1,setTimeout(function(){null!=t.node&&t.playSound(t.node),e.interactable=!0},7e3)},e.prototype.onButtonClick=function(t){var e=t.target;this.stopSound(),this.playSound(e)},Object.defineProperty(e.prototype,"soundClip",{set:function(t){this._soundClip=t},enumerable:!1,configurable:!0}),e.prototype.onDestroy=function(){cc.audioEngine.stopAllEffects(),cc.audioEngine.stopMusic()},n([u.catchError()],e.prototype,"onLoad",null),n([u.catchError()],e.prototype,"playSound",null),n([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{"../../../common/scripts/lib/error-handler":void 0,"../../../common/scripts/util":void 0,"./questionboard":"questionboard"}]},{},["option-script","questionboard","sound-button"]);