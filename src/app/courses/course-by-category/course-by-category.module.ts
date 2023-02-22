import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseByCategoryPageRoutingModule } from './course-by-category-routing.module';

import { CourseByCategoryPage } from './course-by-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseByCategoryPageRoutingModule
  ],
  declarations: [CourseByCategoryPage]
})
export class CourseByCategoryPageModule {}
