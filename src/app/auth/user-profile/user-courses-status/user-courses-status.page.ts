import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-courses-status',
  templateUrl: './user-courses-status.page.html',
  styleUrls: ['./user-courses-status.page.scss'],
})
export class UserCoursesStatusPage implements OnInit {

  userDataList: any;
  userDataLength: number;
  isLoading: boolean = false;
  sub: Subscription[] = [];

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.getProfileDataList(); // *** get user course status
  }

  // *** get user course status
  getProfileDataList() {
    this.isLoading = true;
    this.sub.push(this.authService.getProfileDataList()
      .subscribe(response => {
        console.log(response);
        this.isLoading = false;
        this.userDataList = response['result'];
        this.userDataLength = response['length'];
      })
    )
  }

  courseDetails(courseId: number, userId) {
    this.route.navigate(['courses/tabs/choose-course-material', { courseId, userId }]);
  }

  ngOnDestroy() {
    this.sub.forEach(s => {
      s.unsubscribe();
    })
  }

}
