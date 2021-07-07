import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuzzleImageTestPage } from './puzzle-image-test.page';

const routes: Routes = [
  {
    path: '',
    component: PuzzleImageTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuzzleImageTestPageRoutingModule {}
