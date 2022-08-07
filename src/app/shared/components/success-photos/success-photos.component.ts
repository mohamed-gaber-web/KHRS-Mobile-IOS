import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success-photos',
  templateUrl: './success-photos.component.html',
  styleUrls: ['./success-photos.component.scss'],
})
export class SuccessPhotosComponent implements OnInit {

  @Input('successData') allSuccessData: any;
  @Input('isLoadingData') isLoading: boolean;

  constructor() { }

  ngOnInit() {}

}
