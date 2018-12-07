import { FETCH_BITCOIN } from "../actions/constants";

const initialState = {};

export default (state = initialState, { type, bitcoin }) => {
  switch (type) {
    case FETCH_BITCOIN:
      return bitcoin;

    default:
      return state;
  }
};
