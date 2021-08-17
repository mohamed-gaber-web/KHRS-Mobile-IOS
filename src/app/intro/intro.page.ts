import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  introVideo: any;
  getLang: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getLang = localStorage.getItem('languageId');
    console.log(this.getLang);
    this.appService.getVidoes('Intro', this.getLang).subscribe((response) => {
      // console.log(response);
      this.introVideo = response['result'].genericAttributeMediaTranslations[0];
    })
   }

}
