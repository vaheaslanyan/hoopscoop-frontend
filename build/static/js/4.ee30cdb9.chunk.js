(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{63:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return c}));var r=function(){return{type:"REQUIRE"}},a=function(e){return{type:"MINLENGTH",val:e}},i=function(){return{type:"EMAIL"}},c=function(e,t){var n=!0,r=!0,a=!1,i=void 0;try{for(var c,l=t[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var u=c.value;"REQUIRE"===u.type&&(n=n&&e.trim().length>0),"MINLENGTH"===u.type&&(n=n&&e.trim().length>=u.val),"MAXLENGTH"===u.type&&(n=n&&e.trim().length<=u.val),"MIN"===u.type&&(n=n&&+e>=u.val),"MAX"===u.type&&(n=n&&+e<=u.val),"EMAIL"===u.type&&(n=n&&/^\S+@\S+\.\S+$/.test(e))}}catch(o){a=!0,i=o}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}},64:function(e,t,n){"use strict";var r=n(2),a=n(25),i=n(0),c=n.n(i),l=(n(65),n(63));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e,t){switch(t.type){case"CHANGE":return o({},e,{value:t.val,isValid:Object(l.d)(t.val,t.validators)});case"TOUCH":return o({},e,{isTouched:!0});default:return e}};t.a=function(e){var t=Object(i.useReducer)(s,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=Object(r.a)(t,2),a=n[0],l=n[1],u=e.id,o=e.onInput,p=a.value,d=a.isValid;Object(i.useEffect)((function(){o(e.id,a.value,a.isValid)}),[u,p,d,o]);var f=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},b=function(){l({type:"TOUCH"})},O="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,value:a.value,onBlur:b}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,value:a.value,onBlur:b});return c.a.createElement("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),O,!a.isValid&&a.isTouched&&c.a.createElement("p",null,e.errorText))}},65:function(e,t,n){},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(2),a=n(25),i=n(0);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var r in e.inputs)e.inputs[r]&&(n=r===t.inputId?n&&t.isValid:n&&e.inputs[r].isValid);return l({},e,{inputs:l({},e.inputs,Object(a.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},o=function(e,t){var n=Object(i.useReducer)(u,{inputs:e,isValid:t}),a=Object(r.a)(n,2),c=a[0],l=a[1];return[c,Object(i.useCallback)((function(e,t,n){l({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[l]),Object(i.useCallback)((function(e,t){l({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},68:function(e,t,n){"use strict";var r=n(2),a=n(0),i=n.n(a),c=(n(69),n(5));t.a=function(e){var t=Object(a.useState)(),n=Object(r.a)(t,2),l=n[0],u=n[1],o=Object(a.useState)(),s=Object(r.a)(o,2),p=s[0],d=s[1],f=Object(a.useState)(!1),b=Object(r.a)(f,2),O=b[0],v=b[1],m=Object(a.useRef)();Object(a.useEffect)((function(){if(l){var e=new FileReader;e.onload=function(){d(e.result)},e.readAsDataURL(l)}}),[l]);return i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{id:e.id,ref:m,style:{display:"none"},type:"file",accept:".jpg, .png, .jpeg",onChange:function(t){var n,r=O;t.target.files&&1===t.target.files.length?(n=t.target.files[0],u(n),v(!0),r=!0):(v(!1),r=!1),e.onInput(e.id,n,r)}}),i.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},i.a.createElement("div",{className:"image-upload__preview"},p&&i.a.createElement("img",{src:p,alt:"Preview"}),!p&&i.a.createElement("p",null,"Please pick an image")),i.a.createElement(c.a,{type:"button",onClick:function(){m.current.click()}},"PICK IMAGE")),!O&&i.a.createElement("p",null,e.errorText))}},69:function(e,t,n){},70:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),i=n(11),c=n(25),l=n(2),u=n(0),o=n.n(u),s=(n(70),n(13)),p=n(16),d=n(12),f=n(64),b=n(5),O=n(68),v=n(63),m=n(66),j=n(17),y=n(18);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=Object(u.useContext)(y.a),t=Object(u.useState)(!0),n=Object(l.a)(t,2),r=n[0],c=n[1],E=Object(j.a)(),P=E.isLoading,h=E.error,w=E.sendRequest,I=E.clearError,N=Object(m.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),V=Object(l.a)(N,3),T=V[0],C=V[1],S=V[2],D=function(){var t=Object(i.a)(a.a.mark((function t(n){var i,c,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!r){t.next=13;break}return t.prev=2,t.next=5,w(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL+"/users/login","POST",JSON.stringify({email:T.inputs.email.value,password:T.inputs.password.value}),{"Content-Type":"application/json"});case 5:i=t.sent,e.login(i.userId,i.token),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:t.next=27;break;case 13:return t.prev=13,(c=new FormData).append("email",T.inputs.email.value),c.append("name",T.inputs.name.value),c.append("password",T.inputs.password.value),c.append("image",T.inputs.image.value),t.next=21,w(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL+"/users/signup","POST",c);case 21:l=t.sent,e.login(l.userId,l.token),t.next=27;break;case 25:t.prev=25,t.t1=t.catch(13);case 27:case"end":return t.stop()}}),t,null,[[2,9],[13,25]])})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{error:h,onClear:I}),o.a.createElement(s.a,{className:"authentication"},P&&o.a.createElement(d.a,{asOverlay:!0}),o.a.createElement("h2",null,"Login"),o.a.createElement("hr",null),o.a.createElement("form",{onSubmit:D},!r&&o.a.createElement(f.a,{id:"name",element:"input",type:"text",label:"Name",validators:[Object(v.c)()],errorText:"Please enter your name.",onInput:C}),!r&&o.a.createElement(O.a,{id:"image",center:!0,onInput:C,errorText:"Please upload a profile picture"}),o.a.createElement(f.a,{id:"email",element:"input",type:"email",label:"Email",validators:[Object(v.a)()],errorText:"Please enter a valid email address.",onInput:C}),o.a.createElement(f.a,{id:"password",element:"input",type:"password",label:"Password",validators:[Object(v.b)(6)],errorText:"Please enter a valid password (min. 6 characters)",onInput:C}),o.a.createElement(b.a,{type:"submit",disabled:!T.isValid},r?"LOG IN":"SIGN UP")),o.a.createElement(b.a,{inverse:!0,onClick:function(e){r?S(g({},T.inputs,{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):S(g({},T.inputs,{name:void 0,image:void 0}),T.inputs.email.isValid&&T.inputs.password.isValid),c((function(e){return!e}))}},r?"SIGN UP":"LOGIN")))}}}]);
//# sourceMappingURL=4.ee30cdb9.chunk.js.map