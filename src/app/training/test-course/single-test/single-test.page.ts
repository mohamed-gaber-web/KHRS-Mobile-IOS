import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  currentIndex: number = 0;
  courseId: number;
  questionType: number;
  allTestData: any;

  // @Input('singleTestData') singleTestData;

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
    this.singleForm.reset();
    this.testService.getTestType(this.courseId, this.currentIndex)
    .subscribe(response => {
      console.log(response);
      this.questionType = response['questionType'];
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
      answer: [null , Validators.compose([Validators.required])],
    })
    this.singleForm.valueChanges.subscribe((data) => this.validateSingleForm());
  }

  // ** Get Current Index
  getCurrentIndex() {
    this.slides
      .getActiveIndex()
      .then((current) => (this.currentIndex = current));
  }

  // ** Move to Next slide
  slideNext() {
    this.currentIndex += 1;
    this.getTestType();
    this.slides.slideNext();
  }

  slidePrev() {
    this.currentIndex -= 1;
    this.getTestType();
    this.slides.slidePrev();
  }

  // doCheck() {
  //   let prom1 = this.slides.isBeginning();
  //   let prom2 = this.slides.isEnd();

  //   Promise.all([prom1, prom2]).then((data) => {
  //     data[0] ? (this.disablePrevBtn = true) : (this.disablePrevBtn = false);
  //     data[1] ? (this.disableNextBtn = true) : (this.disableNextBtn = false);
  //   });
  // }

}
