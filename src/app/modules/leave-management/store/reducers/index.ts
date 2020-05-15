import { createReducer, on } from '@ngrx/store';
import { loaded } from '../actions/leave-management.actions';

export const initialState = {
  data: [],
};

const $lmaReducer = createReducer(
  initialState,
  on(loaded, (state, { payload }) => {
    console.log({
      ...initialState,
      data: payload,
    });
    return {
      ...initialState,
      data: payload,
    };
  })
);

export function LMAReducer(state, action) {
  return $lmaReducer(state, action);
}
