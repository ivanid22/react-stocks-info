const ActionType = {
  SET_STOCKS: 'SET_STOCKS',
};

const stocksReducer = (state = [], action) => {
  switch (action.type) {
    case ActionType.SET_STOCKS:
      return [...action.stocks];
    default:
      return state;
  }
};

export default stocksReducer;
