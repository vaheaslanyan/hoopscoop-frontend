(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{63:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return c}));var n=function(){return{type:"REQUIRE"}},a=function(e){return{type:"MINLENGTH",val:e}},i=function(){return{type:"EMAIL"}},c=function(e,t){var r=!0,n=!0,a=!1,i=void 0;try{for(var c,l=t[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var u=c.value;"REQUIRE"===u.type&&(r=r&&e.trim().length>0),"MINLENGTH"===u.type&&(r=r&&e.trim().length>=u.val),"MAXLENGTH"===u.type&&(r=r&&e.trim().length<=u.val),"MIN"===u.type&&(r=r&&+e>=u.val),"MAX"===u.type&&(r=r&&+e<=u.val),"EMAIL"===u.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(o){a=!0,i=o}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}},64:function(e,t,r){"use strict";var n=r(2),a=r(25),i=r(0),c=r.n(i),l=(r(65),r(63));function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e,t){switch(t.type){case"CHANGE":return o({},e,{value:t.val,isValid:Object(l.d)(t.val,t.validators)});case"TOUCH":return o({},e,{isTouched:!0});default:return e}};t.a=function(e){var t=Object(i.useReducer)(s,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),r=Object(n.a)(t,2),a=r[0],l=r[1],u=e.id,o=e.onInput,p=a.value,d=a.isValid;Object(i.useEffect)((function(){o(e.id,a.value,a.isValid)}),[u,p,d,o]);var f=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},v=function(){l({type:"TOUCH"})},b="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,value:a.value,onBlur:v}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,value:a.value,onBlur:v});return c.a.createElement("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),b,!a.isValid&&a.isTouched&&c.a.createElement("p",null,e.errorText))}},65:function(e,t,r){},66:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(2),a=r(25),i=r(0);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e,t){switch(t.type){case"INPUT_CHANGE":var r=!0;for(var n in e.inputs)e.inputs[n]&&(r=n===t.inputId?r&&t.isValid:r&&e.inputs[n].isValid);return l({},e,{inputs:l({},e.inputs,Object(a.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:r});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},o=function(e,t){var r=Object(i.useReducer)(u,{inputs:e,isValid:t}),a=Object(n.a)(r,2),c=a[0],l=a[1];return[c,Object(i.useCallback)((function(e,t,r){l({type:"INPUT_CHANGE",value:t,isValid:r,inputId:e})}),[l]),Object(i.useCallback)((function(e,t){l({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},67:function(e,t,r){},73:function(e,t,r){"use strict";r.r(t);var n=r(7),a=r.n(n),i=r(11),c=r(2),l=r(0),u=r.n(l),o=r(14),s=(r(67),r(64)),p=r(5),d=r(13),f=r(12),v=r(16),b=r(63),O=r(18),y=r(66),m=r(17);t.default=function(){var e=Object(l.useContext)(O.a),t=Object(m.a)(),r=t.isLoading,n=t.error,j=t.sendRequest,h=t.clearError,E=Object(l.useState)(),V=Object(c.a)(E,2),g=V[0],w=V[1],P=Object(o.h)().placeId,T=Object(o.g)(),I=Object(y.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),N=Object(c.a)(I,3),A=N[0],C=N[1],x=N[2];Object(l.useEffect)((function(){(function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("https://hoopscoop.herokuapp.com/api"+"/places/".concat(P));case 3:t=e.sent,w(t.place),x({title:{value:t.place.title,isValid:!0},description:{value:t.place.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[j,P,x]);var k=function(){var t=Object(i.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.prev=1,t.next=4,j("https://hoopscoop.herokuapp.com/api"+"/places/".concat(P),"PATCH",JSON.stringify({title:A.inputs.title.value,description:A.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token});case 4:T.push("/"+e.userId+"/places"),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return r?u.a.createElement("div",{className:"center"},u.a.createElement(f.a,null)):g||n?u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{error:n,onClear:h}),!r&&g&&u.a.createElement("form",{className:"place-form",onSubmit:k},u.a.createElement(s.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(b.c)()],errorText:"Please enter a valid title.",onInput:C,initialValue:g.title,initialValid:!0}),u.a.createElement(s.a,{id:"description",element:"textarea",label:"Description",validators:[Object(b.b)(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:C,initialValue:g.description,initialValid:!0}),u.a.createElement(p.a,{type:"submit",disabled:!A.isValid},"UPDATE PLACE"))):u.a.createElement("div",{className:"center"},u.a.createElement(d.a,null,u.a.createElement("h2",null,"Could not find place!")))}}}]);
//# sourceMappingURL=5.6f20136a.chunk.js.map