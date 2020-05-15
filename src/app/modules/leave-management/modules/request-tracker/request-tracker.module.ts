import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ReqTrackEffects } from './store/effects/request-tracker.effects';
import { StoreModule } from '@ngrx/store';
import * as fromReqTracker from './store/reducer';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RequestTrackerComponent } from './request-tracker.component';

@NgModule({
  declarations: [RequestTrackerComponent],
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([ReqTrackEffects]),
    StoreModule.forFeature(
      fromReqTracker.featureKey,
      fromReqTracker.reqTrackerReducer
    ),
  ],
  exports: [RequestTrackerComponent],
})
export class RequestTrackerModule {}
