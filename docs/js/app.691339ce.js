(function(t){function e(e){for(var n,r,l=e[0],h=e[1],o=e[2],c=0,d=[];c<l.length;c++)r=l[c],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,o||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,l=1;l<i.length;l++){var h=i[l];0!==s[h]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/virtual-list-demo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],h=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=h;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),s=i.n(n);s.a},"218c":function(t,e,i){"use strict";var n=i("f0db"),s=i.n(n);s.a},"4c2b":function(t,e,i){"use strict";var n=i("4dd7"),s=i.n(n);s.a},"4dd7":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"tab-switch"},[i("button",{class:{active:"NormalList"===t.tab},on:{click:function(e){t.tab="NormalList"}}},[t._v("定高普通列表")]),i("button",{class:{active:"VirtualList"===t.tab},on:{click:function(e){t.tab="VirtualList"}}},[t._v("定高虚拟列表")]),i("button",{class:{active:"PropHeight"===t.tab},on:{click:function(e){t.tab="PropHeight"}}},[t._v("不定高 Prop 传入高度的虚拟列表")]),i("button",{class:{active:"PerfPropHeight"===t.tab},on:{click:function(e){t.tab="PerfPropHeight"}}},[t._v("算法优化后的不定高 Prop 传入高度的虚拟列表")]),i("button",{class:{active:"VirtualListSetData"===t.tab},on:{click:function(e){t.tab="VirtualListSetData"}}},[t._v("使用方法设置数据的虚拟列表")])]),i(t.tab,{ref:"list",tag:"component",attrs:{data:t.data,itemHeightGetter:t.itemHeightGetter}})],1)},a=[],r=(i("0d03"),i("d3b7"),i("25f0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",staticStyle:{width:"200px",height:"300px"}},t._l(t.data,(function(e){return i("div",{key:e.id,staticClass:"list-item",style:{height:t.itemHeight+"px"}},[t._v(t._s(e.value))])})),0)}),l=[],h=(i("a9e3"),{name:"NormalList",props:{data:{type:Array,default:function(){return[]}},itemHeight:{type:Number,default:30}}}),o=h,u=(i("4c2b"),i("2877")),c=Object(u["a"])(o,r,l,!1,null,"3a627d3a",null),d=c.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",staticStyle:{width:"200px",height:"300px"},on:{"&scroll":function(e){return t.handleScroll(e)}}},[i("div",{staticClass:"total-list",style:{height:t.itemHeight*t.data.length+"px"}}),i("div",{staticClass:"visible-list",style:{transform:"translateY("+t.topHeight+"px)"}},t._l(t.visibleList,(function(e){return i("div",{key:e.id,staticClass:"visible-list-item",style:{height:t.itemHeight+"px"}},[t._v(t._s(e.value))])})),0)])},p=[],g=(i("fb6a"),{name:"VirtualList",props:{data:{type:Array,default:function(){return[]}},itemHeight:{type:Number,default:30}},data:function(){return{visibleList:[],topHeight:0}},methods:{updateVisibleList:function(){var t=this.$el.scrollTop,e=Math.ceil(this.$el.clientHeight/this.itemHeight)+1,i=Math.floor(t/this.itemHeight);this.visibleList=this.data.slice(i,i+e),this.topHeight=i*this.itemHeight},handleScroll:function(){this.updateVisibleList()}},mounted:function(){this.updateVisibleList()},watch:{data:function(){this.updateVisibleList()}}}),v=g,m=(i("7ca2"),Object(u["a"])(v,f,p,!1,null,"0f04c66e",null)),b=m.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",staticStyle:{width:"200px",height:"300px"},on:{"&scroll":function(e){return t.handleScroll(e)}}},[i("div",{staticClass:"total-list",style:{height:t.totalHeight+"px"}}),i("div",{staticClass:"visible-list",style:{transform:"translateY("+t.topHeight+"px)"}},t._l(t.visibleList,(function(e){return i("div",{key:e.id,staticClass:"visible-list-item",style:{height:(t.itemHeightRecord[e.index]||t.itemHeight)+"px"}},[t._v(t._s(e.value))])})),0)])},y=[],x={name:"PropHeight",props:{data:{type:Array,default:function(){return[]}},itemHeight:{type:Number,default:30},itemHeightGetter:{type:Function,default:function(){return 30}}},data:function(){return{visibleList:[],itemHeightRecord:[],totalHeight:0,topHeight:0}},methods:{updateTotalHeight:function(){for(var t=0,e=this.data.length,i=0;i<e;i++)t+=this.itemHeightRecord[i]||this.itemHeight;this.totalHeight=t},updateVisibleList:function(){console.time("updateVisibleList");var t=this.$el.scrollTop,e=0,i=0;while(i<t){if(i+(this.itemHeightRecord[e]||this.itemHeight)>=t)break;i+=this.itemHeightRecord[e]||this.itemHeight,e++}var n=this.$el.clientHeight,s=e,a=0,r=this.itemHeightRecord[e]||(this.itemHeightRecord[e]=this.itemHeightGetter(e));while(a-r<n&&s<this.data.length){var l=this.itemHeightRecord[s]||this.itemHeightGetter(s);this.$set(this.itemHeightRecord,s,l),a+=l,s++}this.visibleList=this.data.slice(e,s),this.topHeight=i,console.time("updateTotalHeight"),this.updateTotalHeight(),console.timeEnd("updateTotalHeight"),console.timeEnd("updateVisibleList")},handleScroll:function(){this.updateVisibleList()}},mounted:function(){this.updateVisibleList()},watch:{data:function(){this.updateVisibleList()}}},L=x,_=(i("c175"),Object(u["a"])(L,H,y,!1,null,"30e53f06",null)),w=_.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",staticStyle:{width:"200px",height:"300px"},on:{"&scroll":function(e){return t.handleScroll(e)}}},[i("div",{staticClass:"total-list",style:{height:t.totalHeight+"px"}}),i("div",{staticClass:"visible-list",style:{transform:"translateY("+t.topHeight+"px)"}},t._l(t.visibleList,(function(e){return i("div",{key:e.id,staticClass:"visible-list-item",style:{height:(t.itemHeightRecord[e.index]||t.itemHeight)+"px"}},[t._v(t._s(e.value))])})),0)])},S=[],T=(i("cb29"),i("9f12")),k=i("53fe");function P(t){var e=1,i=2;while(i<=t)e=i,i=e<<1;return e}for(var $=function(){function t(e){Object(T["a"])(this,t),this.__init(e)}return Object(k["a"])(t,[{key:"__init",value:function(t){this.tree=Array(t.length+1).fill(0);for(var e=0;e<t.length;e++)this.tree[e+1]=t[e];for(var i=1;i<this.tree.length;i++){var n=i+(i&-i);n<this.tree.length&&(this.tree[n]+=this.tree[i])}this.bitMask=P(t.length-1)}},{key:"update",value:function(t,e){while(t<this.tree.length)this.tree[t]+=e,t+=t&-t}},{key:"prefixSum",value:function(t){var e=0;while(t>0)e+=this.tree[t],t-=t&-t;return e}},{key:"rangeSum",value:function(t,e){return this.prefixSum(e)-this.prefixSum(t-1)}},{key:"getValue",value:function(t){var e=this.tree[t];if(t>0){var i=t-(t&-t);t--;while(t!==i)e-=this.tree[t],t-=t&-t}return e}},{key:"find",value:function(t){var e=0,i=this.tree.length,n=this.bitMask;while(0!=n&&e<i){var s=e+n;if(t===this.tree[s])return s;t>this.tree[s]&&(e=s,t-=this.tree[s]),n>>=1}return 0!==t?-1:e}},{key:"findG",value:function(t){var e=0,i=this.tree.length,n=this.bitMask;while(0!=n&&e<i){var s=e+n;t>=this.tree[s]&&(e=s,t-=this.tree[s]),n>>=1}return 0!==t?-1:e}},{key:"findGe",value:function(t){var e=0,i=this.tree.length,n=this.bitMask;while(0!=n&&e<i){var s=e+n;if(t===this.tree[s])return s;t>this.tree[s]&&(e=s,t-=this.tree[s]),n>>=1}return 0===t?e:e+1<this.tree.length?e+1:-1}}]),t}(),C=$,O={name:"PerfPropHeight",props:{data:{type:Array,default:function(){return[]}},itemHeight:{type:Number,default:30},itemHeightGetter:{type:Function,default:function(){return 30}}},data:function(){return{visibleList:[],itemHeightRecord:[],totalHeight:0,topHeight:0}},methods:{initBIT:function(){this.data.length>0?this.binaryIndexedTree=new C(Array(this.data.length).fill(this.itemHeight)):this.binaryIndexedTree=null},updateBIT:function(t,e){this.binaryIndexedTree&&this.binaryIndexedTree.update(t,e)},updateTotalHeight:function(){for(var t=0,e=this.data.length,i=0;i<e;i++)t+=this.itemHeightRecord[i]||this.itemHeight;this.totalHeight=t},findNearestItemIndexAndTop:function(t){var e=0,i=0;return this.binaryIndexedTree&&(e=Math.max(this.binaryIndexedTree.findGe(t)-1,0),i=this.binaryIndexedTree.prefixSum(e)),{start:e,scrolledHeight:i}},updateVisibleList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;console.time("updateVisibleList");var e=this.findNearestItemIndexAndTop(t),i=e.start,n=e.scrolledHeight,s=this.$el.clientHeight,a=this.totalHeight,r=i,l=0,h=this.itemHeightRecord[i];if(!h){h=this.itemHeightGetter(i);var o=h-this.itemHeight;a+=o,this.updateBIT(r+1,o),this.$set(this.itemHeightRecord,i,h)}while(l-h<s&&r<this.data.length){var u=this.itemHeightRecord[r];if(!u){u=this.itemHeightGetter(r);var c=u-this.itemHeight;this.updateBIT(r+1,c),a+=c,this.$set(this.itemHeightRecord,r,u)}l+=u,r++}this.visibleList=this.data.slice(i,r),this.topHeight=n,this.totalHeight=a,console.timeEnd("updateVisibleList")},handleScroll:function(){this.updateVisibleList(this.$el.scrollTop)}},mounted:function(){0!==this.data.length&&(this.totalHeight=this.data.length*this.itemHeight,this.initBIT(),this.updateVisibleList())},watch:{data:function(){this.totalHeight=this.data.length*this.itemHeight,this.initBIT(),this.updateVisibleList()}}},R=O,j=(i("5c06"),Object(u["a"])(R,V,S,!1,null,"d7fc84d8",null)),I=j.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",staticStyle:{width:"200px",height:"300px"},on:{"&scroll":function(e){return t.handleScroll(e)}}},[i("div",{staticClass:"total-list",style:{height:t.totalHeight+"px"}}),i("div",{staticClass:"visible-list",style:{transform:"translateY("+t.topHeight+"px)"}},t._l(t.visibleList,(function(e){return i("div",{key:e.id,staticClass:"visible-list-item",style:{height:t.itemHeight+"px"}},[t._v(t._s(e.value))])})),0)])},G=[],D={name:"VirtualList",props:{data:{type:Array,default:function(){return[]}},itemHeight:{type:Number,default:30}},data:function(){return{visibleList:[],totalHeight:0,topHeight:0}},methods:{setData:function(t){this.nonReactiveData=t,this.totalHeight=this.itemHeight*t.length,this.updateVisibleList()},updateVisibleList:function(){var t=this.$el.scrollTop,e=Math.ceil(this.$el.clientHeight/this.itemHeight)+1,i=Math.floor(t/this.itemHeight);this.visibleList=this.nonReactiveData.slice(i,i+e),this.topHeight=i*this.itemHeight},handleScroll:function(){this.updateVisibleList()}},mounted:function(){this.nonReactiveData=[],this.updateVisibleList()}},N=D,A=(i("218c"),Object(u["a"])(N,M,G,!1,null,"38e9a5d1",null)),E=A.exports,B=[],Y=0;Y<1e5;Y++)B.push({id:Math.random().toString(36).substr(2),index:Y,value:Y+1});var F={name:"app",components:{NormalList:d,VirtualList:b,PropHeight:w,PerfPropHeight:I,VirtualListSetData:E},data:function(){return{data:[],tab:"PerfPropHeight"}},methods:{itemHeightGetter:function(t){return 40+t%10*(Math.random()<.5?-1:1)},setData:function(){this.$refs.list.setData(B)}},watch:{tab:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){"VirtualListSetData"===t.tab?(t.data=[],t.setData()):t.data=B}))}}}},J=F,q=(i("034f"),Object(u["a"])(J,s,a,!1,null,null,null)),z=q.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(z)}}).$mount("#app")},"5c06":function(t,e,i){"use strict";var n=i("7b8f"),s=i.n(n);s.a},"7b8f":function(t,e,i){},"7ca2":function(t,e,i){"use strict";var n=i("df64"),s=i.n(n);s.a},"85ec":function(t,e,i){},c175:function(t,e,i){"use strict";var n=i("d9d6"),s=i.n(n);s.a},d9d6:function(t,e,i){},df64:function(t,e,i){},f0db:function(t,e,i){}});
//# sourceMappingURL=app.691339ce.js.map