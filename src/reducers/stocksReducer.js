import { ActionType } from '../actions/stocks';

const stocksReducer = (state = [], action) => {
  switch (action.type) {
    case ActionType.SET_STOCKS:
      return [...action.stocks];
    default:
      return state;
  }
};

export default stocksReducer;
