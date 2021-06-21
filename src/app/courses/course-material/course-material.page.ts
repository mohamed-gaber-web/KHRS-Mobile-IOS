import { User } from './../../shared/models/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CourseService } from 'src/app/shared/services/courses.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IonRange, IonSlides } from '@ionic/angular';
import { Howl } from 'howler';

@Component({
  selector: 'app-course-material',
  templateUrl: './course-material.page.html',
  styleUrls: ['./course-material.page.scss'],
})
export class CourseMaterialPage implements OnInit {
  courseDetails: any;
  player: Howl = null;
  progress: number = 0;
  isPlaying: boolean = false;
  subs: Subscription[] = [];
  isLoading = false;
  courseMaterial: any;
  userInfo: any;
  disablePrevBtn = true;
  disableNextBtn = false;
  activeTrack: string;
  @ViewChild('slides') slides: IonSlides;
  @ViewChild('range', { static: false }) range: IonRange;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    scrollbar: true,
  };

  constructor(
    private router: Router,
    private courseService: CourseService,
    private route: ActivatedRoute,
    public storageService: StorageService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    // ** user info
    this.userInfo = this.authService.getUser();

    this.isLoading = true;
    this.subs.push(
      this.route.paramMap
        .pipe(
          switchMap((params: ParamMap) =>
            this.courseService.getCourseMaterial(+params.get('courseId'), 0, 60)
          )
        )
        .subscribe((response) => {
          this.isLoading = false;
          this.courseMaterial = response['result'];
          // console.log(this.courseMaterial);
          // console.log(this.slides.ionSlideNextStart)
        })
    );
  }

  // ** Move to Next slide
  slideNext() {
    if (this.player) {
      this.activeTrack = null;
      this.player.unload();
      this.player = null;
    }
    this.slides.slideNext();
  }

  // ** Move to previous slide
  slidePrev() {
    if (this.player) {
      this.activeTrack = null;
      this.player.unload();
      this.player = null;
    }
    this.slides.slidePrev();
  }

  startAudio(voicePath: string) {
    if (this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      html5: true,
      src: voicePath,
      onplay: () => {
        this.activeTrack = voicePath;
        this.isPlaying = true;
        this.updateProgress();
      },
      onend: () => {},
    });
    this.player.play();
  }

  toogleAudio(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  seek() {
    if(this.player){
      let newValue = +this.range.value;
      let duration = this.player.duration();
      this.player.seek(duration * (newValue / 100));
    }
    
  }
  updateProgress() {
    if(this.player){
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgress();
    }, 1000);
  }
  }
  ngOnDestroy(): void {
    this.subs.forEach((element) => {
      element.unsubscribe();
    });
  }

  doCheck() {
    let prom1 = this.slides.isBeginning();
    let prom2 = this.slides.isEnd();

    Promise.all([prom1, prom2]).then((data) => {
      data[0] ? (this.disablePrevBtn = true) : (this.disablePrevBtn = false);
      data[1] ? (this.disableNextBtn = true) : (this.disableNextBtn = false);
    });
  }
}
