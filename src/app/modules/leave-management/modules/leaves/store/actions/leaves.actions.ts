import { createAction, props } from '@ngrx/store';

export const load = createAction('[Leaves Component] Load');
export const loaded = createAction(
  '[Leaves Component] Loaded',
  // add DTO model here
  props<{ payload: any }>()
);
