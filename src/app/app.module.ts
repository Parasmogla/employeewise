import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeaveManagementComponent } from './modules/leave-management/leave-management.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './store/reducers';
import { HttpClientModule } from '@angular/common/http';
import { AppEffects } from './store/effects/app.effects';

@NgModule({
  declarations: [AppComponent, LeaveManagementComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
