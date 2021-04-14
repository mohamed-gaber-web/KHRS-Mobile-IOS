import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-course-material',
  templateUrl: './course-material.page.html',
  styleUrls: ['./course-material.page.scss'],
})
export class CourseMaterialPage implements OnInit {

  @ViewChild('slides') slides;


  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    scrollbar: true
  };

  constructor() { }

  ngOnInit() {
  }

  //Move to Next slide
  slideNext() {
    this.slides.slideNext()
  }

  //Move to previous slide
  slidePrev() {
    this.slides.slidePrev();
  }

}
