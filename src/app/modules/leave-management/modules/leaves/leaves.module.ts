import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LeavesEffects } from './store/effects/leaves.effects';
import { StoreModule } from '@ngrx/store';
import * as fromLeaves from './store/reducer';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { LeavesComponent } from './leaves.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LeavesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    EffectsModule.forFeature([LeavesEffects]),
    StoreModule.forFeature(fromLeaves.featureKey, fromLeaves.reqTrackerReducer),
  ],
  exports: [LeavesComponent],
})
export class LeavesModule {}
