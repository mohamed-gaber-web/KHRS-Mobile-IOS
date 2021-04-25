import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';

import { NativeAudio } from '@ionic-native/native-audio/ngx';



@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.page.html',
  styleUrls: ['./single-choice.page.scss'],
})
export class SingleChoicePage implements OnInit {

  audio = new Audio('../../../assets/iphone_ding.mp3' );
  checkQuestion = true;

  constructor(
    public toastController: ToastController,
    private nativeAudio: NativeAudio
    ) { }

  ngOnInit() {
  }

  async check() {
    if(this.checkQuestion === true) {
      this.audio.play()
      const toast = await this.toastController.create({
        message: 'Yes this Question is Nice !!',
        duration: 3000,
        cssClass:'ion-success',
        color: 'success'
      });
      toast.present();
    }

    if(this.checkQuestion === false) {
      const toast = await this.toastController.create({
        message: 'No this Question is Mistake',
        duration: 3000,
        cssClass:'ion-error',
        color: 'danger',
      });
      toast.present();
    }
  }

}
