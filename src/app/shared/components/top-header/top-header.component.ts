import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../services/storage.service';
import { TrackingUserService } from './../../services/tracking-user.service';



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
  sub: Subscription[] = []

  constructor(
    private storageService: StorageService,
    private trackingService: TrackingUserService
    ) { }

  ngOnInit() {
    this.userInfo = this.storageService.getUser();
    this.getUserAmDoneToday();
  }

    // * getUserAmDoneToday
  getUserAmDoneToday() {
    this.sub.push(
      this.trackingService.getAllUser(0, 20)
      .subscribe(response => {
        console.log('getAllUerToday', response);
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
}
