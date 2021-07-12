import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, NavController, ToastController } from '@ionic/angular';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-multi-test',
  templateUrl: './multi-test.page.html',
  styleUrls: ['./multi-test.page.scss'],
})
export class MultiTestPage implements OnInit {

  multiForm: FormGroup;
  courseId: number;
  questionType: number;
  allTestData: any;
  testId: number;
  lengthItems: number;
  isLoading: boolean = false;
  userTestId: number;
  @Input('pageNumber') pageNumber;
  @Output() questionData = new EventEmitter<any>();

  disablePrevBtn = true;
  disableNextBtn = false;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    scrollbar: true,
  };

  @ViewChild('slides') slides: IonSlides;

  constructor(
    private testService: TestService,
    public toastController: ToastController,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public navController: NavController,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildMultiForm();
    this.courseId = +this.route.snapshot.paramMap.get('courseId');
    this.getTestType();
  }

  // ** get test type
  getTestType() {
    this.isLoading = true;
    this.multiForm.reset();
    this.testService.getTestType(this.courseId, this.pageNumber)
    .subscribe(response => {
      this.isLoading = false;
      this.questionType = response['questionType'];
      this.testId = response['testId'];
      this.lengthItems = response['length'];
      if(this.questionType !== 2) {
        // parent
        const obj = {
          pageNumber: this.pageNumber,
          questionType: this.questionType
        }
        this.questionData.emit(obj)
      }
      this.allTestData = response;
    })
  }

  // ** Build Single Choice Form
  buildMultiForm() {
    this.multiForm = this.fb.group({
      answer: [true, Validators.compose([Validators.required])],
    });
  }



  // ** Move to Next slide
  slideNext(quetionId) {

    const multiChoiceData = {
      multiChoiceQuestionId: quetionId,
      multiChoiceAnswerId: this.multiForm.value.answer
    }

    this.testService.sendAnswerTesting({
      testId:this.testId,
      questionType: 2,
      singleChoiceAnswer: null,
      multiChoiceAnswer: multiChoiceData,
      puzzleWithTextAnswers: null,
      puzzleWithImageAnswers: null})
      .subscribe(response => {
        this.userTestId = response['result'].userTestId;
        console.log(this.userTestId);
        this.pageNumber += 1;
        // ** check last question
        if(this.lengthItems === this.pageNumber) { // length item = 5 // page numer = 5
          this.router.navigate(['/exercise/finished-test', {user: this.userTestId}]);
        }
        this.getTestType();
        this.slides.slideNext();
      })

  }

  slidePrev() {
    this.pageNumber -= 1;
    this.getTestType();
    this.slides.slidePrev();
  }



}
