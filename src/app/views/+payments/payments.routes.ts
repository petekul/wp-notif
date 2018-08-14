import { PaymentsComponent } from './payments.component';

export const routes = [
  { path: '', component: PaymentsComponent, children: [
    { path: '', redirectTo: 'modal-payments' },
    { path: 'modal-payments', loadChildren: './+modal-payments#ModalPaymentsModule' },
    { path: 'inline-payments', loadChildren: './+inline-payments#InlinePaymentsModule' }
  ]},
];