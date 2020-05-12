import * as fromLeaveManagement from './leave-management.actions';

describe('loadLeaveManagements', () => {
  it('should return an action', () => {
    expect(fromLeaveManagement.loadLeaveManagements().type).toBe('[LeaveManagement] Load LeaveManagements');
  });
});
