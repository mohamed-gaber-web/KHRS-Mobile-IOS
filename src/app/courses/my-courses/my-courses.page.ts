import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { imagesBaseUrl } from 'src/app/api.constants';
import { AudioElement } from 'src/app/shared/models/audioObject';
import { Course } from 'src/app/shared/models/course';
import { MyCourse } from 'src/app/shared/models/myCourse';
import { CourseService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.page.html',
  styleUrls: ['./my-courses.page.scss'],
})
export class MyCoursesPage implements OnInit {
  private offset: number;
  private totalLength: number;
  sub: Subscription[] = [];
  public myCourses: Array<MyCourse> = [];
  isLoading = false;

  constructor(
    private route: Router,
    private navCtrl: NavController,
    private courseService: CourseService,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.offset = 0;
    this.getUserCourses();
  }

  getUserCourses() {
    this.isLoading = true;

    this.sub.push(
      this.courseService
        .getUserCourses('', this.offset)
        .pipe(
          map((response) => {
            Object.entries(response);
            this.isLoading = false;
            this.totalLength = response['length'];
            return response['result'];
          })
        )
        .subscribe((res) => {
          if (this.myCourses.length == 0) {
            res.forEach((element:MyCourse) => {

              if (element.course.imagePath) {
                element.course.imagePath = `${element.course.imagePath}`;
              }
              if (element.course.courseTranslations[0]?.introVoicePath) {
                element.course.courseTranslations[0].introVoicePath = `${element.course.courseTranslations[0].introVoicePath}`;
              }
              element.course.audioElement = new AudioElement();
              element.course.audioElement.status = false;
            });
            this.myCourses = res;
          } else {
            res.forEach((element) => {
              if (element.imagePath) {
                element.imagePath = `${imagesBaseUrl}${element.imagePath}`;
              }
              if (element.courseTranslations[0].introVoicePath) {
                element.courseTranslations[0].introVoicePath = `${element.courseTranslations[0].introVoicePath}`;
              }
              element.audioElement = new AudioElement();
              element.audioElement.status = false;

              this.myCourses.push(element);
            });
          }
          this.offset++;
        })
    );
  }

  loadData(event) {
    if(this.myCourses.length < this.totalLength){
      setTimeout(() => {
        this.getUserCourses();
        console.log('Done');
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.myCourses.length == 1000) {
          event.target.disabled = true;
        }
      }, 500);
    }else{
      event.target.disabled = true;

    }

  }

  playIntroHTML(course:Course){
    // this.nativeAudio.preloadSimple(`intro${course.id}`, `${course.courseTranslations[0].introVoicePath}`).then(onSuccess, onError);
    // this.nativeAudio.play(`intro${course.id}`).then(onSuccess, onError);
    if(course.audioElement.status == false){
      //stop all
      this.myCourses.forEach((element:MyCourse,index) => {
        if(element.course.audioElement.audio != null){
          element.course.audioElement.audio.pause();
          element.course.audioElement.status = false;
          //TODO destroy
        }else{
          //TODO destroy
        }

    });
    if(course.audioElement.audio.paused){
      course.audioElement.audio.play();
    }else{
      var audio = new Audio(`${course.courseTranslations[0].introVoicePath}`);
      course.audioElement.audio = audio;
      course.audioElement.audio.load();
      course.audioElement.audio.play();
    }
    course.audioElement.status = true;


    }else{
      //stop the the live one
      if(course.audioElement.audio != null){
        course.audioElement.audio.pause();
        course.audioElement.status = false;
        //TODO destroy
      }else{
        //TODO destroy
      }
    }

  }

  // ** go to choose course material
  goToChooseCourseMaterial(courseId: number) {
    this.route.navigate(['courses/tabs/choose-course-material', { courseId }]);
  }
}
