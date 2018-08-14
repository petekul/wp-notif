import { ChartsComponent } from './charts.component';

export const routes = [
  { path: '', component: ChartsComponent, children: [
    { path: '', redirectTo: 'bar-charts' },
    { path: 'bar-charts', loadChildren: './+bar-charts#BarChartsModule' },
    { path: 'line-charts', loadChildren: './+line-charts#LineChartsModule' },
    { path: 'pie-charts', loadChildren: './+pie-charts#PieChartsModule' },
    { path: 'other', loadChildren: './+other#OtherModule' } 
  ]},
];