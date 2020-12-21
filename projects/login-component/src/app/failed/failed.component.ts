import {Component,} from '@angular/core';
import {ComponentState} from '../app.model';
import {LoginService} from '../login.service';

@Component({
  selector: 'ged-login-failed',
  templateUrl: './failed.component.html',
  styleUrls: ['./failed.component.scss'],
})
export class FailedComponent {
  constructor(public loginService: LoginService) {
  }

  login(): void {
    this.loginService.componentState = ComponentState.LOGIN;
  }
}
