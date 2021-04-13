import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyCoursePageRoutingModule } from './apply-course-routing.module';

import { ApplyCoursePage } from './apply-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyCoursePageRoutingModule
  ],
  declarations: [ApplyCoursePage]
})
export class ApplyCoursePageModule {}
