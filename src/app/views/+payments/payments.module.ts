import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './payments.routes';
import { PaymentsComponent } from './payments.component';

console.log('`Payments` bundle loaded asynchronously');

@NgModule({
  declarations: [
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class PaymentsModule {
  public static routes = routes;
}