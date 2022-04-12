(()=>{var e={8790:(e,t,n)=>{"use strict";var r=n(144),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-navbar",{staticClass:"border-bottom border-info",attrs:{toggleable:"lg",type:"light",variant:"light"}},[r("b-navbar-brand",{attrs:{to:{name:"home"}}},[r("img",{staticClass:"d-inline-block align-top navbar-logo",attrs:{src:n(9574),alt:"Humbug"}}),e._v(" Humbug ")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("BIconFlag"),r("span",[e._v(" "+e._s(e.$t("menuLocale")))])]},proxy:!0}])},e._l(e.languages,(function(t){return r("b-dropdown-item",{key:"locale-"+t.locale,on:{click:function(n){return e.onLocaleChanged(t)}}},[r("span",{staticClass:"mr-2"},[e._v(e._s(t.icon))]),r("span",[e._v(e._s(t.name))])])})),1),r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("BIconFolderPlus"),e._v(" "+e._s(e.$t("menuImport"))+" ")]},proxy:!0}])},[r("b-dropdown-item",{on:{click:e.onImportFromFileClicked}},[r("BIconFileEarmarkPlus"),e._v(" "+e._s(e.$t("menuImportFile"))+" ")],1),r("b-dropdown-item",{on:{click:e.onImportFromClipboardClicked}},[r("BIconClipboardPlus"),e._v(" "+e._s(e.$t("menuImportClipboard"))+" ")],1)],1),r("b-nav-item",{attrs:{href:"#"},on:{click:e.onClearClicked}},[r("BIconTrash"),e._v(" "+e._s(e.$t("menuClear")))],1),r("b-nav-item",{attrs:{href:"#"},on:{click:e.onExportJsonClicked}},[r("BIconFileEarmarkCode"),e._v(" "+e._s(e.$t("menuSaveConfig")))],1),r("b-nav-item",{attrs:{href:"#"},on:{click:e.print}},[r("BIconPrinter"),e._v(" "+e._s(e.$t("menuPrint")))],1),r("b-nav-item",{attrs:{to:{name:"about"}}},[r("BIconInfoCircle"),e._v(" "+e._s(e.$t("menuAbout")))],1)],1)],1)],1),r("router-view")],1)},a=[],i=(n(7327),n(1539),n(1249),n(2222),n(6992),n(8783),n(3948),n(285),n(1637),n(4916),n(4765),n(9714),n(8674),n(7941),n(2526),n(5003),n(4747),n(9337),n(272)),s=n(7616),u=n(629),c=(n(6699),n(7152)),l=n(7980),d=n(8034);r.Z.use(c.Z);var m={en_GB:d,de_DE:l},f=new c.Z({locale:"en_GB",fallbackLocale:"en_GB",messages:m}),p=["en_GB"];function b(e){return f.locale=e,document.querySelector("html").setAttribute("lang",e),e}function g(e){return f.locale===e||p.includes(e)?Promise.resolve(b(e)):n(8420)("./".concat(e,".json")).then((function(t){return f.setLocaleMessage(e,t.default),p.push(e),b(e)}))}var h=n(8019);n(5306);function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return t&&O(e.prototype,t),n&&O(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var _=function(){function e(){v(this,e)}return w(e,[{key:"detect",value:function(){var e,t,n,r="-",o=navigator.appVersion,a=navigator.userAgent,i=navigator.appName,s=""+parseFloat(navigator.appVersion),u=parseInt(navigator.appVersion,10),c=navigator.language;c&&(c=c.replace("-","_")),-1!=(t=a.indexOf("Opera"))&&(i="Opera",s=a.substring(t+6),-1!=(t=a.indexOf("Version"))&&(s=a.substring(t+8))),-1!=(t=a.indexOf("OPR"))?(i="Opera",s=a.substring(t+4)):-1!=(t=a.indexOf("Edge"))?(i="Microsoft Legacy Edge",s=a.substring(t+5)):-1!=(t=a.indexOf("Edg"))?(i="Microsoft Edge",s=a.substring(t+4)):-1!=(t=a.indexOf("MSIE"))?(i="Microsoft Internet Explorer",s=a.substring(t+5)):-1!=(t=a.indexOf("Chrome"))?(i="Chrome",s=a.substring(t+7)):-1!=(t=a.indexOf("Safari"))?(i="Safari",s=a.substring(t+7),-1!=(t=a.indexOf("Version"))&&(s=a.substring(t+8))):-1!=(t=a.indexOf("Firefox"))?(i="Firefox",s=a.substring(t+8)):-1!=a.indexOf("Trident/")?(i="Microsoft Internet Explorer",s=a.substring(a.indexOf("rv:")+3)):(e=a.lastIndexOf(" ")+1)<(t=a.lastIndexOf("/"))&&(i=a.substring(e,t),s=a.substring(t+1),i.toLowerCase()==i.toUpperCase()&&(i=navigator.appName)),-1!=(n=s.indexOf(""))&&(s=s.substring(0,n)),-1!=(n=s.indexOf(" "))&&(s=s.substring(0,n)),-1!=(n=s.indexOf(")"))&&(s=s.substring(0,n)),u=parseInt(""+s,10),isNaN(u)&&(s=""+parseFloat(navigator.appVersion),u=parseInt(navigator.appVersion,10));var l=r,d=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Chrome OS",r:/CrOS/},{s:"Linux",r:/(Linux|X11(?!.*CrOS))/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(var m in d){var f=d[m];if(f.r.test(a)){l=f.s;break}}var p=r;switch(/Windows/.test(l)&&(p=/Windows (.*)/.exec(l)[1],l="Windows"),l){case"Mac OS":case"Mac OS X":case"Android":p=/(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(a)[1];break;case"iOS":p=/OS (\d+)_(\d+)_?(\d+)?/.exec(o),p=p[1]+"."+p[2]+"."+(0|p[3]);break}return{browser:i,browserVersion:s,browserMajorVersion:u,os:l,osVersion:p,locale:c}}}]),e}(),C=n(3653);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const E={components:{BIconFolderPlus:h.RLE,BIconTrash:h.DkS,BIconPrinter:h.g8Q,BIconInfoCircle:h.gjx,BIconFlag:h.G49,BIconFileEarmarkPlus:h.RHl,BIconClipboardPlus:h.R1J,BIconFileEarmarkCode:h.WGv},data:function(){return{languages:[{locale:"en_GB",name:"British English",icon:"🇬🇧"},{locale:"de_DE",name:"Deutsch - Deutschland",icon:"🇩🇪"}]}},computed:N({},(0,u.Se)(["storeLocale","storePlausibleApiHost","storePlausibleDomain","storeUniqueClientId","storeRunCount","storeBarcodes"])),methods:{isLocalhost:function(){return"localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname||""===window.location.hostname},onLocaleChanged:function(e){var t=this;g(e.locale).then((function(){t.$i18n.locale=e.locale,t.$store.dispatch("setLocale",e.locale)}))},onExportJsonClicked:function(){if(this.storeBarcodes){var e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.storeBarcodes)),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","humbug.json"),t.click()}},onImportFromClipboardClicked:function(){s.Z.emit("show-import")},onImportFromFileClicked:function(){var e=this,t=document.createElement("input");t.type="file",t.accept="application/JSON",t.onchange=function(t){var n=t.target.files[0],r=new FileReader;r.onload=function(t){try{var n=JSON.parse(t.target.result);if(Array.isArray(n)){var r=n.map((function(t){return t.text?{text:t.text,type:t.type,uuid:t.uuid||e.uuidv4(),image:t.image}:null})).filter((function(e){return null!==e}));e.$store.dispatch("setBarcodes",r),C.Z.setBarcodeImages(r)}else e.$bvModal.msgBoxOk(e.$t("modalTextImportError"),{title:e.$t("modalTitleImportError"),okTitle:e.$t("buttonOk")})}catch(o){console.error(o),e.$bvModal.msgBoxOk(o,{title:e.$t("modalTitleImportError"),okTitle:e.$t("buttonOk")})}},r.readAsText(n)},t.click()},onClearClicked:function(){s.Z.emit("clear-barcodes"),C.Z.clearImages()},print:function(){window.print()}},mounted:function(){var e=this;if(g(this.storeLocale),!this.isLocalhost()){var t=this.storeUniqueClientId;t||(t=this.uuidv4(),this.$store.dispatch("setUniqueClientId",t));var n=(new _).detect();if(void 0!==n.os&&null!==n.os&&"Search Bot"!==n.os){var o={application:"Humbug",runCount:this.storeRunCount+1,id:t,version:"".concat(this.humbugVersion),locale:this.storeLocale,os:"".concat(n.os," ").concat(n.osVersion)},a=new URL("https://ics.hutton.ac.uk/app-logger/log");a.search=new URLSearchParams(o).toString(),fetch(a,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"}}).then((function(){e.$store.dispatch("setRunCount",0)})).catch((function(t){console.error(t),e.$store.dispatch("setRunCount",e.storeRunCount+1)}))}}r.Z.use(i.I,{domain:this.storePlausibleDomain,hashMode:!0,apiHost:this.storePlausibleApiHost,trackLocalhost:!1}),this.$nextTick((function(){e.$plausible.enableAutoPageviews()}))}},y=E;var x=n(1001),I=(0,x.Z)(y,o,a,!1,null,null,null);const B=I.exports;n(7042),n(8309),n(1038),n(1817),n(2165);var D=n(5205);function k(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=S(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function S(e,t){if(e){if("string"===typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(0,D.z)("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then((function(e){var t,n=k(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.update()}}catch(o){n.e(o)}finally{n.f()}})),setTimeout((function(){window.location.reload(!0)}),1e3)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var M=n(8345);r.Z.use(M.Z);var H=[{path:"/",name:"home",component:function(){return n.e(177).then(n.bind(n,3512))}},{path:"/import",name:"import",component:function(){return n.e(6).then(n.bind(n,5421))}},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,6032))}}],L=new M.Z({routes:H});const R=L;n(561);var U=n(4702);r.Z.use(u.ZP);var W={NODE_ENV:"production",BASE_URL:""}.VUE_APP_INSTANCE_NAME;W||(W="humbug-"+window.location.pathname);const j=new u.ZP.Store({state:{uniqueClientId:null,runCount:0,dndEnabled:!0,maxImageHeight:300,barcodeColumns:3,barcodeHeight:50,barcodeWidth:2,defaultBarcodeType:"CODE128",barcodes:[],locale:"en_GB",plausibleApiHost:"https://plausible.hutton.ac.uk",plausibleDomain:"cropgeeks.github.io/humbug"},getters:{storeRunCount:function(e){return e.runCount},storeUniqueClientId:function(e){return e.uniqueClientId},storeDnDEnabled:function(e){return e.dndEnabled},storeMaxImageHeight:function(e){return e.maxImageHeight},storeBarcodeHeight:function(e){return e.barcodeHeight},storeBarcodeWidth:function(e){return e.barcodeWidth},storeBarcodeColumns:function(e){return e.barcodeColumns},storeDefaultBarcodeType:function(e){return e.defaultBarcodeType},storeBarcodes:function(e){return e.barcodes},storeLocale:function(e){return e.locale},storePlausibleApiHost:function(e){return e.plausibleApiHost},storePlausibleDomain:function(e){return e.plausibleDomain}},mutations:{ON_DND_ENABLED_CHANGED_MUTATION:function(e,t){e.dndEnabled=t},ON_RUN_COUNT_CHANGED_MUTATION:function(e,t){e.runCount=t},ON_UNIQUE_CLIENT_ID_CHANGED_MUTATION:function(e,t){e.uniqueClientId=t},ON_MAX_IMAGE_HEIGHT_CHANGED_MUTATION:function(e,t){e.maxImageHeight=t},ON_BARCODE_COLUMNS_CHANGED_MUTATION:function(e,t){e.barcodeColumns=t},ON_BARCODE_HEIGHT_CHANGED_MUTATION:function(e,t){e.barcodeHeight=t},ON_BARCODE_WIDTH_CHANGED_MUTATION:function(e,t){e.barcodeWidth=t},ON_DEFAULT_BARCODE_TYPE_CHANGED_MUTATION:function(e,t){e.defaultBarcodeType=t},ON_BARCODES_CHANGED_MUTATION:function(e,t){e.barcodes=t},ON_BARCODES_ADDED_MUTATION:function(e,t){e.barcodes=e.barcodes.concat(t)},ON_BARCODE_DELETED_MUTATION:function(e,t){e.barcodes.splice(t,1)},ON_BARCODE_UPDATED_MUTATION:function(e,t){r.Z.set(e.barcodes,t.index,t.value),s.Z.emit("barcode-updated",t.index)},ON_LOCALE_CHANGED_MUTATION:function(e,t){e.locale=t}},actions:{setDnDEnabled:function(e,t){var n=e.commit;n("ON_DND_ENABLED_CHANGED_MUTATION",t)},setRunCount:function(e,t){var n=e.commit;n("ON_RUN_COUNT_CHANGED_MUTATION",t)},setUniqueClientId:function(e,t){var n=e.commit;n("ON_UNIQUE_CLIENT_ID_CHANGED_MUTATION",t)},setMaxImageHeight:function(e,t){var n=e.commit;n("ON_MAX_IMAGE_HEIGHT_CHANGED_MUTATION",t)},setBarcodeColumns:function(e,t){var n=e.commit;n("ON_BARCODE_COLUMNS_CHANGED_MUTATION",t)},setBarcodeHeight:function(e,t){var n=e.commit;n("ON_BARCODE_HEIGHT_CHANGED_MUTATION",t)},setBarcodeWidth:function(e,t){var n=e.commit;n("ON_BARCODE_WIDTH_CHANGED_MUTATION",t)},setDefaultBarcodeType:function(e,t){var n=e.commit;n("ON_DEFAULT_BARCODE_TYPE_CHANGED_MUTATION",t)},setBarcodes:function(e,t){var n=e.commit;n("ON_BARCODES_CHANGED_MUTATION",t)},addBarcodes:function(e,t){var n=e.commit;n("ON_BARCODES_ADDED_MUTATION",t)},deleteBarcode:function(e,t){var n=e.commit;n("ON_BARCODE_DELETED_MUTATION",t)},updateBarcode:function(e,t){var n=e.commit;n("ON_BARCODE_UPDATED_MUTATION",t)},setLocale:function(e,t){var n=e.commit;n("ON_LOCALE_CHANGED_MUTATION",t)}},plugins:[(0,U.Z)({key:W,reducer:function(e){var t={};try{t=JSON.parse(JSON.stringify(e))}catch(n){return e}return t.barcodes&&t.barcodes.forEach((function(e){delete e.image})),t}})]}),Z={data:function(){return{humbugVersion:"1.0.0",barcodeTypes:["CODE128","CODE39","QR"]}},methods:{uuidv4:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)}))}}};var G=n(8824),F=n(43),$=n(7723),V=n(2169),z=n(5703),q=n(2749),X=n(1869),J=n(3800),Q=n(6152),Y=n(7563),K=n(7419),ee=n(9301),te=n(4003),ne=n(794),re=n(5808),oe=n(295),ae=n(8525),ie=n(5743),se=n(1899);n(7310),r.Z.use(G.A6),r.Z.use(F.k),r.Z.use($.kH),r.Z.use(V.A),r.Z.use(z.u3),r.Z.use(q._s),r.Z.use(X.SY),r.Z.use(J.d),r.Z.use(Q.s),r.Z.use(Y.w6),r.Z.use(K.g),r.Z.use(ee.E),r.Z.use(te.C),r.Z.use(ne.v5),r.Z.use(re.Rt),r.Z.use(oe.xL),r.Z.use(ae.dg),r.Z.use(ie.i),r.Z.use(se.s),r.Z.mixin(Z),r.Z.config.productionTip=!1,new r.Z({router:R,store:j,i18n:f,render:function(e){return e(B)}}).$mount("#app")},7616:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(9391),o=(0,r.Z)();const a=o},3653:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});n(5666),n(1539),n(8674),n(6992),n(8783),n(3948),n(1249),n(7327);var r,o=n(6531);function a(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function s(e){a(i,r,o,s,u,"next",e)}function u(e){a(i,r,o,s,u,"throw",e)}s(void 0)}))}}const s={getDb:function(){var e=i(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){if(r)return e(r);(0,o.X3)("humbug-"+window.location.pathname,1,{upgrade:function(e,t,n,r){if(t<1){var o=e.createObjectStore("images",{keyPath:"uuid"});o.createIndex("uuid","uuid",{unique:!0}),o.createIndex("imageData","imageData",{unique:!1})}}}).then((function(t){return e(t)}))})));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getAllImages:function(){var e=i(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDb();case 2:return t=e.sent,e.abrupt("return",t.getAll("images"));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getImage:function(){var e=i(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDb();case 2:return n=e.sent,e.abrupt("return",n.get("images",t));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),setBarcodeImages:function(){var e=i(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDb();case 2:return n=e.sent,e.abrupt("return",new Promise((function(e){var r=n.transaction("images","readwrite");Promise.all(t.filter((function(e){return e.image})).map((function(e){return r.store.put({uuid:e.uuid,imageData:e.image})}))).then((function(){return e(),r.done}))})));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addImage:function(){var e=i(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDb();case 2:return r=e.sent,e.abrupt("return",r.add("images",{uuid:t,imageData:n}));case 4:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),deleteImage:function(){var e=i(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDb();case 2:return n=e.sent,e.abrupt("return",n.delete("images",t));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),clearImages:function(){var e=i(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDb();case 2:return t=e.sent,e.abrupt("return",t.clear("images"));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},8420:(e,t,n)=>{var r={"./de_DE.json":7980,"./en_GB.json":8034};function o(e){return Promise.resolve().then((()=>{if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var o=r[e];return n.t(o,19)}))}o.keys=()=>Object.keys(r),o.id=8420,e.exports=o},9574:(e,t,n)=>{"use strict";e.exports=n.p+"img/logo.8640eb9b.svg"},7980:e=>{"use strict";e.exports=JSON.parse('{"appName":"Humbug","buttonAdd":"Hinzufügen","buttonCancel":"Abbrechen","buttonNo":"Nein","buttonOk":"OK","buttonReplace":"Ersetzen","buttonTitleDeleteBarcode":"Barcode löschen","buttonTitleRemoveImage":"Bild entfernen","buttonTitleSelectImage":"Bild auswählen","buttonYes":"Ja","checkboxDisabled":"Deaktiviert","checkboxEnabled":"Aktiviert","formLabelBarcodeDefaultType":"Standard-Barcode-Typ","formLabelBarcodeHeight":"Barcode-Höhe","formLabelBarcodeWidth":"Barcode-Breite","formLabelBarcodeType":"Barcode-Typ","formLabelBarcodes":"Barcodes","formLabelDnDStatus":"Ziehen und ablegen Status","formLabelImageMaxHeight":"Max. Bildhöhe","formLabelNumberColumns":"Anzahl an Spalten","menuAbout":"Über","menuClear":"Leeren","menuImport":"Importieren","menuImportFile":"Von Datei","menuImportClipboard":"Von Zwischenablage","menuLocale":"Sprache","menuPrint":"Drucken","menuSaveConfig":"Konfiguration speichern","modalTextClearBarcodes":"Sicher, dass alle Barcodes entfernt werden sollen?","modalTitleClearBarcodes":"Barcodes entfernen","modalTitleImportClipboard":"Von Zwischenablage importieren","pageTextAboutParagraphOne":"Humbug ist ein Tool um Barcodes zu erstellen und wird hauptsächlich benutzt um Bewertungsbögen für phänotypische Pflanzenfeldversuche zu erstellen. Allerdings kann es auch außerhalb dieses Bereiches vielseitig eingesetzt werden. Bitte zöger nicht, Humbug zum Erstellen von jeglichen Barcode-Bögen zu verwenden.","pageTextAboutParagraphTwo":"Humbug wurde entwickelt von <a href=\'https: //www.hutton.ac.uk/staff/sebastian-raubach\'>Sebastian Raubach</a>. Bei Fragen, Vorschlägen oder genereller Rückmeldung, bitte mit <a href=\'mailto:sebastian.raubach@hutton.ac.uk\'>Sebastian</a> in Kontakt setzen.","pageTextAboutGitHub":"Der Quellcode von Humbug ist verfügbar auf <a href=\'https://github.com/cropgeeks/humbug/\'>GitHub</a>.","pageTextImport":"Bitte auswählen ob die neuen Elemente zu existierenden Barcodes in Humbug hinzugefügt werden sollen oder ob sie jegliche existierende Barcodes ersetzen sollen.","pageTitleImport":"Barcode-Import","tooltipBarcodeEnter":"Enter drücken um Barcode zu setzen"}')},8034:e=>{"use strict";e.exports=JSON.parse('{"appName":"Humbug","buttonAdd":"Add","buttonCancel":"Cancel","buttonNo":"No","buttonOk":"OK","buttonReplace":"Replace","buttonTitleDeleteBarcode":"Delete barcode","buttonTitleRemoveImage":"Remove image","buttonTitleSelectImage":"Select image","buttonYes":"Yes","checkboxDisabled":"Disabled","checkboxEnabled":"Enabled","formLabelBarcodeDefaultType":"Default barcode type","formLabelBarcodeHeight":"Barcode height","formLabelBarcodeWidth":"Barcode width","formLabelBarcodeType":"Barcode type","formLabelBarcodes":"Barcodes","formLabelDnDStatus":"Drag and drop status","formLabelImageMaxHeight":"Max. image height","formLabelNumberColumns":"Number of columns","menuAbout":"About","menuClear":"Clear","menuImport":"Import","menuImportFile":"From file","menuImportClipboard":"From clipboard","menuLocale":"Language","menuPrint":"Print","menuSaveConfig":"Save configuration","modalTextClearBarcodes":"Are you sure you want to remove all barcodes?","modalTitleClearBarcodes":"Clear barcodes","modalTitleImportClipboard":"Import from clipboard","pageTextAboutParagraphOne":"Humbug is a barcode generation tool mainly developed to create phenotypic plant trial scoring sheets. However, it has many uses outside of this domain. Feel free to use it to generate any kind of barcode sheets.","pageTextAboutParagraphTwo":"Humbug has been developed by <a href=\'https: //www.hutton.ac.uk/staff/sebastian-raubach\'>Sebastian Raubach</a>. If you have any questions, suggestions or general feedback, please contact <a href=\'mailto:sebastian.raubach@hutton.ac.uk\'>Sebastian</a>.","pageTextAboutGitHub":"The source code of Humbug is available on <a href=\'https://github.com/cropgeeks/humbug/\'>GitHub</a>.","pageTextImport":"Please select whether to add the items above to the existing barcodes in Humbug or to replace any existing barcodes.","pageTitleImport":"Barcode import","tooltipBarcodeEnter":"Click enter to set barcode"}')}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(l=0;l<e.length;l++){for(var[r,o,a]=e[l],s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>r[e]));return i["default"]=()=>r,n.d(a,i),a}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+{6:"import",177:"home",443:"about"}[e]+"-legacy."+{6:"9b739c75",177:"bfcdc525",443:"be529178"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+{177:"home",443:"about"}[e]+"."+{177:"02e91960",443:"f1356052"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="humbug:";n.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var m=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),u&&document.head.appendChild(s)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p=""})(),(()=>{var e=(e,t,n,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=r=>new Promise(((o,a)=>{var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,o,a)})),o={143:0};n.f.miniCss=(e,t)=>{var n={177:1,443:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,u=r=>{if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,s,u]=r,c=0;if(i.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkhumbug"]=self["webpackChunkhumbug"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[998],(()=>n(8790)));r=n.O(r)})();
//# sourceMappingURL=app-legacy.263e6261.js.map