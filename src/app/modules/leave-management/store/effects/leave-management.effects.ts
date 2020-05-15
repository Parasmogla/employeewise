import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LeaveManagementService } from '../../leave-management.service';
import { load, loaded } from '../actions/leave-management.actions';

@Injectable()
export class LMAEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(load),
      mergeMap(() =>
        this.lmaService.getAll().pipe(
          map((data: any) => loaded({ payload: data.data })),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private lmaService: LeaveManagementService) {}
}
