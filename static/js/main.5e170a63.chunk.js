(this["webpackJsonpgoit-react-hw-06-phonebook-v2"]=this["webpackJsonpgoit-react-hw-06-phonebook-v2"]||[]).push([[0],{26:function(e,t,n){e.exports=n(44)},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(4),l=n.n(o),u=n(5),i=n(6),m=n(11),s=n(22),b=n(3),f=n(46),p={addContact:Object(i.b)("contact/add",(function(e){var t=e.name,n=e.number;return{payload:{contact:{id:Object(f.a)(),name:t,number:n}}}})),removeContact:Object(i.b)("contact/remove"),onChangeFilter:Object(i.b)("contact/filter")},d=Object(i.c)([],(a={},Object(m.a)(a,p.addContact,(function(e,t){return[].concat(Object(s.a)(e),[t.payload.contact])})),Object(m.a)(a,p.removeContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),h=Object(i.c)("",Object(m.a)({},p.onChangeFilter,(function(e,t){return t.payload}))),v=Object(b.c)({items:d,filter:h}),E=Object(i.a)({reducer:{contacts:v}}),O=n(47),y=(n(36),function(){return r.a.createElement("header",null,r.a.createElement(O.a,{in:!0,appear:!0,timeout:500,classNames:"logoIn"},r.a.createElement("h2",{className:"logo"},"PhoneBook")))}),C=(n(37),function(e){var t=e.children;return r.a.createElement("div",{className:"container"},t)}),N=n(20),j=n(21),g=n(24),I=n(23),k=(n(38),n(39),function(e){var t=e.label,n=e.placeholder,a=e.type,c=e.value,o=e.onInput;return r.a.createElement("label",null,r.a.createElement("p",{className:"labelName"},t),r.a.createElement("input",{type:a,placeholder:n,value:c,onChange:function(e){return o(e.target.value)},className:"input"}))}),w=n(16),S=(n(40),function(e){Object(g.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(N.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.notify=function(){return w.b.error(" This contact already exist!",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number;a&&c&&(e.props.contacts.map((function(e){return e.name})).find((function(e){return e===a}))===a?e.notify():e.props.onAddContact(e.state),e.setState({name:"",number:""}))},e.handleInput=function(t){e.setState({name:t})},e.handleNumber=function(t){e.setState({number:t})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form"},r.a.createElement(w.a,null),r.a.createElement(k,{label:"Name",type:"text",value:t,placeholder:"Enter your name",onInput:this.handleInput}),r.a.createElement(k,{label:"Number",type:"tel",value:n,placeholder:"Enter your number",onInput:this.handleNumber}),r.a.createElement("button",{type:"submit",className:"buttonSubmit"},"Add contact"))}}]),n}(c.Component)),x={onAddContact:p.addContact},F=Object(u.b)((function(e){return{contacts:e.contacts.items}}),x)(S),A=n(48),B=(n(41),{onRemoveContact:p.removeContact}),L=Object(u.b)((function(e){return{contacts:e.contacts.items.filter((function(t){return t.name.toLowerCase().includes(e.contacts.filter.toLowerCase())}))}}),B)((function(e){var t=e.contacts,n=e.onRemoveContact;return r.a.createElement(A.a,{component:"ul",className:"contactsList"},t.map((function(e){return r.a.createElement(O.a,{key:e.id,timeout:250,classNames:"contactIn"},r.a.createElement("li",{className:"contactItem"},r.a.createElement("span",{className:"contactText"},e.name," : ",e.number),r.a.createElement("button",{type:"button",className:"removeBtn",onClick:function(){return n(e.id)}},"X")))})))})),T=(n(42),{onFilter:p.onChangeFilter}),J=Object(u.b)((function(e){return{value:e.contacts.filter}}),T)((function(e){var t=e.value,n=e.onFilter;return r.a.createElement("div",{className:"filterContainer"},r.a.createElement("p",{className:"filterTitle"},"Find contact by name"),r.a.createElement("label",null,r.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},className:"filterInput"})))})),P=(n(43),Object(u.b)((function(e){return{contacts:e.contacts.items}}))((function(e){var t=e.contacts;return r.a.createElement(C,null,r.a.createElement(y,null),r.a.createElement(F,null),r.a.createElement(O.a,{in:t.length>1,timeout:250,classNames:"filterIn",unmountOnExit:!0},r.a.createElement(J,null)),r.a.createElement(L,null))})));l.a.render(r.a.createElement(u.a,{store:E},r.a.createElement(P,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.5e170a63.chunk.js.map