import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  @ViewChild('myTabs') tabs: IonTabs;
  activeTabName

constructor() { }

ngOnInit() {}



}
