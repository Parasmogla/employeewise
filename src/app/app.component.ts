import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { increment, decrement, reset, load } from './store/actions/app.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'employeewise';
  data: Observable<any>;
  myself$: Observable<any>;

  constructor(private store: Store<{ app: number }>) {}

  load() {
    this.store.dispatch(load());
  }

  ngOnInit() {
    this.data = this.store.pipe(
      select('app'),
      map((res: any) => res.data)
    );
  }
}
