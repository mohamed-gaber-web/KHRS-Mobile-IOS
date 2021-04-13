import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  applyCourse() {
    this.router.navigateByUrl('/courses/tabs/apply-course')
  }

}
