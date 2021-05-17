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

  // flagsLanguage = [
  //   {
  //     name: "العربية",
  //     imgSrc: "../../assets/icon/العربية.png"
  //   },
  //   {
  //     name: "Tigirinya",
  //     imgSrc: "../../assets/icon/tin.png"
  //   },
  //   {
  //     name: "Somali",
  //     imgSrc: "../../assets/icon/somali.png"
  //   },
  //   {
  //     name: "Turkish",
  //     imgSrc: "../../assets/icon/tur.png"
  //   },
  //   {
  //     name: "urdu",
  //     imgSrc: "../../assets/icon/urdu.png"
  //   },
  //   {
  //     name: "english",
  //     imgSrc: "../../assets/icon/english.png"
  //   },
  //   {
  //     name: "Danish",
  //     imgSrc: "../../assets/icon/danish.png"
  //   },
  //   {
  //     name: "swidish",
  //     imgSrc: "../../assets/icon/sweed.png"
  //   },
  //   {
  //     name: "Norway",
  //     imgSrc: "../../assets/icon/norway.png"
  //   }

  // ];

  constructor(public router: Router, private appSerrvice: AppService) { }

  ngOnInit() {
    this.isLoading = true
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
    return localStorage.setItem('languageId', JSON.stringify(id));
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }


}
