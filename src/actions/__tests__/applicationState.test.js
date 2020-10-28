import { faItalic } from '@fortawesome/free-solid-svg-icons';
import setApplicationState from '../applicationState';

describe('setApplicationState', () => {
  it('should create an update application state action', () => {
    expect(setApplicationState('TEST_STATE')).toEqual({
      type: 'UPDATE_STATE',
      state: 'TEST_STATE',
    });
  });
});
