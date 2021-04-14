import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-apply-course',
  templateUrl: './apply-course.page.html',
  styleUrls: ['./apply-course.page.scss'],
})
export class ApplyCoursePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  getCourseMaterial() {
    this.route.navigateByUrl('/courses/tabs/choose-course-material')
  }

}
