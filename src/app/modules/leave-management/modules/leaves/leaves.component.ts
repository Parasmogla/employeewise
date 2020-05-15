import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { load } from './store/actions/leaves.actions';
import { map } from 'rxjs/operators';
import { Button } from 'protractor';
import { ModalComponent } from 'src/app/modules/shared/components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss'],
})
export class LeavesComponent implements OnInit {

  title = 'Leaves';
  @ViewChild('genericModal', {static: false}) genericModal: ModalComponent;
  data: Observable<any>;

  tColumns = [
    [
      { displayName: 'Id', id: 'id' },
      { displayName: 'Name', id: 'employee_name' },
      { displayName: 'Salary', id: 'employee_salary' },
    ],
    [
      { displayName: 'Age', id: 'employee_age' },
    ]
  ];

  tableConfig = [
    {
      isSearchable: false,
      isSortingEnabled: false,
      hasTableActions: true,
      actions: {
        tableActions: {
          type: 'BUTTON',
          action: {
            onTrigger: this.onSelectEmployee,
          },
        },
      },
    },
    {
      isSearchable: false,
      isSortingEnabled: false,
      hasTableActions: true,
      actions: {
        tableActions: {
          type: 'BUTTON',
          action: {
            onTrigger: this.onSelectEmployee,
          },
        },
      },
    }
  ]

  constructor(private store: Store<{ Leaves: any }>, private dialog: MatDialog) {
    this.store.dispatch(load());
  }

  load() {}
  onSelectEmployee(c) {
    console.log(c)
  }

  ngOnInit() {
    this.data = this.store.pipe(
      select('Leaves'),
      map((res: any) => res.data)
    );
  }

  openModal() {
    this.dialog.open(ModalComponent, {
      data: {
        tColumns: this.tColumns,
        tableConfig: this.tableConfig,
        data: this.data,
        type: 'Leave Details'
      },
      height: 'auto',
      width: '750px',
      panelClass: 'generic-modal'
    });
    // this.genericModal.show();
  }
}
