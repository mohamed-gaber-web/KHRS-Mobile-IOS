import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPage } from './courses.page';

const routes: Routes = [
{
    path: 'tabs',
    component: CoursesPage,
    children: [
    {
      path: 'all-courses',
      loadChildren: () => import('./all-courses/all-courses.module').then( m => m.AllCoursesPageModule),
      data: {title: "All courses"}
    },
    {
      path: 'my-courses',
      loadChildren: () => import('./my-courses/my-courses.module').then( m => m.MyCoursesPageModule)
    },
    {
      path: 'setting',
      loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
    },
    {
      path: 'top-scores',
      loadChildren: () => import('./top-scores/top-scores.module').then( m => m.TopScoresPageModule)
    },
    {
      path: 'apply-course',
      loadChildren: () => import('./apply-course/apply-course.module').then( m => m.ApplyCoursePageModule)
    },
    {
      path: 'choose-course-material',
      loadChildren: () => import('./choose-course-material/choose-course-material.module').then( m => m.ChooseCourseMaterialPageModule)
    },
    {
      path: ':courseId',
      loadChildren: () => import('./course-details/course-details.module').then( m => m.CourseDetailsPageModule)
    },
    {
      path: 'course-by-category/:categoryId',
      loadChildren: () => import('./course-by-category/course-by-category.module').then( m => m.CourseByCategoryPageModule)
    },


    ]
  },

  {
    path: '',
    redirectTo: '/courses/tabs/all-courses',
    pathMatch: 'full'
  },
  {
    path: 'course-material/:courseId',
    loadChildren: () => import('./course-material/course-material.module').then( m => m.CourseMaterialPageModule)
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {}
