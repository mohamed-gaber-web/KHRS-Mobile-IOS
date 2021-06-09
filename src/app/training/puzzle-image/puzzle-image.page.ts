import { imagesBaseUrl } from 'src/app/api.constants';
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
import { PageEvent } from '@angular/material/paginator';


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
  questions: PuzzleTextTranslations[];
  questionsArray:any[]=[];
  answersArray:any[]=[];
  // answers: PuzzleTextTranslations[];
  nextButton: boolean = false;


  resultAnswerItems: any;
  subs: Subscription[] = [];
  isLoading: boolean = false;
  limit: number = 3;
  currentIndex: number = 0;
  audio = new Audio('../../../assets/iphone_ding.mp3' );


   question =  [
    [{id: 2, imagePath: '../../../assets/images/p1.png'}],
    [{id: 3, imagePath: '../../../assets/images/p2.png'}],
    [{id: 4, imagePath: '../../../assets/images/p3.png'}]
  ];

  answer = [
    {id: 2, title: 'answer 1'},
    {id: 3, title: 'answer 2'},
    {id: 4, title: 'answer 3'}
  ]

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

  ) { }

  ngOnInit() {
    this.userInfo = this.storageService.getUser();

    // ** get courseId And exerciseId
    this.courseId = +this.route.snapshot.paramMap.get('courseId');
    this.exerciseType = +this.route.snapshot.paramMap.get('exerciseId');

    // this.getQuestionAndAnswer();
  }

  // ** get question and answer puzzle text
  // getQuestionAndAnswer() {
  //   this.isLoading = true;
  //   this.subs.push(
  //     this.exerciseService.getCourseExercise
  //     (this.exerciseType, this.courseId, this.currentIndex, this.limit)
  //     .subscribe(response => {
  //       console.log(response);
  //       this.questionAndAnswerItems = response;
  //       this.isLoading = false;
  //       //Questions
  //      for (let index = 0; index < this.questionAndAnswerItems.puzzleText.length; index++) {
  //        let arr = [];
  //        let qpz : PuzzleTextTranslations = new PuzzleTextTranslations();
  //        qpz.id = this.questionAndAnswerItems.puzzleText[index].id;
  //        qpz.text = this.questionAndAnswerItems.puzzleText[index].text;
  //        qpz.type = "question";
  //        qpz.disabled = true;
  //        qpz.voicePath = this.questionAndAnswerItems.puzzleText[index].voicePath;
  //        arr.push(qpz);
  //        this.questionsArray.push(arr);
  //      }

  //      //Answers
  //      for (let index = 0; index < this.questionAndAnswerItems.puzzleTextTranslations.length; index++) {
  //       let arr = [];
  //       let apz : PuzzleTextTranslations  = new PuzzleTextTranslations();
  //       apz.id = this.questionAndAnswerItems.puzzleTextTranslations[index].id;
  //       apz.text = this.questionAndAnswerItems.puzzleTextTranslations[index].text;
  //       apz.type = "answer";
  //       apz.disabled = false;
  //       apz.voicePath = this.questionAndAnswerItems.puzzleTextTranslations[index].voicePath;
  //       this.answersArray.push(apz);
  //     }

  //     })
  //   );
  // }

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
        // moveItemInArray(
        //   event.container.data,
        //   event.previousIndex,
        //   event.currentIndex
        // );
        // console.log(event.container.data, event.previousIndex, event.currentIndex);
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

      console.log(event.container.data);
      console.log(event.previousContainer.data);

    }

    // if(event.previousContainer.data.length === 0) {
    //   this.nextButton = true;
    // } else {
    //   this.nextButton = false;
    // }



  }

  // ** Move to Next slide
  // slideNext() {
  //   // pageData: PageEvent
  // // ** get check
  // let arrayPuzzle: any = [];

  // this.questionsArray.forEach(values => {
  //   arrayPuzzle.push({
  //     puzzleWithTextId: values[0].id,
  //     keyword: values[0].text,
  //     translationKeyword: values[1].text
  //   })
  // })

  // this.exerciseService.checkAnswerPuzzleWithText
  // (arrayPuzzle)
  // .subscribe(response => {
  //   console.log(response);
  //   const isCorrect = response['result'].isCorrect;

  //   if(isCorrect === true) {
  //     this.successMessage('Thanks the answer is correct');
  //     this.currentIndex += 1;
  //     // this.currentIndex = pageData.pageIndex + 1;
  //     // this.limit = pageData.pageSize;
  //     this.questionsArray = [];
  //     this.answersArray = [];
  //     this.getQuestionAndAnswer();
  //     this.slides.slideNext();


  //   } else if(isCorrect === false) {
  //     this.errorMessage('The answer is wrong and please choose correct answer');
  //   }
  // })

  // }

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
// function debuge() {
//   throw new Error('Function not implemented.');
// }


