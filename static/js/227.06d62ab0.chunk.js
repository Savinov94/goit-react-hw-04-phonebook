"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[227],{227:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.r(r),t.d(r,{default:function(){return l}});var a=t(885),c=t(791),i={form:"Form_form__e1yzW",input:"Form_input__FTtTw",formButton:"Form_formButton__7mGGM"},m=t(184),l=function(e){var r=e.onSubmit,t=(0,c.useState)({name:"",number:""}),o=(0,a.Z)(t,2),l=o[0],s=o[1],f=function(e){var r=e.currentTarget,t=r.name,o=r.value;s((function(e){return u(u({},e),{},n({},t,o))}))},p=function(){s({name:"",number:""})};return(0,m.jsx)("div",{className:i.formContainer,children:(0,m.jsxs)("form",{className:i.form,onSubmit:function(e){e.preventDefault();var t=l.name,n=l.number,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,r){return e+((r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_")}),"")}();r({id:o,name:t,number:n}),p()},children:[(0,m.jsx)("label",{children:(0,m.jsx)("input",{className:i.input,type:"text",name:"name",placeholder:"Name",value:l.name,onChange:f,required:!0})}),(0,m.jsx)("label",{children:(0,m.jsx)("input",{className:i.input,type:"tel",placeholder:"Number",name:"number",value:l.number.replace(/[^0-9.]/g,""),onChange:f,required:!0})}),(0,m.jsx)("button",{className:i.formButton,children:"Add Contact"})]})})}}}]);
//# sourceMappingURL=227.06d62ab0.chunk.js.map