import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const load = createAction('[App Component] Load');
export const loaded = createAction(
  '[App Component] Loaded',
  // add DTO model here
  props<{ payload: any }>()
);
export const reset = createAction('[Counter Component] Reset');
