import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  video: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
    // this.appService.getVidoes('intro').subscribe((response) => {
    //   console.log(response);
    // })
   }


}
