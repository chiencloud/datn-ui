(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cf4e9c2"],{"0964":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bkc-product-card",style:{height:t.height}},[i("div",{staticClass:"bkc-product-card-image"},[i("v-img",{attrs:{src:t.product.image}})],1),i("div",{staticClass:"bkc-product-card-title"},[i("div",{staticClass:"product-card-name"},[t._v(t._s(t.product.productname))]),i("div",{staticClass:"product-card-price"},[t._v(t._s(t.product.sellprice)+" (VNĐ)")])])])},a=[],n={name:"CProductCard",props:{product:Object,height:String}},r=n,c=(i("29ca"),i("2877")),o=i("6544"),u=i.n(o),d=i("adda"),l=Object(c["a"])(r,s,a,!1,null,"b86cd3dc",null);e["a"]=l.exports;u()(l,{VImg:d["a"]})},"10d2":function(t,e,i){"use strict";var s=i("8dd9");e["a"]=s["a"]},"29ca":function(t,e,i){"use strict";i("4c9c")},"4c9c":function(t,e,i){},"523d":function(t,e,i){"use strict";i("bdc9")},"54a1":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bkc-product-detail"},[i("div",{staticClass:"product-detail-content"},[i("div",{staticClass:"product-detail-left"},[i("v-img",{attrs:{src:t.mainImage}})],1),i("div",{staticClass:"product-detail-right"},[i("div",{staticClass:"product-name"},[t._v(t._s(t.product.productname))]),i("div",{staticClass:"product-price"},[t._v(t._s(t.product.sellprice)+" (VNĐ)")]),i("div",{staticClass:"product-color"},[i("div",{staticClass:"product-color-text"},[i("b",[t._v(t._s(t.product.level1name)+":")]),t._v(" "+t._s(t.currentColorPick.color))]),i("div",{staticClass:"product-color-image"},t._l(t.productColorList,(function(e,s){return i("div",{key:s,staticClass:"product-color-image-item",class:{"product-color-image-item--active":e.color==t.currentColorPick.color},on:{click:function(i){return t.pickColor(e)}}},[i("v-img",{attrs:{src:e.image}})],1)})),0)]),i("div",{staticClass:"product-size"},[i("div",{staticClass:"product-size-title"},[t._v(t._s(t.product.level2name)+":")]),i("div",{staticClass:"product-size-list"},t._l(t.productSizeList,(function(e,s){return i("div",{key:s,staticClass:"product-size-list-item",class:{"product-size-list-item--active":e==t.currentSizePick},on:{click:function(i){return t.pickSize(e)}}},[t._v(" "+t._s(e)+" ")])})),0)]),i("div",{staticClass:"product-quantity"},[i("ButtonQuantity",{attrs:{quantityVal:t.quantityChosen},on:{changeQuantity:t.changeQuantity}})],1),i("div",{staticClass:"btn-add-card"},[i("v-btn",{staticClass:"white--text",attrs:{tile:"",color:"#fbac14",width:"100%",height:"100%"},on:{click:function(e){return t.addProductToCart()}}},[i("v-icon",{attrs:{left:""}},[t._v(" mdi mdi-cart-minus ")]),i("b",[t._v("Thêm vào giỏ hàng")])],1)],1),i("div",{staticClass:"product-description"},[t._m(0),i("div",{staticClass:"product-description-content"},[i("pre",{domProps:{innerHTML:t._s(t.product.description)}})])])])]),i("div",{staticClass:"product-list-relate"},[i("div",{staticClass:"c-product-area"},[i("div",{staticClass:"c-product-area-title"},[t._v(" SẢN PHẨM LIÊN QUAN ")]),i("div",{staticClass:"c-product-area-content"},[i("v-row",{attrs:{justify:"center"}},t._l(t.listRelateProduct,(function(e,s){return i("v-col",{key:s,staticClass:"px-4",attrs:{cols:"12",sm:"6",xs:"6",md:"3"}},[i("div",{staticClass:"c-product-area-item",on:{click:function(i){return t.viewDetailProduct(e)}}},[i("CProductCard",{attrs:{product:e}})],1)])})),1)],1)])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-description-title"},[i("b",[t._v("Mô tả")])])}],n=(i("7db0"),i("c740"),i("a434"),i("d3b7"),i("25f0"),i("5530")),r=i("9b57"),c=i("0964"),o=i("acdd"),u=i("7331"),d=o["a"].get("productService"),l={name:"CProductDetail",components:{ButtonQuantity:r["a"],CProductCard:c["a"]},data:function(){return{quantityChosen:1,mainImage:"",product:{},productColorList:[],currentColorPick:{},productSizeList:[{id:1,size:"XL"},{id:2,size:"M"},{id:3,size:"L"}],currentSizePick:"",listProductDetail:[],chosenproduct:{},listRelateProduct:[]}},created:function(){this.getProductDetail()},methods:{changeQuantity:function(t){t&&""!=t&&(this.quantityChosen=parseInt(t),this.chosenproduct["quantity"]=t)},getProductDetail:function(){var t=this,e=this.$route.params.id;d.getProductDetail(e).then((function(e){if(e&&e.data){t.product=e.data.data.product,t.chosenproduct=Object(n["a"])({},t.product),t.chosenproduct["quantity"]=1,t.mainImage=t.product["image"],t.productColorList=JSON.parse(t.product["color"]),t.productSizeList=JSON.parse(t.product["size"]),t.listProductDetail=e.data.data.productDetail,t.productColorList&&t.productColorList.length>0&&(t.currentColorPick=t.productColorList[0],t.chosenproduct["color"]=t.currentColorPick.color),t.productSizeList&&t.productSizeList.length>0&&(t.currentSizePick=t.productSizeList[0],t.chosenproduct["size"]=t.currentSizePick);var i=localStorage.getItem("branchonline");if(i){var s;i=JSON.parse(i);var a=[{FieldName:"categoryid",Operator:u["a"].Equal,FilterValue:null!==(s=t.chosenproduct.categoryid.toString())&&void 0!==s?s:"0"}];d.getPagingData({PageIndex:1,PageSize:12,TableName:"Product",ListFilter:a,StoreProcedure:"Proc_GetPagingDataRelateProduct"}).then((function(e){if(e&&e.data){t.listRelateProduct=e.data.listPaging;var i=t.listRelateProduct.findIndex((function(e){return e.idproduct==t.chosenproduct.idproduct}));i>-1&&t.listRelateProduct.splice(i,1)}}))}}}))},viewDetailProduct:function(t){this.$router.push({name:"c-product-detail",params:{id:t["idproduct"]}})},pickColor:function(t){this.currentColorPick=t,this.mainImage=t.image,this.chosenproduct["image"]=t.image,this.chosenproduct["color"]=t.color},pickSize:function(t){this.currentSizePick=t,this.chosenproduct["size"]=t},addProductToCart:function(){var t=this,e=this.listProductDetail.find((function(e){return e.idproduct==t.chosenproduct.idproduct&&e.size==t.chosenproduct.size&&e.color==t.chosenproduct.color}));this.chosenproduct["idproductdetail"]=e.idproductdetail,this.chosenproduct["productcode"]=e.productcode,this.chosenproduct["productnamedetail"]=e.productname,this.$store.commit("cart/addProductToCart",this.chosenproduct)}}},h=l,p=(i("cd2c"),i("2877")),v=i("6544"),f=i.n(v),b=i("8336"),m=i("62ad"),g=i("132d"),C=i("adda"),y=i("0fd9"),k=Object(p["a"])(h,s,a,!1,null,"186f5d4c",null);e["default"]=k.exports;f()(k,{VBtn:b["a"],VCol:m["a"],VIcon:g["a"],VImg:C["a"],VRow:y["a"]})},7331:function(t,e,i){"use strict";var s={Equal:1,Like:2};e["a"]=s},8336:function(t,e,i){"use strict";i("4160"),i("caad"),i("a9e3"),i("c7cd");var s=i("53ca"),a=i("3835"),n=i("5530"),r=(i("86cc"),i("10d2")),c=(i("99af"),i("8d4f"),i("a9ad")),o=i("80d2"),u=c["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(o["g"])(this.calculatedSize),width:Object(o["g"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),d=u,l=i("4e82"),h=i("f2e7"),p=i("c995"),v=i("fe6c"),f=i("1c87"),b=i("af2b"),m=i("58df"),g=i("d9bd"),C=Object(m["a"])(r["a"],f["a"],v["a"],b["a"],Object(l["a"])("btnToggle"),Object(h["b"])("inputValue"));e["a"]=C.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({"v-btn":!0},f["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return p["a"].options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(n["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(a["a"])(e,2),s=i[0],n=i[1];t.$attrs.hasOwnProperty(s)&&Object(g["a"])(s,n,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(d,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.generateRouteLink(),a=i.tag,n=i.data,r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===a&&(n.attrs.type=this.type,n.attrs.disabled=this.disabled),n.attrs.value=["string","number"].includes(Object(s["a"])(this.value))?this.value:JSON.stringify(this.value),t(a,this.disabled?n:r(this.color,n),e)}})},"86cc":function(t,e,i){},"8d4f":function(t,e,i){},"8f9a":function(t,e,i){},"9b57":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bk-button-quantity"},[i("div",{staticClass:"button-decrease button-square-quantity",on:{click:function(e){return t.decreaseNumber()}}},[t._v(" - ")]),i("div",{staticClass:"quantity-value button-square-quantity"},[i("input",{attrs:{maxlength:"3"},domProps:{value:t.quantityVal},on:{input:t.handleInput,keypress:function(e){return t.isNumber(e)}}})]),i("div",{staticClass:"button-increase button-square-quantity",on:{click:function(e){return t.increaseNumber()}}},[t._v(" + ")])])},a=[],n=(i("a9e3"),{name:"ButtonQuantity",props:{quantityVal:Number},data:function(){return{number:1,numberRule:function(t){return!(t<0)||"Please enter a positive number"}}},created:function(){},methods:{isNumber:function(t){t=t||window.event;var e=t.which?t.which:t.keyCode;if(!(e>31&&(e<48||e>57)))return!0;t.preventDefault()},decreaseNumber:function(){this.quantityVal>1&&this.quantityVal&&""!=this.quantityVal&&this.$emit("changeQuantity",parseInt(this.quantityVal)-1)},increaseNumber:function(){this.quantityVal<999&&this.$emit("changeQuantity",parseInt(this.quantityVal)+1)},handleInput:function(t){this.$emit("changeQuantity",t.target.value)}}}),r=n,c=(i("523d"),i("2877")),o=Object(c["a"])(r,s,a,!1,null,"3fd9445e",null);e["a"]=o.exports},bdc9:function(t,e,i){},cd2c:function(t,e,i){"use strict";i("8f9a")}}]);
//# sourceMappingURL=chunk-7cf4e9c2.0d36540a.js.map