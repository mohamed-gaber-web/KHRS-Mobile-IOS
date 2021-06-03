import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuzzleTextPageRoutingModule } from './puzzle-text-routing.module';

import { PuzzleTextPage } from './puzzle-text.page';

import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuzzleTextPageRoutingModule,
    DragDropModule
  ],
  declarations: [PuzzleTextPage]
})
export class PuzzleTextPageModule {}
