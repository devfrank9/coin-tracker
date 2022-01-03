(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{72:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(26),o=t.n(r),a=t(15),s=t(6),l=t(8),d=t(18),j=t(7),b="https://api.coinpaprika.com/v1";function h(){return fetch("".concat(b,"/coins")).then((function(n){return n.json()}))}var u,p,x,f,O,m,g,v=t(27),y=t(1),k=s.c.div(u||(u=Object(l.a)(["\n  padding: 10px 10px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),w=s.c.header(p||(p=Object(l.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),C=s.c.ul(x||(x=Object(l.a)([""]))),I=s.c.h1(f||(f=Object(l.a)(["\n  background-color: white;\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in-out;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),L=s.c.h1(O||(O=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),q=s.c.span(m||(m=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),S=s.c.img(g||(g=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var Q=function(){var n=Object(a.useQuery)("allCoins",h),e=n.isLoading,t=n.data;return Object(y.jsxs)(k,{children:[Object(y.jsx)(v.a,{children:Object(y.jsx)("title",{children:"\ucf54\uc778"})}),Object(y.jsx)(w,{children:Object(y.jsx)(L,{children:"\ucf54\uc778"})}),e?Object(y.jsx)(q,{children:'"Loading..."'}):Object(y.jsx)(C,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(y.jsx)(I,{children:Object(y.jsxs)(d.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(y.jsx)(S,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})},z=t(47),P=t.n(z);var F=function(n){var e=n.coinId,t=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(b,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:5e3}),c=t.isLoading,i=t.data;return Object(y.jsx)("div",{children:c?"Loading Chart...":Object(y.jsx)(P.a,{type:"line",series:[{name:"price",data:null===i||void 0===i?void 0:i.map((function(n){return n.close}))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:5},xaxis:{axisTicks:{show:!1},axisBorder:{show:!1},labels:{show:!1},type:"datetime",categories:null===i||void 0===i?void 0:i.map((function(n){return n.time_close}))},yaxis:{show:!1},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(n){return"$ ".concat(n.toFixed(2))}}}}})})};var M,T,A,D,$,_,B,J,R,E=function(){return Object(y.jsx)("h1",{children:"Price"})},H=s.c.h1(M||(M=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),U=s.c.span(T||(T=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),G=s.c.div(A||(A=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),K=s.c.header(D||(D=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),N=s.c.div($||($=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),V=s.c.div(_||(_=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),W=s.c.p(B||(B=Object(l.a)(["\n  margin: 20px 0px;\n"]))),X=s.c.div(J||(J=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),Y=s.c.span(R||(R=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var Z=function(){var n=Object(j.g)().coinId,e=Object(j.f)().state,t=Object(j.h)("/:coinId/price"),c=Object(j.h)("/:coinId/chart"),i=Object(a.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(b,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),r=i.isLoading,o=i.data,s=Object(a.useQuery)(["tickers",n],(function(){return function(n){return fetch("".concat(b,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:5e3}),l=s.isLoading,h=s.data,u=r||l;return Object(y.jsxs)(G,{children:[Object(y.jsx)(v.a,{children:Object(y.jsx)("title",{children:(null===e||void 0===e?void 0:e.name)?e.name:u?"Loading...":null===o||void 0===o?void 0:o.name})}),Object(y.jsx)(K,{children:Object(y.jsx)(H,{children:(null===e||void 0===e?void 0:e.name)?e.name:u?"Loading...":null===o||void 0===o?void 0:o.name})}),u?Object(y.jsx)(U,{children:"Loading..."}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(N,{children:[Object(y.jsxs)(V,{children:[Object(y.jsx)("span",{children:"Rank:"}),Object(y.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(y.jsxs)(V,{children:[Object(y.jsx)("span",{children:"Symbol:"}),Object(y.jsxs)("span",{children:["$",null===o||void 0===o?void 0:o.symbol]})]}),Object(y.jsxs)(V,{children:[Object(y.jsx)("span",{children:"Price:"}),Object(y.jsxs)("span",{children:["$",null===h||void 0===h?void 0:h.quotes.USD.price.toFixed(3)]})]})]}),Object(y.jsx)(W,{children:null===o||void 0===o?void 0:o.description}),Object(y.jsxs)(N,{children:[Object(y.jsxs)(V,{children:[Object(y.jsx)("span",{children:"Total Suply:"}),Object(y.jsx)("span",{children:null===h||void 0===h?void 0:h.total_supply})]}),Object(y.jsxs)(V,{children:[Object(y.jsx)("span",{children:"Max Supply:"}),Object(y.jsx)("span",{children:null===h||void 0===h?void 0:h.max_supply})]})]}),Object(y.jsxs)(X,{children:[Object(y.jsx)(Y,{isActive:null!==c,children:Object(y.jsx)(d.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(y.jsx)(Y,{isActive:null!==t,children:Object(y.jsx)(d.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(y.jsxs)(j.c,{children:[Object(y.jsx)(j.a,{path:"/:coinId/price",children:Object(y.jsx)(E,{})}),Object(y.jsx)(j.a,{path:"/:coinId/chart",children:Object(y.jsx)(F,{coinId:n})})]})]})]})};var nn,en=function(){return Object(y.jsx)(d.a,{basename:"/react-masterclass",children:Object(y.jsxs)(j.c,{children:[Object(y.jsx)(j.a,{path:"/:coinId",children:Object(y.jsx)(Z,{})}),Object(y.jsx)(j.a,{exact:!0,path:"/",children:Object(y.jsx)(Q,{})})]})})},tn=t(48),cn=Object(s.b)(nn||(nn=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');\n  /* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: ",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var rn=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(cn,{}),Object(y.jsx)(en,{}),Object(y.jsx)(tn.ReactQueryDevtools,{initialIsOpen:!0})]})},on=new a.QueryClient;o.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(a.QueryClientProvider,{client:on,children:Object(y.jsx)(s.a,{theme:{bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#44bd32"},children:Object(y.jsx)(rn,{})})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.058d73d6.chunk.js.map