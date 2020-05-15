import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { RequestTrackerService } from '../../request-tracker.service';
import { loaded, load } from '../actions/request-tracker.actions';

@Injectable()
export class ReqTrackEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(load),
      mergeMap(() =>
        this.reqTrackerService.getAll().pipe(
          map((data: any) => loaded({ payload: data.data })),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private reqTrackerService: RequestTrackerService
  ) {}
}
