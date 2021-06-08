import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuzzleTextPageRoutingModule } from './puzzle-text-routing.module';

import { PuzzleTextPage } from './puzzle-text.page';

import {DragDropModule} from '@angular/cdk/drag-drop';

import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuzzleTextPageRoutingModule,
    DragDropModule,
    MatPaginatorModule
  ],
  declarations: [PuzzleTextPage]
})
export class PuzzleTextPageModule {}
