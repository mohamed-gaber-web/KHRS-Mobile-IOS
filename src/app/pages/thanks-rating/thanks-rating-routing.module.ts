import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThanksRatingPage } from './thanks-rating.page';

const routes: Routes = [
  {
    path: '',
    component: ThanksRatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThanksRatingPageRoutingModule {}
