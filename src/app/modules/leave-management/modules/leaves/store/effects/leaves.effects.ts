import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LeavesService } from './../../leaves.service';
import { loaded, load } from '../actions/leaves.actions';

@Injectable()
export class LeavesEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(load),
      mergeMap(() =>
        this.leavesService.getAll().pipe(
          map((data: any) => loaded({ payload: data.data })),
          catchError(() => of({ type: '[Leaves Component] Loaded Error' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private leavesService: LeavesService
  ) {}
}
