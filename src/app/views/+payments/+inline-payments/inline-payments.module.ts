import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { routes } from './inline-payments.routes';
import { InlinePaymentsComponent } from './inline-payments.component';

@NgModule({
  declarations: [
    InlinePaymentsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TextMaskModule,
    RouterModule.forChild(routes),
  ],
})
export class InlinePaymentsModule {
  public static routes = routes;
}