import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ComponentState} from './app.model';
import {LoginService} from './login.service';

@Component({
  selector: 'ged-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class LoginComponent {
  @Output('logged-in')
  loggedIn = new EventEmitter<any>();

  @Input('show-logo')
  showLogo = 'false';

  states = ComponentState;

  constructor(public loginService: LoginService) {
  }
}
