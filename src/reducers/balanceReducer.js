import * as constants from "../actions/constants";

const balanceReducer = (state, action) => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    default:
      return state;
  }
};
export default balanceReducer;
