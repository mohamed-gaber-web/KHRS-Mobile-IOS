import { Component, OnInit, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, NavController, ToastController } from '@ionic/angular';
import { CdTimerComponent } from 'angular-cd-timer';
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
  pageNumber: number = 0;
  counterStart: number = 0;
  finishedTime: boolean= false;
  message: string = '';
  durationTest: number;

  @Output() slideData = new EventEmitter<any>();
  @ViewChild( 'basicTimer', { static: false } ) cdTimer : CdTimerComponent;

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
    this.testService.getTestType(this.courseId, this.pageNumber)
    .subscribe(response => {
      console.log('test parent component response', response);
      this.questionType = response['questionType'];
      this.allTestData = response;
      // debugger;
    })
  }


  getQuestionData(event) {
    this.questionType = event.questionType;
    this.pageNumber = event.pageNumber;
  }

  finishedTimer() {
    this.message = 'timer is finished';
    setTimeout(() => {
      this.router.navigate(['/courses/tabs/my-courses'])
    }, 4000)
  }

}
