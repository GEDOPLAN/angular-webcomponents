import {BrowserModule} from '@angular/platform-browser';
import {ApplicationRef, Injector, NgModule} from '@angular/core';
import {RatingStarComponentModule} from 'projects/rating-star-component/src/app/app.module';
import {RatingComponentModule} from 'projects/rating-component/src/app/app.module';

const componentModules: any[] = [RatingStarComponentModule, RatingComponentModule];

@NgModule({
  declarations: [],
  imports: [BrowserModule, ...componentModules],
  providers: [],
})
export class RatingBundleComponentModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    componentModules.forEach((c) => c.initComponents(appRef, this.injector));
  }
}




