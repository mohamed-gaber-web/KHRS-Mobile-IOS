import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  chooseTraining = [
    {
      img: '../../assets/icon/puzzle.png',
      name: 'Puzzle'
    },
    {
      img: '../../assets/icon/puzzle.png',
      name: 'Single Choise',
      url: '/training/single-choice'
    },
    {
      img: '../../assets/icon/checklist.png',
      name: 'Multi Choise',
      url: '/training/multi-choice'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
