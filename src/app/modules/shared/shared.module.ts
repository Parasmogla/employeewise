import { MatSortModule } from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { TableComponent } from './components/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from './components/modal/modal.component';

import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [ErrorHandlerComponent, TableComponent, ModalComponent],
  imports: [
    BrowserModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}},
  ],
  exports: [
    ErrorHandlerComponent,
    TableComponent,
    ModalComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class SharedModule {}
