import { Component, OnInit, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, NavController, ToastController } from '@ionic/angular';
import { StorageService } from 'src/app/shared/services/storage.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-test-course',
  templateUrl: './test-course.page.html',
  styleUrls: ['./test-course.page.scss'],
})

export class TestCoursePage implements OnInit {

  userInfo: any;
  courseId: number;
  questionType: number;
  allTestData: any;
  currentIndex: number = 0;

  @Output() slideData = new EventEmitter<any>();


  constructor(
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router,
    public toastController: ToastController,
    public navController: NavController,
    private testService: TestService,

  ) { }

  ngOnInit() {
    this.userInfo = this.storageService.getUser();
    this.courseId = +this.route.snapshot.paramMap.get('courseId');
    this.getTestType();
  }

  // ** get test type
  getTestType() {
    this.testService.getTestType(this.courseId, this.currentIndex)
    .subscribe(response => {
      console.log(response);
      this.questionType = response['questionType'];
      this.allTestData = response;
    })
  }

}
