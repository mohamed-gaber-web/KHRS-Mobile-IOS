import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToUpdatedUser() {
    this.route.navigateByUrl('/courses/tabs/all-courses')
  }

}
