import { StorageService } from '../../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent implements OnInit {

  userInfo: any;

  constructor( private storageService: StorageService) { }

  ngOnInit() {
    this.userInfo = this.storageService.getUser();
  }

}
