import {BrowserModule} from '@angular/platform-browser';
import {ApplicationRef, Injector, NgModule} from '@angular/core';

import {LoginComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FailedComponent} from './failed/failed.component';
import {LoginFormComponent} from './login/login.form.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [LoginComponent, FailedComponent, LoginFormComponent],
  imports: [HttpClientModule, BrowserModule, ReactiveFormsModule, MatButtonModule, MatInputModule, BrowserAnimationsModule],
  exports: [LoginComponent],
})
export class LoginComponentModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    const el = createCustomElement(LoginComponent, {injector: this.injector});
    customElements.define('ged-login', el);
  }
}
