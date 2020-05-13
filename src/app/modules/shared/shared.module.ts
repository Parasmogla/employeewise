import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';

@NgModule({
  declarations: [
    ErrorHandlerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    ErrorHandlerComponent
  ]
})
export class SharedModule {}
