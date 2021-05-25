import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { userCourse } from 'src/app/shared/models/userCourse';
import { CourseService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-choose-course-material',
  templateUrl: './choose-course-material.page.html',
  styleUrls: ['./choose-course-material.page.scss'],
})
export class ChooseCourseMaterialPage implements OnInit {

  userId: number;
  courseId: number;
  subs: Subscription[] = [];
  userCourseDetails: userCourse[];
  CourseDetails: any;
  validCourse;
  isLoading: boolean = false;

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.userId = JSON.parse(this.route.snapshot.paramMap.get('userId'));
    this.courseId = JSON.parse(this.route.snapshot.paramMap.get('courseId'));

    this.subs.push(
      this.courseService.getUserCoursesDetails(this.userId)
      .subscribe(response => {
        this.isLoading = false;
        this.userCourseDetails = response['result'].userCourse;
        let startDate = new Date(this.userCourseDetails['startDate']);
        let endDate = new Date(this.userCourseDetails['endDate']);
         let date = endDate.getTime() - startDate.getTime();
        this.validCourse = date/(1000 * 3600 * 24);
      }),

      this.courseService.getCoursesDetails(this.courseId)
      .subscribe(response => {
        this.isLoading = false;
        this.CourseDetails = response['result'];
        console.log(this.CourseDetails)
      })
    );

  }

  ngOnDestroy() {
    this.subs.forEach(element => element.unsubscribe())
  }

}
