import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { routes } from './pie-charts.routes';
import { PieChartsComponent } from './pie-charts.component';

@NgModule({
  declarations: [
    PieChartsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxChartsModule,
    RouterModule.forChild(routes),
  ],
})
export class PieChartsModule {
  public static routes = routes;
}