import * as fromApp from './leave-management.actions';

describe('loadApps', () => {
  it('should return an action', () => {
    expect(fromApp.loadApps().type).toBe('[App] Load Apps');
  });
});
