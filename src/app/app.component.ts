import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { increment, decrement, reset, load } from './store/actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'employeewise';
  data: [];

  constructor(private store: Store<{ app: number }>) {}

  load() {
    this.store.dispatch(load());
  }

  subscribeStore() {
    this.store.pipe(select('app')).subscribe((data: any) => {
      console.log(data);
      this.data = data.data;
    });
  }

  ngOnInit() {
    this.subscribeStore();
  }
}
