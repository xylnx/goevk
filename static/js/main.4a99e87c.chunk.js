(this.webpackJsonpgoevk=this.webpackJsonpgoevk||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(16),r=n.n(s),i=n(7),l=n(0),o=function(){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)(i.b,{to:"/",children:Object(l.jsxs)("h1",{children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",className:"bi bi-lightning-charge",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"})}),"goeVK"]})}),Object(l.jsx)("div",{className:"header_claim",children:"Dein Veranstaltungskalender f\xfcr G\xf6ttingen"})]})},d=function(){return Object(l.jsxs)("nav",{className:"nav",children:[Object(l.jsx)(i.c,{exact:!0,to:"/",className:"btn nav__item today",children:"Heute"}),Object(l.jsx)(i.c,{exact:!0,to:"/tomorrow",className:"btn nav__item tomorrow",children:"Morgen"}),Object(l.jsx)(i.c,{to:"/all",className:"btn nav__item all",children:"Alle Veranstaltungen"})]})},j=n(9),h=n(14),u=n.n(h),v=n(19);var b=function(e){return e.forEach((function(e){var t=function(e,t){var n=new Date(e),a={weekday:"short",year:"numeric",month:"long",hour:"numeric",minute:"numeric",day:"numeric",timeZone:"Europe/Berlin"},c=new Intl.DateTimeFormat("de-DE",a).format(n).split(",");return{weekday:c[0],date:c[1],time:c[2].trim(),month:n.getMonth(),day:n.getDate()}}(e.date,e.name);e.dateDetails=t})),e},m=function(e){var t=Object(a.useState)(null),n=Object(j.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(!1),i=Object(j.a)(r,2),l=i[0],o=i[1];return Object(a.useEffect)((function(){(function(){var t=Object(v.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,a=b(a),s(a),o(!1);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),{data:c,pending:l}},x=function(e){var t=e.event;return Object(l.jsx)("article",{className:"event-card","data-color":t.dateDetails.weekday,children:Object(l.jsxs)("a",{href:t.link,target:"blank",rel:"noopener",children:[Object(l.jsxs)("div",{className:"event-card__upper",children:[Object(l.jsx)("div",{className:"event__place",children:t.place}),Object(l.jsx)("div",{className:"event__date",children:t.dateDetails.date}),Object(l.jsxs)("div",{className:"event__day",children:["[ ",t.dateDetails.weekday," ]"]}),Object(l.jsx)("div",{className:"event__type",children:t.type})]}),Object(l.jsxs)("div",{className:"event-card__lower",children:[Object(l.jsx)("div",{className:"event__time",children:t.dateDetails.time}),Object(l.jsx)("div",{className:"event__name",children:t.name}),Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",className:"bi bi-forward-fill",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z"})})]})]})})},O=function(e){var t=e.today,n=(e.setToday,e.pending);return Object(l.jsxs)("div",{className:"eventsNone__container",children:[Object(l.jsx)("div",{className:"eventsNone__svg-container",children:Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",className:"".concat(n?"svgLoading":""," bi bi-boombox"),viewBox:"0 0 16 16",children:[Object(l.jsx)("path",{d:"M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"}),Object(l.jsx)("path",{d:"M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"})]})}),n&&Object(l.jsxs)("div",{className:"eventsNone__copy",children:[Object(l.jsx)("span",{className:"text-bold",children:"Einen Moment... "}),Object(l.jsx)("p",{children:"Ich suche nach Veranstaltungen."})]}),t&&!n&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"eventsNone__copy",children:[Object(l.jsx)("span",{className:"text-bold",children:"Ooops"}),", leider finde ich keine Events f\xfcr heute. Guck doch mal, was in den kommenden Tagen los ist:"]}),Object(l.jsx)("div",{children:Object(l.jsx)(i.b,{to:"/all",className:"nav__item",children:"Alle Veranstaltungen"})})]}),!t&&!n&&Object(l.jsxs)("div",{className:"eventsNone__copy",children:[Object(l.jsx)("span",{className:"text-bold",children:"Leider finde ich keine Veranstaltungen."})," ","Schau sp\xe4ter nochmal vorbei."]})]})};function g(){document.querySelector(".event-list").classList.remove("viewTrans")}var p=function(e){var t=e.filter,n=Object(a.useState)(!0),c=Object(j.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(null),o=Object(j.a)(i,2),d=o[0],h=o[1],u=m("https://sleepy-crag-13951.herokuapp.com/bvents.json"),v=u.data,b=u.pending;return Object(a.useEffect)((function(){h(t(v)),"FilterToday"===t.name?r(!0):r(!1),document.querySelector(".event-list").classList.add("viewTrans"),setTimeout(g,600)}),[v,t]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"event-list",children:[d&&d.map((function(e,t){return Object(l.jsx)(x,{event:e,index:t},t)})),!d&&Object(l.jsx)(O,{today:s,setToday:r,pending:b})]})})},f=n(2),w=function(){var e=new Date;return{month:e.getMonth(),date:e.getDate(),hours:e.getHours()}},N=function(e){var t=[],n=w();return e?(e.forEach((function(e){var a=new Date(e.date);a.getMonth()===n.month&&a.getDate()===n.date&&a.getHours()>=n.hours-2&&t.push(e)})),t.length?t:null):null},_=function(e){var t=[],n=w();return e?(e.forEach((function(e){var a=new Date(e.date);a.getMonth()===n.month&&a.getDate()===n.date+1&&t.push(e)})),t.length?t:null):null},y=function(e){var t=[],n=w();return e?(e.forEach((function(e){var a=new Date(e.date);a.getMonth()===n.month&&a.getDate()<n.date||a.getMonth()===n.month&&a.getDate()===n.date&&a.getHours()<=n.hours-2||t.push(e)})),t.length?t:null):null};var D=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(d,{}),Object(l.jsx)("main",{className:"main",children:Object(l.jsxs)(f.c,{children:[Object(l.jsx)(f.a,{exact:!0,path:"/",children:Object(l.jsx)(p,{filter:N})}),Object(l.jsx)(f.a,{exact:!0,path:"/tomorrow",children:Object(l.jsx)(p,{filter:_})}),Object(l.jsx)(f.a,{exact:!0,path:"/all",children:Object(l.jsx)(p,{filter:y})})]})})]})})};n(31);r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4a99e87c.chunk.js.map