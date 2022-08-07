import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThanksRatingPageRoutingModule } from './thanks-rating-routing.module';

import { ThanksRatingPage } from './thanks-rating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThanksRatingPageRoutingModule,
    SharedModule
  ],
  declarations: [ThanksRatingPage]
})
export class ThanksRatingPageModule {}
