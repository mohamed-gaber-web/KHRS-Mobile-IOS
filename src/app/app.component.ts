import { Component } from '@angular/core';
import { TranslateConfigService } from './translate-config.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private translateConfigService: TranslateConfigService,

  ) {
    this.updateAppLanguage();

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
}
