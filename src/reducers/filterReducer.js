const defaultState = 'ALL';

const ActionType = {
  SET_FILTER: 'SET_FILTER',
};

const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
