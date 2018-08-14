webpackJsonp([1],{Arrp:function(t,n){t.exports='<div class="wp-block light margin0">\n    <h3><i class="fa fa-bar-chart" aria-hidden="true"></i> Charts</h3>\n    <p>Built with D3 and SVG with Angular for rendering. All elements can be customized with CSS. </p>\n    <a href="https://swimlane.gitbooks.io/ngx-charts/content/" target="_blank"><button type="button" class="btn btn-secondary btn-sm">Read Full Documentation</button></a>    \n</div>\n\n<div class="wp-block dark padding0 margin0">\n    <nav class="wp-subnavigation">\n        <a class="nav-item nav-link" [routerLink]=" [\'./bar-charts\'] " routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}"> Bar Charts </a>\n        <a class="nav-item nav-link" [routerLink]=" [\'./line-charts\'] " routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}"> Line Charts </a>\n        <a class="nav-item nav-link" [routerLink]=" [\'./pie-charts\'] " routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}"> Pie Charts </a>\n        <a class="nav-item nav-link" [routerLink]=" [\'./other\'] " routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}"> Other </a>\n    </nav>\n</div>\n\n<router-outlet></router-outlet>'},bRn3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("TToO"),a=e("2Je8"),i=e("NVOs"),o=e("3j3K"),u=e("5oXY"),c=(function(){function t(t){this.route=t}return t.prototype.ngOnInit=function(){console.log("`Charts` component")},t=r.a([Object(o.Component)({selector:"charts",styles:[""],template:e("Arrp")}),r.c("design:paramtypes",[u.a])],t)})(),s=[{path:"",component:c,children:[{path:"",redirectTo:"bar-charts"},{path:"bar-charts",loadChildren:function(){return e.e(5).then(e.bind(null,"vDa4")).then((function(t){return t.BarChartsModule}))}},{path:"line-charts",loadChildren:function(){return e.e(4).then(e.bind(null,"xs5T")).then((function(t){return t.LineChartsModule}))}},{path:"pie-charts",loadChildren:function(){return e.e(2).then(e.bind(null,"FXWI")).then((function(t){return t.PieChartsModule}))}},{path:"other",loadChildren:function(){return e.e(3).then(e.bind(null,"A3Kq")).then((function(t){return t.OtherModule}))}}]}];console.log("`Charts` bundle loaded asynchronously");var l=(function(){function t(){}return t.routes=s,t=r.a([Object(o.NgModule)({declarations:[c],imports:[a.CommonModule,i.FormsModule,u.c.forChild(s)]})],t)})();e.d(n,"ChartsModule",(function(){return l}))}});