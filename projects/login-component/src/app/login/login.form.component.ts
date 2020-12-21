import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginComponent} from '../app.component';
import {ComponentState} from '../app.model';
import {LoginService} from '../login.service';

@Component({
  selector: 'ged-login-login',
  templateUrl: './login.form.component.html',
  styleUrls: ['./login.form.component.scss'],
})
export class LoginFormComponent {
  form = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService, private app: LoginComponent) {
  }

  login() {
    const values = this.form.value;
    this.loginService.login(values.user, values.password).subscribe((r) => {
      if (r) {
        console.log(r);
        this.app.loggedIn.emit(r);
      } else {
        this.loginService.componentState = ComponentState.FAIL;
      }
    });
  }
}
