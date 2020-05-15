import {
  createReducer,
  on
} from "@ngrx/store";
import {
  loaded
} from "../actions/leaves.actions";

export const initialState = {
  data: [],
};
export const featureKey = "Leaves";

const $reqTrackerReducer = createReducer(
  initialState,
  on( loaded, ( state, {
    payload
  } ) => {
    console.log( {
      ...initialState,
      data: payload,
    } );
    return {
      ...initialState,
      data: payload,
    };
  } )
);

export function reqTrackerReducer( state, action ) {
  return $reqTrackerReducer( state, action );
}
