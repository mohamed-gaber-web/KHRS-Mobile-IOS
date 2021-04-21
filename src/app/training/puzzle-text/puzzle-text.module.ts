import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuzzleTextPageRoutingModule } from './puzzle-text-routing.module';

import { PuzzleTextPage } from './puzzle-text.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuzzleTextPageRoutingModule
  ],
  declarations: [PuzzleTextPage]
})
export class PuzzleTextPageModule {}
