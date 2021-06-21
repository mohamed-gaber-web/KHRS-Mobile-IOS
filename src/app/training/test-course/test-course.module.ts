import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestCoursePageRoutingModule } from './test-course-routing.module';

import { TestCoursePage } from './test-course.page';

import { SingleTestPage } from './single-test/single-test.page';
import { MultiTestPage } from './multi-test/multi-test.page';







@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestCoursePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [TestCoursePage, SingleTestPage, MultiTestPage],
  exports: [SingleTestPage]
})
export class TestCoursePageModule {}
