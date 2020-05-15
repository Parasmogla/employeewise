import { MatSortModule } from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { TableComponent } from './components/table/table.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ErrorHandlerComponent, TableComponent],
  imports: [
    BrowserModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
  ],
  providers: [],
  exports: [ErrorHandlerComponent, TableComponent],
})
export class SharedModule {}
