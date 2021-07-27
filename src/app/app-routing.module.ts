import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { RedirectService } from './shared/guard/redirect.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: localStorage.getItem('access_token') ?  '/courses/tabs/all-courses' : '/choose-language',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'choose-language',
    loadChildren: () => import('./choose-language/choose-language.module').then( m => m.ChooseLanguagePageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'courses',
    canActivate: [AuthGuard],
    loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'exercise',
    loadChildren: () => import('./training/training.module').then( m => m.TrainingPageModule)
  },
  {
    path: 'test-finished',
    loadChildren: () => import('./training/test-course/test-finished/test-finished.module').then( m => m.TestFinishedPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
