(window["webpackJsonpplanets-game-origin"]=window["webpackJsonpplanets-game-origin"]||[]).push([[0],{168:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"default",(function(){return L}));var a={};n.r(a),n.d(a,"default",(function(){return H})),n.d(a,"middleware",(function(){return Z}));var c={};n.r(c),n.d(c,"default",(function(){return ye})),n.d(c,"middleware",(function(){return de}));var o={};n.r(o),n.d(o,"default",(function(){return ke})),n.d(o,"middleware",(function(){return De}));var u={};n.r(u),n.d(u,"middleware",(function(){return Be}));var i={};n.r(i),n.d(i,"default",(function(){return Re}));var l={};n.r(l),n.d(l,"priority",(function(){return $t})),n.d(l,"type",(function(){return qt})),n.d(l,"Command",(function(){return Jt})),n.d(l,"Description",(function(){return Xt}));var s={};n.r(s),n.d(s,"priority",(function(){return tn})),n.d(s,"type",(function(){return nn})),n.d(s,"Command",(function(){return Zt})),n.d(s,"Description",(function(){return en}));var p=n(0),f=n.n(p),m=n(24),d=n.n(m),v=(n(73),n(74),n(27)),b=n(18),y=n(60),h=n(61),E=n.n(h),g=n(62),O=n.n(g),w=new WeakSet;var j=function(e){return function(t,n){return function e(t){return"object"===typeof t&&!w.has(t)&&t&&(w.add(t),Object.keys(t).forEach((function(n){var r=t[n];"object"===typeof r&&(t[n]=e(r))}))),Object.freeze(t),t}(e(t,n))}},k="alert/DELETE_ALERT";function C(){return{type:k}}var P=function(e,t){return null},x="alert/REPLACE_ALERT";function I(e){return{type:x,text:e}}var S=function(e,t){return{text:t.text}};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return P(e,t);case x:return S(e,t);default:return e}},D="blog/SET_POST";function T(e){return{type:D,post:e}}var N=n(15);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(N.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(e,t){var n=t.post,r=n.id;return B({},e,Object(N.a)({},r,B({},e[r],{},n)))};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return G(e,t);default:return e}},M=n(5),A=n.n(M),F=n(6),R="blog/FETCH_POST_LIST";function U(){return{type:R}}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){Object(N.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z={get:function(){var e=Object(F.a)(A.a.mark((function e(t,n){var r,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,W({method:"GET",headers:W({"Content-Type":"application/json; charset=utf-8"},n&&n.headers)},n));case 2:return r=e.sent,e.next=5,r.json();case 5:if(a=e.sent,r.ok){e.next=8;break}return e.abrupt("return",Promise.reject({status:r.status,data:a}));case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),put:function(){var e=Object(F.a)(A.a.mark((function e(t,n,r){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z.get(t,W({method:"PUT",body:JSON.stringify(n)},r)));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),post:function(){var e=Object(F.a)(A.a.mark((function e(t,n,r){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z.get(t,W({method:"POST",body:JSON.stringify(n)},r)));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),delete:function(){var e=Object(F.a)(A.a.mark((function e(t,n){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z.get(t,W({method:"DELETE"},n)));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},J=z;function X(){return(X=Object(F.a)(A.a.mark((function e(t,n){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get("/api/v1/posts");case 2:r=e.sent,r.list.forEach((function(e){return t.dispatch(T(e))}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=function(e,t){return X.apply(this,arguments)},q="blog/FETCH_POST";function K(e){return{type:q,postId:e}}function Q(){return(Q=Object(F.a)(A.a.mark((function e(t,n){var r,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.postId,e.next=3,J.get("/api/v1/posts/".concat(r));case 3:(a=e.sent).body=a.body.split("\n").filter((function(e){return!/^\s*<!--.*-->\s*$/.test(e)})).join("\n"),t.dispatch(T(a));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=function(e,t){return Q.apply(this,arguments)},Z=function(e){return function(t){return function(){var n=Object(F.a)(A.a.mark((function n(r){return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(r),n.t0=r.type,n.next=n.t0===q?4:n.t0===R?5:6;break;case 4:return n.abrupt("return",Y(e,r));case 5:return n.abrupt("return",$(e,r));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},ee="game/FETCH";function te(e){return{type:ee,playerId:e}}var ne="game/LOGIN";function re(e){return{type:ne,playerId:e}}var ae="game/NEW";function ce(e){return{type:ae,mapCode:e}}var oe="game/REPLACE";function ue(e){return{type:oe,game:e}}function ie(){return(ie=Object(F.a)(A.a.mark((function e(t,n){var r,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.playerId,e.next=3,J.get("/api/v1/players/".concat(r));case 3:a=e.sent,t.dispatch(ue(a));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return(le=Object(F.a)(A.a.mark((function e(t,n){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.playerId,t.dispatch(te(r));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(){return(se=Object(F.a)(A.a.mark((function e(t,n){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.mapCode,e.prev=1,e.next=4,J.put("/api/v1/game",{mapCode:r});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),t.dispatch(I(e.t0.data.message));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}var pe="game/COMPILE";function fe(e){return{type:pe,playerId:e}}function me(){return(me=Object(F.a)(A.a.mark((function e(t,n){var r,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.playerId,e.next=3,J.post("/api/v1/players/".concat(r,"/compile"));case 3:a=e.sent,t.dispatch(I("Game compiled")),t.dispatch(ue(a));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=function(e){return function(t){return function(n){switch(t(n),n.type){case pe:return function(e,t){return me.apply(this,arguments)}(e,n);case ee:return function(e,t){return ie.apply(this,arguments)}(e,n);case ne:return function(e,t){return le.apply(this,arguments)}(e,n);case ae:return function(e,t){return se.apply(this,arguments)}(e,n)}}}};var ve="game/LOGOUT";function be(){return{type:ve}}function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return{};case oe:return function(e,t){return t.game}(0,t);default:return e}}var he=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",n="string"===typeof t?function(e){return e[t]}:t,r={};return e.forEach((function(e){var t=n(e),a=r[t];a||(a=[],r[t]=a),a.push(e)})),r};var Ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",n="string"===typeof t?function(e){return e[t]}:t,r={};return e.forEach((function(e){var t=n(e);r[t]=e})),r};var ge="gameCommands/SET";function Oe(e,t,n){return{type:ge,command:{entityId:e,type:t,value:n}}}function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(n,!0).forEach((function(t){Object(N.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ke(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return function(e,t){var n=t.game.commands||[],r=he(n,"entityId");return Object.keys(r).forEach((function(e){r[e]=Ee(r[e],"type")})),r}(0,t);case ge:return function(e,t){var n=t.command,r=n.entityId,a=n.type;return je({},e,Object(N.a)({},r,je({},e[r],Object(N.a)({},a,je({},e[r]&&e[r][a],{},n)))))}(e,t);default:return e}}var Ce="gameCommands/SAVE";function Pe(){return{type:Ce}}function xe(e){return e.gameCommands}function Ie(e){return e.game}function Se(e){var t=Ie(e);return t&&t.playerId}function Le(){return(Le=Object(F.a)(A.a.mark((function e(t,n){var r,a,c,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getState(),a=xe(r),c=Se(r),o=Object.keys(a).flatMap((function(e){return Object.values(a[e])})),e.next=6,J.put("/api/v1/players/".concat(c,"/commands"),o);case 6:t.dispatch(I("Game saved"));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var De=function(e){return function(t){return function(n){switch(t(n),n.type){case Ce:return function(e,t){return Le.apply(this,arguments)}(e,n)}}}},Te="view/SET_VIEW";function Ne(e){return{type:Te,view:e}}function _e(){return(_e=Object(F.a)(A.a.mark((function e(t,n){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dispatch(Ne({root:"Play",coordinates:null}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Be=function(e){return function(t){return function(n){switch(t(n),n.type){case oe:return function(e,t){return _e.apply(this,arguments)}(e,n)}}}},Ge="view/REPLACE_VIEW";function He(e){return{type:Ge,view:e}}var Me=function(e,t){return t.view};function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Fe=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(n,!0).forEach((function(t){Object(N.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t.view)};var Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{root:"Home"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ge:return Me(e,t);case Te:return Fe(e,t);default:return e}},Ue={alert:r,blog:a,game:c,gameCommands:o,gameView:u,view:i};var Ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.compose,n=j(E()(Ue)),r=O()(Ue);return Object(b.createStore)(n,e,t(Object(b.applyMiddleware)(y.a,r)))};var We=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Object(p.useCallback)((function(t){return e.apply(void 0,[t].concat(n))}),[e].concat(n));return Object(v.c)(a)};var ze=function(e,t){return e.view[t]};var Je=function(e,t){return t.null=t.null||t.undefined,t.undefined=t.undefined||t.null,function(){var n=We(ze,e),r=t["".concat(n)]||function(t){return function(){return'Unknown view name "'.concat(t,'" for "').concat(e,'".')}}(n);return f.a.createElement(r,null)}},Xe=n(170),$e=n(178),qe=n(63),Ke=n.n(qe);var Qe=function(e){return e.blog};var Ye=function(e,t){var n=t.postId;return Qe(e)[n]};var Ze=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(!e)throw new Error("The actionCreator is not a function");var a=Object(v.b)();return Object(p.useCallback)((function(){for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];var o=e.apply(void 0,n.concat(r));a(o)}),[e].concat(n))},et=n(11),tt=n(7);function nt(){var e=Object(et.a)(["\n  background: transparent;\n  font-size: inherit;\n  height: 2em;\n  box-sizing: border-box;\n  border: solid var(--light) 2px;\n  color: var(--light);\n  padding: 0 1em;\n  cursor: pointer;\n\n  :focus,\n  :hover {\n    outline: none;\n    color: var(--light);\n    border: solid var(--lightest) 2px;\n  }\n"]);return nt=function(){return e},e}var rt=Object(tt.a)(nt());var at=function(e){var t=e.onClick,n=e.children,r=e.className,a=void 0===r?null:r;return f.a.createElement("button",{className:Object(tt.b)(rt,a),onClick:t},n)};function ct(){var e=Object(et.a)(["\n    border: none;\n    text-decoration: underline;\n    padding: 0;\n\n    :focus,\n    :hover {\n      border: none;\n      color: var(--lightest);\n    }\n  "]);return ct=function(){return e},e}var ot=Object(tt.b)(rt,Object(tt.a)(ct()));var ut=function(e){var t=e.onClick,n=e.children,r=e.className,a=void 0===r?null:r;return f.a.createElement(at,{onClick:t,className:Object(tt.b)(ot,a)},n)};var it=function(e){var t=e.postId,n=We(Ye,{postId:t}),r=Ze(Ne,{root:"Home"}),a=Ze(Ne,{postId:null}),c=Ze(K,t);Object(p.useEffect)(c,[]);var o=f.a.createElement(ut,{onClick:a},"\xab Back to posts");return f.a.createElement(Xe.a,null,f.a.createElement("br",null),f.a.createElement($e.a,null,f.a.createElement($e.a.Item,{onClick:r},"Home"),f.a.createElement($e.a.Item,{onClick:a},"Blog"),f.a.createElement($e.a.Item,{active:!0},n.title)),f.a.createElement(Ke.a,{source:n.body,escapeHtml:!1}),o)},lt=n(19);function st(e,t){return e.id<t.id?1:e.id>t.id?-1:0}var pt=Object(lt.a)(Qe,(function(e){return Object.values(e).sort(st)}));function ft(){var e=Object(et.a)(["\n  cursor: pointer;\n  text-decoration: underline;\n  :hover {\n    color: var(--lightest);\n  }\n"]);return ft=function(){return e},e}var mt=Object(tt.a)(ft());var dt=function(e){var t=e.children,n=e.view,r=e.className,a=void 0===r?null:r,c=Ze(Ne,n);return f.a.createElement("span",{className:Object(tt.b)(mt,a),onClick:c},t)};var vt=function(){var e=We(pt),t=Ze(Ne,{root:"Home"}),n=Ze(U);return Object(p.useEffect)(n,[]),f.a.createElement(Xe.a,null,f.a.createElement("br",null),f.a.createElement($e.a,null,f.a.createElement($e.a.Item,{onClick:t},"Home"),f.a.createElement($e.a.Item,{active:!0},"Blog")),f.a.createElement("h1",null,"Latest news"),f.a.createElement("ul",null,e.map((function(e){return f.a.createElement("li",{key:e.id},f.a.createElement(dt,{view:{postId:e.id}},e.title))}))))};var bt=function(){var e=We(ze,"postId");return e?f.a.createElement(it,{postId:e}):f.a.createElement(vt,null)};var yt=function(){return f.a.createElement("span",null,"home")},ht=n(8),Et=n(171),gt=n(65),Ot=n(174),wt=n(172);var jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(p.useState)(e),n=Object(ht.a)(t,2),r=n[0],a=n[1];return[r,Object(p.useCallback)((function(e){return a(e.target.value)}),[])]};var kt=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ze.apply(void 0,[e].concat(n));return Object(p.useCallback)((function(e){e.preventDefault(),a()}),[a])};function Ct(){var e=jt(""),t=Object(ht.a)(e,2),n=t[0],r=t[1],a=kt(re,n);return f.a.createElement(Xe.a,null,f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement("h1",null,"Log in to play"),f.a.createElement("br",null),f.a.createElement(Et.a,null,f.a.createElement(gt.a,{md:4},f.a.createElement(Ot.a,{onSubmit:a},f.a.createElement(Ot.a.Group,{controlId:"username"},f.a.createElement(Ot.a.Label,null,"Username"),f.a.createElement(Ot.a.Control,{type:"text",value:n,onChange:r,placeholder:"Enter username"})),f.a.createElement(wt.a,{variant:"primary",type:"submit"},"Log in")))))}function Pt(e){return!!Se(e)}function xt(e){var t=Ie(e);return t&&t.map}var It=[];function St(e){var t=Ie(e);return t&&t.entities||It}var Lt=Object(lt.a)(St,(function(e){return he(e,(function(e){return"".concat(e.row,",").concat(e.column)}))}));var Dt=Object(lt.a)(Lt,(function(e){return Object.keys(e).map((function(t){var n=e[t][0];return{row:n.row,column:n.column}}))})),Tt=5,Nt=4,_t=[];function Bt(e,t){var n=t.row,r=t.column;return Lt(e)["".concat(n,",").concat(r)]||_t}var Gt=Object(lt.a)(Bt,(function(e){return he(e,"type")}));function Ht(){var e=Object(et.a)(["\n  width: ","em;\n  height: ","em;\n  border: solid 1px rgba(0, 0, 0, 0.5);\n\n  &.yours {\n    background: blue;\n  }\n"]);return Ht=function(){return e},e}var Mt=Object(tt.a)(Ht(),Tt,Nt);function At(e){var t=e.row,n=e.column,r=We(Gt,{row:t,column:n}),a=We(Bt,{row:t,column:n}),c=We(Se),o=Ze(Ne,{coordinates:{row:t,column:n}});return Object(p.useMemo)((function(){var e={width:"".concat(Tt,"em"),height:"".concat(Nt,"em"),left:"".concat(Tt*(n-1),"em"),top:"".concat(Nt*(t-1),"em"),position:"absolute"},u=[];r.star&&u.push(f.a.createElement("span",{"data-testid":"star",key:"star"},"*")),r.ship&&u.push(f.a.createElement("span",{"data-testid":"ships",key:"ships"},"\xbb"));var i=Mt;return a.some((function(e){return e.playerId===c}))&&(i+=" yours"),f.a.createElement("div",{"data-testid":"".concat(t,",").concat(n),style:e,className:i,onClick:o,title:"".concat(t,",").concat(n)},u)}),[t,n,r,a,c,o])}function Ft(){var e=We(xt),t=We(Dt);return Object(p.useMemo)((function(){var n={width:"".concat(Tt*e.columns,"em"),height:"".concat(Nt*e.rows,"em"),position:"relative",background:"rgba(255,255,255,.1)",margin:"1em auto 0"};return f.a.createElement("div",{"data-testid":"map-of-the-game",style:n},t.map((function(e){var t=e.row,n=e.column;return f.a.createElement(At,{row:t,column:n,key:"".concat(t,",").concat(n)})})))}),[e,t])}var Rt=n(176),Ut={};function Vt(e,t){var n=t.entityId,r=t.type;return function(e,t){var n=t.entityId;return xe(e)[n]||Ut}(e,{entityId:n})[r]}function Wt(e,t,n){var r=We(Vt,{entityId:e,type:t});return[r?r.value:n,Ze(Oe,e,t)]}function zt(e,t){var n=Wt(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:""),r=Object(ht.a)(n,2),a=r[0],c=r[1];return[a,Object(p.useCallback)((function(e){return c(e.target.value)}),[c])]}function Jt(e){var t=zt(e.entity.id,"BuildShip"),n=Object(ht.a)(t,2),r=n[0],a=n[1];return f.a.createElement(f.a.Fragment,null,f.a.createElement(Rt.a.Body,null,f.a.createElement(Ot.a.Group,{controlId:"newShipName"},f.a.createElement(Ot.a.Label,null,"New ship name"),f.a.createElement(Ot.a.Control,{type:"text",value:r,onChange:a,placeholder:"Ships name"}))))}function Xt(e){var t=e.entity,n=t.name,r=t.population,a=t.playerId;return f.a.createElement(f.a.Fragment,null,f.a.createElement(Rt.a.Header,{"data-testid":"name"},"Star: ",f.a.createElement("span",null,n)),f.a.createElement(Rt.a.Body,null,a&&f.a.createElement("div",{"data-testid":"owner"},f.a.createElement("strong",null,"Owner"),": ",a,"."),null!=r&&f.a.createElement("div",{"data-testid":"population"},f.a.createElement("strong",null,"Population"),": ",r,".")))}var $t=1,qt="star",Kt=n(179),Qt=n(173);function Yt(e){var t=Wt(e.entity.id,"MoveShip"),n=Object(ht.a)(t,2),r=n[0],a=n[1],c=Object(p.useCallback)((function(){return a("down")}),[a]),o=Object(p.useCallback)((function(){return a("up")}),[a]),u=Object(p.useCallback)((function(){return a("left")}),[a]),i=Object(p.useCallback)((function(){return a("right")}),[a]);return f.a.createElement(Kt.a.Item,null,"Move ship:",f.a.createElement(Qt.a,null,f.a.createElement(wt.a,{onClick:c,"data-testid":"go-down",active:"down"===r},"v"),f.a.createElement(wt.a,{onClick:o,"data-testid":"go-up",active:"up"===r},"^"),f.a.createElement(wt.a,{onClick:u,"data-testid":"go-left",active:"left"===r},"<"),f.a.createElement(wt.a,{onClick:i,"data-testid":"go-right",active:"right"===r},">")))}function Zt(e){var t=e.entity,n=zt(t.id,"LoadShip"),r=Object(ht.a)(n,2),a=r[0],c=r[1];return f.a.createElement(Kt.a,null,f.a.createElement(Kt.a.Item,null,f.a.createElement(Ot.a.Group,{controlId:"shipLoad"},f.a.createElement(Ot.a.Label,null,"Load"),f.a.createElement(Ot.a.Control,{value:a,onChange:c,placeholder:"Ships name"}))),f.a.createElement(Yt,{entity:t}))}function en(e){var t=e.entity,n=t.name,r=t.population;return f.a.createElement(f.a.Fragment,null,f.a.createElement(Rt.a.Header,{"data-testid":"name"},"Ship: ",f.a.createElement("span",null,n)),f.a.createElement(Rt.a.Body,null,null!=r&&f.a.createElement("div",{"data-testid":"population"},f.a.createElement("strong",null,"Population"),": ",r,".")))}var tn=5,nn="ship",rn=[l,s].sort((function(e,t){return e.priority-t.priority})),an=Ee(rn,"type");function cn(e){var t=e.entity,n=t.name,r=t.type,a=t.playerId,c=function(e){return an[e.type]}(t),o=c.Description,u=c.Command,i=We(Se);return f.a.createElement(Rt.a,{"data-testid":"".concat(r,"-").concat(n)},f.a.createElement(o,{entity:t}),a===i&&f.a.createElement(u,{entity:t}))}function on(e){var t=e.entities;return f.a.createElement(f.a.Fragment,null,rn.flatMap((function(e){return t.filter((function(t){return t.type===e.type})).map((function(e){return f.a.createElement(cn,{entity:e,key:e.id})}))})))}function un(){var e=Ze(Ne,{coordinates:null}),t=We(ze,"coordinates"),n=We(Bt,t);return Object(p.useMemo)((function(){return f.a.createElement(Xe.a,{"data-testid":"cell-entities"},f.a.createElement("br",null),f.a.createElement(Et.a,null,f.a.createElement(gt.a,{md:4},f.a.createElement("button",{onClick:e},"Back"),f.a.createElement(on,{entities:n}))))}),[n,e])}var ln=Je("root",{Home:yt,Play:function(){var e=We(Pt),t=We(ze,"coordinates");return e?t?f.a.createElement(un,null):f.a.createElement(Ft,null):f.a.createElement(Ct,null)},Game:function(){var e=We(Se),t=Ze(Pe),n=Ze(fe,e),r=Ze(be);return e?f.a.createElement("div",null,f.a.createElement("button",{onClick:t},"Save game"),f.a.createElement("button",{onClick:n},"Compile game"),f.a.createElement("button",{onClick:r},"Logout")):"There is no game loaded"},New:function(){var e=jt(""),t=Object(ht.a)(e,2),n=t[0],r=t[1],a=kt(ce,n);return f.a.createElement(Xe.a,null,f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement("h1",null,"Create a new universe"),f.a.createElement("br",null),f.a.createElement(Et.a,null,f.a.createElement(gt.a,{md:4},f.a.createElement(Ot.a,{onSubmit:a},f.a.createElement(Ot.a.Group,{controlId:"mapCode"},f.a.createElement(Ot.a.Label,null,"Map code"),f.a.createElement(Ot.a.Control,{type:"text",value:n,onChange:r,placeholder:"Enter the map code"})),f.a.createElement(wt.a,{variant:"primary",type:"submit"},"Create")))))},Blog:bt}),sn=n(175),pn=n(177);var fn=function(){var e=Ze(He,{root:"Home"}),t=Ze(He,{root:"Play"}),n=Ze(He,{root:"New"}),r=Ze(He,{root:"Blog"}),a=We(Pt),c=Ze(He,{root:"Game"});return f.a.createElement(sn.a,{bg:"light",expand:"lg","data-testid":"header"},f.a.createElement(Xe.a,null,f.a.createElement(sn.a.Brand,{onClick:e},"\u25cf\u25b6 PLANETS GAME"),f.a.createElement(sn.a.Toggle,{"aria-controls":"basic-navbar-nav"}),f.a.createElement(sn.a.Collapse,{id:"basic-navbar-nav"},f.a.createElement(pn.a,{className:"mr-auto"},f.a.createElement(pn.a.Link,{onClick:e},"Home"),f.a.createElement(pn.a.Link,{onClick:t},"Play"),a&&f.a.createElement(pn.a.Link,{onClick:c},"Game"),f.a.createElement(pn.a.Link,{onClick:n},"New"),f.a.createElement(pn.a.Link,{onClick:r},"Blog")))))},mn=n(46);function dn(){var e=Object(et.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: gray;\n  font-size: 85%;\n  z-index: 1000;\n"]);return dn=function(){return e},e}var vn=Object(tt.a)(dn());var bn=function(){return f.a.createElement("div",{className:vn},mn.name," (v",mn.version,")")};var yn=function(e){return e.alert};function hn(){var e=Object(et.a)(["\n  background: var(white);\n  color: gray;\n  padding: 0.5em;\n"]);return hn=function(){return e},e}var En=Object(tt.a)(hn());var gn=function(){var e=We(yn),t=Ze(C);return e?f.a.createElement("div",{className:En,"data-testid":"alert-bar"},e.text,f.a.createElement(at,{onClick:t},"Dismiss")):null};var On=function(e){var t=e.children;return f.a.createElement(f.a.Fragment,null,f.a.createElement(bn,null),f.a.createElement(fn,null),f.a.createElement(gn,null),t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var wn=function(e,t){var n=Ve(e,t);return n.dispatch({type:"game/LOGIN",playerId:"sisko"}),function(){return f.a.createElement(v.a,{store:n},f.a.createElement(On,null,f.a.createElement(ln,null)))}}(void 0,window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0,traceLimit:25}));d.a.render(f.a.createElement(wn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},46:function(e){e.exports=JSON.parse('{"name":"planets-game-origin","version":"1.0.0","private":true,"dependencies":{"bootswatch":"^4.3.1","chalk":"^2.4.2","ducks-middleware":"^1.0.2","ducks-reducer":"^1.0.4","emotion":"^10.0.14","object-map":"^1.0.2","react":"^16.8.6","react-bootstrap":"^1.0.0-beta.12","react-dom":"^16.8.6","react-markdown":"^4.1.0","react-redux":"^7.1.0","react-scripts":"3.1.1","redux":"^4.0.4","redux-thunk":"^2.3.0","reselect":"^4.0.0"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@testing-library/dom":"^6.1.0","@testing-library/jest-dom":"^4.1.0","@testing-library/react":"^9.1.3","@testing-library/user-event":"^7.0.0","@types/jest":"^24.0.18","escape-string-regexp":"^2.0.0","pretty-format":"^24.9.0","typescript":"^3.5.3"},"prettier":{"trailingComma":"all"},"engines":{"node":">=12.10.0"},"proxy":"http://localhost:8080"}')},68:function(e,t,n){e.exports=n(168)},73:function(e,t,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.051d0977.chunk.js.map