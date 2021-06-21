import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestCoursePage } from './test-course.page';

const routes: Routes = [
  {
    path: '',
    component: TestCoursePage,
    children: [
      {
        path: 'single-test',
        loadChildren: () => import('./single-test/single-test.module').then( m => m.SingleTestPageModule)
      },
      {
        path: 'multi-test',
        loadChildren: () => import('./multi-test/multi-test.module').then( m => m.MultiTestPageModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestCoursePageRoutingModule {}
