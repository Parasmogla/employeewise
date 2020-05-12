import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, load } from './store/actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'employeewise';
  count$: Observable<number>;

  constructor(private store: Store<{ app: number }>) {
    this.count$ = store.pipe(select('app'));
  }

  load() {
    this.store.dispatch(load());
  }
}
