import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './charts.routes';
import { ChartsComponent } from './charts.component';

console.log('`Charts` bundle loaded asynchronously');

@NgModule({
  declarations: [
    ChartsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ChartsModule {
  public static routes = routes;
}