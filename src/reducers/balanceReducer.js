import * as constants from "../actions/constants";
import { read_cookie, bake_cookie } from "sfcookies";

const BALANCE_COOKIE = "BALANCE_COOKIE";

const balanceReducer = (state = 0, action) => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    case constants.DEPOSIT:
      return state + action.deposit;
    case constants.WITHDRAW:
      return state - action.withdrawal;
    default:
      return parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }
};
export default balanceReducer;
