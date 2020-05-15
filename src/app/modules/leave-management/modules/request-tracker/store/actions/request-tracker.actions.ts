import { createAction, props } from '@ngrx/store';

export const load = createAction('[Request Tracker Component] Load');
export const loaded = createAction(
  '[Request Tracker Component] Loaded',
  // add DTO model here
  props<{ payload: any }>()
);
