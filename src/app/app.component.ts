/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public worldpayLogo = 'assets/img/logo.svg';
  public profilePhoto = 'assets/img/profile.jpg';
  public mainMenu = false;
  public profileBtn = false;

  constructor(
    public appState: AppState 
  ) {}
 
  public ngOnInit() {

  }

  public toggleStatus(status) {
    status = !status;
    return status;
  }
}