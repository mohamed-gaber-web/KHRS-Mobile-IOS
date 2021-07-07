import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, NavController, ToastController } from '@ionic/angular';
import { StorageService } from 'src/app/shared/services/storage.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-single-test',
  templateUrl: './single-test.page.html',
  styleUrls: ['./single-test.page.scss'],
})
export class SingleTestPage implements OnInit {

  singleForm: FormGroup;
  courseId: number;
  questionType: number;
  testId: number;
  allTestData: any;
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

  singleFormErrors = {answer: ''};
  singleValidationMessages = {
    answer: {
      required: 'Please check answer',
    },
  };

  constructor(
    public toastController: ToastController,
    private testService: TestService,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public navController: NavController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.buildSingleForm();
    this.courseId = +this.route.snapshot.paramMap.get('courseId');
    this.getTestType();
  }

  // ** get test type
  getTestType() {
    this.isLoading = true;
    this.singleForm.reset();
    this.testService.getTestType(this.courseId, this.pageNumber)
    .subscribe(response => {
      this.isLoading = false;
      this.questionType = response['questionType'];
      this.testId = response['testId'];
      this.lengthItems = response['length'];
      if(this.questionType !== 1) {
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
      answer: [true , Validators.compose([Validators.required])],
    })
    this.singleForm.valueChanges.subscribe((data) => this.validateSingleForm());
  }

  // ** Move to Next slide
  slideNext(answerId) {

    const singleChoiceData = {
      singleChoiceAnswerId: answerId,
      answer: this.singleForm.value.answer
    }

    if(this.questionType === 1) {

      this.testService.sendAnswerTesting({
        testId:this.testId,
        questionType: this.questionType,
        singleChoiceAnswer: singleChoiceData,
        multiChoiceAnswer: null,
        puzzleWithTextAnswers: null, puzzleWithImageAnswers: null})
        .subscribe(response => {
          this.userTestId = response['resullt'];
          console.log(response);
          this.pageNumber += 1;
          // ** check last question
          if(this.lengthItems === this.pageNumber) { // length item = 5 // page numer = 5
            console.log('this is last number');
            return;
          }
          this.getTestType();
          this.slides.slideNext();
        })
    }

  }

  slidePrev() {
    this.pageNumber -= 1;
    this.getTestType();
    this.slides.slidePrev();
  }

  finishedTest() {
    this.testService.finishedTest(this.userTestId)
    .subscribe(response => {
      this.router.navigate(['/courses/tabs/my-courses']);
      console.log(response);

    })
  }

}
