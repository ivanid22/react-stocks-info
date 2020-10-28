import { faItalic } from '@fortawesome/free-solid-svg-icons';
import applicationStateReducer from '../applicationStateReducer';
import setApplicationState from '../../actions/applicationState'

describe('applicationStateReducer', () => {
  it('should update application state when receiving an UPDATE_STATE action', () => {
    expect(applicationStateReducer('', setApplicationState('TEST_STATE'))).toEqual('TEST_STATE');
  });

  it('should return an IDLE state by default', () => {
    expect(applicationStateReducer(undefined, { type: 'NONE' })).toEqual('IDLE');
  });
});
