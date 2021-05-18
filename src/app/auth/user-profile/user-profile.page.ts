import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  userInfo: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userInfo = this.authService.getUser();
    console.log(this.userInfo);
  }


}
