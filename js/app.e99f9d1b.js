(function(){var e={4635:function(e){e.exports=["Cantata One","Fredericka the Great","Acme","Spicy Rice","Ubuntu","Concert One","Swanky and Moo Moo","Cagliostro","Fredoka One","Impact","Graduate","Chango","Quantico","Berkshire Swash","Bangers","Play","Doppio One","Bowlby One","Francois One"]},6273:function(e,t,s){"use strict";var a=s(144),o=s(9026),n=s.n(o),i=s(998),r=s(3059),l=function(){var e=this,t=e._self._c;return t(i.Z,[t(r.Z,[t("router-view")],1)],1)},c=[],u={name:"App",data:()=>({})},h=u,d=s(1001),p=(0,d.Z)(h,l,c,!1,null,null,null),f=p.exports,m=s(707),v=s.n(m);a["default"].use(v());var x=new(v())({}),g=s(8345),b=function(){var e=this,t=e._self._c;return t("home-page")},w=[],_=s(9582),y=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"home"}},[e.searchVisible?t("div",{attrs:{id:"search"}},[t("search-container",{on:{closeSearch:e.closeSearch,selected:e.selected}})],1):e._e(),t(_.Z,{directives:[{name:"show",rawName:"v-show",value:!e.searchVisible,expression:"!searchVisible"}]},[t("meme-generator",{attrs:{src:e.src,title:e.title,id:e.id},on:{cancel:function(t){e.open=!1},search:e.toggleSearch}})],1)],1)},k=[],S=(s(7658),s(6190)),Z=s(4886),C=s(266),T=s(2118),$=s(4324),z=s(1713),D=s(4221),O=s(7414),F=s(3687),X=s(2540),E=s(7808),R=function(){var e=this,t=e._self._c;return t(Z.EB,[e._v(e._s(e.title)),t(T.Z,{on:{drop:function(t){return e.onDrop(t)},dragover:function(e){e.preventDefault()},dragenter:function(e){e.preventDefault()}}},[t(z.Z,[t(C.Z,{staticClass:"dialog",attrs:{xs:"12",md:"6"}},[t("canvas",{attrs:{id:`cvs_${e.id}`}},[e._v("Get a real browser!"),t("br"),t("a",{attrs:{href:"http://www.google.com/chrome"}},[e._v("Google Chrome to the rescue!")])])]),t(C.Z,{staticClass:"dialog actions",attrs:{xs:"12",md:"6"}},[t(Z.ZB,{staticClass:"buttons"},[t(E.Z,{attrs:{label:"Enter the above text here",outlined:"",clearable:"","hide-details":""},on:{change:e.draw},model:{value:e.aboveText,callback:function(t){e.aboveText=t},expression:"aboveText"}}),t(E.Z,{attrs:{label:"Enter the below text here",outlined:"",clearable:"","hide-details":""},on:{change:e.draw},model:{value:e.belowText,callback:function(t){e.belowText=t},expression:"belowText"}}),t(C.Z,{staticClass:"pr-4"},[t(D.Z,{attrs:{items:e.fontList,filled:"",dense:"",label:"font picker"},on:{change:e.draw},scopedSlots:e._u([{key:"item",fn:function({item:s}){return[t("span",{style:{"font-family":s}},[e._v(e._s(s))])]}}]),model:{value:e.activeFont,callback:function(t){e.activeFont=t},expression:"activeFont"}})],1),t(C.Z,{staticClass:"pr-4"},[t(z.Z,[t("ColorPicker",{attrs:{text:"text"},on:{input:e.draw},model:{value:e.color1,callback:function(t){e.color1=t},expression:"color1"}}),t("ColorPicker",{attrs:{text:"outline"},on:{input:e.draw},model:{value:e.outlineColor,callback:function(t){e.outlineColor=t},expression:"outlineColor"}})],1)],1),t(C.Z,{staticClass:"pr-4"},[t(X.Z,{staticClass:"pl-0"},[e._v("padY"),t(O.Z,{attrs:{max:"80",min:"4","hide-details":"","thumb-label":""},on:{input:e.draw},scopedSlots:e._u([{key:"append",fn:function(){return[t(E.Z,{staticClass:"mt-0 pt-0",attrs:{"hide-details":"","single-line":"","thumb-label":"",type:"number"},on:{change:e.draw},model:{value:e.padY,callback:function(t){e.padY=t},expression:"padY"}},[e._v(e._s(e.padY))])]},proxy:!0}]),model:{value:e.padY,callback:function(t){e.padY=t},expression:"padY"}})],1)],1),t(C.Z,{staticClass:"pr-4"},[t(X.Z,{staticClass:"pl-0"},[e._v("padX"),t(O.Z,{attrs:{max:"80",min:"4","hide-details":"","thumb-label":""},on:{input:e.draw},scopedSlots:e._u([{key:"append",fn:function(){return[t(E.Z,{staticClass:"mt-0 pt-0",attrs:{"hide-details":"","single-line":"",type:"number"},on:{change:e.draw},model:{value:e.padX,callback:function(t){e.padX=t},expression:"padX"}},[e._v(e._s(e.padX))])]},proxy:!0}]),model:{value:e.padX,callback:function(t){e.padX=t},expression:"padX"}})],1)],1),t(C.Z,{staticClass:"pr-4"},[t(X.Z,{staticClass:"pl-0"},[e._v("text size"),t(O.Z,{attrs:{max:"200",min:"8","hide-details":"","thumb-label":""},on:{input:e.draw},scopedSlots:e._u([{key:"append",fn:function(){return[t(E.Z,{staticClass:"mt-0 pt-0",attrs:{"hide-details":"","single-line":"",type:"number"},on:{change:e.draw},model:{value:e.fontSize,callback:function(t){e.fontSize=t},expression:"fontSize"}},[e._v(e._s(e.fontSize))])]},proxy:!0}]),model:{value:e.fontSize,callback:function(t){e.fontSize=t},expression:"fontSize"}})],1)],1),t(C.Z,{staticClass:"pr-4"},[t(X.Z,{staticClass:"pl-0"},[e._v("outline"),t(O.Z,{attrs:{max:"40",min:"0","hide-details":"","thumb-label":""},on:{input:e.draw},scopedSlots:e._u([{key:"append",fn:function(){return[t(E.Z,{staticClass:"mt-0 pt-0",attrs:{"hide-details":"","single-line":"",type:"number"},on:{change:e.draw},model:{value:e.outlineSize,callback:function(t){e.outlineSize=t},expression:"outlineSize"}},[e._v(e._s(e.outlineSize))])]},proxy:!0}]),model:{value:e.outlineSize,callback:function(t){e.outlineSize=t},expression:"outlineSize"}})],1)],1)],1),t(Z.h7,[t(F.Z),t(S.Z,{attrs:{color:"primary",depressed:""},on:{click:e.exportImage}},[t($.Z,{attrs:{left:""}},[e._v("mdi-download")]),e._v("Export")],1),t(S.Z,{attrs:{color:"primary",text:""},on:{click:e.close}},[e._v("Cancel")]),t(S.Z,{attrs:{color:"secondary",text:""},on:{click:e.search}},[e._v("Search")])],1)],1)],1)],1)],1)},j=[],P=s(3729),Y=s.n(P),B=s(4635),I=s.n(B),V=s(4699),L=s(4604),G=s(2082),M=function(){var e=this,t=e._self._c;return t(G.Z,{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function({on:s}){return[t("div",{staticClass:"text-center"},[t(L.Z,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:a}){return[t(S.Z,e._g({attrs:{color:e.colorChoice,dark:""}},{...s,...a}))]}}],null,!0)},[t(V.Z,{staticClass:"mx-auto",attrs:{value:"#7417BE","hide-canvas":"","hide-inputs":"","show-swatches":""},on:{input:e.onInput},model:{value:e.colorChoice,callback:function(t){e.colorChoice=t},expression:"colorChoice"}})],1)],1)]}}])},[t("span",[e._v(e._s(e.text))])])},N=[],q=s(2982),U={name:"ColorPicker",props:{value:{type:String,default:"#000000"},text:{type:String,default:"color picker"}},data(){return{mask:"!#XXXXXXXX",menu:!1,colorChoice:this.value}},directives:{mask:q.mask},computed:{swatchStyle(){const{colorChoice:e,menu:t}=this;return{backgroundColor:e,cursor:"pointer",height:"30px",width:"30px",borderRadius:t?"50%":"4px",transition:"border-radius 200ms ease-in-out"}}},methods:{onInput(){this.$emit("input",this.colorChoice)}}},A=U,H=(0,d.Z)(A,M,N,!1,null,null,null),Q=H.exports;const W=(e,t,s)=>{var a=t.split(" "),o=[],n="";if(e.measureText(t).width<s)return[t];while(a.length>0){while(e.measureText(a[0]).width>=s){var i=a[0];a[0]=i.slice(0,-1),a.length>1?a[1]=i.slice(-1)+a[1]:a.push(i.slice(-1))}e.measureText(n+a[0]).width<s?n+=a.shift()+" ":(o.push(n),n=""),0===a.length&&o.push(n)}return o};var J={name:"GeneratorCore",data(){return{open:!1,aboveText:"First line",belowText:"Second line",img:new Image,fontSize:48,activeFont:"Impact",color1:"#FFFFFF",outlineColor:"#000000",outlineSize:1,padX:4,padY:4,ctx:null,fontList:I(),title:""}},props:{src:String,id:String},components:{ColorPicker:Q},mounted(){this.init(),this.$nextTick(this.loaded)},methods:{loaded(){this.img.onload=()=>this.draw(),this.img.crossOrigin="anonymous",this.img.src=`${this.src}.jpg`},onDrop(e){const t=e.dataTransfer||e.originalEvent.dataTransfer;if(1!==t.files.length);else{const s=t.files[0];if(-1===s.type.indexOf("image"))return e.preventDefault(),!1;this.title=s.name;const a=new FileReader;a.readAsDataURL(s),a.onload=e=>{this.img.src=e.target.result}}return e.preventDefault(),!1},search(){this.$emit("search")},exportImage(){const e=()=>document.getElementById(`cvs_${this.id}`);var t=e().toDataURL("image/png");Y()(t,`${this.title}_${this.aboveText}_${this.belowText}.png`)},init(){this.aboveText="First line",this.belowText="Second line"},close(){this.$emit("cancel")},draw(){const e=()=>document.getElementById(`cvs_${this.id}`);if(!e())return;let t=e().getContext("2d");t.drawImage(this.img,0,0);const s=640,a=450,o=400,n=300;let i=this.img.height,r=this.img.width;while(i>s||r>a)--i,--r;while(i<o||r<n)++i,++r;e().height=i,e().width=r,t.save(),t.clearRect(0,0,r,i),t.drawImage(this.img,0,0,r,i),t.font="bold "+this.fontSize+"px "+this.activeFont,t.textAlign="center",t.fillStyle=this.color1;const l=W(t,this.aboveText,r-this.fontSize-this.padX),c=W(t,this.belowText,r-this.fontSize-this.padX).reverse();l.forEach(((e,s)=>{t.fillText(e,r/2,this.padY+(s+1)*this.fontSize)})),c.forEach(((e,s)=>{t.fillText(e,r/2,i-(10+1.75*this.padY+s*this.fontSize))})),this.outlineSize>0&&(t.strokeStyle=this.outlineColor,t.lineWidth=this.outlineSize,l.forEach(((e,s)=>{t.strokeText(e,r/2,this.padY+(s+1)*this.fontSize)})),c.forEach(((e,s)=>{t.strokeText(e,r/2,i-(10+1.75*this.padY+s*this.fontSize))}))),t.restore()}},watch:{aboveText(){this.draw()},belowText(){this.draw()},src(){this.loaded()}}},K=J,ee=(0,d.Z)(K,R,j,!1,null,"79a2326a",null),te=ee.exports,se=s(5125),ae=function(){var e=this,t=e._self._c;return t(se.Z,{on:{submit:e.handleSearch},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.closeSearch.apply(null,arguments)}}},[t(T.Z,{staticClass:"Search"},[t(E.Z,{staticClass:"Search",attrs:{autofocus:"",placeholder:"Search Flickr","append-icon":"mdi-magnify","prepend-icon":"mdi-anvil",rounded:"",outlined:"",clearable:"","hide-details":""},on:{"click:append":e.fetchData,"click:prepend":e.closeSearch},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e.showResults?t(T.Z,[t("results-container",{attrs:{text:e.text,photo:e.photo,total:e.total,page:e.page},on:{next:e.fetchData,selected:e.selected}})],1):e._e()],1)},oe=[],ne=function(){var e=this,t=e._self._c;return t(T.Z,{staticClass:"results"},[t("p",[t(S.Z,{attrs:{text:"",icon:""},on:{click:e.handleBack}},[t($.Z,[e._v("mdi-arrow-left")])],1),e._v(e._s(e.total.toLocaleString())+' Results for "'+e._s(e.text)+'" - page '+e._s(e.page))],1),t("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.fetchData,expression:"fetchData"}],attrs:{"infinite-scroll-disabled":"busy"}},[t(z.Z,e._l(e.photo,(function(s,a){return t(C.Z,{key:a,staticClass:"image",attrs:{cols:"3"}},[t("image-container",{attrs:{src:e.source(s),title:s.title,id:a},on:{selected:function(t){e.selected({...s,src:e.source(s)})}}})],1)})),1),t("h4",[e._v("Loading...")])],1)])},ie=[],re=s(5495),le=function(){var e=this,t=e._self._c;return t(re.Z,{attrs:{src:`${e.src}_q.jpg`,title:e.title},on:{click:e.selected}})},ce=[],ue={name:"imageContainer",components:{memeGenerator:te},data(){return{open:!1,test:"Generate Your Meme"}},props:{src:String,title:String,id:Number},methods:{selected(){this.$emit("selected")},close(){console.log("emittted received"),this.open=!1}}},he=ue,de=(0,d.Z)(he,le,ce,!1,null,"29a139f3",null),pe=de.exports,fe={name:"resultsContainer",components:{ImageContainer:pe},props:{text:{type:String,default:""},photo:[],total:{type:Number,default:0},page:{type:Number,default:0}},data(){return{busy:!1}},methods:{fetchData(){this.$emit("next")},handleBack(e){e.preventDefault()},source(e){return`https://live.staticflickr.com/${e.server}/${e.id}_${e.secret}`},selected(e){console.log(e),this.$emit("selected",e)}}},me=fe,ve=(0,d.Z)(me,ne,ie,!1,null,null,null),xe=ve.exports,ge={name:"searchPage",components:{ResultsContainer:xe},data(){return{text:"",searchValue:"",showResults:!1,busy:!1,page:0,photo:[],total:0}},methods:{closeSearch(){this.$emit("closeSearch")},selected(e){console.log(e),this.$emit("selected",e)},handleSearch(e){e.preventDefault(),this.init(),this.fetchData()},init(){this.busy=!1,this.page=0,this.photo=[],this.total=0},fetchData(){if(this.busy)return;this.busy=!0;const e="https://www.flickr.com/services/rest/?"+new URLSearchParams({method:"flickr.photos.search",api_key:"b235d15e6d03a052c424e6d5f652e217",text:this.text,sort:"relevance",page:this.page,format:"json",nojsoncallback:1});fetch(e).then((e=>{if(!e.ok)throw Error(e.statusText);return e.json()})).then((e=>{console.log(e),this.photo=[...this.photo,...e.photos.photo],this.page+=1,this.total=e.photos.total,this.busy=!1,this.showResults=!0})).catch((e=>{console.log(e)}))}}},be=ge,we=(0,d.Z)(be,ae,oe,!1,null,"cc2ce726",null),_e=we.exports,ye={name:"homePage",components:{MemeGenerator:te,SearchContainer:_e},data(){return{text:"",src:"https://live.staticflickr.com/3052/2937479216_ab63558e41",title:"title",id:"1",searchVisible:!1}},methods:{search(){this.searchVisible=!0},closeSearch(){this.searchVisible=!1},toggleSearch(){this.searchVisible=!this.searchVisible},selected(e){this.src=e.src,this.title=e.title,this.searchVisible=!1,this.id=e.id},handleSearch(e){e.preventDefault(),this.text&&this.$router.push({name:"search",query:{text:this.text}})}}},ke=ye,Se=(0,d.Z)(ke,y,k,!1,null,"30df30d2",null),Ze=Se.exports,Ce={name:"HomeView",components:{HomePage:Ze}},Te=Ce,$e=(0,d.Z)(Te,b,w,!1,null,null,null),ze=$e.exports,De=function(){var e=this,t=e._self._c;return t("div",[t("nav-bar"),t("search-results")],1)},Oe=[],Fe=s(704),Xe=function(){var e=this,t=e._self._c;return t(se.Z,{on:{submit:e.handleSubmit}},[t(Fe.Z,{staticClass:"Navbar",attrs:{flat:"",color:"white"}},[t(T.Z,{staticClass:"Search"},[t(E.Z,{attrs:{dense:"",placeholder:"Search Your Meme","prepend-inner-icon":"mdi-magnify",outlined:"","hide-details":"",clearable:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)],1)],1)},Ee=[],Re={name:"navBar",data(){return{text:""}},methods:{handleSubmit(e){e.preventDefault(),this.text&&this.$router.push({name:"search",query:{text:this.text}})}}},je=Re,Pe=(0,d.Z)(je,Xe,Ee,!1,null,"22db5316",null),Ye=Pe.exports,Be=function(){var e=this,t=e._self._c;return t(T.Z,{staticClass:"results"},[t("p",[t(S.Z,{attrs:{text:"",icon:""},on:{click:e.handleBack}},[t($.Z,[e._v("mdi-arrow-left")])],1),e._v(e._s(e.total.toLocaleString())+' Results for "'+e._s(e.text)+'"')],1),t("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.fetchData,expression:"fetchData"}],attrs:{"infinite-scroll-disabled":"busy"}},[t(z.Z,e._l(e.photo,(function(e,s){return t(C.Z,{key:s,staticClass:"image",attrs:{cols:"3"}},[t("image-container",{attrs:{src:`https://live.staticflickr.com/${e.server}/${e.id}_${e.secret}`,title:e.title,id:s}})],1)})),1),t("h4",[e._v("Loading...")])],1)])},Ie=[],Ve={name:"searchResults",components:{imageContainer:pe},data(){return{busy:!0,text:this.$route.query.text,page:0,photo:[],total:0}},created(){this.$watch((()=>this.$route.query),(()=>{this.init(),this.fetchData()}),{immediate:!0})},methods:{init(){this.busy=!0,this.text=this.$route.query.text,this.page=0,this.photo=[],this.total=0},fetchData(){this.busy=!0;const e="https://www.flickr.com/services/rest/?"+new URLSearchParams({method:"flickr.photos.search",api_key:"b235d15e6d03a052c424e6d5f652e217",text:this.text,sort:"relevance",page:this.page,format:"json",nojsoncallback:1});fetch(e).then((e=>{if(!e.ok)throw Error(e.statusText);return e.json()})).then((e=>{console.log(e),this.photo=[...this.photo,...e.photos.photo],this.page+=1,this.total=e.photos.total,this.busy=!1})).catch((e=>console.log(e)))},handleBack(e){e.preventDefault(),this.$router.push({name:"home"})}}},Le=Ve,Ge=(0,d.Z)(Le,Be,Ie,!1,null,null,null),Me=Ge.exports,Ne={name:"ResultsView",components:{navBar:Ye,searchResults:Me}},qe=Ne,Ue=(0,d.Z)(qe,De,Oe,!1,null,null,null),Ae=Ue.exports;a["default"].use(g.ZP);const He=[{path:"/",name:"home",component:ze},{path:"/search",name:"search",component:Ae}],Qe=new g.ZP({mode:"history",base:"",routes:He});var We=Qe;a["default"].config.productionTip=!1,a["default"].use(n()),new a["default"]({vuetify:x,router:We,render:e=>e(f)}).$mount("#app")}},t={};function s(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,a,o,n){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],n=e[u][2];for(var r=!0,l=0;l<a.length;l++)(!1&n||i>=n)&&Object.keys(s.O).every((function(e){return s.O[e](a[l])}))?a.splice(l--,1):(r=!1,n<i&&(i=n));if(r){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,o,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,i=a[0],r=a[1],l=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(l)var u=l(s)}for(t&&t(a);c<i.length;c++)n=i[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(u)},a=self["webpackChunkmeme_generator"]=self["webpackChunkmeme_generator"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(6273)}));a=s.O(a)})();
//# sourceMappingURL=app.e99f9d1b.js.map