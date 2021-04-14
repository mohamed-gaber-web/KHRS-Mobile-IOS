import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseMaterialPageRoutingModule } from './course-material-routing.module';

import { CourseMaterialPage } from './course-material.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseMaterialPageRoutingModule
  ],
  declarations: [CourseMaterialPage]
})
export class CourseMaterialPageModule {}
