import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RatingComponentModule} from 'projects/rating-component/src/app/app.module';
import {RatingStarComponentModule} from 'projects/rating-star-component/src/app/app.module';
import {LoginComponentModule} from 'projects/login-component/src/app/app.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RatingComponentModule, RatingStarComponentModule, LoginComponentModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
