import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuzzleImagePageRoutingModule } from './puzzle-image-routing.module';

import { PuzzleSoundComponent } from './puzzle-sound/puzzle-sound.component';
import { PuzzleImagePage } from './puzzle-image.page';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { PuzzleSoundModule } from './puzzle-sound/puzzle-sound.module';

import { HelpModalModule } from '../help-modal/help-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuzzleImagePageRoutingModule,
    DragDropModule,
    PuzzleSoundModule,
    HelpModalModule

  ],
  declarations: [PuzzleImagePage],
  exports: [],
  entryComponents: [PuzzleSoundComponent],

})
export class PuzzleImagePageModule {}
