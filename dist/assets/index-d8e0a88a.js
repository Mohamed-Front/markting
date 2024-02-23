import{p as W,q as J,r as o,s as Q,o as X,v as Z,d,e as r,f as c,h as a,i as s,w as i,b as C,m as S,t as U,K as b,n as v}from"./index-9b6dcbe1.js";import"./editor.esm-fdcfe090.js";const ee={class:"grid"},le={class:"col-12"},te=a("div",{class:"my-2"},null,-1),se={class:"flex flex-column md:flex-row md:justify-between md:align-items-center"},ae=a("h5",{class:"m-0"},"Manage pages",-1),oe={class:"block mt-2 md:mt-0 p-input-icon-left"},ie=a("i",{class:"pi pi-search"},null,-1),ne=["innerHTML"],ue={class:"field mb-5"},de=a("label",{for:"first"},"first name ",-1),re={key:0,class:"p-invalid"},ce={class:"field mb-5"},me=a("label",{for:"last"},"last name ",-1),ve={key:0,class:"p-invalid"},pe={class:"field mb-5"},fe=a("label",{for:"email",class:"mb-3"},"email ",-1),_e={key:0,class:"p-invalid"},be={class:"field mb-5"},ge=a("label",{for:"password",class:"mb-3"},"password ",-1),he={key:0,class:"p-invalid"},ye={class:"field mb-5"},ke=a("label",{for:"mobile",class:"mb-3"},"mobile",-1),we={key:0,class:"p-invalid"},xe={class:"flex align-items-center justify-content-center"},Ve=a("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Ce={key:0},Te=S("Are you sure you want to delete "),De=S("?"),Se={class:"flex align-items-center justify-content-center"},Pe=a("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Me={key:0},Oe={setup(Ue){const f=W(),N=J(),P=o(null),M=o(null),q=o(null),L=o([{name:"English",value:"gb"},{name:"Arabic",value:"sa"},{name:"Azerbaijan",value:"az"},{name:"Georgia",value:"ge"},{name:"Russia",value:"ru"},{name:"Turkey",value:"tr"}]),_=o("gb"),T=o(!0),e=o({});o(null);const g=o(!1),h=o(!1),y=o(!1),O=o({}),k=o(null),A=o(null),w=o({}),n=o(!1);o([{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]),Q(()=>{I()});const x=()=>{C.get("/api/pages").then(u=>{T.value=!1,M.value=u.data.pages})};X(()=>{x()});const B=()=>{console.log(_.value)},z=()=>{g.value=!1,n.value=!1},F=()=>{n.value=!0,!(!e.value.first_name||!e.value.last_name||!e.value.email||!e.value.mobile_number)&&(e.value.id?(C.post(`/api/accommodition/${accommodition.value.id}/update`,e.value).then(u=>{console.log(u.data),x(),f.add({severity:"success",summary:"Successful",detail:"user updated",life:3e3})}).catch(()=>{}),f.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):C.post("/api/users/create",e.value).then(u=>{console.log(u.data),x(),f.add({severity:"success",summary:"Successful",detail:"user Created",life:3e3})}).catch(()=>{}),g.value=!1,e.value={})},R=u=>{e.value={...u},N.push({name:"pages-update",params:{id:e.value.id}})},$=()=>{T.value=!0,C.delete(`/api/pages/${q.value.id}/delete`).then(u=>{console.log(u.data),h.value=!1,x(),f.add({severity:"success",summary:"Successful",detail:"pages deleted",life:3e3})}).catch(()=>{})},j=()=>{P.value=P.value.filter(u=>!k.value.includes(u)),y.value=!1,k.value=null,f.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},I=()=>{w.value={global:{value:null,matchMode:Z.CONTAINS}}};return(u,t)=>{const K=d("Dropdown"),E=d("Toolbar"),H=d("Toast"),p=d("InputText"),V=d("Column"),m=d("Button"),Y=d("DataTable"),D=d("Dialog"),G=d("va-card");return r(),c("div",ee,[a("div",le,[s(G,{class:"card"},{default:i(()=>[s(E,{class:"mb-4"},{start:i(()=>[te]),end:i(()=>[s(K,{modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=l=>_.value=l),onClick:B,editable:"",options:L.value,optionLabel:"name","option-value":"value",class:"w-48 mx-3"},null,8,["modelValue","options"])]),_:1}),s(H),s(Y,{ref_key:"dt",ref:A,selection:k.value,"onUpdate:selection":t[2]||(t[2]=l=>k.value=l),value:M.value,loading:T.value,"data-key":"id",paginator:!0,rows:10,filters:w.value,"paginator-template":"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown","rows-per-page-options":[5,10,25],"current-page-report-template":"Showing {first} to {last} of {totalRecords} products","responsive-layout":"scroll"},{header:i(()=>[a("div",se,[ae,a("span",oe,[ie,s(p,{modelValue:w.value.global.value,"onUpdate:modelValue":t[1]||(t[1]=l=>w.value.global.value=l),placeholder:"Search..."},null,8,["modelValue"])])])]),default:i(()=>[s(V,{"selection-mode":"multiple","header-style":"width: 3rem"}),s(V,{field:"title",header:"Title",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:i(l=>[S(U(l.data.title[_.value]),1)]),_:1}),s(V,{field:"description",header:"Description",sortable:!0,"header-style":"width:30%; min-width:30rem;"},{body:i(l=>[a("p",{innerHTML:l.data.description[_.value]},null,8,ne)]),_:1}),s(V,{"header-style":"min-width:10rem;"},{body:i(l=>[s(m,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:Ne=>R(l.data)},null,8,["onClick"])]),_:1})]),_:1},8,["selection","value","loading","filters"]),s(D,{visible:g.value,"onUpdate:visible":t[8]||(t[8]=l=>g.value=l),style:{width:"450px"},header:"users form",modal:!0,class:"p-fluid"},{footer:i(()=>[s(m,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:z}),s(m,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:F})]),default:i(()=>[a("div",ue,[de,s(p,{class:b(["mt-3",{"p-invalid":n.value&&!e.value.first_name}]),id:"first",modelValue:e.value.first_name,"onUpdate:modelValue":t[3]||(t[3]=l=>e.value.first_name=l),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),n.value&&!e.value.first_name?(r(),c("small",re,"First Name is required.")):v("",!0)]),a("div",ce,[me,s(p,{class:b(["mt-3",{"p-invalid":n.value&&!e.value.last_name}]),id:"last",modelValue:e.value.last_name,"onUpdate:modelValue":t[4]||(t[4]=l=>e.value.last_name=l),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),n.value&&!e.value.last_name?(r(),c("small",ve,"Last Name is required.")):v("",!0)]),a("div",pe,[fe,s(p,{class:b(["mt-3",{"p-invalid":n.value&&!e.value.email}]),id:"email",modelValue:e.value.email,"onUpdate:modelValue":t[5]||(t[5]=l=>e.value.email=l),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),n.value&&!e.value.email?(r(),c("small",_e,"Email is required.")):v("",!0)]),a("div",be,[ge,s(p,{class:b(["mt-3",{"p-invalid":n.value&&!e.value.password}]),id:"password",modelValue:e.value.password,"onUpdate:modelValue":t[6]||(t[6]=l=>e.value.password=l),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),n.value&&!e.value.password?(r(),c("small",he,"password is required.")):v("",!0)]),a("div",ye,[ke,s(p,{class:b(["mt-3",{"p-invalid":n.value&&!e.value.mobile_number}]),id:"mobile",modelValue:e.value.mobile_number,"onUpdate:modelValue":t[7]||(t[7]=l=>e.value.mobile_number=l),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),n.value&&!e.value.mobile_number?(r(),c("small",we,"mobile is required.")):v("",!0)])]),_:1},8,["visible"]),s(D,{visible:h.value,"onUpdate:visible":t[10]||(t[10]=l=>h.value=l),style:{width:"450px"},header:"Confirm",modal:!0},{footer:i(()=>[s(m,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:t[9]||(t[9]=l=>h.value=!1)}),s(m,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:$})]),default:i(()=>[a("div",xe,[Ve,e.value?(r(),c("span",Ce,[Te,a("b",null,U(e.value.first_name),1),De])):v("",!0)])]),_:1},8,["visible"]),s(D,{visible:y.value,"onUpdate:visible":t[12]||(t[12]=l=>y.value=l),style:{width:"450px"},header:"Confirm",modal:!0},{footer:i(()=>[s(m,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:t[11]||(t[11]=l=>y.value=!1)}),s(m,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:j})]),default:i(()=>[a("div",Se,[Pe,O.value?(r(),c("span",Me,"Are you sure you want to delete the selected products?")):v("",!0)])]),_:1},8,["visible"])]),_:1})])])}}};export{Oe as default};
