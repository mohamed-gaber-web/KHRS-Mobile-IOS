import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuzzleImagePageRoutingModule } from './puzzle-image-routing.module';

import { PuzzleImagePage } from './puzzle-image.page';

import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuzzleImagePageRoutingModule,
    DragDropModule
  ],
  declarations: [PuzzleImagePage]
})
export class PuzzleImagePageModule {}
