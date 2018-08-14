import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { routes } from './line-charts.routes';
import { LineChartsComponent } from './line-charts.component';

@NgModule({
  declarations: [
    LineChartsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxChartsModule,
    RouterModule.forChild(routes),
  ],
})
export class LineChartsModule {
  public static routes = routes;
}