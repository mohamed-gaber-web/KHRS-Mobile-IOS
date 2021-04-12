import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPage } from './courses.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: CoursesPage
  // },
  // {
  //   path: 'all-courses',
  //   loadChildren: () => import('./all-courses/all-courses.module').then( m => m.AllCoursesPageModule)
  // },
  // {
  //   path: 'my-courses',
  //   loadChildren: () => import('./my-courses/my-courses.module').then( m => m.MyCoursesPageModule)
  // },
  // {
  //   path: '/:courseId',
  //   loadChildren: () => import('./course-details/course-details.module').then( m => m.CourseDetailsPageModule)
  // }

  {
    path: 'tabs',
    component: CoursesPage,
    children: [
    {
      path: 'all-courses',
      loadChildren: () => import('./all-courses/all-courses.module').then( m => m.AllCoursesPageModule)
    },
    {
      path: 'my-courses',
      loadChildren: () => import('./my-courses/my-courses.module').then( m => m.MyCoursesPageModule)
    },
    {
      path: ':courseId',
      loadChildren: () => import('./course-details/course-details.module').then( m => m.CourseDetailsPageModule)
    }
    ]
  },

  {
    path: '',
    redirectTo: 'courses/tabs/all-courses',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {}
