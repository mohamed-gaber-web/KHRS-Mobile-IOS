import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success-videos',
  templateUrl: './success-videos.component.html',
  styleUrls: ['./success-videos.component.scss'],
})
export class SuccessVideosComponent implements OnInit {

  @Input('successData') allSuccessData: any;
  @Input('isLoadingData') isLoading: boolean;

  constructor() { }

  ngOnInit() {}

}
