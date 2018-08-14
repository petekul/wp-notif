import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { routes } from './other.routes';
import { OtherComponent } from './other.component';

@NgModule({
  declarations: [
    OtherComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxChartsModule,
    RouterModule.forChild(routes),
  ],
})
export class OtherModule {
  public static routes = routes;
}