(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{56:function(e,a,t){e.exports=t(96)},61:function(e,a,t){},62:function(e,a,t){},64:function(e,a,t){},81:function(e,a,t){e.exports=t.p+"static/media/logo.509ef956.png"},87:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(23),c=t.n(r),o=(t(61),t(62),t(6)),m=t(20),i=t(9),s=t.n(i),u=t(24),d=t(17),p=t(19),E=(t(64),t(51)),b=t.n(E).a.create({baseURL:"http://localhost:3333"}),v=(t(81),t(113)),f=t(112),h=t(111);function g(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function y(e){var a=e.history,t=Object(n.useState)({}),r=Object(p.a)(t,2),c=r[0],m=r[1],i=[{id:!0,name:"Sim"},{id:!1,name:"N\xe3o"}];function E(){return(E=Object(d.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,b.post("/",{lead:c});case 4:e.sent,a.push("/leads"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("erro ao carregar a proxima pagina"),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function y(e){e.persist(),m((function(a){return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?g(t,!0).forEach((function(a){Object(u.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},a,Object(u.a)({},e.target.name,e.target.value))})),console.log(c.name)}return l.a.createElement("div",{className:"form-container"},l.a.createElement(v.a,null,l.a.createElement(f.a,{value:"new-tab",className:"Tab",centered:!0},l.a.createElement(o.b,{value:"new-tab",to:"/new",className:"main-link"},l.a.createElement(h.a,{value:"new-tab",label:"Cadastro de lead",className:"NavTabs"})),l.a.createElement(o.b,{value:"leads-tab",to:"/leads",className:"main-link"},l.a.createElement(h.a,{value:"leads-tab",label:"Lista de leads",className:"NavTabs"})),l.a.createElement(o.b,{value:"main-tab",to:"/main",className:"main-link"},l.a.createElement(h.a,{value:"main-tab",label:"Leads novos",className:"NavTabs"})))),l.a.createElement("h1",null,"Cadastro de Leads/Clientes"),l.a.createElement("form",{onSubmit:function(e){return E.apply(this,arguments)}},l.a.createElement("main",null,l.a.createElement("section",{className:"box"},l.a.createElement("input",{placeholder:"Nome",value:c.name,name:"name",onChange:y,required:!0}),l.a.createElement("input",{placeholder:"E-mail",value:c.email,name:"email",onChange:y,required:!0}),l.a.createElement("input",{placeholder:"Telefone",value:c.phone,name:"phone",onChange:y,required:!0}),l.a.createElement("input",{placeholder:"Link pra foto",value:c.avatar,name:"avatar",onChange:y}),l.a.createElement("input",{placeholder:"Respons\xe1vel pelo lead",value:c.responsible,name:"responsible",onChange:y}),l.a.createElement("select",{value:c.projectArea,name:"projectArea",onChange:y,required:!0},l.a.createElement("option",{value:"",disabled:!0,selected:!0},"-- \xc1rea do portf\xf3lio --"),[{id:1,name:"APP"},{id:2,name:"ELT"},{id:3,name:"FV"},{id:4,name:"PE"},{id:5,name:"WEB"}].map((function(e){return l.a.createElement("option",{key:e.id,value:e.name},e.name)})))),l.a.createElement("section",{className:"box"},l.a.createElement("input",{placeholder:"N\xfamero de funcion\xe1rios",value:c.numberOfEmployees,name:"numberOfEmployees",onChange:y}),l.a.createElement("input",{placeholder:"Segmento",value:c.segment,name:"segment",onChange:y}),l.a.createElement("select",{placeholder:"Como chegou",value:c.howItArrived,name:"howItArrived",onChange:y,required:!0},l.a.createElement("option",{value:"",disabled:!0,selected:!0},"-- Como chegou --"),[{id:1,name:"Desconhecido"},{id:2,name:"Google"},{id:3,name:"Instagram"},{id:4,name:"UFMG"},{id:5,name:"Cliente Antigo"},{id:6,name:"Indica\xe7\xe3o"},{id:7,name:"Prospec\xe7\xe3o ativa"},{id:8,name:"LinkedIn"},{id:9,name:"WhatsApp"},{id:10,name:"Facebook"}].map((function(e){return l.a.createElement("option",{key:e.id,value:e.name},e.name)}))),l.a.createElement("select",{value:c.decisionMaker,name:"decisionMaker",onChange:y},l.a.createElement("option",{value:"",disabled:!0,selected:!0},"-- Tomador de decis\xe3o? --"),i.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)}))),l.a.createElement("select",{value:c.knowsAboutCPE,name:"knowsAboutCPE",onChange:y},l.a.createElement("option",{value:"",disabled:!0,selected:!0},"-- Conhece o MEJ, como a CPE funciona, etc? --"),i.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)}))),l.a.createElement("textarea",{placeholder:"Detalhes",value:c.details,name:"details",onChange:y}))),l.a.createElement("button",{type:"submit"},"Enviar")))}t(87);var N=t(22),O=t.n(N),w=(t(30),t(21)),k=t.n(w);function C(e){var a=Object(n.useState)([]),t=Object(p.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/attentionLeads",{});case 2:a=e.sent,c(a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),l.a.createElement("div",{className:"main-container"},l.a.createElement(v.a,null,l.a.createElement(f.a,{value:"main-tab",className:"Tab",centered:!0},l.a.createElement(o.b,{value:"new-tab",to:"/new",className:"main-link"},l.a.createElement(h.a,{value:"new-tab",label:"Cadastro de lead",className:"NavTabs"})),l.a.createElement(o.b,{value:"leads-tab",to:"/leads",className:"main-link"},l.a.createElement(h.a,{value:"leads-tab",label:"Lista de leads",className:"NavTabs"})),l.a.createElement(o.b,{value:"main-tab",to:"/main",className:"main-link"},l.a.createElement(h.a,{value:"main-tab",label:"Leads novos",className:"NavTabs"})))),l.a.createElement("h1",null,"Leads saindo do forno"),l.a.createElement("ul",null,r.map((function(e){return l.a.createElement("li",{key:e._id},l.a.createElement("img",{src:e.avatar,alt:e.name}),l.a.createElement("footer",null,l.a.createElement("strong",null,e.name),l.a.createElement("p",{className:"status-badge"},e.status),null!=e.returnDate?l.a.createElement("p",{className:"status-badge"},O()(e.returnDate).calendar()):"",l.a.createElement("p",null,"oi"),l.a.createElement("p",null,e.details)),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{type:"button",className:"card-button"},"Qualifica\xe7\xe3o: ",l.a.createElement("p",null,e.decisionMaker?l.a.createElement(k.a,null):"",e.numberOfEmployees<10?l.a.createElement(k.a,null):"",e.knowsAboutCPE?l.a.createElement(k.a,null):"")),l.a.createElement("button",{type:"button",className:"card-button"},l.a.createElement(o.b,{to:"/edit/".concat(e._id),className:"main-link"},"Editar"))))}))))}t(91);function j(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function x(e){var a=e.match,t=e.history,r=Object(n.useState)({}),c=Object(p.a)(r,2),o=c[0],m=c[1],i=a.params.id,E=[{id:!0,name:"Sim"},{id:!1,name:"N\xe3o"}];function v(e){e.persist(),m((function(a){return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?j(t,!0).forEach((function(a){Object(u.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},a,Object(u.a)({},e.target.name,e.target.value))}))}function f(){return(f=Object(d.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.preventDefault(),e.next=4,b.put("/update/".concat(i),{user:o});case 4:e.sent,console.log(o),console.log("clique"),t.push("/leads"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("erro ao carregar a proxima pagina"),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/user/".concat(i));case 2:a=e.sent,m(a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a.params._id]),l.a.createElement("div",{className:"edit-container"},l.a.createElement("h1",null,"Editar Lead"),l.a.createElement("form",{onSubmit:function(e){return f.apply(this,arguments)}},l.a.createElement("section",{className:"avatar-box"},l.a.createElement("img",{src:o.avatar,alt:"avatar"}),l.a.createElement("input",{type:"text",name:"avatar",value:o.avatar,onChange:v})),l.a.createElement("section",{className:"box"},l.a.createElement("p",null,"Nome"),l.a.createElement("input",{id:"name",type:"text",name:"name",value:o.name,onChange:v}),l.a.createElement("p",null,"E-mail"),l.a.createElement("input",{id:"email",name:"email",type:"text",value:o.email,onChange:v}),l.a.createElement("p",null,"Telefone"),l.a.createElement("input",{id:"phone",name:"phone",type:"text",value:o.phone,onChange:v}),l.a.createElement("p",null,"\xc1rea do Portf\xf3lio"),l.a.createElement("select",{value:o.projectArea,name:"projectArea",onChange:v},[{id:1,name:"APP"},{id:2,name:"ELT"},{id:3,name:"FV"},{id:4,name:"PE"},{id:5,name:"WEB"}].map((function(e){return l.a.createElement("option",{key:e.id,value:e.name},e.name)}))),l.a.createElement("p",null,"Como chegou"),l.a.createElement("select",{value:o.howItArrived,name:"howItArrived",onChange:v},[{id:1,name:"Desconhecido"},{id:2,name:"Google"},{id:3,name:"Instagram"},{id:4,name:"UFMG"},{id:5,name:"Cliente Antigo"},{id:6,name:"Indica\xe7\xe3o"},{id:7,name:"Prospec\xe7\xe3o ativa"},{id:8,name:"LinkedIn"},{id:9,name:"WhatsApp"},{id:10,name:"Facebook"}].map((function(e){return l.a.createElement("option",{key:e.id,value:e.name},e.name)})))),l.a.createElement("section",{className:"box"},l.a.createElement("p",null,"Tomador de decis\xe3o?"),l.a.createElement("select",{value:o.decisionMaker,name:"decisionMaker",onChange:v},E.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)}))),l.a.createElement("p",null,"Conhece MEJ, EJ...?"),l.a.createElement("select",{value:o.knowsAboutCPE,name:"knowsAboutCPE",onChange:v},E.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)}))),l.a.createElement("p",null,"Segmento"),l.a.createElement("input",{name:"segment",type:"text",value:o.segment,onChange:v}),l.a.createElement("p",null,"Respons\xe1vel pelo Lead"),l.a.createElement("input",{name:"responsible",type:"text",value:o.responsible,onChange:v}),l.a.createElement("p",null,"Detalhes"),l.a.createElement("textarea",{name:"details",type:"text",value:o.details,onChange:v})),l.a.createElement("section",{className:"box"},l.a.createElement("p",null,"Data de retorno"),l.a.createElement("input",{name:"returnDate",type:"date",value:o.returnDate,onChange:v}),l.a.createElement("p",null,"N\xfamero de pessoas na empresa"),l.a.createElement("input",{name:"numberOfEmployees",type:"text",value:o.numberOfEmployees,onChange:v}),l.a.createElement("p",null,"Status"),l.a.createElement("select",{value:o.status,name:"status",onChange:v},[{id:1,name:"N\xe3o iniciado"},{id:2,name:"Retornar"},{id:3,name:"Em progresso"},{id:4,name:"Assinado"},{id:5,name:"Cancelado"}].map((function(e){return l.a.createElement("option",{key:e.id,value:e.name},e.name)}))),l.a.createElement("button",{type:"submit"},"Enviar"))))}t(92);function P(e){var a=Object(n.useState)([]),t=Object(p.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/index",{});case 2:a=e.sent,c(a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),l.a.createElement("div",{className:"index-container"},l.a.createElement(v.a,null,l.a.createElement(f.a,{value:"leads-tab",className:"Tab",centered:!0},l.a.createElement(o.b,{value:"new-tab",to:"/new",className:"index-link"},l.a.createElement(h.a,{value:"new-tab",label:"Cadastro de lead",className:"NavTabs"})),l.a.createElement(o.b,{value:"leads-tab",to:"/leads",className:"index-link"},l.a.createElement(h.a,{value:"leads-tab",label:"Lista de leads",className:"NavTabs"})),l.a.createElement(o.b,{value:"main-tab",to:"/main",className:"index-link"},l.a.createElement(h.a,{value:"main-tab",label:"Leads novos",className:"NavTabs"})))),l.a.createElement("h1",null,"Lista de Leads"),l.a.createElement("ul",null,r.map((function(e){return l.a.createElement("li",{key:e._id},l.a.createElement("img",{src:e.avatar,alt:e.name}),l.a.createElement("footer",null,l.a.createElement("strong",null,e.name),l.a.createElement("p",{className:"status-badge"},e.status),null!=e.returnDate?l.a.createElement("p",{className:"status-badge"},O()(e.returnDate).calendar()):"",l.a.createElement("p",null,e.details)),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{type:"button",className:"card-button"},"Qualifica\xe7\xe3o: ",l.a.createElement("p",null,e.decisionMaker?l.a.createElement(k.a,null):"",e.numberOfEmployees<10?l.a.createElement(k.a,null):"",e.knowsAboutCPE?l.a.createElement(k.a,null):"")),l.a.createElement("button",{className:"card-button"},l.a.createElement(o.b,{to:"/edit/".concat(e._id),className:"index-link"},"Editar"))))}))))}function A(){return l.a.createElement(o.a,null,l.a.createElement(m.a,{path:"/new",component:y}),l.a.createElement(m.a,{path:"/main",component:C}),l.a.createElement(m.a,{path:"/leads",component:P}),l.a.createElement(m.a,{path:"/edit/:id",component:x}))}t(93).config();var D=function(){return l.a.createElement(A,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.3b489404.chunk.js.map