import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { StorageService } from './shared/services/storage.service';
import { SuccessBoardService } from './shared/services/success-board.service';
import { TranslateConfigService } from './translate-config.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  sub: Subscription[] = [];
  isLoading: boolean = false;
  allDataSuccess: any;
  allDataRatng: any;

  constructor(
    private translateConfigService: TranslateConfigService,
    public storageService: StorageService,
    public toastController: ToastController,
    public authService: AuthService,
    private router: Router,
    private successService: SuccessBoardService

  ) {
    this.updateAppLanguage();
  }

  ngOnInit() {
    this.isLoading = true;
    this.sub.push(
      this.successService.successBoardFn(0, 20)
        .subscribe(response => {
          this.isLoading = false;
          this.allDataSuccess = response['successBoards']['result'];
          this.allDataRatng = response['ratings'];
          // console.log(this.allData);
        })
    );
  }

  systemLanguage:any;

  updateAppLanguage(){
    if(!localStorage.getItem('lang')){
      localStorage.setItem('lang', "en");
      this.systemLanguage = "en";
    }else{
     this.systemLanguage = localStorage.getItem('lang');
    }
    this.translateConfigService.setLanguage(this.systemLanguage);
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

  ngOnDestroy(): void {
    this.sub.forEach(e => e.unsubscribe())
  }

}
