import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

@Component({
  selector: 'forms',
  styles: [``],
  templateUrl: './forms.component.html'
})
export class FormsComponent implements OnInit {
  public localState: any;
  public input = {
    phone: {
      model: '',
      mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    },
    date: {
      model: '',
      mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
    },
    pound: {
      model: '',
      mask: createNumberMask({
        prefix: '£',
        suffix: ''
      })
    },
    email: {
      model: ''
    }
  }
  
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    console.log('`Forms` component');
  }
}