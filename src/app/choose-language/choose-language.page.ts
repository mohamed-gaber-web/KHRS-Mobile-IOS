import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Language } from '../shared/models/language';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.page.html',
  styleUrls: ['./choose-language.page.scss'],
})
export class ChooseLanguagePage implements OnInit {

  isLoading = false;
  subs: Subscription[] = [];
  langItems: Language[];
  isSelected: boolean = false;
  itemClass: string = '';
  selected :any;


  constructor(public router: Router, private appSerrvice: AppService) {}

  ngOnInit() {
    this.isLoading = true;
    this.subs.push(
      this.appSerrvice.getLanguage()
      .subscribe(response => {
        // console.log(response);
        this.isLoading = false;
        this.langItems = response['result'].result;
      })
    );
  }



  chooseLanguage() {
    this.router.navigate(['/auth/sign-in']);
  }

  getLanguageId(item) {
    localStorage.setItem('languageId', JSON.stringify(item.id));
    // this.isSelected = !this.isSelected;
    // console.log('selected elements');
    this.selected = item;
  }

  isActive(item) {
    return this.selected === item;
  };

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }


}
