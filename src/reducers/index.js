import { combineReducers } from "redux";
import balance from "./balanceReducer";
import bitcoin from "./bitcoinReducer";

console.log(balance);

export default combineReducers({
  balance,
  bitcoin
});
