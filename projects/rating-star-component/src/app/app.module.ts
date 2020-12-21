import {ApplicationRef, Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';
import {RatingStarComponent} from './rating-star/rating-star.component';

@NgModule({
  declarations: [RatingStarComponent, RatingStarComponent],
  imports: [BrowserModule],
  exports: [RatingStarComponent],
  providers: [],
})
export class RatingStarComponentModule {
  constructor(private injector: Injector) {
  }

  static initComponents(appRef: ApplicationRef, injector: Injector): void {
    const el = createCustomElement(RatingStarComponent, {injector: injector});
    customElements.define('ged-rating-star', el);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    RatingStarComponentModule.initComponents(appRef, this.injector);
  }
}
