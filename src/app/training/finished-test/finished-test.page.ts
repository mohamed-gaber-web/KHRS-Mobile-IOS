import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-finished-test',
  templateUrl: './finished-test.page.html',
  styleUrls: ['./finished-test.page.scss'],
})
export class FinishedTestPage implements OnInit {

  userTestId: any;

  constructor(private testService: TestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userTestId = this.route.snapshot.paramMap.get('user');

  }

  finishedTest() {
    this.testService.finishedTest(this.userTestId)
    .subscribe(response => {
      this.router.navigate(['/courses/tabs/my-courses']);
      console.log(response);
    })
  }

  prev() {}

}
