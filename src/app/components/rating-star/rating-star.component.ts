/*
Par: William John Adam Trindade
2021-11-22
*/
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating-star',
  templateUrl: './rating-star.component.html',
})
export class RatingStarComponent {
  @Input() stars: number = 0;
  readonly = false;
}
