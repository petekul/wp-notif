webpackJsonp([4],{I8B8:function(n,e,i){var s=i("mV53");n.exports="string"==typeof s?s:s.toString()},mV53:function(n,e,i){e=n.exports=i("FZ+f")(void 0),e.push([n.i,".wp-block{display:flex;flex-wrap:wrap;justify-content:space-between}",""])},nYtd:function(n,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return a}));var s=[{name:"Germany",value:894e4},{name:"USA",value:5e6},{name:"France",value:72e5}],a=[{name:"Germany",series:[{name:"2010",value:73e5},{name:"2011",value:894e4}]},{name:"USA",series:[{name:"2010",value:787e4},{name:"2011",value:827e4}]},{name:"France",series:[{name:"2010",value:5000002},{name:"2011",value:58e5}]}]},wxgc:function(n,e){n.exports='<div class="wp-block light margin0">\n    <div class="control-chart">\n        <label *ngFor="let country of multi; let i = index">\n            <strong>{{country.name}} </strong> \n\n            <div *ngFor="let series of multi[i].series; let i2 = index">\n                <input type="range" min="1" max="10000000" [value]="multi[i].series[i2].value" class="slider" (input)="onChangeMulti(i, i2, $event)">\n                <span class="badge badge-secondary" style.background="{{config.colorScheme.domain[i2]}}">\n                    {{multi[i].series[i2].value}}\n                </span>\n            </div>\n        </label>\n    </div>\n\n    <div class="chart-wrapper">\n        <h5>Line Chart</h5>\n        <div>\n            <ngx-charts-line-chart\n                [view]="config.view"\n                [scheme]="config.colorScheme"\n                [results]="multi"\n                [gradient]="config.gradient"\n                [xAxis]="config.showXAxis"\n                [yAxis]="config.showYAxis"\n                [legend]="config.showLegend"\n                [showXAxisLabel]="config.showXAxisLabel"\n                [showYAxisLabel]="config.showYAxisLabel"\n                [xAxisLabel]="config.xAxisLabel"\n                [yAxisLabel]="config.yAxisLabel"\n                (select)="onSelect($event)">\n            </ngx-charts-line-chart>\n        </div>\n    </div>\n    <div class="chart-wrapper">\n        <h5>Area Chart</h5>\n        <div>\n            <ngx-charts-area-chart\n                [view]="config.view"\n                [scheme]="config.colorScheme"\n                [results]="multi"\n                [gradient]="config.gradient"\n                [xAxis]="config.showXAxis"\n                [yAxis]="config.showYAxis"\n                [legend]="config.showLegend"\n                [showXAxisLabel]="config.showXAxisLabel"\n                [showYAxisLabel]="config.showYAxisLabel"\n                [xAxisLabel]="config.xAxisLabel"\n                [yAxisLabel]="config.yAxisLabel"\n                (select)="onSelect($event)">\n            </ngx-charts-area-chart>\n        </div>\n    </div>\n    <div class="chart-wrapper mb-0">\n        <h5>Stacked Area Chart</h5>\n        <div>\n            <ngx-charts-area-chart-stacked\n                [view]="config.view"\n                [scheme]="config.colorScheme"\n                [results]="multi"\n                [gradient]="config.gradient"\n                [xAxis]="config.showXAxis"\n                [yAxis]="config.showYAxis"\n                [legend]="config.showLegend"\n                [showXAxisLabel]="config.showXAxisLabel"\n                [showYAxisLabel]="config.showYAxisLabel"\n                [xAxisLabel]="config.xAxisLabel"\n                [yAxisLabel]="config.yAxisLabel"\n                (select)="onSelect($event)">\n            </ngx-charts-area-chart-stacked>\n        </div>\n    </div>\n    <div class="chart-wrapper mb-0">\n        <h5>Normalized Area Chart</h5>\n        <div>\n            <ngx-charts-area-chart-normalized\n                [view]="config.view"\n                [scheme]="config.colorScheme"\n                [results]="multi"\n                [gradient]="config.gradient"\n                [xAxis]="config.showXAxis"\n                [yAxis]="config.showYAxis"\n                [legend]="config.showLegend"\n                [showXAxisLabel]="config.showXAxisLabel"\n                [showYAxisLabel]="config.showYAxisLabel"\n                [xAxisLabel]="config.xAxisLabel"\n                [yAxisLabel]="config.yAxisLabel"\n                (select)="onSelect($event)">\n            </ngx-charts-area-chart-normalized>\n        </div>\n    </div>\n</div>\n'},xs5T:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("TToO"),a=i("2Je8"),o=i("NVOs"),t=i("3j3K"),c=i("5oXY"),l=i("dBtz"),r=i("nYtd");console.log("`Line Charts` component loaded asynchronously");var h=(function(){function n(){this.config={showXAxis:!0,showYAxis:!0,gradient:!1,showLegend:!0,showXAxisLabel:!0,xAxisLabel:"Country",showYAxisLabel:!0,yAxisLabel:"Population",colorScheme:{domain:["#3a3a38","#6ba3be","#b6b9b0"]}},Object.assign(this,{single:r.b,multi:r.a})}return n.prototype.onSelect=function(n){console.log(n)},n.prototype.onChangeMulti=function(n,e,i){this.multi[n].series[e].value=parseInt(i.target.value),this.multi=this.multi.slice()},n.prototype.ngOnInit=function(){console.log("`Line Charts` component")},n=s.a([Object(t.Component)({selector:"line-charts",styles:[i("I8B8")],template:i("wxgc")}),s.c("design:paramtypes",[])],n)})(),g=[{path:"",component:h,pathMatch:"full"}],x=(function(){function n(){}return n.routes=g,n=s.a([Object(t.NgModule)({declarations:[h],imports:[a.CommonModule,o.FormsModule,l.NgxChartsModule,c.c.forChild(g)]})],n)})();i.d(e,"LineChartsModule",(function(){return x}))}});