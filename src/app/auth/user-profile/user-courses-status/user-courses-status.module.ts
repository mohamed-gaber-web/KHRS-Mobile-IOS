import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCoursesStatusPageRoutingModule } from './user-courses-status-routing.module';

import { UserCoursesStatusPage } from './user-courses-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserCoursesStatusPageRoutingModule,
    SharedModule
  ],
  declarations: [UserCoursesStatusPage]
})
export class UserCoursesStatusPageModule {}
