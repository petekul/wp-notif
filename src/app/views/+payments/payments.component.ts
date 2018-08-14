import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'payments',
  styles: [``],
  templateUrl: './payments.component.html'
})
export class PaymentsComponent implements OnInit {
  public localState: any;
  
  constructor (
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    console.log('`Payments` component');
  }
}