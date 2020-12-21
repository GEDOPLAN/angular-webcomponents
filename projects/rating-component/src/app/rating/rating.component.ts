import {AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ged-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class RatingComponent implements OnChanges, AfterViewInit {
  @Input()
  min = 0;

  @Input()
  max = 100;

  @Input()
  value;

  @ViewChild('bar')
  barElement: ElementRef;

  @ViewChild('marker')
  markerElement: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.barElement && this.markerElement) {
      if (!this.value) {
        console.warn('ged-rating: there is no value given');
        this.value = 0;
      }

      const barWith = this.barElement.nativeElement.clientWidth;
      const markerPosition = (barWith / (this.max - this.min)) * this.value;
      this.markerElement.nativeElement.style = `left: ${markerPosition}px`;
    }
  }

  ngAfterViewInit(): void {
    this.ngOnChanges(null);
  }
}
