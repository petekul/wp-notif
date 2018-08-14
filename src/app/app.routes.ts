import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FormsComponent } from './views/forms/forms.component';
import { ComponentsComponent } from './views/components/components.component';
// import { PaymentsComponent } from './views/payments/payments.component';
import { NoContentComponent } from './views/no-content/no-content.component';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'components', component: ComponentsComponent},
  { path: 'payments', loadChildren: './views/+payments#PaymentsModule'},
  // { path: 'payments', component: PaymentsComponent},
  { path: '**',    component: NoContentComponent },
];
