(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(3);a(52);t.a=function(e){return e.href?r.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?r.a.createElement(c.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):r.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}},,,,,,,function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(53);t.a=function(e){return r.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},r.a.createElement("div",{className:"lds-dual-ring"}))}},function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(44);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},,,function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(19),l=a(5);t.a=function(e){return r.a.createElement(c.a,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:r.a.createElement(l.a,{onClick:e.onClear},"Okay")},r.a.createElement("p",null,e.error))}},function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(7),r=a.n(n),c=a(11),l=a(2),o=a(0),i=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(!1),u=Object(l.a)(i,2),s=u[0],m=u[1],d=Object(o.useRef)([]),f=Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var a,c,l,o,i,u,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:"GET",c=s.length>2&&void 0!==s[2]?s[2]:null,l=s.length>3&&void 0!==s[3]?s[3]:{},m(!0),o=new AbortController,d.current.push(o),e.prev=6,e.next=9,fetch(t,{method:a,body:c,headers:l,signal:o.signal});case 9:return i=e.sent,e.next=12,i.json();case 12:if(u=e.sent,d.current=d.current.filter((function(e){return e!==o})),i.ok){e.next=16;break}throw new Error(u.message);case 16:return m(!1),e.abrupt("return",u);case 20:throw e.prev=20,e.t0=e.catch(6),n(e.t0.message),m(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(o.useEffect)((function(){return function(){d.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:s,error:a,sendRequest:f,clearError:function(){n(null)}}}},function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),r=Object(n.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}})},function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=a(62),i=(a(50),a(20)),u=function(e){var t=r.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return l.a.createPortal(t,document.getElementById("modal-hook"))};t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement(i.a,{onClick:e.onCancel}),r.a.createElement(o.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(u,e)))}},function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),l=a.n(c);a(51);t.a=function(e){return l.a.createPortal(r.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},,function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(28);t.a=function(e){var t=Object(n.useRef)(),a=e.center,c=e.zoom;return Object(n.useEffect)((function(){var a=new window.google.maps.Map(t.current,{center:e.center,zoom:e.zoom});new window.google.maps.Marker({position:e.center,map:a})}),[a,c]),r.a.createElement("div",{ref:t,className:"map ".concat(e),style:e.style})}},,,,,,function(e,t,a){},function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(59),a(13)),l=a(5),o=a(7),i=a.n(o),u=a(11),s=a(2),m=(a(60),a(19)),d=a(22),f=a(16),E=a(12),p=a(18),g=a(17),b=function(e){var t=Object(g.a)(),a=t.isLoading,o=t.error,b=t.sendRequest,v=t.clearError,h=Object(n.useContext)(p.a),O=Object(n.useState)(!1),j=Object(s.a)(O,2),k=j[0],N=j[1],w=Object(n.useState)(!1),C=Object(s.a)(w,2),y=C[0],_=C[1],I=function(){return N(!1)},S=function(){_(!1)},x=function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!1),t.prev=1,t.next=4,b(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL+"/places/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+h.token});case 4:e.onDelete(e.id),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{error:o,onClear:v}),r.a.createElement(m.a,{show:k,onCancel:I,header:e.address,contentClass:"place-item__modal-conent",footerClass:"place-item__modal-actions",footer:r.a.createElement(l.a,{onClick:I},"CLOSE")},r.a.createElement("div",{className:"map-container"},r.a.createElement(d.a,{center:e.coordinates,zoom:16}))),r.a.createElement(m.a,{show:y,onCancel:S,header:"Are you sure?",footerClass:"place-item_modal-actions",footer:r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{inverse:!0,onClick:S},"CANCEL"),r.a.createElement(l.a,{danger:!0,onClick:x},"DELETE"))},r.a.createElement("p",null,"Are you sure you would like to delete this location? This action cannot be undone.")),r.a.createElement("div",{className:"place-item"},r.a.createElement(c.a,{className:"place-item__content"},a&&r.a.createElement(E.a,{asOverlay:!0}),r.a.createElement("div",{className:"place-item__image"},r.a.createElement("img",{src:e.image,alt:e.title})),r.a.createElement("div",{className:"place-item__info"},r.a.createElement("h3",null,e.title),r.a.createElement("h4",null,e.address),r.a.createElement("p",{className:"place-item__description"},e.description),r.a.createElement("p",null,r.a.createElement("i",null,"Submitted by ",e.creatorName))),r.a.createElement("div",{className:"place-item__actions"},r.a.createElement(l.a,{inverse:!0,onClick:function(){return N(!0)}},"VIEW ON MAP"),h.userId===e.creatorId&&r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{inverse:!0,to:"/places/".concat(e.id)},"EDIT"),r.a.createElement(l.a,{danger:!0,onClick:function(){_(!0)}},"DELETE"))))))};t.a=function(e){return 0===e.items.length?r.a.createElement("div",{className:"place-list center"},r.a.createElement(c.a,null,r.a.createElement("h2",null,"No places found. Maybe create one?"),r.a.createElement(l.a,{to:"/places/new"},"Share a Place"))):r.a.createElement("div",{className:"place-list-grid"},e.items.map((function(t){return r.a.createElement(b,{key:t.id,id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator._id,creatorName:t.creator.name,coordinates:t.location,onDelete:e.onDeletePlace})})))}},,,,,function(e,t,a){e.exports=a(61)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(10),o=a.n(l),i=(a(39),a(14)),u=a(3),s=a(7),m=a.n(s),d=a(11),f=a(2),E=(a(41),a(42),a(43),a(13),a(16)),p=a(12),g=a(17),b=(a(54),a(55),function(e){return c.a.createElement("header",{className:"main-header"},e.children)}),v=(a(56),a(18)),h=a(5),O=function(e){var t=Object(r.useContext)(v.a);return c.a.createElement("div",{className:"nav-links"},c.a.createElement("div",{className:"nav-link-each"},c.a.createElement(u.c,{to:"/",exact:!0},"All Courts")),t.isLoggedIn&&c.a.createElement("div",{className:"nav-link-each"},c.a.createElement(u.c,{to:"/".concat(t.userId,"/places")},"My Courts")),t.isLoggedIn&&c.a.createElement("div",{className:"nav-link-each"},c.a.createElement(u.c,{to:"/places/new"},"Add a Court")),!t.isLoggedIn&&c.a.createElement("div",{className:"nav-link-each"},c.a.createElement(u.c,{to:"/auth"},"Login | Sign Up")),t.isLoggedIn&&c.a.createElement("div",{className:"nav-link-each"},c.a.createElement(h.a,{onClick:t.logout},"Logout")))},j=a(62),k=(a(57),function(e){var t=c.a.createElement(j.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return o.a.createPortal(t,document.getElementById("drawer-hook"))}),N=a(20),w=function(e){var t=Object(r.useState)(!1),a=Object(f.a)(t,2),n=a[0],l=a[1],o=function(){l(!1)};return c.a.createElement(c.a.Fragment,null,n&&c.a.createElement(N.a,{onClick:o}),c.a.createElement(k,{show:n,onClick:o},c.a.createElement("nav",{className:"main-navigation__drawer-nav"},c.a.createElement(O,null))),c.a.createElement(b,null,c.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){l(!0)}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("h1",{className:"main-navigation__title"},c.a.createElement(u.b,{to:"/"},c.a.createElement("img",{className:"hs-logo",src:"https://res.cloudinary.com/hrs6ayhkh/image/upload/v1581811430/app/HoopScoopLogo_dq71wf.png",alt:"HoopScoopLogo"}))),c.a.createElement("nav",{className:"main-navigation__header-nav"},c.a.createElement(O,null))))},C=(a(58),a(29)),y=(a(22),a(28),a(25));function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S={enableHighAccuracy:!1,timeout:1/0,maximumAge:0},x=function(e){var t=Object(r.useRef)(),a=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S,a=Object(r.useState)({}),n=Object(f.a)(a,2),c=n[0],l=n[1],o=Object(r.useState)(null),i=Object(f.a)(o,2),u=i[0],s=i[1],m=function(e){var t=e.coords,a=e.timestamp;l({latitude:t.latitude,longitude:t.longitude,accuracy:t.accuracy,timestamp:a})},d=function(e){s(e.message)};return Object(r.useEffect)((function(){var a=navigator.geolocation;if(a){var n=null;return e?n=a.watchPosition(m,d,t):a.getCurrentPosition(m,d,t),function(){return n&&a.clearWatch(n)}}s("Geolocation is not supported")}),[t]),I({},c,{error:u})}(),n=a.longitude,l=a.latitude,o=(a.error,{lat:l,lng:n}),i=e.center;return Object(r.useEffect)((function(){var e=new window.google.maps.Map(t.current,{center:o,zoom:16});console.log(n,l),new window.google.maps.Marker({position:o,map:e,icon:{url:"http://maps.google.com/mapfiles/ms/micons/man.png"}}),i.map((function(t){new window.google.maps.Marker({position:t.location,map:e,icon:{url:"http://maps.google.com/mapfiles/ms/micons/purple.png"}})}))}),[o]),c.a.createElement("div",{ref:t,className:"map ".concat(e),style:e.style})},D=function(){var e=Object(r.useState)(),t=Object(f.a)(e,2),a=t[0],n=t[1],l=Object(g.a)(),o=l.isLoading,i=l.error,u=l.sendRequest,s=l.clearError;Object(r.useEffect)((function(){(function(){var e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL+"/places/");case 3:t=e.sent,n(t.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[u]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{error:i,onClear:s}),o&&c.a.createElement("div",{className:"center"},c.a.createElement(p.a,null)),!o&&a&&c.a.createElement("div",null,c.a.createElement("div",{className:"all-places-map-container"},c.a.createElement(x,{center:a,zoom:16})),c.a.createElement("div",{className:"all-places-grid-container"},c.a.createElement(C.a,{items:a,onDeletePlace:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))}}))))},L=c.a.lazy((function(){return a.e(3).then(a.bind(null,71))})),P=c.a.lazy((function(){return a.e(6).then(a.bind(null,72))})),A=c.a.lazy((function(){return a.e(5).then(a.bind(null,73))})),z=c.a.lazy((function(){return a.e(4).then(a.bind(null,74))})),T=function(){var e,t=function(){var e=Object(r.useState)(!1),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)(),o=Object(f.a)(l,2),i=o[0],u=o[1],s=Object(r.useState)(!1),m=Object(f.a)(s,2),d=m[0],E=m[1],p=Object(r.useCallback)((function(e,t,a){c(t),E(e);var n=a||new Date((new Date).getTime()+36e5);u(n),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:n.toISOString()}))}),[]),g=Object(r.useCallback)((function(){c(!1),E(null),localStorage.removeItem("userData")}),[]);return Object(r.useEffect)((function(){if(a&&i){var e=i.getTime()-(new Date).getTime();n=setTimeout(g,e)}else clearTimeout(n)}),[a,g,i]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&p(e.userId,e.token,new Date(e.expiration))}),[p]),{token:a,login:p,logout:g,userId:d}}(),a=t.token,l=t.login,o=t.logout,s=t.userId;return e=a?c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0},c.a.createElement(D,null)),c.a.createElement(i.b,{path:"/:userId/places",exact:!0},c.a.createElement(P,null)),c.a.createElement(i.b,{path:"/places/new",exact:!0},c.a.createElement(L,null)),c.a.createElement(i.b,{path:"/places/:placeId"},c.a.createElement(A,null)),c.a.createElement(i.a,{to:"/"})):c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0},c.a.createElement(D,null)),c.a.createElement(i.b,{path:"/:userId/places",exact:!0},c.a.createElement(P,null)),c.a.createElement(i.b,{path:"/auth",exact:!0},c.a.createElement(z,null)),c.a.createElement(i.a,{to:"/auth"})),c.a.createElement(v.a.Provider,{value:{isLoggedIn:!!a,token:a,userId:s,login:l,logout:o}},c.a.createElement(u.a,null,c.a.createElement(w,null),c.a.createElement("main",null,c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",{className:"center"},c.a.createElement(p.a,null))},e))))};o.a.render(c.a.createElement(T,null),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.946fdf65.chunk.js.map