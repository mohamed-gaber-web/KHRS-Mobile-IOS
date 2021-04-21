import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleChoicePageRoutingModule } from './single-choice-routing.module';

import { SingleChoicePage } from './single-choice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleChoicePageRoutingModule
  ],
  declarations: [SingleChoicePage]
})
export class SingleChoicePageModule {}
