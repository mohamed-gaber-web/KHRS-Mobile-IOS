import { Component, OnInit } from '@angular/core';

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
  classname: boolean = false;


  constructor(public router: Router, private appSerrvice: AppService) { }

  ngOnInit() {
    this.isLoading = true;
    this.subs.push(
      this.appSerrvice.getLanguage().subscribe(response => {
        this.isLoading = false;
        this.langItems = response['result'];
      })
    );
  }

  chooseLanguage() {
    this.router.navigate(['/intro']);
  }

  getLanguageId(id: number) {
    console.log(event)
    this.isSelected = !this.isSelected;
    localStorage.setItem('languageId', JSON.stringify(id));
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }


}
