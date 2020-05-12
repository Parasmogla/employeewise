import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  load,
  loaded,
} from '../actions/app.actions';

export const initialState = {
  data: [],
};

const $counterReducer = createReducer(
  initialState,
  on(loaded, (state, { payload }) => {
    console.log(state, payload);
    return {
      ...initialState,
      data: payload,
    };
  })
);

export function appReducer(state, action) {
  return $counterReducer(state, action);
}
