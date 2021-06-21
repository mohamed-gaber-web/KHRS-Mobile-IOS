import { Component, OnInit, ViewChild } from '@angular/core';

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
  currentIndex: number = 0;
  courseId: number;
  questionType: number;
  allTestData: any;

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
    this.multiForm.reset();
    this.testService.getTestType(this.courseId, this.currentIndex)
    .subscribe(response => {
      console.log(response);
      this.questionType = response['questionType'];
      this.allTestData = response;
    })
  }

  // ** Build Single Choice Form
  buildMultiForm() {
    this.multiForm = this.fb.group({
      answer: [null, Validators.compose([Validators.required])],
    });
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


}
