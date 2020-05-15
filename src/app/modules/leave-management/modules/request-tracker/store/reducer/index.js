import { createReducer, on } from "@ngrx/store";
import { loaded } from "../actions/request-tracker.actions";

export const initialState = {
  data: [],
};
export const featureKey = "RequestTracker";

const $reqTrackerReducer = createReducer(
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

export function reqTrackerReducer(state, action) {
  return $reqTrackerReducer(state, action);
}
