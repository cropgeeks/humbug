(self["webpackChunkhumbug"]=self["webpackChunkhumbug"]||[]).push([[6],{5421:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"mt-3"},[r("h1",[t._v(t._s(t.$t("pageTitleImport")))]),r("b-form-group",{attrs:{label:t.$t("formLabelBarcodeType"),"label-for":"barcode-type"}},[r("b-form-select",{attrs:{options:t.barcodeTypes,id:"barcode-type"},model:{value:t.barcodeType,callback:function(e){t.barcodeType=e},expression:"barcodeType"}})],1),r("b-form-group",{attrs:{label:t.$t("formLabelBarcodes"),"label-for":"barcodes"}},[r("b-form-textarea",{attrs:{rows:t.barcodes.length,debounce:"500",id:"barcodes"},model:{value:t.barcodeString,callback:function(e){t.barcodeString=e},expression:"barcodeString"}})],1),r("p",[t._v(t._s(t.$t("pageTextImport")))]),r("b-button",{on:{click:t.addBarcodes}},[r("BIconJournalPlus"),t._v(" "+t._s(t.$t("buttonAdd")))],1),t._v(" "),r("b-button",{on:{click:t.replaceBarcodes}},[r("BIconJournalX"),t._v(" "+t._s(t.$t("buttonReplace"))+" ")],1)],1)},o=[],i=(r(7327),r(1539),r(1249),r(4916),r(3123),r(3210),r(6699),r(5684),r(9600),r(8019)),u={components:{BIconJournalPlus:i.Wf7,BIconJournalX:i.$xx},data:function(){return{barcodes:[],barcodeType:"CODE128",barcodeString:null}},watch:{barcodeString:function(t){this.barcodes=t.split("\n").map((function(t){return t.trim()})).filter((function(t){return null!==t&&""!==t}))}},methods:{addBarcodes:function(){var t=this;this.$store.dispatch("addBarcodes",this.barcodes.map((function(e){return{text:e,type:t.barcodeType,uuid:t.uuidv4()}}))),this.$router.push({name:"home"})},replaceBarcodes:function(){var t=this;this.$store.dispatch("setBarcodes",this.barcodes.map((function(e){return{text:e,type:t.barcodeType,uuid:t.uuidv4()}}))),this.$router.push({name:"home"})}},mounted:function(){if(this.$route.query.barcodeType){var t=this.$route.query.barcodeType.trim();this.barcodeTypes.includes(t)&&(this.barcodeType=t)}this.$route.query.barcodes&&("string"===typeof this.$route.query.barcodes?this.barcodeString=this.$route.query.barcodes.split(",").map((function(t){return t.trim()})).filter((function(t){return null!==t&&""!==t})).join("\n"):Array.isArray(this.$route.query.barcodes)&&(this.barcodeString=this.$route.query.barcodes.join("\n")))}},a=u,c=r(1001),s=(0,c.Z)(a,n,o,!1,null,null,null),l=s.exports},4964:function(t,e,r){var n=r(5112),o=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[o]=!1,"/./"[t](e)}catch(n){}}return!1}},7850:function(t,e,r){var n=r(111),o=r(4326),i=r(5112),u=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[u])?!!e:"RegExp"==o(t))}},3929:function(t,e,r){var n=r(7854),o=r(7850),i=n.TypeError;t.exports=function(t){if(o(t))throw i("The method doesn't accept regular expressions");return t}},6091:function(t,e,r){var n=r(6530).PROPER,o=r(7293),i=r(1361),u="​᠎";t.exports=function(t){return o((function(){return!!i[t]()||u[t]()!==u||n&&i[t].name!==t}))}},3111:function(t,e,r){var n=r(1702),o=r(4488),i=r(1340),u=r(1361),a=n("".replace),c="["+u+"]",s=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),d=function(t){return function(e){var r=i(o(e));return 1&t&&(r=a(r,s,"")),2&t&&(r=a(r,l,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9600:function(t,e,r){"use strict";var n=r(2109),o=r(1702),i=r(8361),u=r(5656),a=r(9341),c=o([].join),s=i!=Object,l=a("join",",");n({target:"Array",proto:!0,forced:s||!l},{join:function(t){return c(u(this),void 0===t?",":t)}})},5684:function(t,e,r){"use strict";var n=r(2109),o=r(1702),i=r(3929),u=r(4488),a=r(1340),c=r(4964),s=o("".indexOf);n({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~s(a(u(this)),a(i(t)),arguments.length>1?arguments[1]:void 0)}})},3123:function(t,e,r){"use strict";var n=r(2104),o=r(6916),i=r(1702),u=r(7007),a=r(7850),c=r(9670),s=r(4488),l=r(6707),d=r(1530),f=r(7466),h=r(1340),p=r(8173),b=r(1589),g=r(7651),v=r(2261),m=r(2999),y=r(7293),x=m.UNSUPPORTED_Y,$=4294967295,T=Math.min,B=[].push,_=i(/./.exec),I=i(B),k=i("".slice),E=!y((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));u("split",(function(t,e,r){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var i=h(s(this)),u=void 0===r?$:r>>>0;if(0===u)return[];if(void 0===t)return[i];if(!a(t))return o(e,i,t,u);var c,l,d,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,m=new RegExp(t.source,p+"g");while(c=o(v,m,i)){if(l=m.lastIndex,l>g&&(I(f,k(i,g,c.index)),c.length>1&&c.index<i.length&&n(B,f,b(c,1)),d=c[0].length,g=l,f.length>=u))break;m.lastIndex===c.index&&m.lastIndex++}return g===i.length?!d&&_(m,"")||I(f,""):I(f,k(i,g)),f.length>u?b(f,0,u):f}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:o(e,this,t,r)}:e,[function(e,r){var n=s(this),u=void 0==e?void 0:p(e,t);return u?o(u,e,n,r):o(i,h(n),e,r)},function(t,n){var o=c(this),u=h(t),a=r(i,o,u,n,i!==e);if(a.done)return a.value;var s=l(o,RegExp),p=o.unicode,b=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(x?"g":"y"),v=new s(x?"^(?:"+o.source+")":o,b),m=void 0===n?$:n>>>0;if(0===m)return[];if(0===u.length)return null===g(v,u)?[u]:[];var y=0,B=0,_=[];while(B<u.length){v.lastIndex=x?0:B;var E,S=g(v,x?k(u,B):u);if(null===S||(E=T(f(v.lastIndex+(x?B:0)),u.length))===y)B=d(u,B,p);else{if(I(_,k(u,y,B)),_.length===m)return _;for(var w=1;w<=S.length-1;w++)if(I(_,S[w]),_.length===m)return _;B=y=E}}return I(_,k(u,y)),_}]}),!E,x)},3210:function(t,e,r){"use strict";var n=r(2109),o=r(3111).trim,i=r(6091);n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return o(this)}})}}]);
//# sourceMappingURL=import-legacy.9b739c75.js.map