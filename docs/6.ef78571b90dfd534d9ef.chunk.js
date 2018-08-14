webpackJsonp([6],{"31DH":function(o,t,e){t=o.exports=e("FZ+f")(void 0),t.push([o.i,".animated{animation-duration:2s;animation-fill-mode:both}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.t{transition:all .3s ease-in-out}.show{display:block}.hide{display:none}.wrapper{display:flex;width:100%;height:calc(100vh - 120px);position:relative;background:#fff;background-size:cover;align-items:center;justify-content:center}.config{position:absolute;right:0;background:#393939;border-radius:3px;border-top-right-radius:0;border-bottom-right-radius:0;max-width:150px;overflow:hidden;font-size:14px;min-width:80px;color:#999;padding:0 6px}.config h3{font-size:1em;background:#202020;padding:10px;margin:0 -6px;text-align:center}.config ul{list-style-type:none;margin:0;padding:0;margin-left:-6px;margin-right:-6px}.config ul li{padding:5px 6px;cursor:pointer;text-align:center;text-transform:capitalize}.config ul li.active,.config ul li:hover:not(.active){background:#4d4d4d;color:#fff}.config button{font-size:1em;width:100%;padding:6px;border:0;margin-top:6px;background:#4d4d4d;border-radius:3px}.config button.btn.btn-primary:focus,.config button.btn.btn-primary:hover{box-shadow:0;outline:0}.worldpay-payment-component{width:100%;max-width:480px;border-radius:3px;margin-top:-120px}.worldpay-payment-component.light input::placeholder{color:#fff}.worldpay-payment-component.dark input::placeholder{color:#111}.worldpay-payment-component .section{background:#fff;border:1px solid #eee;padding:1.5rem;border-bottom:0}.worldpay-payment-component .section:last-child{border-bottom:2px solid #eee}.worldpay-payment-component .section.company{background:none;border:0;padding:1rem}.worldpay-payment-component .section.company .logo{max-width:150px;max-height:70px;margin-right:1rem;display:block}.worldpay-payment-component .section.payment-details{border-top-left-radius:15px;border-top-right-radius:15px;position:relative}.worldpay-payment-component .section.payment-details .chip{margin-bottom:1.5rem}.worldpay-payment-component .section.payment-details .chip img{max-width:70px}.worldpay-payment-component .section.payment-details .cards{list-style-type:none;margin:0;padding:0;justify-content:flex-end;display:flex;min-height:40px}.worldpay-payment-component .section.payment-details .cards img{width:60px;opacity:.5}.worldpay-payment-component .section.payment-details .cards img.fadeOut.fadeIn{animation-name:fadeIn;width:100px;max-height:40px;display:block}.worldpay-payment-component .section.payment-details .cards img.fadeOut{display:none}.worldpay-payment-component .section.payment-details .details>div{display:flex}.worldpay-payment-component .section.payment-details .details .input-title{font-size:.7rem;margin:0}.worldpay-payment-component .section.payment-details .details .form-group{margin-bottom:0;width:100%}.worldpay-payment-component .section.payment-details .details .form-group.card-number{margin-bottom:.5rem}.worldpay-payment-component .section.payment-details .details .form-group.card-number input{font-size:1.8rem}.worldpay-payment-component .section.payment-details .details .form-group.expiry-date input,.worldpay-payment-component .section.payment-details .details .form-group.security-code input{font-size:1.4rem}.worldpay-payment-component .section.payment-details .details input{border:0;font-family:adelle_sansbold,sans-serif;padding:0;width:auto;letter-spacing:3px}.worldpay-payment-component .section.payment-details .details input::placeholder{opacity:.2}.worldpay-payment-component .section.payment-details .details input.form-control:focus{box-shadow:none}.worldpay-payment-component .section.confirm{border-bottom-left-radius:15px;border-bottom-right-radius:15px;padding:1rem;display:flex;justify-content:space-between;align-content:center}.worldpay-payment-component .section.confirm .item{display:flex;max-width:50%}.worldpay-payment-component .section.confirm .item div{display:flex;align-content:center;flex-direction:column;justify-content:center}.worldpay-payment-component .section.confirm .item img{display:block;max-width:100px;max-height:60px;margin-right:15px}.worldpay-payment-component .section.confirm .item h3{text-transform:uppercase;font-weight:700;font-family:adelle_sansbold,sans-serif}.worldpay-payment-component .section.confirm .item h3,.worldpay-payment-component .section.confirm .item p{font-size:.85rem;margin:0}.worldpay-payment-component .section.confirm .submit{display:flex;align-content:center;flex-direction:column;justify-content:center}.worldpay-payment-component .section.confirm .submit button{background:#111;border:0;font-family:adelle_sansbold,sans-serif;letter-spacing:1px;width:150px;font-weight:700;overflow:hidden;text-transform:uppercase}.worldpay-payment-component .section.confirm .submit button.loading{width:70px;text-align:center}.worldpay-payment-component .section.confirm .submit button.loading .status{display:none}.worldpay-payment-component .section.confirm .submit button.loading .loader{display:block}.worldpay-payment-component .section.confirm .submit button.loading .label{display:none}.worldpay-payment-component .section.confirm .submit button.success{width:150px;text-align:center}.worldpay-payment-component .section.confirm .submit button .loader{width:16px;height:16px;margin:4px;display:none}.worldpay-payment-component .section.confirm .submit button i{margin-right:5px}.worldpay-payment-component .section.confirm .submit button:focus{box-shadow:none}",""])},GxMS:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("TToO"),i=e("2Je8"),a=e("NVOs"),r=e("3j3K"),c=e("5oXY"),s=e("VWgf"),d=e("cfoZ"),l=e.n(d);console.log("`Modal Payments` component loaded asynchronously");var p=(function(){function o(){this.config={},this.themes={list:["apple","intel","netflix","lego"],active:"",netflix:{logo:"assets/img/payments/netflix/logo.png",theme:"dark",background:"url('assets/img/payments/netflix/bg.jpg')",container:{borderRadius:0,borderColor:"#f3f4f3",borderWidth:0,topBackground:"#f3f4f3",bottomBackground:"#f3f4f3",key:{color:"#111"},input:{color:"#111",background:"#f3f4f3"},item:{color:"#111",img:"assets/img/payments/netflix/item.png",name:"Netflix Premium",description:"Ultra HD available"},button:{label:"Pay",amount:9.99,inactiveBackground:"",activeBackground:"",focusBorder:"",background:"#e50914",borderRadius:0,color:"#fff"}}},intel:{logo:"assets/img/payments/intel/logo.png",theme:"light",background:"#11447e",container:{borderRadius:3,borderColor:"#11447e",borderWidth:0,topBackground:"#1c70b5",bottomBackground:"#fff",key:{color:"#eee"},input:{color:"#fff",background:"#1566a7",textIndent:".5rem"},item:{color:"#11447e",img:"assets/img/payments/intel/item.png",name:"Intel Core i7-7700K",description:"7th Gen processor"},button:{label:"Pay",amount:299,inactiveBackground:"",activeBackground:"",focusBorder:"",background:"#11457e",borderRadius:10,color:"#fff"}}},apple:{logo:"assets/img/payments/apple/logo.png",theme:"dark",background:"#f5f5f5",container:{borderRadius:15,borderColor:"#eee",borderWidth:1,topBackground:"#fff",bottomBackground:"#fff",key:{color:"#393939"},input:{color:"#393939",background:"#fff"},item:{color:"#393939",img:"assets/img/payments/apple/item.jpg",name:"Apple Watch",description:"Series 1 Smart Watch"},button:{label:"Pay",amount:669,inactiveBackground:"",activeBackground:"",focusBorder:"",background:"#111",borderRadius:30,color:"#fff"}}},lego:{logo:"assets/img/payments/lego/logo.png",theme:"dark",background:"url('assets/img/payments/lego/bg.jpg')",container:{borderRadius:30,borderColor:"#fff39d",borderWidth:5,topBackground:"#fff39d",bottomBackground:"#fff39d",key:{color:"#393939"},input:{color:"#393939",background:"#fff9c7",textIndent:".5rem"},item:{color:"#393939",img:"assets/img/payments/lego/item.png",name:"City Square",description:"2017 Lego set"},button:{label:"Pay",amount:16.99,inactiveBackground:"",activeBackground:"",focusBorder:"",background:"#111",borderRadius:30,color:"#fff"}}}},this.form={formState:"",cardType:"",cardNumber:{model:"",mask:[/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/]},expiryDate:{model:"",mask:[/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/]},securityCode:{model:"",mask:l()({prefix:"",suffix:""})}}}return o.prototype.ngOnInit=function(){console.log("`Modal Payments` component"),this.switchTheme("apple")},o.prototype.switchTheme=function(o){this.themes.active=o,this.config=this.themes[o],console.log(this.config)},o.prototype.getCardType=function(o){this.form.cardType="";var t=new RegExp("^4");null!=o.match(t)&&(this.form.cardType="visa"),/^5[1-5]/.test(o)&&(this.form.cardType="mastercard"),t=new RegExp("^3[47]"),null!=o.match(t)&&(this.form.cardType="amex")},o.prototype.onSubmit=function(){var o=this;console.log("Form Submitted!"),this.form.formState="loading",setTimeout((function(){o.form.formState=""}),2e3)},o=n.a([Object(r.Component)({selector:"modal-payments",styles:[e("YyFT")],template:e("jxQE")}),n.c("design:paramtypes",[])],o)})(),m=[{path:"",component:p,pathMatch:"full"}],f=(function(){function o(){}return o.routes=m,o=n.a([Object(r.NgModule)({declarations:[p],imports:[i.CommonModule,a.FormsModule,s.TextMaskModule,c.c.forChild(m)]})],o)})();e.d(t,"ModalPaymentsModule",(function(){return f}))},YyFT:function(o,t,e){var n=e("31DH");o.exports="string"==typeof n?n:n.toString()},jxQE:function(o,t){o.exports='<section class="wrapper t" [style.background]="config.background">\n\n    <section class="config">\n    <h3>Theme</h3>\n    <ul>\n        <li *ngFor=\'let theme of themes.list\' [ngClass]="themes.active === theme ? \'active\' : \'\'" (click)="switchTheme(theme)">{{theme}}</li>\n    </ul>\n    </section>\n\n    <section [ngClass]="config.theme" class="worldpay-payment-component">\n        <form (ngSubmit)="onSubmit()">\n\n        <section class="section company">\n        <img class="logo" [src]="config.logo"> \n        </section>\n\n        <section class="section payment-details t" [style.background]="config.container.topBackground" [style.border-top-left-radius.px]="config.container.borderRadius" [style.border-top-right-radius.px]="config.container.borderRadius" [style.border-color]="config.container.borderColor" [style.border-width.px]="config.container.borderWidth">\n        <ul class="cards">\n            <li><img class="animated" [ngClass]="{ \'fadeOut\': form.cardType !== \'\', \'fadeIn\': form.cardType === \'visa\' }" [src]="\'assets/img/payments/\' + config.theme + \'/visa-icon.png\'"></li>\n            <li><img class="animated" [ngClass]="{ \'fadeOut\': form.cardType !== \'\', \'fadeIn\': form.cardType === \'mastercard\' }" [src]="\'assets/img/payments/\' + config.theme + \'/mastercard-icon.png\'"></li>\n            <li><img class="animated" [ngClass]="{ \'fadeOut\': form.cardType !== \'\', \'fadeIn\': form.cardType === \'amex\' }" [src]="\'assets/img/payments/\' + config.theme + \'/amex-icon.png\'"></li>\n        </ul>\n        <div class="details">\n            <div>\n            <div class="form-group card-number">\n                <label class="input-title t" [style.color]="config.container.key.color">Card number</label>\n                <input type="text" [textMask]="{mask: form.cardNumber.mask}" (ngModelChange)="getCardType($event)" name="card-number" size="22" [ngModel]="form.cardNumber.model" placeholder="4556 6749 3025 9967" class="form-control t" [style.color]="config.container.input.color" [style.background]="config.container.input.background" [style.text-indent]="config.container.input.textIndent">\n            </div>\n            </div>\n            <div>\n            <div class="form-group expiry-date">\n                <label class="input-title t" [style.color]="config.container.key.color">Expiry date</label>\n                <input type="text" [textMask]="{mask: form.expiryDate.mask}" size="9" [value]="form.expiryDate.model" placeholder="06/2019" class="form-control t" [style.color]="config.container.input.color" [style.background]="config.container.input.background" [style.text-indent]="config.container.input.textIndent">\n            </div>\n            <div class="form-group security-code">\n                <label class="input-title t" [style.color]="config.container.key.color">Security code</label>\n                <input type="text" size="5" [value]="form.securityCode.model" placeholder="192" maxlength="4" class="form-control t" [style.color]="config.container.input.color" [style.background]="config.container.input.background" [style.text-indent]="config.container.input.textIndent">\n            </div>\n            </div>\n        </div>\n        </section>\n\n        <section class="section confirm t" [style.border-bottom-left-radius.px]="config.container.borderRadius" [style.border-bottom-right-radius.px]="config.container.borderRadius" [style.background]="config.container.bottomBackground" [style.border-color]="config.container.borderColor" [style.border-width.px]="config.container.borderWidth" [style.border-bottom-width.px]="config.container.borderWidth + 1">\n        <section class="item">\n            <div>\n            <img [src]="config.container.item.img">\n            </div>\n            <div>\n                <h3 [style.color]="config.container.item.color"> {{config.container.item.name}} </h3>\n                <p [style.color]="config.container.item.color"> {{config.container.item.description}} </p>\n            </div>\n        </section>\n        <section class="submit">\n            <button type="submit" class="btn btn-primary t" [ngClass]="form.formState === \'loading\' ? \'loading\' : \'\'" [style.border-radius.px]="config.container.button.borderRadius" [style.background]="config.container.button.background" [style.color]="config.container.button.color"> <img class="loader" src="assets/img/payments/light/loader.gif"> <span class="status">{{form.formState}}</span> <span class="label"><i class="fa fa-lock"></i> {{config.container.button.label}} &pound;{{config.container.button.amount}}</span> </button>\n        </section>\n        </section>\n\n    </form>\n\n    </section>\n    \n</section>'}});