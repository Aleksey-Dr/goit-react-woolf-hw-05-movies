"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[730],{115:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(433),a=e(439),u=e(791),c=e(689),i=e(694),s=e.n(i),o=e(290),p=e(714),f=e.p+"static/media/avatar.961568814dceb733c85a.png",l=e(184),d=function(){var t=(0,c.UO)().movieId,n=(0,u.useState)(!1),e=(0,a.Z)(n,2),i=e[0],d=e[1],h=(0,u.useState)([]),g=(0,a.Z)(h,2),v=g[0],y=g[1],m=(0,u.useState)(!1),w=(0,a.Z)(m,2)[1];return(0,u.useEffect)((function(){try{d(!0),(0,p.y)(t).then((function(t){0===t.length||y((function(){return(0,r.Z)(t)})),d(!1)}))}catch(n){w(!0),d(!1),s().Notify.failure("Oops... Something went wrong please try again!")}}),[t]),(0,l.jsxs)("div",{children:[i&&(0,l.jsx)(o.Z,{}),(0,l.jsx)("h3",{children:"Cast"}),v.length>0?(0,l.jsx)("ul",{children:v.map((function(t){var n=t.name,e=t.id,r=t.profile_path,a=t.character;return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w200/".concat(r):f,alt:n,width:"200"}),(0,l.jsx)("p",{children:n}),(0,l.jsxs)("p",{children:["Character: ",a]})]},e)}))}):"Sorry no information"]})}},290:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(154),a=e(184),u=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",color:"#3f51b5",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{margin:"auto"},visible:!0})}},714:function(t,n,e){e.d(n,{Bt:function(){return d},Vn:function(){return f},on:function(){return y},vw:function(){return o},y:function(){return g}});var r=e(861),a=e(757),u=e.n(a),c=e(294),i="https://api.themoviedb.org/3/",s="ae38d5c8baf36c9c4ca14e9456f3c0fd";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(){var n,e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"trending/movie/day",n="?api_key=".concat(s),e=i+"trending/movie/day"+n,t.next=5,c.Z.get(e);case 5:return r=t.sent,t.next=8,r.data.results;case 8:return a=t.sent,t.abrupt("return",a);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){var e,r,a,o,p;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="movie/".concat(n),r="?api_key=".concat(s),"&language=en-US",a=i+e+r+"&language=en-US",t.next=6,c.Z.get(a);case 6:return o=t.sent,t.next=9,o.data;case 9:return p=t.sent,t.abrupt("return",p);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n){var e,r,a,o,p;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="movie/".concat(n,"/reviews"),r="?api_key=".concat(s),"&language=en-US",a=i+e+r+"&language=en-US",t.next=6,c.Z.get(a);case 6:return o=t.sent,t.next=9,o.data.results;case 9:return p=t.sent,t.abrupt("return",p);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e,r,a,o,p;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="movie/".concat(n,"/credits"),r="?api_key=".concat(s),a=i+e+r,t.next=5,c.Z.get(a);case 5:return o=t.sent,t.next=8,o.data.cast;case 8:return p=t.sent,t.abrupt("return",p);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(n){var e,r,a,o,p;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="search/movie?query=".concat(n),r="&api_key=".concat(s),"&include_adult=false&language=en-US&page=1",a=i+e+r+"&include_adult=false&language=en-US&page=1",t.next=6,c.Z.get(a);case 6:return o=t.sent,t.next=9,o.data.results;case 9:return p=t.sent,t.abrupt("return",p);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=730.fd7d7303.chunk.js.map