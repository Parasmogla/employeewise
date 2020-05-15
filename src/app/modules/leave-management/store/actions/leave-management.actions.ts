import { createAction, props } from '@ngrx/store';

export const load = createAction('[LMA Component] Load');
export const loaded = createAction(
  '[LMA Component] Loaded',
  // add DTO model here
  props<{ payload: any }>()
);
