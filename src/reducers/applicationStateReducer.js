const ActionType = {
  UPDATE_STATE: 'UPDATE_STATE',
};

const ApplicationState = {
  IDLE: 'IDLE',
  FETCHING_DATA: 'FETCHING_DATA',
  SEARCHING: 'SEARCHING',
};

const initialState = ApplicationState.IDLE;

const applicationStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_STATE:
      return action.state;
    default:
      return state;
  }
};

export default applicationStateReducer;
