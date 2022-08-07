import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  userInfo: any;

  constructor(
    public authService: AuthService,
    public storageService: StorageService,
    private router: Router,
    private toastController: ToastController
    ) { }

  ngOnInit() {
    this.userInfo = this.authService.getUser();
    // console.log(this.authService.getUser());
  }

    async logout() {
    this.storageService.clearStorage();
    var toast = await this.toastController.create({
      message: 'Signed out',
      duration: 2000,
      color: 'success',
    });
    toast.present();
    this.router.navigateByUrl('/auth/sign-in')
  }

}
