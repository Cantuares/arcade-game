!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=2,this.y=5,this.sprite="images/char-boy.png",this.star=!1,this.dead=!1,this.score=0}var e,n,o;return e=t,(n=[{key:"update",value:function(t){}},{key:"render",value:function(){ctx.drawImage(Resources.get(this.sprite),101*this.x,83*this.y-15,101,171),this.drawScore()}},{key:"drawScore",value:function(){ctx.beginPath(),ctx.font="30px Arial",ctx.fillText("".concat(this.score," PTS"),0,35),ctx.closePath()}},{key:"handleInput",value:function(t){"up"==t?this.y-1<0?this.y=0:this.y--:this.y,"down"==t?this.y+1>5?this.y=5:this.y++:this.y,"left"==t?this.x-1<0?this.x=0:this.x--:this.x,"right"==t?this.x+1>4?this.x=4:this.x++:this.x}}])&&i(e.prototype,n),o&&i(e,o),t}();e.default=o},function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.positions={x:[1,2,3,4],y:[1,2,3]},this.x=this.getRandomPosition("x"),this.y=this.getRandomPosition("y"),this.sprite="images/Star.png",this.showStar=!0}var e,n,o;return e=t,(n=[{key:"render",value:function(){ctx.drawImage(Resources.get(this.sprite),101*this.x,83*this.y-15,101,171)}},{key:"getRandomPosition",value:function(t){return this.positions[t][Math.floor(Math.random()*this.positions[t].length)]}},{key:"newStarRandomPosition",value:function(){this.x=this.getRandomPosition("x"),this.y=this.getRandomPosition("y")}}])&&i(e.prototype,n),o&&i(e,o),t}();e.default=o},function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.positions=[1,2,3],this.x=-110,this.y=this.positions[Math.floor(Math.random()*this.positions.length)],this.speed=Math.floor(150*Math.random()+250),this.sprite="images/enemy-bug.png"}var e,n,o;return e=t,(n=[{key:"update",value:function(t){this.x=this.x+t*this.speed,this.x>=ctx.canvas.width&&(this.x=-110,this.y=this.positions[Math.floor(Math.random()*this.positions.length)])}},{key:"render",value:function(){ctx.drawImage(Resources.get(this.sprite),this.x,83*this.y-25,101,171)}}])&&i(e.prototype,n),o&&i(e,o),t}();e.default=o},function(t,e,n){"use strict";var i,o=a(n(2)),s=a(n(1)),r=a(n(0));function a(t){return t&&t.__esModule?t:{default:t}}document.addEventListener("keyup",function(t){player.handleInput({37:"left",38:"up",39:"right",40:"down"}[t.keyCode])}),(i=window).player=new r.default,i.allEnemies=[new o.default,new o.default,new o.default,new o.default],i.star=new s.default}]);