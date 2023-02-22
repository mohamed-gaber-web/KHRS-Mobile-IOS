import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Course } from 'src/app/shared/models/course';
import { CourseService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-course-by-category',
  templateUrl: './course-by-category.page.html',
  styleUrls: ['./course-by-category.page.scss'],
})
export class CourseByCategoryPage implements OnInit {

  sub: Subscription[] = [];
  isLoading: boolean = false;
  coursesByCategory: any;
  userInfo: any;
  courseCategoryLength: number;
  public courses: Array<Course> = [];

  // player: Howl = null;
  isPlaying: boolean = false;
  courseAudio:string;

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.userInfo = this.authService.getUser();
    this.isLoading = true;
    this.sub.push(
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.courseService.getCoursesByCategories(0, 10, +params.get('categoryId')))
          ).subscribe(response => {
            console.log(response);              
            this.isLoading = false;
            this.coursesByCategory = response['result'];
            this.courseCategoryLength = response['length'];

      }),
  
    );
  }

  ngOnDestroy(): void {
    this.sub.forEach(el => {
      el.unsubscribe();
    })    
  }

}
