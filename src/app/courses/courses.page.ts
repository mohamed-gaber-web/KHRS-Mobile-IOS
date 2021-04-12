import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  @ViewChild('myAudio') audioFile: ElementRef;


constructor() { }

ngOnInit() {}

playAudio() {
  console.log('ssssss');

  // this.audioFile.play();
}

}
