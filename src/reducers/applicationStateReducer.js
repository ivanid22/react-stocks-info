const ActionType = {
  UPDATE_STATE: 'UPDATE_STATE',
};

const ApplicationState = {
  IDLE: 'IDLE',
  FETCHING_DATA: 'FETCHING_DATA',
  SEARCHING: 'SEARCHING',
  ERROR: 'ERROR',
};

const initialState = {
  state: ApplicationState.IDLE,
  error: '',
};

const applicationStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_STATE:
      return {
        state: action.state,
        error: action.error || '',
      };
    default:
      return state;
  }
};

export default applicationStateReducer;
