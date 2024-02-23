import{u as C,r as w,o as P,b as N,d as b,e as s,C as p,w as n,h as e,t as a,i as x,f as l,n as o,F as u,k as r,j as _}from"./index-9b6dcbe1.js";import{S as k,a as D,P as R,N as j,A}from"./autoplay-baabbb56.js";import"./pagination-25b2bd0b.js";const F=e("div",{class:"w-full"},[e("p",{class:"w-full text-2xl m-auto py-[1%]"},"Driver details")],-1),I={style:{border:"1px solid rgb(217, 214, 214)"},class:"grid grid-cols-1 gap-2 lg:grid-cols-6 p-[1%] rounded-md"},O={class:"col-span-1"},$=["src"],L={class:"col-span-5"},M={class:"flex"},U={class:"text-xl md:text-2xl font-bold px-4"},q={class:"card flex justify-content-center"},z={class:"grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-y-3 xl:w-[100%] lg:w-full p-[1%]"},G={key:0,class:"flex"},H=e("i",{class:"bg-[#DE4915] p-1 rounded-full my-auto text-[white] pi pi-check"},null,-1),J={class:"text-xl px-1 my-auto"},K={key:1,class:"flex"},Q=e("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),T={class:"text-xl md:text-xl px-1 my-auto"},W={key:2,class:"flex col-span-2"},X=e("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),Y={class:"text-xl md:text-xl px-1 my-auto"},Z={key:3,class:"flex"},ee=e("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),te={class:"text-xl md:text-xl px-1 my-auto"},se={key:4,class:"flex"},le=e("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),oe={class:"text-xl md:text-xl px-1 my-auto"},ae={key:5,class:"flex"},ie=e("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),de={class:"text-xl md:text-xl px-1 my-auto"},ce={key:6,class:"flex"},ne=e("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),ue={class:"text-xl md:text-xl px-1 my-auto"},re={key:7,class:"flex col-span-2"},_e=e("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),pe={class:"text-xl md:text-xl px-1 my-auto"},xe=e("p",{class:"font-bold text-xl"},"&",-1),he=e("div",{class:"w-full"},[e("p",{class:"w-full text-2xl m-auto py-[1%]"},"price details")],-1),me={style:{border:"1px solid rgb(217, 214, 214)"},class:"p-[1%] rounded-md"},ge={key:0,class:"grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-y-3 xl:w-[100%] lg:w-full p-[1%]"},ve={class:"flex"},ye=e("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),fe={class:"text-xl px-1 my-auto font-bold"},we={class:"text-xl md:text-xl px-1 my-auto"},be=e("div",{class:"w-full"},[e("p",{class:"w-full text-2xl m-auto py-[1%]"},"car details")],-1),ke={style:{border:"1px solid rgb(217, 214, 214)"},class:"grid grid-cols-1 gap-2 lg:grid-cols-6 p-[1%] rounded-md"},De={class:"col-span-1"},Ee={class:"m-auto p-[1%]"},Se=["src"],Ve={class:"text-center bg-teal-100 rounded-3xl m-2"},Be={class:"bg-white rounded-3xl w-full m-auto"},Ce=["src"],Pe={class:"col-span-5"},Ne={class:"grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-y-3 xl:w-[100%] lg:w-full p-[1%]"},Re={key:0,class:"flex"},je=e("i",{class:"bg-[#DE4915] p-1 rounded-full my-auto text-[white] pi pi-check"},null,-1),Ae={class:"text-xl px-1 my-auto"},Fe={key:1,class:"flex"},Ie=e("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),Oe={class:"text-xl md:text-xl px-1 my-auto"},$e={key:2,class:"flex"},Le=e("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),Me={class:"text-xl md:text-xl px-1 my-auto"},Ue={key:3,class:"flex"},qe=e("i",{class:"bg-[#DE4915] p-1 rounded-full text-[white] my-auto pi pi-check"},null,-1),ze={class:"text-xl md:text-xl px-1 my-auto"},Ge={key:0,class:"w-full"},He=e("p",{class:"w-full text-2xl m-auto py-[1%]"},"Ducoment details",-1),Je=[He],Ke={key:1,style:{border:"1px solid rgb(217, 214, 214)"},class:"grid grid-cols-1 gap-2 lg:grid-cols-6 p-[1%] rounded-md"},Qe={class:"col-span-1"},Te={class:"m-auto p-[1%]"},We={class:"text-center bg-teal-100 rounded-3xl m-2"},Xe={class:"bg-white rounded-3xl w-full m-auto"},Ye=["src"],lt={setup(Ze){const E=C();w(2.5);const h=[R,j,A],t=w({});return P(()=>{N.get(`/api/drivers/web/${E.params.id}`).then(d=>{console.log(d.data),t.value=d.data.user,console.log("dwd"),console.log(t)})}),(d,m)=>{const S=b("Rating"),V=b("va-card");return s(),p(V,{class:"card w-[100%] p-[2%] m-auto"},{default:n(()=>{var g,v;return[F,e("div",I,[e("div",O,[e("img",{src:(g=t.value.pictures)==null?void 0:g.personal_pictures[0].original_url,class:"w-[200px] rounded-md h-[200px] m-auto"},null,8,$)]),e("div",L,[e("div",M,[e("p",U,a(t.value.name),1),e("div",q,[x(S,{modelValue:t.value.total_rating,"onUpdate:modelValue":m[0]||(m[0]=i=>t.value.total_rating=i),cancel:!1,readonly:""},null,8,["modelValue"])])]),e("div",z,[t.value.name?(s(),l("div",G,[H,e("p",J,a(t.value.name),1)])):o("",!0),t.value.phone?(s(),l("div",K,[Q,e("p",T,a(t.value.phone),1)])):o("",!0),t.value.email?(s(),l("div",W,[X,e("p",Y,a(t.value.email),1)])):o("",!0),t.value.gender?(s(),l("div",Z,[ee,e("p",te,a(t.value.gender),1)])):o("",!0),t.value.country?(s(),l("div",se,[le,e("p",oe,a(t.value.country),1)])):o("",!0),t.value.state?(s(),l("div",ae,[ie,e("p",de,a(t.value.state),1)])):o("",!0),t.value.nationality?(s(),l("div",ce,[ne,e("p",ue,a(t.value.nationality),1)])):o("",!0),t.value.languages!=""?(s(),l("div",re,[_e,(s(!0),l(u,null,r((v=t.value)==null?void 0:v.languages,i=>{var c;return s(),l("div",{class:"flex",key:i},[e("p",pe,a((c=i.language)==null?void 0:c.lang),1),xe])}),128))])):o("",!0)])])]),he,e("div",me,[t.value.priceServices?(s(),l("div",ge,[(s(!0),l(u,null,r(t.value.priceServices,i=>(s(),l("div",ve,[ye,e("p",fe,a(i.state_name),1),e("p",we,a(i.price)+" $",1)]))),256))])):o("",!0)]),be,e("div",ke,[e("div",De,[e("div",Ee,[x(_(D),{onSlideChange:d.onSlideChange,navigation:!0,modules:h,scrollbar:{draggable:!0},autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:10},480:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:1,spaceBetween:10}}},{default:n(()=>{var i,c,y,f;return[(i=t.value.pictures)!=null&&i.car_photos[0].original_url?o("",!0):(s(),l("img",{key:0,class:"w-[200px] h-[200px] m-auto rounded-md",src:(c=t.value)==null?void 0:c.car_photo},null,8,Se)),(y=t.value.pictures)!=null&&y.car_photos[0].original_url?(s(!0),l(u,{key:1},r((f=t.value.pictures)==null?void 0:f.car_photos,B=>(s(),p(_(k),null,{default:n(()=>[e("div",Ve,[e("div",Be,[e("img",{class:"w-[200px] h-[200px] m-auto rounded-md",src:B.original_url},null,8,Ce)])])]),_:2},1024))),256)):o("",!0)]}),_:1},8,["onSlideChange"])])]),e("div",Pe,[e("div",Ne,[t.value.car_type?(s(),l("div",Re,[je,e("p",Ae,a(t.value.car_type),1)])):o("",!0),t.value.car_brand_name?(s(),l("div",Fe,[Ie,e("p",Oe,a(t.value.car_brand_name),1)])):o("",!0),t.value.car_number?(s(),l("div",$e,[Le,e("p",Me,a(t.value.car_number),1)])):o("",!0),t.value.car_manufacturing_date?(s(),l("div",Ue,[qe,e("p",ze,a(t.value.car_manufacturing_date),1)])):o("",!0)])])]),t.value.document!=null?(s(),l("div",Ge,Je)):o("",!0),t.value.document!=null?(s(),l("div",Ke,[e("div",Qe,[e("div",Te,[x(_(D),{onSlideChange:d.onSlideChange,navigation:!0,modules:h,scrollbar:{draggable:!0},autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:10},480:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:1,spaceBetween:10}}},{default:n(()=>[(s(!0),l(u,null,r(t.value.document,i=>(s(),p(_(k),null,{default:n(()=>[e("div",We,[e("div",Xe,[e("img",{class:"w-[200px] h-[200px] m-auto rounded-md",src:i},null,8,Ye)])])]),_:2},1024))),256))]),_:1},8,["onSlideChange"])])])])):o("",!0)]}),_:1})}}};export{lt as default};
