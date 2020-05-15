import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { load } from './store/actions/request-tracker.actions';
import { map } from 'rxjs/operators';
import { Button } from 'protractor';

@Component({
  selector: 'app-request-tracker',
  templateUrl: './request-tracker.component.html',
  styleUrls: ['./request-tracker.component.scss'],
})
export class RequestTrackerComponent implements OnInit {
  title = 'employeewise';
  data: Observable<any>;
  myself$: Observable<any>;
  tColumns = [
    { displayName: 'Id', id: 'id' },
    { displayName: 'Name', id: 'employee_name' },
    { displayName: 'Salary', id: 'employee_salary' },
  ];

  tableConfig = {
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
  };

  constructor(private store: Store<{ RequestTracker: any }>) {
    this.store.dispatch(load());
  }

  load() {
    this.store.dispatch(load());
  }
  onSelectEmployee(c) {
    console.log(c);
  }

  ngOnInit() {
    this.data = this.store.pipe(
      select('RequestTracker'),
      map((res: any) => res.data)
    );
  }
}
