import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  }from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';

import { ChooseCourseMaterialPageRoutingModule } from './choose-course-material-routing.module';

import { ChooseCourseMaterialPage } from './choose-course-material.page';

import { CourseRatingComponent } from './course-rating/course-rating/course-rating.component';
import { NgbModule }from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ChooseCourseMaterialPageRoutingModule,
    NgbModule,
    // NgxStarRatingModule


  ],
  entryComponents: [CourseRatingComponent],
  declarations: [ChooseCourseMaterialPage, CourseRatingComponent]
})
export class ChooseCourseMaterialPageModule {}
