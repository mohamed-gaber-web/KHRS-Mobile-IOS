import { Subscription } from 'rxjs';
import { Component, OnInit, Renderer2 } from '@angular/core';

import { StorageService } from '../../services/storage.service';
import { TrackingUserService } from './../../services/tracking-user.service';
import { NavController } from '@ionic/angular';
import {Location} from '@angular/common';
import { Router } from '@angular/router';




@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent implements OnInit {

  userInfo: any;
  toggle: boolean = false;
  listNotifi: any;
  notifiCount: number = 0;
  sub: Subscription[] = [];
  darkValue: string = 'dark';
  currentRoute: string = '';

  constructor(
    private storageService: StorageService,
    private trackingService: TrackingUserService,
    private renderer: Renderer2,
    private navCtrl: NavController,
    private location: Location,
    public router: Router
    ) { }

  ngOnInit() {
    this.userInfo = this.storageService.getUser();
    this.getUserAmDoneToday();
    console.log(this.router.url)
  }

    // * getUserAmDoneToday
  getUserAmDoneToday() {
    this.sub.push(
      this.trackingService.getAllUser(0, 20)
      .subscribe(response => {
        // console.log('getAllUerToday', response);
        this.listNotifi = response['result'];
        this.notifiCount = response['length'];
      })
    );
  }

  // * open and hide modal notification
  toggleModal() {
    this.toggle = !this.toggle;
  }

  ngOnDestroy() {
    this.sub.forEach(el => {
      el.unsubscribe();
    })
  }

  onToggleColorTheme(event) {
    if(event.detail.checked) {
      // document.body.setAttribute('color-theme', 'dark');
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    } else {
      // document.body.setAttribute('color-theme', 'light');
      this.renderer.setAttribute(document.body, 'color-theme', 'light');


    }
  }

  async back() {
    this.location.back();
    // if(this.currentRoute === '/courses/tabs/all-courses') {
    //   return;
    // } if(this.currentRoute === '/courses/course-material/18?offset=0') {
    //   await this.router.navigate(['/courses/tabs/my-courses'])
    // }
    // await this.navCtrl.pop();
  }
}
