webpackJsonp([2],{FXWI:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("TToO"),a=t("2Je8"),o=t("NVOs"),c=t("3j3K"),s=t("5oXY"),l=t("dBtz"),r=t("nYtd");console.log("`Pie Charts` component loaded asynchronously");var d=(function(){function e(){this.config={gradient:!1,showLegend:!0,showLabels:!0,explodeSlices:!1,doughnut:!1,colorScheme:{domain:["#3a3a38","#6ba3be","#b6b9b0"]}},Object.assign(this,{single:r.b,multi:r.a})}return e.prototype.onSelect=function(e){console.log(e)},e.prototype.onChangeSingle=function(e,n){this.single[e].value=parseInt(n.target.value),this.single=this.single.slice()},e.prototype.ngOnInit=function(){console.log("`Pie Charts` component")},e=i.a([Object(c.Component)({selector:"pie-charts",styles:[t("HdC7")],template:t("KCXf")}),i.c("design:paramtypes",[])],e)})(),g=[{path:"",component:d,pathMatch:"full"}],u=(function(){function e(){}return e.routes=g,e=i.a([Object(c.NgModule)({declarations:[d],imports:[a.CommonModule,o.FormsModule,l.NgxChartsModule,s.c.forChild(g)]})],e)})();t.d(n,"PieChartsModule",(function(){return u}))},HdC7:function(e,n,t){var i=t("KqaN");e.exports="string"==typeof i?i:i.toString()},KCXf:function(e,n){e.exports='<div class="wp-block light margin0">\n    <div class="control-chart">\n        <label *ngFor="let country of single; let i = index">\n            <strong>{{country.name}} </strong> \n            <div>\n                <input type="range" min="1" max="10000000" [value]="single[i].value" class="slider" (input)="onChangeSingle(i, $event)">\n                <span class="badge badge-secondary" style.background="{{config.colorScheme.domain[i]}}">\n                    {{single[i].value}}\n                </span>\n            </div>\n        </label>\n    </div>\n\n    <div class="chart-wrapper full">\n        <h5>Pie Grid Chart</h5>\n        <div>\n            <ngx-charts-pie-grid\n                [view]="config.view"\n                [scheme]="config.colorScheme"\n                [results]="single"\n                (select)="onSelect($event)">\n            </ngx-charts-pie-grid>\n        </div>\n    </div>\n    <div class="chart-wrapper full">\n        <h5>Advanced Pie Chart</h5>\n        <div>\n            <ngx-charts-advanced-pie-chart\n                [view]="config.view"\n                [scheme]="config.colorScheme"\n                [results]="single"\n                [gradient]="config.gradient"\n                (select)="onSelect($event)">\n            </ngx-charts-advanced-pie-chart>\n        </div>\n    </div>\n    <div class="chart-wrapper mb-0">\n        <h5>Pie Chart</h5>\n        <div>\n            <ngx-charts-pie-chart\n                [view]="config.view"\n                [scheme]="config.colorScheme"\n                [results]="single"\n                [legend]="config.showLegend"\n                [explodeSlices]="config.explodeSlices"\n                [labels]="config.showLabels"\n                [doughnut]="config.doughnut"\n                [gradient]="config.gradient"\n                (select)="onSelect($event)">\n            </ngx-charts-pie-chart>\n        </div>\n    </div>\n</div>\n\n\n'},KqaN:function(e,n,t){n=e.exports=t("FZ+f")(void 0),n.push([e.i,".wp-block{display:flex;flex-wrap:wrap;justify-content:space-between}",""])},nYtd:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return a}));var i=[{name:"Germany",value:894e4},{name:"USA",value:5e6},{name:"France",value:72e5}],a=[{name:"Germany",series:[{name:"2010",value:73e5},{name:"2011",value:894e4}]},{name:"USA",series:[{name:"2010",value:787e4},{name:"2011",value:827e4}]},{name:"France",series:[{name:"2010",value:5000002},{name:"2011",value:58e5}]}]}});