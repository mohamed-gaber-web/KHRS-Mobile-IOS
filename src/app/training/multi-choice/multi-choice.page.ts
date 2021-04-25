import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-multi-choice',
  templateUrl: './multi-choice.page.html',
  styleUrls: ['./multi-choice.page.scss'],
})
export class MultiChoicePage implements OnInit {

  audio = new Audio('../../../assets/iphone_ding.mp3' );
  checkQuestion = true;

  constructor(
    public toastController: ToastController
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
