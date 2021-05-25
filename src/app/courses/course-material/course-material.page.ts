import { User } from './../../shared/models/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CourseService } from 'src/app/shared/services/courses.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-course-material',
  templateUrl: './course-material.page.html',
  styleUrls: ['./course-material.page.scss'],
})
export class CourseMaterialPage implements OnInit {

  courseDetails: any;
  subs: Subscription[] = [];
  isLoading = false;
  courseMaterial: any;
  userInfo: any;

  @ViewChild('slides') slides;


  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    scrollbar: true
  };

  constructor(
    private router: Router,
    private courseService: CourseService,
    private route: ActivatedRoute,
    public storageService: StorageService, public authService: AuthService
  ) { }

  ngOnInit() {

    this.userInfo = this.authService.getUser();

    this.isLoading = true;
    this.subs.push(
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
            this.courseService.getCourseMaterial(+params.get('courseId'), 0, 10))
          ).subscribe(response => {
            this.isLoading = false;
            this.courseMaterial = response['result'];
            console.log(this.courseMaterial);
      })
    );

  }

  //Move to Next slide
  slideNext() {
    this.slides.slideNext()
  }

  //Move to previous slide
  slidePrev() {
    this.slides.slidePrev();
  }

  ngOnDestroy(): void {
    this.subs.forEach((element) => {
      element.unsubscribe();
    })
    }

}
