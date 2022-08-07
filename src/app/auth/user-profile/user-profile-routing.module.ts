import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfilePage } from './user-profile.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfilePage
  },
  {
    path: 'edit-user',
    loadChildren: () => import('./edit-user/edit-user.module').then( m => m.EditUserPageModule)
  },
    {
    path: 'change-password',
    loadChildren: () => import('../change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'user-courses-status',
    loadChildren: () => import('./user-courses-status/user-courses-status.module').then( m => m.UserCoursesStatusPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfilePageRoutingModule {}
