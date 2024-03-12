"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[859],{290:function(n,t,e){e.d(t,{Z:function(){return u}});var r=e(154),a=e(184),u=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",color:"#3f51b5",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{margin:"auto"},visible:!0})}},304:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(689),a=e(87),u=e(184),c=function(n){var t=n.id,e=n.title,c=(0,r.TH)();return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies"===c.pathname?"".concat(t):"movies/".concat(t),state:{from:c},children:e})})}},859:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(433),a=e(439),u=e(791),c=e(694),i=e.n(c),o=e(290),s=e(304),f=e(714),p=e(184),l=function(){var n=(0,u.useState)(!1),t=(0,a.Z)(n,2),e=t[0],c=t[1],l=(0,u.useState)([]),d=(0,a.Z)(l,2),h=d[0],g=d[1],v=(0,u.useState)(!1),y=(0,a.Z)(v,2),w=y[0],x=y[1];return(0,u.useEffect)((function(){try{c(!0),(0,f.vw)().then((function(n){0===n.length?(i().Notify.warning("Nothing found for your request"),c(!1)):(g((function(){return(0,r.Z)(n)})),c(!1))}))}catch(n){x(!0),c(!1),i().Notify.failure("Oops... Something went wrong please try again!"),console.log(w)}}),[w]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Trending today"}),e&&(0,p.jsx)(o.Z,{}),(0,p.jsx)("ul",{children:h&&h.map((function(n){var t=n.id,e=n.title;return(0,p.jsx)(s.Z,{id:t,title:e},t)}))})]})}},714:function(n,t,e){e.d(t,{Bt:function(){return d},Vn:function(){return p},on:function(){return y},vw:function(){return s},y:function(){return g}});var r=e(861),a=e(757),u=e.n(a),c=e(294),i="https://api.themoviedb.org/3/",o="ae38d5c8baf36c9c4ca14e9456f3c0fd";function s(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(){var t,e,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/movie/day",t="?api_key=".concat(o),e=i+"trending/movie/day"+t,n.next=5,c.Z.get(e);case 5:return r=n.sent,n.next=8,r.data.results;case 8:return a=n.sent,n.abrupt("return",a);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(t){var e,r,a,s,f;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t),r="?api_key=".concat(o),"&language=en-US",a=i+e+r+"&language=en-US",n.next=6,c.Z.get(a);case 6:return s=n.sent,n.next=9,s.data;case 9:return f=n.sent,n.abrupt("return",f);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function n(t){var e,r,a,s,f;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/reviews"),r="?api_key=".concat(o),"&language=en-US",a=i+e+r+"&language=en-US",n.next=6,c.Z.get(a);case 6:return s=n.sent,n.next=9,s.data.results;case 9:return f=n.sent,n.abrupt("return",f);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t){var e,r,a,s,f;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/credits"),r="?api_key=".concat(o),a=i+e+r,n.next=5,c.Z.get(a);case 5:return s=n.sent,n.next=8,s.data.cast;case 8:return f=n.sent,n.abrupt("return",f);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(u().mark((function n(t){var e,r,a,s,f;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="search/movie?query=".concat(t),r="&api_key=".concat(o),"&include_adult=false&language=en-US&page=1",a=i+e+r+"&include_adult=false&language=en-US&page=1",n.next=6,c.Z.get(a);case 6:return s=n.sent,n.next=9,s.data.results;case 9:return f=n.sent,n.abrupt("return",f);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=859.a838f76a.chunk.js.map