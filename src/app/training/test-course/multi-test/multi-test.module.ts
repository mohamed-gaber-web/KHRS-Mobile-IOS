import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiTestPageRoutingModule } from './multi-test-routing.module';
import { TestFinishedPage } from './../test-finished/test-finished.page';

TestFinishedPage

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiTestPageRoutingModule,

  ],
  declarations: [TestFinishedPage]
})
export class MultiTestPageModule {}
