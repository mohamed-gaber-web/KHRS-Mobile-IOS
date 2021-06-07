import { PuzzleTextTranslations } from './../../shared/models/puzzleTextTranslations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, NavController, ToastController } from '@ionic/angular';
import { StorageService } from 'src/app/shared/services/storage.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { PuzzleText } from 'src/app/shared/models/puzzleText';
import { ExerciseService } from 'src/app/shared/services/exercise.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-puzzle-text',
  templateUrl: './puzzle-text.page.html',
  styleUrls: ['./puzzle-text.page.scss'],
})
export class PuzzleTextPage implements OnInit {

  userInfo: any;
  courseId: number;
  exerciseType: number;
  questionAndAnswerItems: PuzzleText[];
  questions:PuzzleTextTranslations[];
  questionsArray:any[]=[];

  answers:PuzzleTextTranslations[];

  resultAnswerItems: any;
  subs: Subscription[] = [];
  isLoading: boolean = false;
  limit: number = 4;
  currentIndex: number = 0;
  audio = new Audio('../../../assets/iphone_ding.mp3' );

  @ViewChild('slides') slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    scrollbar: true,
  };

  question =  [
    [{id: 2, title: 'question 1'}],
    [{id: 3, title: 'question 2'}],
    [{id: 4, title: 'question 3'}]
  ];

  answer = [
    {id: 2, title: 'answer 1'},
    {id: 3, title: 'answer 2'},
    {id: 4, title: 'answer 3'}
  ]

  constructor(
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router,
    public toastController: ToastController,
    public navController: NavController,
    private exerciseService: ExerciseService,

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
    this.subs.push(
      this.exerciseService.getCourseExercise
      (this.exerciseType, this.courseId, this.currentIndex, this.limit)
      .subscribe(response => {
        this.isLoading = false;
        this.questionAndAnswerItems = response['result'];
        //Questions
       for (let index = 0; index < this.questionAndAnswerItems.length; index++) {
         let arr = [];
         let qpz : PuzzleText;
         qpz.id = this.questionAndAnswerItems[index].id;
         qpz.text = this.questionAndAnswerItems[index].text;
         qpz.voicePath = this.questionAndAnswerItems[index].voicePath;
         arr.push(qpz);
         this.questionsArray.push(arr);
         console.log(qpz);
       }

       //Answers
       for (let index = 0; index < this.questionAndAnswerItems.length; index++) {
        let arr = [];
        let apz : PuzzleTextTranslations;
        apz.id = this.questionAndAnswerItems[index].puzzleTextTranslations[0].id;
        apz.text = this.questionAndAnswerItems[index].puzzleTextTranslations[0].text;
        apz.voicePath = this.questionAndAnswerItems[index].puzzleTextTranslations[0].voicePath;
        arr.push(apz);
        this.questionsArray.push(arr);
        console.log(apz);
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
    console.log(event.container.data);
      console.log(event.previousContainer.data);
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
      // console.log(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      console.log(event.container.data);
      console.log(event.previousContainer.data);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    }


  }

  // ** Move to Next slide
  slideNext() {
    this.currentIndex += 1;
    this.slides.slideNext();
    console.log('next');

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


ngOnDestroy() {
  this.subs.forEach((sub) => {
    sub.unsubscribe();
  });
}

}
function debuge() {
  throw new Error('Function not implemented.');
}

