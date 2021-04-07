import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.page.html',
  styleUrls: ['./choose-language.page.scss'],
})
export class ChooseLanguagePage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  goToIntroPage() {
    this.route.navigate(['/intro']);
  }

}
