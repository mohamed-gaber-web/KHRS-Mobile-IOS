import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-test-finished',
  templateUrl: './test-finished.page.html',
  styleUrls: ['./test-finished.page.scss'],
})
export class TestFinishedPage implements OnInit {

  userTestId: any;
  courseId: any;
  pageNumber: any;

  constructor(private testService: TestService, private router: Router) { }

  ngOnInit() {
    this.userTestId = JSON.parse(localStorage.getItem('userTestId'));
    this.courseId = +JSON.parse(localStorage.getItem('courseId'));
    this.courseId = +JSON.parse(localStorage.getItem('pageNumber'));
  }

  finishedTest() {
    this.testService.finishedTest(this.userTestId)
    .subscribe(response => {
      this.router.navigate(['/courses/tabs/my-courses']);
      console.log(response);
    })
  }

  // prev() {
  //   this.testService.getTestType(this.courseId, this.pageNumber-1)
  //   .subscribe(response => {
  //     if(response) {
  //       this.router.navigate(['/exercise/test-course', {courseId: this.courseId}]);
  //     }
  //   })
  // }

}
