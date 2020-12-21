import {BrowserModule} from '@angular/platform-browser';
import {ApplicationRef, Injector, NgModule} from '@angular/core';

import {RatingComponent} from './rating/rating.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [RatingComponent],
  imports: [BrowserModule],
  exports: [RatingComponent],
  providers: []
})
export class RatingComponentModule {
  constructor(private injector: Injector) {
  }

  static initComponents(appRef: ApplicationRef, injector: Injector) {
    const el = createCustomElement(RatingComponent, {injector: injector});
    customElements.define('ged-rating', el);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    RatingComponentModule.initComponents(appRef, this.injector);
  }
}
