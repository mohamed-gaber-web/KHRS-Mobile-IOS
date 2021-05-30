import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../shared/services/storage.service';



@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  userInfo: any;
  courseId: number;

  chooseTraining = [
    {
      img: '../../assets/icon/puzzle.png',
      name: 'Puzzle',
      url: '/exercise/puzzle-image',
      exerciseId: 3,
      courseId: JSON.parse(this.route.snapshot.paramMap.get('courseId'))
    },
    {
      img: '../../assets/icon/notepad.png',
      name: 'Single Choise',
      url: '/exercise/single-choice',
      exerciseId: 1,
      courseId: JSON.parse(this.route.snapshot.paramMap.get('courseId'))
    },
    {
      img: '../../assets/icon/checklist.png',
      name: 'Multi Choise',
      url: '/exercise/multi-choice',
      exerciseId: 2,
      courseId: JSON.parse(this.route.snapshot.paramMap.get('courseId'))
    }
  ];


  constructor(
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.userInfo = this.storageService.getUser();
  }

  goToCatExercise(url, exerciseId, courseId) {
    this.router.navigate([url, {exerciseId, courseId}]);
  }

}
