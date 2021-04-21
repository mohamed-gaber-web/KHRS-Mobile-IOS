import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiChoicePageRoutingModule } from './multi-choice-routing.module';

import { MultiChoicePage } from './multi-choice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiChoicePageRoutingModule
  ],
  declarations: [MultiChoicePage]
})
export class MultiChoicePageModule {}
