import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { StorageService } from 'src/app/shared/services/storage.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-puzzle-text',
  templateUrl: './puzzle-text.page.html',
  styleUrls: ['./puzzle-text.page.scss'],
})
export class PuzzleTextPage implements OnInit {

  userInfo: any;
  courseId: number;
  audio = new Audio('../../../assets/iphone_ding.mp3' );

  question =  [
    [{id: 2, title: 'question 1'}],
    [{id: 3, title: 'question 2'}],
    [{id: 4, title: 'question 3'}]
  ]

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
    public navController: NavController

  ) { }

  ngOnInit() {
    this.userInfo = this.storageService.getUser();
  }

  // ** Drop Function
  drop(event: CdkDragDrop<any>) {

    if (event.previousContainer === event.container) {
      console.log("true")
    }

    // let dataCont = [...event.container.data]
    console.log(this.question);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    else {
      // console.log(event.previousContainer.data)
      // console.log(event.container.data)
      // console.log(event.previousIndex)
      // console.log(event.currentIndex)
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(this.question);
  }



  // evenPredicate(item: CdkDrag<any>) {
  //   return false;
  //   // return item.data;
  // }

  // /** Predicate function that doesn't allow items to be dropped into a list. */
  // noReturnPredicate() {
  //   return false;
  // }

}
