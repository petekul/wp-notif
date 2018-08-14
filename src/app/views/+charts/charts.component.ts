import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'charts',
  styles: [``],
  templateUrl: './charts.component.html'
})
export class ChartsComponent implements OnInit {
  public localState: any;
  
  constructor (
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    console.log('`Charts` component');
  }
}