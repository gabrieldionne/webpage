(function(e){function t(t){for(var c,i,a=t[0],u=t[1],s=t[2],d=0,b=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={index:0},o=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d1c":function(e,t,n){},"32be":function(e,t,n){},"387e":function(e,t,n){e.exports=n.p+"img/github.c7a9e2b1.svg"},"449b":function(e,t,n){"use strict";n("a159")},"4f2a":function(e,t,n){"use strict";n("bcea")},"55dd":function(e,t,n){"use strict";n("dc35")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,o,i){var a=Object(c["l"])("About"),u=Object(c["l"])("projects");return Object(c["g"])(),Object(c["d"])(c["a"],null,[Object(c["f"])(a,{msg:"Gabriel Dionne"}),Object(c["f"])(u,{projects:o.storedProjects},null,8,["projects"])],64)}var o=Object(c["e"])("p",null,"I am computer science",-1);function i(e,t,n,r,i,a){var u=Object(c["l"])("socials");return Object(c["g"])(),Object(c["d"])(c["a"],null,[Object(c["e"])("h1",null,Object(c["m"])(n.msg),1),o,Object(c["f"])(u)],64)}var a=n("953d"),u=n.n(a),s=n("9055"),l=n.n(s),d=n("387e"),b=n.n(d),p=function(e){return Object(c["i"])("data-v-28b41c59"),e=e(),Object(c["h"])(),e},f={class:"socials"},j=p((function(){return Object(c["e"])("a",{href:"https://ca.linkedin.com/in/gdionne"},[Object(c["e"])("img",{class:"icons",id:"linkedin_icon",src:u.a,alt:"Linkedin Gabriel Dionne"})],-1)})),O=p((function(){return Object(c["e"])("a",{href:"mailto:gabdio02@hotmail.com"},[Object(c["e"])("img",{class:"icons",id:"github_icon",src:l.a,alt:"E-mail Gabriel Dionne"})],-1)})),v=p((function(){return Object(c["e"])("a",{href:"https://github.com/gabrieldionne"},[Object(c["e"])("img",{class:"icons",id:"github_icon",src:b.a,alt:"GitHub Gabriel Dionne"})],-1)})),g=[j,O,v];function m(e,t,n,r,o,i){return Object(c["g"])(),Object(c["d"])("div",f,g)}var h={name:"Socials"},y=(n("449b"),n("6b0d")),_=n.n(y);const P=_()(h,[["render",m],["__scopeId","data-v-28b41c59"]]);var w=P,x={components:{Socials:w},props:{msg:String}};const k=_()(x,[["render",i]]);var S=k;n("a4d3"),n("e01a");function I(e,t,n,r,o,i){var a=Object(c["l"])("project-item");return Object(c["g"])(),Object(c["d"])("ul",null,[(Object(c["g"])(!0),Object(c["d"])(c["a"],null,Object(c["j"])(n.projects,(function(e){return Object(c["g"])(),Object(c["c"])(a,{key:e.id,title:e.title,description:e.description},null,8,["title","description"])})),128))])}function G(e,t,n,r,o,i){var a=Object(c["l"])("base-card");return Object(c["g"])(),Object(c["d"])("li",null,[Object(c["f"])(a,null,{default:Object(c["n"])((function(){return[Object(c["e"])("header",null,[Object(c["e"])("h3",null,Object(c["m"])(n.title),1)]),Object(c["e"])("p",null,Object(c["m"])(n.description),1)]})),_:1})])}var D={props:["title","description"]};n("4f2a");const M=_()(D,[["render",G],["__scopeId","data-v-efad918e"]]);var A=M,J={props:["projects"],components:{ProjectItem:A}};n("8d0f");const T=_()(J,[["render",I],["__scopeId","data-v-485d06c3"]]);var E=T,H={name:"App",components:{About:S,Projects:E},data:function(){return{storedProjects:[{id:"project1",title:"testproject1",description:"first project"},{id:"project2",title:"testproject2",description:"second project"}]}}};n("55dd");const L=_()(H,[["render",r]]);var $=L;function q(e,t){return Object(c["g"])(),Object(c["d"])("div",null,[Object(c["k"])(e.$slots,"default",{},void 0,!0)])}n("67f1");const z={},B=_()(z,[["render",q],["__scopeId","data-v-af38052e"]]);var C=B,F=Object(c["b"])($);F.component("base-card",C),F.mount("#app")},"67f1":function(e,t,n){"use strict";n("32be")},"8d0f":function(e,t,n){"use strict";n("1d1c")},9055:function(e,t,n){e.exports=n.p+"img/email.bceba75c.svg"},"953d":function(e,t,n){e.exports=n.p+"img/linkedin.406464ed.svg"},a159:function(e,t,n){},bcea:function(e,t,n){},dc35:function(e,t,n){}});
//# sourceMappingURL=index.6160e83f.js.map