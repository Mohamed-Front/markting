import{p as X,r as n,s as Z,o as ee,b as y,v as le,d as f,e as r,f as m,h as a,i as s,w as d,m as w,t as b,K as _,n as c}from"./index-9b6dcbe1.js";const se={class:"grid"},ae={class:"col-12"},te={class:"my-2"},oe={class:"flex flex-column md:flex-row md:justify-between md:align-items-center"},ie=a("h5",{class:"m-0"},"Manage users",-1),ue={class:"block mt-2 md:mt-0 p-input-icon-left"},de=a("i",{class:"pi pi-search"},null,-1),ne={class:"field mb-5"},re=a("label",{for:"first"},"First name ",-1),me={key:0,class:"p-invalid"},ce={class:"field mb-5"},ve=a("label",{for:"last"},"Last name ",-1),pe={key:0,class:"p-invalid"},_e={class:"field mb-5"},fe=a("label",{for:"email",class:"mb-3"},"Email ",-1),be={key:0,class:"p-invalid"},he={class:"field mb-5"},ye=a("label",{for:"password",class:"mb-3"},"Password ",-1),we={key:0,class:"p-invalid"},ke={class:"field mb-5"},Ve=a("label",{for:"mobile",class:"mb-3"},"Mobile",-1),ge={key:0,class:"p-invalid"},Ce={class:"mb-5"},xe=a("label",{class:"w-full"}," Role ",-1),qe={key:0,class:"mt-1 mb-5 text-red-500"},Me={class:"field mb-5"},Ue=a("label",{for:"first"},"First name ",-1),Ne={key:0,class:"p-invalid"},De={class:"field mb-5"},Se=a("label",{for:"last"},"Last name ",-1),Te={key:0,class:"p-invalid"},Le={class:"field mb-5"},Pe=a("label",{for:"email",class:"mb-3"},"Email ",-1),Fe={key:0,class:"p-invalid"},$e={class:"field mb-5"},Ee=a("label",{for:"password",class:"mb-3"},"Password ",-1),Oe={key:0,class:"p-invalid"},Be={class:"field mb-5"},Re=a("label",{for:"mobile",class:"mb-3"},"Mobile",-1),Ae={key:0,class:"p-invalid"},Ie={class:"mb-5"},Ke=a("label",{class:"w-full"}," Role ",-1),je={key:0,class:"mt-1 mb-5 text-red-500"},ze={class:"flex align-items-center justify-content-center"},Ye=a("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),We={key:0},Ge=w("Are you sure you want to delete "),He=w("?"),Je={class:"flex align-items-center justify-content-center"},Qe=a("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Xe={key:0},ll={setup(Ze){const g=X();n(!1);const T=n(null),D=n(!0),e=n({}),L=n(""),S=n([]),P=n(null),k=n(!1),V=n(!1),C=n(!1),F=n({}),x=n(null),$=n(null),q=n({}),i=n(!1),M=n(!1);n([{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]),Z(()=>{W()});const U=()=>{y.get("/api/users").then(u=>{D.value=!1,P.value=u.data.users})};ee(()=>{U(),y.get("/api/roles/index").then(u=>{D.value=!1,S.value=u.data.roles})});const B=()=>{F.value={},i.value=!1,e.value="",k.value=!0},E=()=>{k.value=!1,i.value=!1},R=()=>{y.post(`/api/users/${L.value}/update`,e.value).then(u=>{console.log(u.data),M.value=!1,U(),g.add({severity:"success",summary:"Successful",detail:"user updated",life:3e3})})},A=()=>{i.value=!0,!(!e.value.first_name||!e.value.last_name||!e.value.email||!e.value.mobile_number)&&(y.post("/api/users/create",e.value).then(u=>{console.log(u.data),U(),g.add({severity:"success",summary:"Successful",detail:"user Created",life:3e3})}).catch(()=>{}),k.value=!1,e.value={})},I=u=>{L.value=u,M.value=!0,y.get(`/api/users/${u}`).then(l=>{e.value.first_name=l.data.user.first_name,e.value.last_name=l.data.user.last_name,e.value.mobile_number=l.data.user.mobile_number,e.value.email=l.data.user.email,e.value.role=l.data.role})},K=u=>{e.value=u,V.value=!0},j=()=>{y.delete(`/api/users/${e.value.id}/delete`).then(u=>{console.log(u.data),V.value=!1,U(),g.add({severity:"success",summary:"Successful",detail:"user deleted",life:3e3})}).catch(()=>{})},z=()=>{$.value.exportCSV()},Y=()=>{T.value=T.value.filter(u=>!x.value.includes(u)),C.value=!1,x.value=null,g.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},W=()=>{q.value={global:{value:null,matchMode:le.CONTAINS}}};return(u,l)=>{const v=f("Button"),G=f("Toolbar"),H=f("Toast"),p=f("InputText"),h=f("Column"),J=f("DataTable"),O=f("Dropdown"),N=f("Dialog"),Q=f("va-card");return r(),m("div",se,[a("div",ae,[s(Q,{class:"card"},{default:d(()=>[s(G,{class:"mb-4"},{start:d(()=>[a("div",te,[s(v,{label:"New",icon:"pi pi-plus",class:"new mr-2",onClick:B})])]),end:d(()=>[s(v,{label:"Export",icon:"pi pi-upload",class:"new",onClick:l[0]||(l[0]=t=>z())})]),_:1}),s(H),s(J,{ref_key:"dt",ref:$,selection:x.value,"onUpdate:selection":l[2]||(l[2]=t=>x.value=t),value:P.value,loading:D.value,"data-key":"id",paginator:!0,rows:10,filters:q.value,"paginator-template":"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown","rows-per-page-options":[5,10,25],"current-page-report-template":"Showing {first} to {last} of {totalRecords} products","responsive-layout":"scroll"},{header:d(()=>[a("div",oe,[ie,a("span",ue,[de,s(p,{modelValue:q.value.global.value,"onUpdate:modelValue":l[1]||(l[1]=t=>q.value.global.value=t),placeholder:"Search..."},null,8,["modelValue"])])])]),default:d(()=>[s(h,{"selection-mode":"multiple","header-style":"width: 3rem"}),s(h,{field:"first_name",header:"First_name",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:d(t=>[w(b(t.data.first_name),1)]),_:1}),s(h,{field:"last_name",header:"Last Name",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:d(t=>[w(b(t.data.last_name),1)]),_:1}),s(h,{field:"email",header:"Email",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:d(t=>[w(b(t.data.email),1)]),_:1}),s(h,{field:"mobile_number",header:"Mobile Number",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:d(t=>[w(b(t.data.mobile_number),1)]),_:1}),s(h,{"header-style":"min-width:10rem;"},{body:d(t=>[s(v,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:o=>I(t.data.id)},null,8,["onClick"]),s(v,{icon:"pi pi-trash",class:"delete rounded-full mt-2",onClick:o=>K(t.data)},null,8,["onClick"])]),_:1})]),_:1},8,["selection","value","loading","filters"]),s(N,{visible:k.value,"onUpdate:visible":l[9]||(l[9]=t=>k.value=t),style:{width:"450px"},header:"users form",modal:!0,class:"p-fluid"},{footer:d(()=>[s(v,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:E}),s(v,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:A})]),default:d(()=>{var t;return[a("div",ne,[re,s(p,{class:_(["mt-3",{"p-invalid":i.value&&!e.value.first_name}]),id:"first",modelValue:e.value.first_name,"onUpdate:modelValue":l[3]||(l[3]=o=>e.value.first_name=o),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),i.value&&!e.value.first_name?(r(),m("small",me,"First Name is required.")):c("",!0)]),a("div",ce,[ve,s(p,{class:_(["mt-3",{"p-invalid":i.value&&!e.value.last_name}]),id:"last",modelValue:e.value.last_name,"onUpdate:modelValue":l[4]||(l[4]=o=>e.value.last_name=o),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),i.value&&!e.value.last_name?(r(),m("small",pe,"Last Name is required.")):c("",!0)]),a("div",_e,[fe,s(p,{class:_(["mt-3",{"p-invalid":i.value&&!e.value.email}]),id:"email",modelValue:e.value.email,"onUpdate:modelValue":l[5]||(l[5]=o=>e.value.email=o),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),i.value&&!e.value.email?(r(),m("small",be,"Email is required.")):c("",!0)]),a("div",he,[ye,s(p,{class:_(["mt-3",{"p-invalid":i.value&&!e.value.password}]),id:"password",modelValue:e.value.password,"onUpdate:modelValue":l[6]||(l[6]=o=>e.value.password=o),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),i.value&&!e.value.password?(r(),m("small",we,"password is required.")):c("",!0)]),a("div",ke,[Ve,s(p,{class:_(["mt-3",{"p-invalid":i.value&&!e.value.mobile_number}]),id:"mobile",modelValue:e.value.mobile_number,"onUpdate:modelValue":l[7]||(l[7]=o=>e.value.mobile_number=o),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),i.value&&!e.value.mobile_number?(r(),m("small",ge,"mobile is required.")):c("",!0)]),a("div",Ce,[xe,s(O,{modelValue:e.value.role,"onUpdate:modelValue":l[8]||(l[8]=o=>e.value.role=o),editable:"",options:S.value,optionLabel:"name","option-value":"id",class:"w-full my-2"},null,8,["modelValue","options"]),(t=u.error)!=null&&t.country_id?(r(),m("div",qe,b(u.error.country_id[0]),1)):c("",!0)])]}),_:1},8,["visible"]),s(N,{visible:M.value,"onUpdate:visible":l[16]||(l[16]=t=>M.value=t),style:{width:"450px"},header:"users form",modal:!0,class:"p-fluid"},{footer:d(()=>[s(v,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:E}),s(v,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:R})]),default:d(()=>{var t;return[a("div",Me,[Ue,s(p,{class:_(["mt-3",{"p-invalid":i.value&&!e.value.first_name}]),id:"first",modelValue:e.value.first_name,"onUpdate:modelValue":l[10]||(l[10]=o=>e.value.first_name=o),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),i.value&&!e.value.first_name?(r(),m("small",Ne,"First Name is required.")):c("",!0)]),a("div",De,[Se,s(p,{class:_(["mt-3",{"p-invalid":i.value&&!e.value.last_name}]),id:"last",modelValue:e.value.last_name,"onUpdate:modelValue":l[11]||(l[11]=o=>e.value.last_name=o),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),i.value&&!e.value.last_name?(r(),m("small",Te,"Last Name is required.")):c("",!0)]),a("div",Le,[Pe,s(p,{class:_(["mt-3",{"p-invalid":i.value&&!e.value.email}]),id:"email",modelValue:e.value.email,"onUpdate:modelValue":l[12]||(l[12]=o=>e.value.email=o),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),i.value&&!e.value.email?(r(),m("small",Fe,"Email is required.")):c("",!0)]),a("div",$e,[Ee,s(p,{class:_(["mt-3",{"p-invalid":i.value&&!e.value.password}]),id:"password",modelValue:e.value.password,"onUpdate:modelValue":l[13]||(l[13]=o=>e.value.password=o),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),i.value&&!e.value.password?(r(),m("small",Oe,"password is required.")):c("",!0)]),a("div",Be,[Re,s(p,{class:_(["mt-3",{"p-invalid":i.value&&!e.value.mobile_number}]),id:"mobile",modelValue:e.value.mobile_number,"onUpdate:modelValue":l[14]||(l[14]=o=>e.value.mobile_number=o),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),i.value&&!e.value.mobile_number?(r(),m("small",Ae,"mobile is required.")):c("",!0)]),a("div",Ie,[Ke,s(O,{modelValue:e.value.role,"onUpdate:modelValue":l[15]||(l[15]=o=>e.value.role=o),editable:"",options:S.value,optionLabel:"name","option-value":"id",class:"w-full my-2"},null,8,["modelValue","options"]),(t=u.error)!=null&&t.country_id?(r(),m("div",je,b(u.error.country_id[0]),1)):c("",!0)])]}),_:1},8,["visible"]),s(N,{visible:V.value,"onUpdate:visible":l[18]||(l[18]=t=>V.value=t),style:{width:"450px"},header:"Confirm",modal:!0},{footer:d(()=>[s(v,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:l[17]||(l[17]=t=>V.value=!1)}),s(v,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:j})]),default:d(()=>[a("div",ze,[Ye,e.value?(r(),m("span",We,[Ge,a("b",null,b(e.value.first_name),1),He])):c("",!0)])]),_:1},8,["visible"]),s(N,{visible:C.value,"onUpdate:visible":l[20]||(l[20]=t=>C.value=t),style:{width:"450px"},header:"Confirm",modal:!0},{footer:d(()=>[s(v,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:l[19]||(l[19]=t=>C.value=!1)}),s(v,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:Y})]),default:d(()=>[a("div",Je,[Qe,F.value?(r(),m("span",Xe,"Are you sure you want to delete the selected products?")):c("",!0)])]),_:1},8,["visible"])]),_:1})])])}}};export{ll as default};
