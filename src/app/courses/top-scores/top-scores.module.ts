import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopScoresPageRoutingModule } from './top-scores-routing.module';

import { TopScoresPage } from './top-scores.page';
import {MatTabsModule} from '@angular/material/tabs';

import { TopScoreItemComponent } from './top-score-item/top-score-item.component';
import { TopScoreCoursesComponent } from './top-score-courses/top-score-courses.component';
import { TopScoreExamsComponent } from './top-score-exams/top-score-exams.component';
import { TopScoreStudentsComponent } from './top-score-students/top-score-students.component';
import { TopUserScoreComponent } from './top-user-score/top-user-score.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopScoresPageRoutingModule,
    SharedModule,
    MatTabsModule
  ],
  declarations: [TopScoresPage, TopScoreStudentsComponent, TopScoreExamsComponent, TopScoreCoursesComponent, TopScoreItemComponent, TopUserScoreComponent]
})
export class TopScoresPageModule {}
