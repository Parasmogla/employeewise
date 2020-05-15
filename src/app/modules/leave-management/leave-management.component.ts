import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { load } from './store/actions/leave-management.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.scss'],
})
export class LeaveManagementComponent implements OnInit {
  title = 'employeewise';
  data: Observable<any>;
  myself$: Observable<any>;

  constructor(private store: Store<{ LMA: any }>) {}

  load() {
    // this.store.dispatch(load());
  }

  ngOnInit() {
    // this.data = this.store.pipe(
    //   select('LMA'),
    //   map((res: any) => res.data)
    // );
    // console.log(this.data);
  }
}
