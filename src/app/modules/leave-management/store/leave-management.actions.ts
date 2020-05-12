import { createAction, props } from '@ngrx/store';

export const loadLeaveManagements = createAction(
  '[LeaveManagement] Load LeaveManagements'
);

export const loadLeaveManagementsSuccess = createAction(
  '[LeaveManagement] Load LeaveManagements Success',
  props<{ data: any }>()
);

export const loadLeaveManagementsFailure = createAction(
  '[LeaveManagement] Load LeaveManagements Failure',
  props<{ error: any }>()
);
