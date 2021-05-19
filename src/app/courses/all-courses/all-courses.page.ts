import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { imagesBaseUrl } from 'src/app/api.constants';
import { Course } from 'src/app/shared/models/course';
import { CourseService } from 'src/app/shared/services/courses.service';
import { AudioElement } from 'src/app/shared/models/audioObject';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.page.html',
  styleUrls: ['./all-courses.page.scss'],
})
export class AllCoursesPage implements OnInit {
  private offset:number;
  private totalLength:number;
  sub: Subscription[] = [];
  public courses: Array<Course> = [];
  isLoading = false;

  constructor(private route: Router, private navCtrl: NavController,private courseService:CourseService,private platform:Platform) { }

  ngOnInit() {
    this.offset = 0;
    this.getCourses();
  }

  getCourse(id:number) {
    this.navCtrl.navigateBack(`/courses/tabs/${id}`);
  }

  public getCourses() {
    this.isLoading = true;

    this.sub.push(
      this.courseService
        .getAllCourses("",this.offset)
        .pipe(
          map((response) => {
            Object.entries(response);
            this.isLoading = false;
            this.totalLength = response["length"];
            return response["result"];
          })
        )
        .subscribe((res) => {
          if(this.courses.length==0){
            res.forEach(element => {
              if(element.imagePath){
                element.imagePath = `${imagesBaseUrl}${element.imagePath}`;
              }
              if(element.courseTranslations[0].introVoicePath){
                element.courseTranslations[0].introVoicePath = `${imagesBaseUrl}${element.courseTranslations[0].introVoicePath}`;

              }
              element.audioElement = new AudioElement();
              element.audioElement.status = false;


            });
            this.courses=res;
          }else{
            res.forEach(element => {
              if(element.imagePath){
                element.imagePath = `${imagesBaseUrl}${element.imagePath}`;
              }
              if(element.courseTranslations[0].introVoicePath){
                element.courseTranslations[0].introVoicePath = `${imagesBaseUrl}${element.courseTranslations[0].introVoicePath}`;
              }
              element.audioElement = new AudioElement();
              element.audioElement.status = false;

              this.courses.push(element);
            });
          }
          this.offset++;
        })
    );

  }
  loadData(event) {
    if(this.courses.length < this.totalLength){
      setTimeout(() => {
        this.getCourses();
        console.log('Done');
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.courses.length == 1000) {
          event.target.disabled = true;
        }
      }, 500);
    }else{
      event.target.disabled = true;

    }

  }

  playIntroHTML(course:Course){
   console.log(this.courses);
    // this.nativeAudio.preloadSimple(`intro${course.id}`, `${course.courseTranslations[0].introVoicePath}`).then(onSuccess, onError);
    // this.nativeAudio.play(`intro${course.id}`).then(onSuccess, onError);
    if(course.audioElement.status == false){
      //stop all
      this.courses.forEach((element:Course,index) => {
        if(element.audioElement.audio != null){
          element.audioElement.audio.pause();
          element.audioElement.status = false;
          //TODO destroy
        }else{
          //TODO destroy
        }

    });
    if( course.audioElement.audio && course.audioElement.audio.paused){
      course.audioElement.audio.play();
    }else{
      var audio = new Audio(`${course.courseTranslations[0].introVoicePath}`);
      course.audioElement.audio = audio;
      course.audioElement.audio.load();
      course.audioElement.audio.play();
      console.log(this.courses);
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

  // playIntro(course:Course){
  //   //TODO stop the rest of active audios
  //   this.platform.ready().then(() => {

  //   var file = this.media.create(`${course.courseTranslations[0].introVoicePath}`);
  //   // to listen to plugin events:
  //   this.introAudiosNative.push(file);
  //   console.log(this.introAudiosNative)
  //   file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

  //   file.onSuccess.subscribe(() => console.log('Action is successful'));

  //   file.onError.subscribe(error => console.log('Error!', error));

  //   // play the file
  //   file.play();
  //   });

  // }

}
function onSuccess() {
  throw new Error('Function not implemented.');
}
function onError() {
  alert("error")
}

