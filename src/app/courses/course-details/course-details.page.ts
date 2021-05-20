import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CourseService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage implements OnInit {

  courseDetails: any;
  subs: Subscription[] = [];
  isLoading = false;

  constructor(
    private router: Router,
    private courseService: CourseService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.isLoading = true;
    this.subs.push(
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
            this.courseService.getCoursesDetails(+params.get('courseId')))
          ).subscribe(response => {
            this.isLoading = false;
            console.log(response)
            this.courseDetails = response['result'];
      })
    );
  }


   ngOnDestroy(): void {
    this.subs.forEach((element) => {
      element.unsubscribe();
    })
   }

}
