import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AppService } from './../../app.service';
import { load, loaded } from '../actions/app.actions';

@Injectable()
export class AppEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(load),
      mergeMap(() =>
        this.appService.getAll().pipe(
          map((data) => loaded({ payload: data })),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private appService: AppService) {}
}
