import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCoursesStatusPage } from './user-courses-status.page';

const routes: Routes = [
  {
    path: '',
    component: UserCoursesStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCoursesStatusPageRoutingModule {}
