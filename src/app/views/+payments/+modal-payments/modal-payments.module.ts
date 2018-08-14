import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { routes } from './modal-payments.routes'; 
import { ModalPaymentsComponent } from './modal-payments.component';

@NgModule({
  declarations: [
    ModalPaymentsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TextMaskModule,
    RouterModule.forChild(routes),
  ],
})
export class ModalPaymentsModule {
  public static routes = routes;
}