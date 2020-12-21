import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'ged-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss'],
})
export class RatingStarComponent implements OnChanges {
  @Input()
  width = 30;

  @Input()
  height = 30;

  @Input()
  max = 5;

  @Input()
  rating = 3;

  elements = [];

  constructor() {
    this.ngOnChanges();
  }

  ngOnChanges(): void {
    this.elements = [];
    for (let i = 0; i < this.max; i++) {
      this.elements.push(i < this.rating);
    }
  }
}
