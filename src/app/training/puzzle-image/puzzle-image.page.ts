import { PuzzleSoundComponent } from './puzzle-sound/puzzle-sound.component';
import { PuzzleImageTranslations } from './../../shared/models/puzzleImageTranslation';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, NavController, PopoverController, ToastController } from '@ionic/angular';
import { StorageService } from 'src/app/shared/services/storage.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { ExerciseService } from 'src/app/shared/services/exercise.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-puzzle-image',
  templateUrl: './puzzle-image.page.html',
  styleUrls: ['./puzzle-image.page.scss'],
})
export class PuzzleImagePage implements OnInit {

  userInfo: any;
  courseId: number;
  exerciseType: number;
  questionAndAnswerItems: any;
  questionsArray:any[]=[];
  answersArray: any[]=[];
  nextButton: boolean = false;
  lengthQuestion: number = 0;

  subs: Subscription[] = [];
  isLoading: boolean = false;
  limit: number = 1;
  currentIndex: number = 0;
  audio = new Audio('../../../assets/iphone_ding.mp3' );


  @ViewChild('slides') slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    scrollbar: true,
  };


  constructor(
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router,
    public toastController: ToastController,
    public navController: NavController,
    private exerciseService: ExerciseService,
    public popoverController: PopoverController

  ) { }

  ngOnInit() {
    this.userInfo = this.storageService.getUser();

    // ** get courseId And exerciseId
    this.courseId = +this.route.snapshot.paramMap.get('courseId');
    this.exerciseType = +this.route.snapshot.paramMap.get('exerciseId');

    this.getQuestionAndAnswer();
  }

  // ** get question and answer puzzle text
  getQuestionAndAnswer() {
    this.isLoading = true;
    this.questionsArray = [];
    this.answersArray = [];
    this.subs.push(
      this.exerciseService.getCourseExercise
      (this.exerciseType, this.courseId, this.currentIndex, this.limit)
      .subscribe(response => {
        console.log(response);
        this.questionAndAnswerItems = response;
        this.lengthQuestion = response['length'];
        this.isLoading = false;

        //Questions
       for (let index = 0; index < this.questionAndAnswerItems.puzzleImages.length; index++) {
         let arr = [];
         let qpz : PuzzleImageTranslations = new PuzzleImageTranslations();
         qpz.id = this.questionAndAnswerItems.puzzleImages[index].id;
         qpz.imagePath = this.questionAndAnswerItems.puzzleImages[index].imagePath;
         qpz.guidId = this.questionAndAnswerItems.puzzleImages[index].guidId;
         qpz.type = "question";
         qpz.disabled = true;
         arr.push(qpz);
         this.questionsArray.push(arr);
       }

       //Answers
       for (let index = 0; index < this.questionAndAnswerItems.puzzleImagesTranslation.length; index++) {
        let arr = [];
        let apz : PuzzleImageTranslations  = new PuzzleImageTranslations();
        apz.id = this.questionAndAnswerItems.puzzleImagesTranslation[index].id;
        apz.keyword = this.questionAndAnswerItems.puzzleImagesTranslation[index].keyword;
        apz.guidId = this.questionAndAnswerItems.puzzleImagesTranslation[index].guidId;
        apz.type = "answer";
        apz.disabled = false;
        apz.voicePath = this.questionAndAnswerItems.puzzleImagesTranslation[index].voicePath;
        this.answersArray.push(apz);
      }

      })
    );
  }

  // ** Get Current Index
  getCurrentIndex() {
    this.slides
      .getActiveIndex()
      .then((current) => (this.currentIndex = current));
  }


  // ** Drop Function
  drop(event: CdkDragDrop<any>) {

    if (event.previousContainer === event.container) {
      console.log("true");
    }

    if (event.previousContainer === event.container) {
        console.log('move');
        moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
        console.log(event.container.data, event.previousIndex, event.currentIndex);
      }
    else {
      if(event.container.data.length == 1){
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    }

    if(event.previousContainer.data.length === 0) {
      this.nextButton = true;
    } else {
      this.nextButton = false;
    }

  }

  // ** Move to Next slide
  slideNext() {
  // ** get check
  let arrayPuzzle: any = [];
  this.questionsArray.forEach(values => {
    arrayPuzzle.push({
      puzzleWithImageQuestionIds: values[0].id,
      imageGuid: values[0].guidId,
      wordIds: values[1].id
    })
  })

  /**
   * {
   * array: [0, 1, 1, 2],
   *
   * }
   */

  this.exerciseService.checkAnswerPuzzleWithImage
  (arrayPuzzle)
  .subscribe(response => {
    console.log(response);
    const isCorrect = response['result'].isCorrect;

    if(isCorrect === true) {
      this.successMessage('Thanks the answer is correct');
      this.currentIndex += 1;
      this.getQuestionAndAnswer();
      this.slides.slideNext();

      if(this.currentIndex === this.lengthQuestion) {
        this.successMessage('Thanks for resolving questions');
        setTimeout(() => {
          this.navController.navigateRoot(['/exercise', {courseId: this.courseId}]);
        }, 100)
      }

    } else if(isCorrect === false) {
      this.errorMessage('The answer is wrong and please choose correct answer');
    }
  })

  }

  async successMessage(msg: string) {
    this.audio.play();
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      cssClass: 'ion-success',
      color: 'success',
    });
    toast.present();
  }

  async errorMessage(msg: string) {
    this.audio.play();
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      cssClass: 'ion-error',
      color: 'danger',
    });
    toast.present();
  }


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PuzzleSoundComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', ev);
  }


ngOnDestroy() {
  this.subs.forEach((sub) => {
    sub.unsubscribe();
  });
}

}

