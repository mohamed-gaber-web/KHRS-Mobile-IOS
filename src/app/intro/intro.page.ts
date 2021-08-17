import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  introVideo: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getVidoes('Intro').subscribe((response) => {
      console.log(response['result'].genericAttributeMediaTranslations[0]);
      this.introVideo = response['result'].genericAttributeMediaTranslations[0];
    })
   }


}
