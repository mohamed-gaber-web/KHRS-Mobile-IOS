import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success-reviews',
  templateUrl: './success-reviews.component.html',
  styleUrls: ['./success-reviews.component.scss'],
})
export class SuccessReviewsComponent implements OnInit {

  rate: number = 3;
  @Input('successRating') allSuccessRating: any;
  @Input('isLoadingData') isLoading: boolean;

  constructor() { }

  ngOnInit() {}

}
