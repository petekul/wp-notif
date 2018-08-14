import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { routes } from './bar-charts.routes'; 
import { BarChartsComponent } from './bar-charts.component';

@NgModule({
  declarations: [
    BarChartsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxChartsModule,
    RouterModule.forChild(routes),
  ],
})
export class BarChartsModule {
  public static routes = routes;
}