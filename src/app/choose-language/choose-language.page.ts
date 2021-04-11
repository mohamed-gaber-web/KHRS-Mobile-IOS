import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.page.html',
  styleUrls: ['./choose-language.page.scss'],
})
export class ChooseLanguagePage implements OnInit {

  isLoading = false;

  flagsLanguage = [
    {
      name: "العربية",
      imgSrc: "../../assets/icon/العربية.png"
    },
    {
      name: "Tigirinya",
      imgSrc: "../../assets/icon/tin.png"
    },
    {
      name: "Somali",
      imgSrc: "../../assets/icon/somali.png"
    },
    {
      name: "Turkish",
      imgSrc: "../../assets/icon/tur.png"
    },
    {
      name: "urdu",
      imgSrc: "../../assets/icon/urdu.png"
    },
    {
      name: "english",
      imgSrc: "../../assets/icon/english.png"
    },
    {
      name: "Danish",
      imgSrc: "../../assets/icon/danish.png"
    },
    {
      name: "swidish",
      imgSrc: "../../assets/icon/sweed.png"
    },
    {
      name: "Norway",
      imgSrc: "../../assets/icon/norway.png"
    }

  ];

  constructor(public route: Router) { }

  ngOnInit() {
  }

  goToIntroPage() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false
      this.route.navigate(['/intro']);
    }, 4000)
  }

}
