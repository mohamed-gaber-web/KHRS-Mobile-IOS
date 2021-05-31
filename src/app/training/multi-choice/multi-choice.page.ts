import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ExerciseItem } from 'src/app/shared/models/exerciseItem';
import { ExerciseService } from 'src/app/shared/services/exercise.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-multi-choice',
  templateUrl: './multi-choice.page.html',
  styleUrls: ['./multi-choice.page.scss'],
})
export class MultiChoicePage implements OnInit {

  audio = new Audio('../../../assets/iphone_ding.mp3' );
  checkQuestion = true;
  userInfo: any;
  isLoading: boolean = false;
  exerciseItems: ExerciseItem[];
  lengthQuestion: number;
  limit: number = 1;
  limitAnswer: number = 4;
  offsetAnswer: number = 0;
  currentIndex: number = 0;
  courseId: number;
  exerciseType: number;
  subs: Subscription[] = [];
  multiForm: FormGroup;
  resultAnswer: boolean = null;
  multiChoiceId: number;
  answerItems: any;
  loadedCharacter: {};
  ChooseAnswerId: number;
  resultAnswerItems: any;

  @ViewChild('slides') slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    scrollbar: true,
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
    this.userInfo = this.storageService.getUser();

    // ** get courseId And exerciseId
    this.courseId = +this.route.snapshot.paramMap.get('courseId');
    this.exerciseType = +this.route.snapshot.paramMap.get('exerciseId');
    // ** get all items question
    this.getQuestionAndAnswerMultiChoice();
    // ** get all answers by multiChoiceId
    // this.getAnswersMultiChoice();

    this.buildMultiForm();
  }

  // ** get question from api
  getQuestionAndAnswerMultiChoice() {
    this.isLoading = true;
    this.subs.push(

      this.exerciseService
        .getCourseExercise(this.exerciseType, this.courseId, this.currentIndex, this.limit)
        .subscribe(questionAndAnswerItems => {
          console.log(questionAndAnswerItems);

          this.isLoading = false;
          this.exerciseItems = questionAndAnswerItems['result'];
          this.exerciseItems.map(answerItems => {
            this.resultAnswerItems = answerItems['multiChoiceAnswers'];
          })
          this.lengthQuestion = questionAndAnswerItems['length'];
        })
    );
  }

  // ** Build Single Choice Form
  buildMultiForm() {
    this.multiForm = this.fb.group({
      answer: [null , Validators.compose([Validators.required])],
  })
  }

  // ** Get Current Index
  getCurrentIndex () {
    this.slides.getActiveIndex().then(current => this.currentIndex = current);
  }
 // ** Move to Next slide
 slideNext(questionId, answerId) {
  this.subs.push(
    this.exerciseService.checkAnswerMultiChoise(questionId, answerId)
    .subscribe(async(response) => {
      console.log(response);

      this.resultAnswer = response['success'];
      if(this.resultAnswer === true) {

        // ** message and voice success
        this.currentIndex += 1;
        this.successMessage('the answer is correct');
        this.isLoading = true;
        this.multiForm.reset();
        this.getQuestionAndAnswerMultiChoice();
        this.slides.slideNext();

        if(this.currentIndex === this.lengthQuestion) {
          this.successMessage('Thanks for resolving questions');
          setTimeout(() => {
            this.navController.navigateRoot(['/exercise', {courseId: this.courseId}]);
          }, 100)
        }

      } else if(this.resultAnswer === false) {

        // ** message and voice error
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
