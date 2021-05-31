import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastController, IonSlides, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { ExerciseItem } from 'src/app/shared/models/exerciseItem';
import { ExerciseService } from 'src/app/shared/services/exercise.service';
import { StorageService } from 'src/app/shared/services/storage.service';


@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.page.html',
  styleUrls: ['./single-choice.page.scss'],
})
export class SingleChoicePage implements OnInit {

  audio = new Audio('../../../assets/iphone_ding.mp3' );
  subs: Subscription[] = [];
  userInfo: any;
  exerciseItems: ExerciseItem[];
  exerciseType: number;
  courseId: number;
  singleForm: FormGroup;
  lengthQuestion: number;
  offset: number = 0;
  currentIndex: number = 0;
  questionSelected: boolean = false;
  resultQuestion: any;
  isLoading: boolean = false;
  limit: number = 1;
  resultAnswer: boolean = null

  @ViewChild('slides') slides: IonSlides;


  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    scrollbar: true,
  };


  singleFormErrors = {
    answer: '',
  };

  singleValidationMessages = {
    answer: {
      required: 'Password field is required',
    },
  };


  constructor(
    public toastController: ToastController,
    private storageService: StorageService,
    private exerciseService: ExerciseService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public navController: NavController,
    private router: Router
    ) { }

  ngOnInit() {

    // ** get info user from localstorage
    this.userInfo = this.storageService.getUser();
    this.courseId = +this.route.snapshot.paramMap.get('courseId');
    this.exerciseType = +this.route.snapshot.paramMap.get('exerciseId');

    //**  Single Form run
    this.buildSingleForm();

    // ** Get Question Data
    this.getQuestion();

  }

  // ** Get Question Data
  getQuestion() {
    this.isLoading = true;
    this.subs.push(
      this.exerciseService
        .getCourseExercise(this.exerciseType, this.courseId, this.currentIndex, this.limit)
        .subscribe(response => {
        this.isLoading = false;
          this.exerciseItems = response['result'];
          this.lengthQuestion = response['length'];
        })
    );
}

  // ** Validate Form Input
  validateSingleForm(isSubmitting = false) {
    for (const field of Object.keys(this.singleFormErrors)) {
      this.singleFormErrors[field] = '';

      const input = this.singleForm.get(field) as FormControl;
      if (input.invalid && (input.dirty || isSubmitting)) {
        for (const error of Object.keys(input.errors)) {
          this.singleFormErrors[field] = this.singleValidationMessages[field][
            error
          ];
        }
      }
    }
  }

  // ** Build Single Choice Form
  buildSingleForm() {

    this.singleForm = this.fb.group({
      answer: [null , Validators.compose([Validators.required])],
    })

    this.singleForm.valueChanges.subscribe((data) => this.validateSingleForm());
  }

  // ** Get Current Index
  getCurrentIndex () {
    this.slides.getActiveIndex().then(current => this.currentIndex = current);
  }

 // ** Move to Next slide
 slideNext(id, ...answer) {
    this.validateSingleForm(true);
    this.subs.push(
      this.exerciseService.checkAnswerSingleChoise(id, this.singleForm.value.answer)
      .subscribe(async(response) => {

        this.resultAnswer = response['success'];
        if(this.resultAnswer === true) {

          // message and voice success
          this.currentIndex += 1;
          this.successMessage('the answer is correct');
          this.isLoading = true;
          this.singleForm.reset();
          this.getQuestion();
          this.slides.slideNext();

          if(this.currentIndex === this.lengthQuestion) {
            this.successMessage('Thanks for resolving questions');
            setTimeout(() => {
              this.navController.navigateRoot(['/exercise', {courseId: this.courseId}]);
            }, 100)
          }

        } else if(this.resultAnswer === false) {
          // message and voice error
          this.errorMessage('The answer is wrong and please choose correct answer');
        }

        }
    )
    );
}

  async successMessage(msg: string) {
    this.audio.play()
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      cssClass:'ion-success',
      color: 'success'
    });
    toast.present();
  }

  async errorMessage(msg: string) {
    this.audio.play()
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      cssClass:'ion-error',
      color: 'danger',
    });
    toast.present();
  }

  ngOnDestroy() {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    })
  }

}


/**
 * [*] => don't show next button before answer on first quetion
 * [*] => if is question is last question hide next button
 * [*] => if person answer not correct hide button check
 * [] => get sound
 * [*] fix rest form
 * [*] fix typo in choise to be choice
 * [*] add current and total number of questions
 * [*] remove check and replace its logic with next and the aswer must be correct to move to the next question
 */
