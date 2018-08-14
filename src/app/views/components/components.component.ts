import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'components',
  templateUrl: './components.component.html'
})
export class ComponentsComponent implements OnInit {

  public ngOnInit() {
    console.log('`Components` component');
  }
}