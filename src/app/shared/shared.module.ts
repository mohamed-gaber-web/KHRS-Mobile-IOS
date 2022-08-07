import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PipeSafeUrlPipe } from './pipes/pipe-safe-url.pipe';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TopHeaderComponent } from './components/top-header/top-header.component';
import { SuccessReviewsComponent } from './components/success-reviews/success-reviews.component';
import { SuccessVideosComponent } from './components/success-videos/success-videos.component';
import { SuccessPhotosComponent } from './components/success-photos/success-photos.component';

@NgModule({
  imports: [CommonModule, IonicModule, HttpClientModule, RouterModule, NgbModule],
  declarations: [TopHeaderComponent, SuccessPhotosComponent, SuccessVideosComponent, SuccessReviewsComponent, PipeSafeUrlPipe],
  exports: [TopHeaderComponent, SuccessPhotosComponent, SuccessVideosComponent, SuccessReviewsComponent],
  providers: [],
})

export class SharedModule {}
