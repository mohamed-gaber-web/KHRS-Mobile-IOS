import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-choose-course-material',
  templateUrl: './choose-course-material.page.html',
  styleUrls: ['./choose-course-material.page.scss'],
})
export class ChooseCourseMaterialPage implements OnInit {

  courseId: number;
  subs: Subscription[] = [];
  offset: number

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.offset = 0;
    this.courseId = JSON.parse(this.route.snapshot.paramMap.get('courseId'))

    this.subs.push(
      this.courseService.getUserCourses('', this.offset).subscribe(response => {
        console.log(response);

      })
    );

  }

  ngOnDestroy() {
    this.subs.forEach(element => element.unsubscribe())
  }

}
