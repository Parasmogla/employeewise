import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { load } from './store/actions/leaves.actions';
import { map } from 'rxjs/operators';
import { Button } from 'protractor';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss'],
})
export class LeavesComponent implements OnInit {
  title = 'Leaves';

  constructor(private store: Store<{ Leaves: any }>) {}

  load() {}
  onSelectEmployee(c) {}

  ngOnInit() {}
}
