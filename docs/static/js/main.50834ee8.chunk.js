(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],{16:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(8),r=a.n(c),l=(a(16),a(1)),i=a(3),s=a(11),o=a(7),j=a.n(o),u=a(9),h=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,c=n.results,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=a(10),d=a.n(b),m=a(0),O=function(e){var t=e.handleSearch,a=e.handleFilter,c=Object(n.useState)(""),r=Object(i.a)(c,2),l=r[0],s=r[1],o=Object(n.useState)(0),j=Object(i.a)(o,2),u=j[0],h=j[1];return Object(m.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(m.jsxs)("form",{className:"form-inline",children:[Object(m.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",value:l,onChange:function(e){s(e.target.value),t(e.target.value)}}),Object(m.jsx)(d.a,{name:"rate1",starCount:5,value:u,onStarClick:function(e){h(e===u?0:e),a(e)}})]})})},v=function(e){var t=e.url,a=e.filter,c=e.handleSelectMovie,r=e.handleSearch,l=e.handleFilter,o=function(e){var t=Object(n.useState)({movies:[],error:null,loading:!0}),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){h(e).then((function(e){return r({movies:e,error:null,loading:!1})}))}),[e]),c}(t),j=o.movies,u=o.loading,b=[0,2,4,6,8,10],d=Object(s.a)(j);return a&&(d=j.filter((function(e){return e.vote_average<=b[a]&&e.vote_average>=b[a-1]}))),Object(m.jsxs)(m.Fragment,{children:[u?Object(m.jsx)("div",{className:"p-3 alert alert-info",children:"Loading..."}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{handleSearch:r,handleFilter:l}),Object(m.jsxs)("table",{className:"table table-dark mt-4",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Poster"}),Object(m.jsx)("th",{scope:"col",children:"Title"}),Object(m.jsx)("th",{scope:"col",children:"Rating"})]})}),Object(m.jsx)("tbody",{children:d.map((function(e){return Object(m.jsxs)("tr",{onClick:function(){return c(e)},children:[Object(m.jsx)("th",{scope:"row",children:Object(m.jsx)("img",{className:"thumb",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.original_title})}),Object(m.jsx)("td",{className:"align-middle",children:e.original_title}),Object(m.jsx)("td",{className:"align-middle",children:e.vote_average})]},e.id)}))})]})]}),!d.length&&!u&&Object(m.jsx)("div",{className:"p-3 alert alert-danger no-results",children:"No results found..."})]})},f=function(e){var t=e.movie,a=e.handleGoBack;return Object(m.jsxs)("div",{className:"movie-card text-center",children:[Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"button",className:"btn btn-primary float-right",onClick:a,children:"Go Back"})}),Object(m.jsx)("h2",{className:"mt-4",children:t.original_title}),Object(m.jsxs)("p",{children:["Rating: ",t.vote_average]}),Object(m.jsx)("img",{className:"poster",src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.original_title}),Object(m.jsx)("p",{className:"overview mt-4",children:t.overview})]})};a(23);var g=function(){var e="572f100e521523a3f80677828f68ede3",t="https://api.themoviedb.org/3/discover/movie?api_key=".concat(e,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"),a=Object(n.useState)({url:t,filter:0,movie:null}),c=Object(i.a)(a,2),r=c[0],s=c[1],o=r.url,j=r.filter,u=r.movie;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"mt-4",children:"The Movie Theater Challenge"}),u?Object(m.jsx)(f,{movie:u,handleGoBack:function(){s(Object(l.a)(Object(l.a)({},r),{},{movie:null}))}}):Object(m.jsx)(v,{url:o,filter:j,handleSelectMovie:function(e){s(Object(l.a)(Object(l.a)({},r),{},{movie:e}))},handleSearch:function(a){var n="https://api.themoviedb.org/3/search/movie?api_key=".concat(e,"&language=en-US&query=").concat(a,"&page=1&include_adult=false");s(""!==a?Object(l.a)(Object(l.a)({},r),{},{url:n}):Object(l.a)(Object(l.a)({},r),{},{url:t}))},handleFilter:function(e){s(e===j?Object(l.a)(Object(l.a)({},r),{},{filter:0}):Object(l.a)(Object(l.a)({},r),{},{filter:e}))}})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))};r.a.render(Object(m.jsx)(g,{}),document.getElementById("root")),p()}},[[24,1,2]]]);
//# sourceMappingURL=main.50834ee8.chunk.js.map