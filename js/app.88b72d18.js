(()=>{var e={2396:(e,t,o)=>{"use strict";var n=o(5471),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("b-navbar",{staticClass:"border-bottom border-info",attrs:{toggleable:"lg",type:"light",variant:"light"}},[t("b-navbar-brand",{attrs:{to:{name:"home"}}},[t("img",{staticClass:"d-inline-block align-top navbar-logo",attrs:{src:o(3935),alt:"Humbug"}}),e._v(" Humbug ")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[t("BIconFlag"),t("span",[e._v(" "+e._s(e.$t("menuLocale")))])]},proxy:!0}])},e._l(e.languages,(function(o){return t("b-dropdown-item",{key:`locale-${o.locale}`,on:{click:function(t){return e.onLocaleChanged(o)}}},[t("span",{staticClass:"mr-2"},[e._v(e._s(o.icon))]),t("span",[e._v(e._s(o.name))])])})),1),t("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[t("BIconFolderPlus"),e._v(" "+e._s(e.$t("menuImport"))+" ")]},proxy:!0}])},[t("b-dropdown-item",{on:{click:e.onImportFromFileClicked}},[t("BIconFileEarmarkPlus"),e._v(" "+e._s(e.$t("menuImportFile"))+" ")],1),t("b-dropdown-item",{on:{click:e.onImportFromClipboardClicked}},[t("BIconClipboardPlus"),e._v(" "+e._s(e.$t("menuImportClipboard"))+" ")],1)],1),t("b-nav-item",{attrs:{href:"#"},on:{click:e.onClearClicked}},[t("BIconTrash"),e._v(" "+e._s(e.$t("menuClear")))],1),t("b-nav-item",{attrs:{href:"#"},on:{click:e.onExportJsonClicked}},[t("BIconFileEarmarkCode"),e._v(" "+e._s(e.$t("menuSaveConfig")))],1),t("b-nav-item",{attrs:{href:"#"},on:{click:e.print}},[t("BIconPrinter"),e._v(" "+e._s(e.$t("menuPrint")))],1),t("b-nav-item",{attrs:{to:{name:"about"}}},[t("BIconInfoCircle"),e._v(" "+e._s(e.$t("menuAbout")))],1)],1)],1)],1),t("router-view")],1)},a=[],i=o(2532),s=o(8607),c=o(5353),u=o(4765),l=o(9744),d=o(6190);n.Ay.use(u.A);const m={en_GB:d,de_DE:l},b=new u.A({locale:"en_GB",fallbackLocale:"en_GB",messages:m}),p=["en_GB"];function g(e){return b.locale=e,document.querySelector("html").setAttribute("lang",e),e}function h(e){return b.locale===e||p.includes(e)?Promise.resolve(g(e)):o(9308)(`./${e}.json`).then((t=>(b.setLocaleMessage(e,t.default),p.push(e),g(e))))}var f=o(2948);const A=class{detect(){const e="-";let t,o,n,r=navigator.appVersion,a=navigator.userAgent,i=navigator.appName,s=""+parseFloat(navigator.appVersion),c=parseInt(navigator.appVersion,10),u=navigator.language;u&&(u=u.replace("-","_")),-1!=(o=a.indexOf("Opera"))&&(i="Opera",s=a.substring(o+6),-1!=(o=a.indexOf("Version"))&&(s=a.substring(o+8))),-1!=(o=a.indexOf("OPR"))?(i="Opera",s=a.substring(o+4)):-1!=(o=a.indexOf("Edge"))?(i="Microsoft Legacy Edge",s=a.substring(o+5)):-1!=(o=a.indexOf("Edg"))?(i="Microsoft Edge",s=a.substring(o+4)):-1!=(o=a.indexOf("MSIE"))?(i="Microsoft Internet Explorer",s=a.substring(o+5)):-1!=(o=a.indexOf("Chrome"))?(i="Chrome",s=a.substring(o+7)):-1!=(o=a.indexOf("Safari"))?(i="Safari",s=a.substring(o+7),-1!=(o=a.indexOf("Version"))&&(s=a.substring(o+8))):-1!=(o=a.indexOf("Firefox"))?(i="Firefox",s=a.substring(o+8)):-1!=a.indexOf("Trident/")?(i="Microsoft Internet Explorer",s=a.substring(a.indexOf("rv:")+3)):(t=a.lastIndexOf(" ")+1)<(o=a.lastIndexOf("/"))&&(i=a.substring(t,o),s=a.substring(o+1),i.toLowerCase()==i.toUpperCase()&&(i=navigator.appName)),-1!=(n=s.indexOf(""))&&(s=s.substring(0,n)),-1!=(n=s.indexOf(" "))&&(s=s.substring(0,n)),-1!=(n=s.indexOf(")"))&&(s=s.substring(0,n)),c=parseInt(""+s,10),isNaN(c)&&(s=""+parseFloat(navigator.appVersion),c=parseInt(navigator.appVersion,10));let l=e;const d=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Chrome OS",r:/CrOS/},{s:"Linux",r:/(Linux|X11(?!.*CrOS))/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(let b in d){let e=d[b];if(e.r.test(a)){l=e.s;break}}let m=e;switch(/Windows/.test(l)&&(m=/Windows (.*)/.exec(l)[1],l="Windows"),l){case"Mac OS":case"Mac OS X":case"Android":m=/(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(a)[1];break;case"iOS":m=/OS (\d+)_(\d+)_?(\d+)?/.exec(r),m=m[1]+"."+m[2]+"."+(0|m[3]);break}return{browser:i,browserVersion:s,browserMajorVersion:c,os:l,osVersion:m,locale:u}}};var O=o(3241);const _={components:{BIconFolderPlus:f.kZH,BIconTrash:f.ged,BIconPrinter:f.uWT,BIconInfoCircle:f.CEo,BIconFlag:f.c_U,BIconFileEarmarkPlus:f.FpA,BIconClipboardPlus:f.YoA,BIconFileEarmarkCode:f.CTC},data:function(){return{languages:[{locale:"en_GB",name:"British English",icon:"🇬🇧"},{locale:"de_DE",name:"Deutsch - Deutschland",icon:"🇩🇪"}]}},computed:{...(0,c.L8)(["storeLocale","storePlausibleApiHost","storePlausibleDomain","storeUniqueClientId","storeRunCount","storeBarcodes"])},methods:{isLocalhost:function(){return"localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname||""===window.location.hostname},onLocaleChanged:function(e){h(e.locale).then((()=>{this.$i18n.locale=e.locale,this.$store.dispatch("setLocale",e.locale)}))},onExportJsonClicked:function(){if(this.storeBarcodes){const e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.storeBarcodes)),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","humbug.json"),t.click()}},onImportFromClipboardClicked:function(){s.A.emit("show-import")},onImportFromFileClicked:function(){const e=document.createElement("input");e.type="file",e.accept="application/JSON",e.onchange=e=>{const t=e.target.files[0],o=new FileReader;o.onload=e=>{try{const t=JSON.parse(e.target.result);if(Array.isArray(t)){const e=t.map((e=>e.text?{text:e.text,type:e.type,uuid:e.uuid||this.uuidv4(),image:e.image}:null)).filter((e=>null!==e));this.$store.dispatch("setBarcodes",e),O.A.setBarcodeImages(e)}else this.$bvModal.msgBoxOk(this.$t("modalTextImportError"),{title:this.$t("modalTitleImportError"),okTitle:this.$t("buttonOk")})}catch(t){console.error(t),this.$bvModal.msgBoxOk(t,{title:this.$t("modalTitleImportError"),okTitle:this.$t("buttonOk")})}},o.readAsText(t)},e.click()},onClearClicked:function(){s.A.emit("clear-barcodes"),O.A.clearImages()},print:function(){window.print()}},mounted:function(){if(h(this.storeLocale),!this.isLocalhost()){let e=this.storeUniqueClientId;e||(e=this.uuidv4(),this.$store.dispatch("setUniqueClientId",e));const t=(new A).detect();if(void 0!==t.os&&null!==t.os&&"Search Bot"!==t.os){const o={application:"Humbug",runCount:this.storeRunCount+1,id:e,version:`${this.humbugVersion}`,locale:this.storeLocale,os:`${t.os} ${t.osVersion}`},n=new URL("https://ics.hutton.ac.uk/app-logger/log");n.search=new URLSearchParams(o).toString(),fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}).then((()=>{this.$store.dispatch("setRunCount",0)})).catch((e=>{console.error(e),this.$store.dispatch("setRunCount",this.storeRunCount+1)}))}}n.Ay.use(i.S,{domain:this.storePlausibleDomain,hashMode:!0,apiHost:this.storePlausibleApiHost,trackLocalhost:!1}),this.$nextTick((()=>{this.$plausible.enableAutoPageviews()}))}},v=_;var C=o(1656),T=(0,C.A)(v,r,a,!1,null,null,null);const N=T.exports;var w=o(3723);(0,w.k)("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then((function(e){for(const t of e)t.update()})),setTimeout((()=>{window.location.reload(!0)}),1e3)},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var E=o(173);n.Ay.use(E.A);const I=[{path:"/",name:"home",component:()=>o.e(962).then(o.bind(o,7241))},{path:"/import",name:"import",component:()=>o.e(836).then(o.bind(o,4987))},{path:"/about",name:"about",component:()=>o.e(594).then(o.bind(o,1231))}],B=new E.A({routes:I}),y=B;var D=o(406);n.Ay.use(c.Ay);let x={NODE_ENV:"production",BASE_URL:""}.VUE_APP_INSTANCE_NAME;x||(x="humbug-"+window.location.pathname);const k=new c.Ay.Store({state:{uniqueClientId:null,runCount:0,dndEnabled:!0,maxImageHeight:300,barcodeColumns:3,barcodeHeight:50,barcodeWidth:2,defaultBarcodeType:"CODE128",barcodes:[],locale:"en_GB",plausibleApiHost:"https://plausible.hutton.ac.uk",plausibleDomain:"cropgeeks.github.io/humbug"},getters:{storeRunCount:e=>e.runCount,storeUniqueClientId:e=>e.uniqueClientId,storeDnDEnabled:e=>e.dndEnabled,storeMaxImageHeight:e=>e.maxImageHeight,storeBarcodeHeight:e=>e.barcodeHeight,storeBarcodeWidth:e=>e.barcodeWidth,storeBarcodeColumns:e=>e.barcodeColumns,storeDefaultBarcodeType:e=>e.defaultBarcodeType,storeBarcodes:e=>e.barcodes,storeLocale:e=>e.locale,storePlausibleApiHost:e=>e.plausibleApiHost,storePlausibleDomain:e=>e.plausibleDomain},mutations:{ON_DND_ENABLED_CHANGED_MUTATION:function(e,t){e.dndEnabled=t},ON_RUN_COUNT_CHANGED_MUTATION:function(e,t){e.runCount=t},ON_UNIQUE_CLIENT_ID_CHANGED_MUTATION:function(e,t){e.uniqueClientId=t},ON_MAX_IMAGE_HEIGHT_CHANGED_MUTATION:function(e,t){e.maxImageHeight=t},ON_BARCODE_COLUMNS_CHANGED_MUTATION:function(e,t){e.barcodeColumns=t},ON_BARCODE_HEIGHT_CHANGED_MUTATION:function(e,t){e.barcodeHeight=t},ON_BARCODE_WIDTH_CHANGED_MUTATION:function(e,t){e.barcodeWidth=t},ON_DEFAULT_BARCODE_TYPE_CHANGED_MUTATION:function(e,t){e.defaultBarcodeType=t},ON_BARCODES_CHANGED_MUTATION:function(e,t){e.barcodes=t},ON_BARCODES_ADDED_MUTATION:function(e,t){e.barcodes=e.barcodes.concat(t)},ON_BARCODE_DELETED_MUTATION:function(e,t){e.barcodes.splice(t,1)},ON_BARCODE_UPDATED_MUTATION:function(e,t){n.Ay.set(e.barcodes,t.index,t.value),s.A.emit("barcode-updated",t.index)},ON_LOCALE_CHANGED_MUTATION:function(e,t){e.locale=t}},actions:{setDnDEnabled:function(e,t){let{commit:o}=e;o("ON_DND_ENABLED_CHANGED_MUTATION",t)},setRunCount:function(e,t){let{commit:o}=e;o("ON_RUN_COUNT_CHANGED_MUTATION",t)},setUniqueClientId:function(e,t){let{commit:o}=e;o("ON_UNIQUE_CLIENT_ID_CHANGED_MUTATION",t)},setMaxImageHeight:function(e,t){let{commit:o}=e;o("ON_MAX_IMAGE_HEIGHT_CHANGED_MUTATION",t)},setBarcodeColumns:function(e,t){let{commit:o}=e;o("ON_BARCODE_COLUMNS_CHANGED_MUTATION",t)},setBarcodeHeight:function(e,t){let{commit:o}=e;o("ON_BARCODE_HEIGHT_CHANGED_MUTATION",t)},setBarcodeWidth:function(e,t){let{commit:o}=e;o("ON_BARCODE_WIDTH_CHANGED_MUTATION",t)},setDefaultBarcodeType:function(e,t){let{commit:o}=e;o("ON_DEFAULT_BARCODE_TYPE_CHANGED_MUTATION",t)},setBarcodes:function(e,t){let{commit:o}=e;o("ON_BARCODES_CHANGED_MUTATION",t)},addBarcodes:function(e,t){let{commit:o}=e;o("ON_BARCODES_ADDED_MUTATION",t)},deleteBarcode:function(e,t){let{commit:o}=e;o("ON_BARCODE_DELETED_MUTATION",t)},updateBarcode:function(e,t){let{commit:o}=e;o("ON_BARCODE_UPDATED_MUTATION",t)},setLocale:function(e,t){let{commit:o}=e;o("ON_LOCALE_CHANGED_MUTATION",t)}},plugins:[(0,D.A)({key:x,reducer:e=>{let t={};try{t=JSON.parse(JSON.stringify(e))}catch{return e}return t.barcodes&&t.barcodes.forEach((e=>{delete e.image})),t}})]}),S={data:function(){return{humbugVersion:"1.0.0",barcodeTypes:["CODE128","CODE39","QR"]}},methods:{uuidv4:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0,o="x"===e?t:3&t|8;return o.toString(16)}))}}};var M=o(5915),H=o(9127),P=o(5157),L=o(2477),U=o(4946),W=o(9307),R=o(2670),G=o(2999),F=o(3929),j=o(9059),$=o(3681),V=o(4145),z=o(126),q=o(8230),X=o(304),J=o(9545),Y=o(3205),K=o(5043),Q=o(9058);o(5542),n.Ay.use(M.CG),n.Ay.use(H.l),n.Ay.use(P.zK),n.Ay.use(L.p),n.Ay.use(U.q0),n.Ay.use(W.rn),n.Ay.use(R.sG),n.Ay.use(G.p),n.Ay.use(F.O),n.Ay.use(j.wv),n.Ay.use($.e),n.Ay.use(V.Z),n.Ay.use(z.q),n.Ay.use(q.m0),n.Ay.use(X.XB),n.Ay.use(J.qc),n.Ay.use(Y.hW),n.Ay.use(K.T),n.Ay.use(Q.z),n.Ay.mixin(S),n.Ay.config.productionTip=!1,new n.Ay({router:y,store:k,i18n:b,render:e=>e(N)}).$mount("#app")},8607:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var n=o(7380);const r=(0,n.A)(),a=r},3241:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var n=o(4297);let r;const a={getDb:async function(){return new Promise(((e,t)=>{if(r)return e(r);(0,n.P2)("humbug-"+window.location.pathname,1,{upgrade:function(e,t,o,n){if(t<1){const t=e.createObjectStore("images",{keyPath:"uuid"});t.createIndex("uuid","uuid",{unique:!0}),t.createIndex("imageData","imageData",{unique:!1})}}}).then((t=>e(t)))}))},getAllImages:async function(){const e=await this.getDb();return e.getAll("images")},getImage:async function(e){const t=await this.getDb();return t.get("images",e)},setBarcodeImages:async function(e){const t=await this.getDb();return new Promise((o=>{const n=t.transaction("images","readwrite");Promise.all(e.filter((e=>e.image)).map((e=>n.store.put({uuid:e.uuid,imageData:e.image})))).then((()=>(o(),n.done)))}))},addImage:async function(e,t){const o=await this.getDb();return o.add("images",{uuid:e,imageData:t})},deleteImage:async function(e){const t=await this.getDb();return t.delete("images",e)},clearImages:async function(){const e=await this.getDb();return e.clear("images")}}},9308:(e,t,o)=>{var n={"./de_DE.json":9744,"./en_GB.json":6190};function r(e){return Promise.resolve().then((()=>{if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var r=n[e];return o.t(r,19)}))}r.keys=()=>Object.keys(n),r.id=9308,e.exports=r},3935:(e,t,o)=>{"use strict";e.exports=o.p+"img/logo.8640eb9b.svg"},9744:e=>{"use strict";e.exports=JSON.parse('{"appName":"Humbug","buttonAdd":"Hinzufügen","buttonCancel":"Abbrechen","buttonNo":"Nein","buttonOk":"OK","buttonReplace":"Ersetzen","buttonTitleDeleteBarcode":"Barcode löschen","buttonTitleRemoveImage":"Bild entfernen","buttonTitleSelectImage":"Bild auswählen","buttonYes":"Ja","checkboxDisabled":"Deaktiviert","checkboxEnabled":"Aktiviert","formLabelBarcodeDefaultType":"Standard-Barcode-Typ","formLabelBarcodeHeight":"Barcode-Höhe","formLabelBarcodeWidth":"Barcode-Breite","formLabelBarcodeType":"Barcode-Typ","formLabelBarcodes":"Barcodes","formLabelDnDStatus":"Ziehen und ablegen Status","formLabelImageMaxHeight":"Max. Bildhöhe","formLabelNumberColumns":"Anzahl an Spalten","menuAbout":"Über","menuClear":"Leeren","menuImport":"Importieren","menuImportFile":"Von Datei","menuImportClipboard":"Von Zwischenablage","menuLocale":"Sprache","menuPrint":"Drucken","menuSaveConfig":"Konfiguration speichern","modalTextClearBarcodes":"Sicher, dass alle Barcodes entfernt werden sollen?","modalTitleClearBarcodes":"Barcodes entfernen","modalTitleImportClipboard":"Von Zwischenablage importieren","pageTextAboutParagraphOne":"Humbug ist ein Tool um Barcodes zu erstellen und wird hauptsächlich benutzt um Bewertungsbögen für phänotypische Pflanzenfeldversuche zu erstellen. Allerdings kann es auch außerhalb dieses Bereiches vielseitig eingesetzt werden. Bitte zöger nicht, Humbug zum Erstellen von jeglichen Barcode-Bögen zu verwenden.","pageTextAboutParagraphTwo":"Humbug wurde entwickelt von <a href=\'https: //www.hutton.ac.uk/staff/sebastian-raubach\'>Sebastian Raubach</a>. Bei Fragen, Vorschlägen oder genereller Rückmeldung, bitte mit <a href=\'mailto:sebastian.raubach@hutton.ac.uk\'>Sebastian</a> in Kontakt setzen.","pageTextAboutGitHub":"Der Quellcode von Humbug ist verfügbar auf <a href=\'https://github.com/cropgeeks/humbug/\'>GitHub</a>.","pageTextImport":"Bitte auswählen ob die neuen Elemente zu existierenden Barcodes in Humbug hinzugefügt werden sollen oder ob sie jegliche existierende Barcodes ersetzen sollen.","pageTitleImport":"Barcode-Import","tooltipBarcodeEnter":"Enter drücken um Barcode zu setzen"}')},6190:e=>{"use strict";e.exports=JSON.parse('{"appName":"Humbug","buttonAdd":"Add","buttonCancel":"Cancel","buttonNo":"No","buttonOk":"OK","buttonReplace":"Replace","buttonTitleDeleteBarcode":"Delete barcode","buttonTitleRemoveImage":"Remove image","buttonTitleSelectImage":"Select image","buttonYes":"Yes","checkboxDisabled":"Disabled","checkboxEnabled":"Enabled","formLabelBarcodeDefaultType":"Default barcode type","formLabelBarcodeHeight":"Barcode height","formLabelBarcodeWidth":"Barcode width","formLabelBarcodeType":"Barcode type","formLabelBarcodes":"Barcodes","formLabelDnDStatus":"Drag and drop status","formLabelImageMaxHeight":"Max. image height","formLabelNumberColumns":"Number of columns","menuAbout":"About","menuClear":"Clear","menuImport":"Import","menuImportFile":"From file","menuImportClipboard":"From clipboard","menuLocale":"Language","menuPrint":"Print","menuSaveConfig":"Save configuration","modalTextClearBarcodes":"Are you sure you want to remove all barcodes?","modalTitleClearBarcodes":"Clear barcodes","modalTitleImportClipboard":"Import from clipboard","pageTextAboutParagraphOne":"Humbug is a barcode generation tool mainly developed to create phenotypic plant trial scoring sheets. However, it has many uses outside of this domain. Feel free to use it to generate any kind of barcode sheets.","pageTextAboutParagraphTwo":"Humbug has been developed by <a href=\'https: //www.hutton.ac.uk/staff/sebastian-raubach\'>Sebastian Raubach</a>. If you have any questions, suggestions or general feedback, please contact <a href=\'mailto:sebastian.raubach@hutton.ac.uk\'>Sebastian</a>.","pageTextAboutGitHub":"The source code of Humbug is available on <a href=\'https://github.com/cropgeeks/humbug/\'>GitHub</a>.","pageTextImport":"Please select whether to add the items above to the existing barcodes in Humbug or to replace any existing barcodes.","pageTitleImport":"Barcode import","tooltipBarcodeEnter":"Click enter to set barcode"}')}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,r,a]=e[l],s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,r,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var a=Object.create(null);o.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>n[e]));return i["default"]=()=>n,o.d(a,i),a}})(),(()=>{o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+{594:"about",836:"import",962:"home"}[e]+"."+{594:"ba9880e7",836:"9e3b4b9f",962:"64b99d79"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+{594:"about",962:"home"}[e]+"."+{594:"f1356052",962:"39cbcf2d"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="humbug:";o.l=(n,r,a,i)=>{if(e[n])e[n].push(r);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[r];var m=(t,o)=>{s.onerror=s.onload=null,clearTimeout(b);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(o))),t)return t(o)},b=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=a=>{if(r.onerror=r.onload=null,"load"===a.type)o();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),n(c)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],a=r.getAttribute("data-href");if(a===e||a===t)return r}},n=n=>new Promise(((r,a)=>{var i=o.miniCssF(n),s=o.p+i;if(t(i,s))return r();e(n,s,r,a)})),r={524:0};o.f.miniCss=(e,t)=>{var o={594:1,962:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}})(),(()=>{var e={524:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((o,n)=>r=e[t]=[o,n]));n.push(r[2]=a);var i=o.p+o.u(t),s=new Error,c=n=>{if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};o.l(i,c,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,s,c]=n,u=0;if(i.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var l=c(o)}for(t&&t(n);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(l)},n=self["webpackChunkhumbug"]=self["webpackChunkhumbug"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[504],(()=>o(2396)));n=o.O(n)})();
//# sourceMappingURL=app.88b72d18.js.map