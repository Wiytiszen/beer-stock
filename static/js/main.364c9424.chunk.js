(this["webpackJsonpbrewer-stock"]=this["webpackJsonpbrewer-stock"]||[]).push([[0],{32:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"addItem",(function(){return v})),a.d(n,"increaseItem",(function(){return g})),a.d(n,"decreaseItem",(function(){return h})),a.d(n,"editItem",(function(){return O})),a.d(n,"addGroup",(function(){return I})),a.d(n,"editGroup",(function(){return N})),a.d(n,"delGroup",(function(){return y})),a.d(n,"delItem",(function(){return j})),a.d(n,"confBatch",(function(){return U})),a.d(n,"newBatch",(function(){return q})),a.d(n,"editBatch",(function(){return C})),a.d(n,"delBatch",(function(){return M}));var r=a(0),u=a.n(r),o=a(17),i=a.n(o),m=a(5),l=a(4),c=a(7),s=a(1),d=function(e,t){var a=function(){return(new Date).toLocaleDateString()};switch(t.type){case"ADD_ITEM":console.log(t);var n={name:t.edition.name,amount:t.edition.amount,measureUnit:t.edition.measureUnit,provider:t.edition.provider,group:t.edition.group,lastModification:a(),uniqueId:Date.now(),by:"User",lastAmount:0};return Object(s.a)(Object(s.a)({},e),{},{items:[].concat(Object(c.a)(e.items),[n])});case"DEL_ITEM":return Object(s.a)(Object(s.a)({},e),{},{items:e.items.filter((function(e){return e.uniqueId!==t.payload}))});case"INCRE_ITEM":var r=Object(c.a)(e.items).map((function(e){return e.uniqueId===t.uniqueId&&(e.amount=Number(e.amount)+Number(t.amount),e.lastModification=a()),e}));return Object(s.a)(Object(s.a)({},e),{},{items:r});case"DECRE_ITEM":var u=Object(c.a)(e.items).map((function(e){return e.uniqueId===t.uniqueId&&(e.amount=Number(e.amount)-Number(t.amount),e.lastModification=a()),e}));return Object(s.a)(Object(s.a)({},e),{},{items:u});case"EDIT_ITEM":var o=Object(c.a)(e.items).map((function(e){return e.uniqueId===t.uniqueId&&(e.name=t.edition.name,e.amount=t.edition.amount,e.measureUnit=t.edition.measureUnit,e.provider=t.edition.provider,e.group=t.edition.group,e.lastModification=a()),e}));return Object(s.a)(Object(s.a)({},e),{},{items:o});case"ADD_GROUP":return Object(s.a)(Object(s.a)({},e),{},{groups:[].concat(Object(c.a)(e.groups),[t.name])});case"EDIT_GROUP":var i=t.index,m=t.name,l=Object(c.a)(e.groups),d=Object(c.a)(e.items).map((function(e){return e.group===l[i]&&(e.group=m),e}));return l[i]=m,Object(s.a)(Object(s.a)({},e),{},{groups:l,items:d});case"DEL_GROUP":var p=Object(c.a)(e.groups.filter((function(e){return e!==t.name}))),b=Object(c.a)(e.items.filter((function(e){return e.group!==t.name})));return Object(s.a)(Object(s.a)({},e),{},{items:b,groups:p});case"CONF_BATCH":var f=e.batches.find((function(e){return e.name===t.name})),E=Object(c.a)(e.items);return E.forEach((function(e){f.items.forEach((function(t){e.uniqueId===t.uniqueId&&(e.amount-=t.amount)}))})),Object(s.a)(Object(s.a)({},e),{},{items:E});case"NEW_BATCH":return Object(s.a)(Object(s.a)({},e),{},{batches:[].concat(Object(c.a)(e.batches),[t.newBatch])});case"EDIT_BATCH":var v=e.batches.map((function(e){return e.name===t.name&&(e.items=t.items),e}));return Object(s.a)(Object(s.a)({},e),{},{batches:v});case"DEL_BATCH":var g=Object(c.a)(e.batches.filter((function(e){return e.name!==t.name})));return Object(s.a)(Object(s.a)({},e),{},{batches:g});default:return e}},p={items:[{uniqueId:.2873468322861428,amount:200,measureUnit:"Kg.",name:"Malta Pilsner",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"malta"},{uniqueId:.287346832286219,amount:200,measureUnit:"Kg.",name:"Malta Cristal",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"malta"},{uniqueId:.918547190834639,amount:200,measureUnit:"Kg.",name:"Malta Pale",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"malta"},{uniqueId:.16265875615902559,amount:200,measureUnit:"Kg.",name:"Malta Pale",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"malta"},{uniqueId:.084241251958455,amount:200,measureUnit:"Kg.",name:"Malta Vienna",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"malta"},{uniqueId:.9714672288516308,amount:200,measureUnit:"Kg.",name:"Malta Munich",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"malta"},{uniqueId:.6427853450570928,amount:200,measureUnit:"Kg.",name:"Malta Caramelo 120",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"malta"},{uniqueId:.5517986796276413,amount:200,measureUnit:"Kg.",name:"Malta Caramelo 30",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"malta"},{uniqueId:.9364989727933482,amount:200,measureUnit:"Kg.",name:"Malta Caramelo 60",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"malta"},{uniqueId:.5212232952801132,amount:200,measureUnit:"Kg.",name:"Malta Chocolate",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"malta"},{uniqueId:.8955726100039958,amount:200,measureUnit:"Kg.",name:"Malta Tostada",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"malta"},{uniqueId:.19591919428272564,amount:200,measureUnit:"Kg.",name:"Malta Roasted Barley",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"malta"},{uniqueId:.08890995459179507,amount:200,measureUnit:"Kg.",name:"Trigo",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"other"},{uniqueId:.7138350691402056,amount:200,measureUnit:"Kg.",name:"Avena",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"other"},{uniqueId:.9227720854209036,amount:200,measureUnit:"Kg.",name:"Lupulo Amarillo",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.9227720854999999,amount:200,measureUnit:"Kg.",name:"Lupulo Perle",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.9227720854775022,amount:200,measureUnit:"Kg.",name:"Lupulo Tettnanger",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.922772085756075,amount:200,measureUnit:"Kg.",name:"Lupulo Hallertauer",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.16851239727954326,amount:200,measureUnit:"Kg.",name:"Lupulo Centennial",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.5133029541445597,amount:200,measureUnit:"Kg.",name:"Lupulo Simcoe",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.1990584855399884,amount:200,measureUnit:"Kg.",name:"Lupulo Cascade",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.8799404282202932,amount:200,measureUnit:"Kg.",name:"Lupulo Willamette",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.24853705432690032,amount:200,measureUnit:"Kg.",name:"Lupulo Bravo",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.9227147339056385,amount:200,measureUnit:"Kg.",name:"Lupulo Chinook",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.20102296810594233,amount:200,measureUnit:"Kg.",name:"Lupulo Citra",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.9504147973188446,amount:200,measureUnit:"Kg.",name:"Lupulo Magnum",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.9584831248050265,amount:200,measureUnit:"Kg.",name:"Lupulo Mandarina Bavaria",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.7744638623298989,amount:200,measureUnit:"Kg.",name:"Lupulo Nugget",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.20024275797072955,amount:200,measureUnit:"Kg.",name:"Lupulo Zeus",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"},{uniqueId:.25408371726283274,amount:200,measureUnit:"Kg.",name:"Lupulo Columbus",lastModification:"21-3-1990",by:"User",provider:"proveedorX",lastAmount:20,group:"lupulo"}],groups:["malta","lupulo","barrilles","accesorios"],batches:[{name:"IPA",items:[{itemName:"Malta Pale",uniqueId:.918547190834639,amount:5},{itemName:"Malta Cristal",uniqueId:.287346832286219,amount:.25},{itemName:"Lupulo Cascade",uniqueId:.1990584855399884,amount:.1},{itemName:"Lupulo Citra",uniqueId:.20102296810594233,amount:.025}]},{name:"Pilsner",items:[{itemName:"Malta Pilsner",uniqueId:.2873468322861428,amount:5},{itemName:"Lupulo Hallertauer",uniqueId:.922772085756075,amount:.06},{itemName:"Lupulo Perle",uniqueId:.9227720854999999,amount:.03},{itemName:"Lupulo Tettnanger",uniqueId:.9227720854775022,amount:.03}]}]},b=Object(l.b)(d,p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),f=a(3),E=function(e){return u.a.createElement(f.b,{to:"/"},u.a.createElement("h1",null,"STOCKED"))},v=function(e){return{type:"ADD_ITEM",edition:e}},g=function(e,t){return{type:"INCRE_ITEM",uniqueId:e,amount:t}},h=function(e,t){return{type:"DECRE_ITEM",uniqueId:e,amount:t}},O=function(e,t){return{type:"EDIT_ITEM",uniqueId:e,edition:t}},I=function(e){return{type:"ADD_GROUP",name:e}},N=function(e,t){return{type:"EDIT_GROUP",index:e,name:t}},y=function(e){return{type:"DEL_GROUP",name:e}},j=function(e){return{type:"DEL_ITEM",payload:e}},U=function(e){return{type:"CONF_BATCH",name:e}},q=function(e){return{type:"NEW_BATCH",newBatch:e}},C=function(e,t){return{type:"EDIT_BATCH",name:e,items:t}},M=function(e){return{type:"DEL_BATCH",name:e}},A=Object(m.b)((function(e){return{items:e.items,groups:e.groups}}),(function(e){return Object(s.a)({},Object(l.a)(n,e))}))((function(e){var t,a,n,r=!1;("/list/items"===e.match.path&&(t=e.items,a=!0),e.match.params.group)&&(a=!0,r=!0,n=e.match.params.group,e.groups.find((function(e){return e===n}))||e.history.push("/list/groups"),t=e.items.filter((function(t){return t.group===e.match.params.group})));return"/list/groups"===e.match.path&&(t=e.groups,a=!1),u.a.createElement(u.a.Fragment,null,u.a.createElement(E,null),u.a.createElement("div",{className:"random-list"},u.a.createElement("div",{className:"list-btn-group"},u.a.createElement("div",{className:"item-btn button",onClick:e.history.goBack},u.a.createElement("i",{class:"fas fa-reply"})),!a||u.a.createElement("div",{className:"item-btn button"},u.a.createElement(f.b,{to:"/itemForm"},"New Item")),a||u.a.createElement("div",{className:"item-btn button"},u.a.createElement(f.b,{to:"/createGroup"},"New Category"))),u.a.createElement("div",{className:"list"},r&&u.a.createElement("div",{className:"category-name"},u.a.createElement(f.b,{to:"/editGroup/".concat(n)},u.a.createElement("p",null,n),u.a.createElement("i",{class:"far fa-edit"}))),t.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})).map((function(e,t){return a?u.a.createElement("div",{className:"listed-item",key:t},u.a.createElement(f.b,{to:"/list/items/".concat(e.uniqueId)},u.a.createElement("h4",null,e.name),u.a.createElement("span",null,e.lastModification))):u.a.createElement("div",{className:"listed-item",key:t},u.a.createElement(f.b,{to:"/list/groups/".concat(e)},u.a.createElement("h4",null,e)))})))))})),k=function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(E,null),u.a.createElement("div",{className:"main-menu"},u.a.createElement("div",{className:"menu-btn-list"},u.a.createElement("div",{className:"main-btns"},u.a.createElement("div",{className:"square-btn-lg menu-button button"},u.a.createElement(f.b,{exact:!0,to:"/list/items"},u.a.createElement("div",{className:"btn-text"},u.a.createElement("i",{className:"fas fa-boxes"}),u.a.createElement("p",null,"All Goods"),u.a.createElement("span",null,"130 Units")))),u.a.createElement("div",{className:"group-btn-small"},u.a.createElement("div",{className:"square-btn-small menu-button button"},u.a.createElement(f.b,{to:"/itemForm"},u.a.createElement("div",{className:"btn-text"},u.a.createElement("i",{className:"fas fa-plus"})))),u.a.createElement("div",{className:"square-btn-small menu-button button"},u.a.createElement(f.b,{to:"/rapidForm/out"},u.a.createElement("div",{className:"btn-text"},u.a.createElement("i",{className:"fas fa-minus"})))))),u.a.createElement("div",{className:"full-width-btn menu-button button"},u.a.createElement(f.b,{to:"/list/groups"},"Categories")),u.a.createElement("div",{className:"full-width-btn menu-button button"},u.a.createElement(f.b,{to:"/list/batchList"},"Stock Out ")),u.a.createElement("div",{className:"full-width-btn menu-button button"},u.a.createElement(f.b,{to:"/"},"Contacts ")))))},w=a(6),_=Object(m.b)((function(e){return{items:e.items,groups:e.groups}}),(function(e){return Object(s.a)({},Object(l.a)(n,e))}))((function(e){var t=e.match.path.includes("/createGroup"),a=Object(r.useState)(e.match.params.group||""),n=Object(w.a)(a,2),o=n[0],i=n[1],m=e.match.params.group,l=function(e){i("")};return u.a.createElement(u.a.Fragment,null,u.a.createElement(E,null),u.a.createElement("div",{className:"item-form"},u.a.createElement("form",null,u.a.createElement("label",null,u.a.createElement("span",null,"New Category:"),u.a.createElement("input",{type:"text",value:o,onChange:function(e){i(e.target.value)}})),u.a.createElement("div",{className:"form-btn-group"},u.a.createElement("button",{type:"submit",className:"form-btn",onClick:function(a){return function(a){if(a.preventDefault(),!t){var n=e.groups.indexOf(m);return e.editGroup(n,o),e.history.push("/list/groups/".concat(o)),void l()}e.addGroup(o),l()}(a)}},u.a.createElement("i",{class:"far fa-save"})),!t&&u.a.createElement("div",{className:"form-btn delete",onClick:function(){e.delGroup(o),l(),e.history.push("/list/groups")}},u.a.createElement("i",{class:"far fa-trash-alt"})),u.a.createElement("div",{className:"form-btn reply",onClick:e.history.goBack},u.a.createElement("i",{class:"fas fa-reply"}))))))})),L=a(12),X=Object(m.b)((function(e){return{items:e.items,groups:e.groups}}),(function(e){return Object(s.a)({},Object(l.a)(n,e))}))((function(e){var t=Object(L.f)(),a=e.match.path.includes("/rapidForm/in"),n=e.items.find((function(t){return String(t.uniqueId)===e.match.params.itemId}))||{},o=Object(r.useState)(""),i=Object(w.a)(o,2),m=i[0],l=i[1],c=Object(r.useState)(""),s=Object(w.a)(c,2),d=s[0],p=s[1],b=Object(r.useState)(""),f=Object(w.a)(b,2),v=f[0],g=f[1],h=Object(r.useState)([]),O=Object(w.a)(h,2),I=O[0],N=O[1],y=Object(r.useState)(""),j=Object(w.a)(y,2),U=j[0],q=j[1],C=Object(r.useState)(),M=Object(w.a)(C,2),A=M[0],k=M[1],_=function(){q("")};return u.a.createElement(u.a.Fragment,null,u.a.createElement(E,null),u.a.createElement("div",{className:"item-form"},!a&&u.a.createElement("div",{className:"search"},u.a.createElement("label",null,u.a.createElement("span",null,u.a.createElement("i",{class:"fas fa-search"})),u.a.createElement("input",{type:"text",placeholder:"Search item...",value:v,onChange:function(t){!function(t){g(t.target.value);var a=new RegExp(t.target.value,"gi");""!==t.target.value?N((function(){return e.items.filter((function(e){return console.log(v),e.name.match(a)}))})):N([])}(t)}})),u.a.createElement("div",{className:"search-results"},I.map((function(e){return u.a.createElement("div",{onClick:function(){return function(e){g(""),N([]),t.push("/rapidForm/out/".concat(e.uniqueId)),l(e.name),p(e.measureUnit),k(e.uniqueId)}(e)}},u.a.createElement("h4",null,e.name))})))),u.a.createElement("form",null,u.a.createElement("p",null,m||n.name),u.a.createElement("label",null,u.a.createElement("span",null,"amount:"),u.a.createElement("input",{type:"text",value:U,name:"amount",onChange:function(e){q(e.target.value)}}),u.a.createElement("span",null,d||n.measureUnit)),u.a.createElement("div",{className:"form-btn-group"},u.a.createElement("button",{type:"submit",className:"form-btn button",onClick:function(t){return function(t){if(t.preventDefault(),a)return e.increaseItem(n.uniqueId,U),void _();e.decreaseItem(A,U),_()}(t)}},u.a.createElement("i",{class:"far fa-save"})),u.a.createElement("div",{className:"form-btn reply button",onClick:e.history.goBack},u.a.createElement("i",{class:"fas fa-reply"}))))))})),D=a(20),B=Object(m.b)((function(e){return{items:e.items,groups:e.groups}}),(function(e){return Object(s.a)({},Object(l.a)(n,e))}))((function(e){var t=Object(L.f)(),a=!!e.match.params.itemId,n=e.items.find((function(t){return String(t.uniqueId)===e.match.params.itemId}))||{name:"",amount:"",measureUnit:"",provider:"",group:""},o=Object(r.useState)(""),i=Object(w.a)(o,2),m=i[0],l=i[1],c=Object(r.useState)([]),d=Object(w.a)(c,2),p=d[0],b=d[1],f=Object(r.useState)(n),v=Object(w.a)(f,2),g=v[0],h=g.name,O=g.amount,I=g.measureUnit,N=g.provider,y=g.group,j=v[1],U=function(e){var t=e.target,a=t.name,n=t.value;j((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(D.a)({},a,n))}))},q=function(){j(Object(s.a)({},n))};return u.a.createElement(u.a.Fragment,null,u.a.createElement(E,null),u.a.createElement("div",{className:"item-form"},!a&&u.a.createElement("div",{className:"search"},u.a.createElement("label",null,u.a.createElement("span",null,u.a.createElement("i",{class:"fas fa-search"})),u.a.createElement("input",{type:"text",placeholder:"Search item...",value:m,onChange:function(t){!function(t){l(t.target.value);var a=new RegExp(t.target.value,"gi");""!==t.target.value?b((function(){return e.items.filter((function(e){return console.log(m),e.name.match(a)}))})):b([])}(t)}})),u.a.createElement("div",{className:"search-results"},p.map((function(e){return u.a.createElement("div",{onClick:function(){return function(e){l(""),b([]),t.push("/rapidForm/in/".concat(e.uniqueId))}(e)}},u.a.createElement("h4",null,e.name))})))),u.a.createElement("form",null,u.a.createElement("label",null,u.a.createElement("span",null,"name:"),u.a.createElement("input",{type:"text",value:h,name:"name",onChange:U})),u.a.createElement("label",null,u.a.createElement("span",null,"amount:"),u.a.createElement("input",{type:"text",value:O,name:"amount",onChange:U})),u.a.createElement("label",null,u.a.createElement("span",null,"measureUnit:"),u.a.createElement("input",{type:"text",value:I,name:"measureUnit",onChange:U})),u.a.createElement("label",null,u.a.createElement("span",null,"provider:"),u.a.createElement("input",{type:"text",value:N,name:"provider",onChange:U})),u.a.createElement("label",null,u.a.createElement("span",null,"group:"),u.a.createElement("input",{type:"text",value:y,name:"group",onChange:U})),u.a.createElement("div",{className:"form-btn-group"},u.a.createElement("button",{type:"submit",className:"form-btn button",onClick:function(t){return function(t){t.preventDefault();var r={name:h,amount:O,measureUnit:I,provider:N,group:y};if(!a)return e.addItem(r),void q();e.editItem(n.uniqueId,r),q()}(t)}},u.a.createElement("i",{class:"far fa-save"})),u.a.createElement("div",{className:"form-btn reply button",onClick:e.history.goBack},u.a.createElement("i",{class:"fas fa-reply"}))))))})),T=Object(m.b)((function(e){return{items:e.items,groups:e.groups}}),(function(e){return Object(s.a)({},Object(l.a)(n,e))}))((function(e){var t=Object(r.useState)(),a=Object(w.a)(t,2),n=a[0],o=a[1],i=e.items.find((function(t){return String(t.uniqueId)===e.match.params.item}))||e.items.filter((function(t){return t.group===e.match.params.group}));return u.a.createElement("div",{className:"item-container"},u.a.createElement("div",{className:"item-amount"},u.a.createElement("p",null,i.amount,u.a.createElement("span",null,i.measureUnit)),u.a.createElement("p",null,"".concat(i.name))),u.a.createElement("div",{className:"quick-modify"},u.a.createElement("input",{type:"number",value:n,placeholder:"Quick change",onChange:function(e){return o(e.target.value)}}),u.a.createElement("div",{onClick:function(){e.increaseItem(i.uniqueId,n)}},u.a.createElement("i",{class:"fas fa-plus-circle"})),u.a.createElement("div",{onClick:function(){e.decreaseItem(i.uniqueId,n)}},u.a.createElement("i",{class:"fas fa-minus-circle"}))),u.a.createElement("p",null,"Last Modification: ".concat(i.lastModification)," "),u.a.createElement("p",null,"by: ".concat(i.by)),u.a.createElement("p",null,"Last Amount: ".concat(i.lastAmount)),u.a.createElement("div",{className:"item-btn-group"},u.a.createElement("div",{className:"item-btn button",onClick:e.history.goBack},u.a.createElement("i",{class:"fas fa-reply"})),u.a.createElement("div",{className:"item-btn button"},u.a.createElement(f.b,{to:"/itemForm/".concat(i.uniqueId)},u.a.createElement("i",{class:"far fa-edit"}))),u.a.createElement("div",{className:"item-btn delete",onClick:function(){if(window.confirm("Are you sure you wish to delete this item?"))return e.delItem(i.uniqueId),void e.history.goBack()}},u.a.createElement("i",{class:"far fa-trash-alt"}))))}));var K=Object(m.b)((function(e){return{batches:e.batches}}),(function(e){return Object(s.a)({},Object(l.a)(n,e))}))((function(e){var t=e.batches.find((function(t){return String(t.name)===e.match.params.batchId}));return u.a.createElement("div",{className:"batch-container"},u.a.createElement(E,null),u.a.createElement("div",{className:"batch-items"},u.a.createElement("table",{className:"table"},u.a.createElement("caption",null,t.name),u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Item"),u.a.createElement("th",null,"Amount"))),u.a.createElement("tbody",null,t.items.map((function(e,t){return u.a.createElement("tr",{key:t},u.a.createElement("td",null,e.itemName),u.a.createElement("td",null,e.amount))}))))),u.a.createElement("div",{className:"item-btn-group"},u.a.createElement("div",{className:"item-btn button",onClick:e.history.goBack},u.a.createElement("i",{class:"fas fa-reply"})),u.a.createElement("div",{className:"item-btn button"},u.a.createElement(f.b,{to:"/batch/edit/".concat(t.name)},u.a.createElement("i",{class:"far fa-edit"}))),u.a.createElement("div",{className:"item-btn confirm",onClick:function(){e.confBatch(t.name),alert("Funciona")}},u.a.createElement("i",{class:"fas fa-check"}))))})),S=a(31),x=Object(m.b)((function(e){return{batches:e.batches,theItems:e.items}}),(function(e){return Object(s.a)({},Object(l.a)(n,e))}))((function(e){var t=e.match.path.includes("/batch/new"),a=e.batches.find((function(t){return String(t.name)===e.match.params.batchId}))||{name:"",items:[]},n=Object(r.useState)(a.name),o=Object(w.a)(n,2),i=o[0],m=o[1],l=Object(r.useState)(Object(c.a)(a.items)),s=Object(w.a)(l,2),d=Object(S.a)(s[0]).slice(0),p=s[1],b=function(e){if("itemName"===e.target.name){var t=JSON.parse(e.target.value),a=d.map((function(a,n){return n==e.target.dataset.index&&(a[e.target.name]=t.name,a.amount=t.amount="",a.uniqueId=t.uniqueId),a}));return p(a)}var n=d.map((function(t,a){return a==e.target.dataset.index&&(t[e.target.name]=e.target.value),t}));p(n)};return u.a.createElement("div",{className:"batch-form"},u.a.createElement(E,null),u.a.createElement("div",{className:"item-form"},u.a.createElement("form",null,u.a.createElement("label",null,u.a.createElement("span",null,"Name:"),u.a.createElement("input",{type:"text",value:i,onChange:function(e){return m(e.target.value)}}),u.a.createElement("div",null,u.a.createElement("p",null,"Items:"),d.map((function(t,a){return u.a.createElement("div",{className:"batch-items"},u.a.createElement("label",{key:a},u.a.createElement("select",{name:"itemName","data-index":a,onChange:b},u.a.createElement("option",{value:JSON.stringify(t),selected:!0},t.itemName),e.theItems.map((function(e,a){if(e.name!==t.itemName)return u.a.createElement("option",{value:JSON.stringify(e)},e.name)}))),u.a.createElement("input",{"data-index":a,type:"text",value:t.amount,name:"amount",onChange:b})),u.a.createElement("div",{onClick:function(){return function(e){p(Object(c.a)(d.filter((function(t,a){return a!==e}))))}(a)}},"X"))})),u.a.createElement("button",{onClick:function(e){e.preventDefault(),p([].concat(Object(c.a)(d),[{itemName:"",amount:"",uniqueId:""}]))}},"Add Item"))))),u.a.createElement("div",{className:"item-btn-group"},u.a.createElement("div",{className:"item-btn button",onClick:e.history.goBack},u.a.createElement("i",{className:"fas fa-reply"})),u.a.createElement("div",{className:"item-btn button",onClick:function(){if(t&&i.length>0&&d.length>0){var a={name:i,items:d};return e.newBatch(a)}t||(console.log(d),console.log(i),e.editBatch(i,d))}},u.a.createElement("i",{className:"far fa-edit"})),!t&&u.a.createElement("div",{className:"item-btn delete",onClick:function(){e.history.push("/list/batchList"),e.delBatch(i)}},u.a.createElement("i",{className:"far fa-trash-alt"}))))})),F=Object(m.b)((function(e){return{batches:e.batches}}),(function(e){return Object(s.a)({},Object(l.a)(n,e))}))((function(e){return u.a.createElement("div",null,u.a.createElement(E,null),u.a.createElement("div",{className:"random-list"},u.a.createElement("div",{className:"list-btn-group"},u.a.createElement("div",{className:"item-btn button",onClick:e.history.goBack},u.a.createElement("i",{class:"fas fa-reply"})),u.a.createElement("div",{className:"item-btn button"},u.a.createElement(f.b,{to:"/batch/new"},"New Batch"))),u.a.createElement("div",{className:"list"},e.batches.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})).map((function(e,t){return u.a.createElement("div",{className:"listed-item",key:t},u.a.createElement(f.b,{to:"/batch/show/".concat(e.name)},u.a.createElement("h4",null,e.name)))})))))}));a(42),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(u.a.createElement(m.a,{store:b},u.a.createElement(f.a,{basename:"/"},u.a.createElement(L.c,null,u.a.createElement(L.a,{exact:!0,path:"/",component:k}),u.a.createElement(L.a,{exact:!0,path:"/list/items",component:A}),u.a.createElement(L.a,{exact:!0,path:"/list/groups",component:A}),u.a.createElement(L.a,{path:"/list/items/:item",component:T}),u.a.createElement(L.a,{path:"/list/groups/:group",component:A}),u.a.createElement(L.a,{path:"/createGroup",component:_}),u.a.createElement(L.a,{path:"/editGroup/:group",component:_}),u.a.createElement(L.a,{path:"/itemForm/:itemId",component:B}),u.a.createElement(L.a,{path:"/itemForm",component:B}),u.a.createElement(L.a,{path:"/rapidForm/out",component:X}),u.a.createElement(L.a,{path:"/rapidForm/in/:itemId",component:X}),u.a.createElement(L.a,{path:"/list/batchList",component:F}),u.a.createElement(L.a,{path:"/batch/new",component:x}),u.a.createElement(L.a,{path:"/batch/edit/:batchId",component:x}),u.a.createElement(L.a,{path:"/batch/show/:batchId",component:K})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.364c9424.chunk.js.map