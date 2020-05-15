import { RequestTrackerModule } from './modules/request-tracker/request-tracker.module';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { LMAEffects } from './store/effects/leave-management.effects';
import { LMAReducer } from './store/reducers';
import { LeaveManagementComponent } from './leave-management.component';
import { LeavesModule } from './modules/leaves/leaves.module';

@NgModule({
  declarations: [LeaveManagementComponent],
  imports: [
    EffectsModule.forRoot([LMAEffects]),
    HttpClientModule,
    MatGridListModule,
    StoreModule.forRoot({ LMA: LMAReducer }),
    LeavesModule,
    RequestTrackerModule,
    CommonModule,
  ],
  exports: [LeaveManagementComponent],
  //   providers,
})
export class LeaveManagementModule {}
