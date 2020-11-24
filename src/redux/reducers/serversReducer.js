import {
  SERVERS_LIST_REQUEST,
  SERVERS_LIST_SUCCESS,
  SERVERS_LIST_FAIL,
  SERVERS_LIST_RESET,
  SERVERS_LIST_SORT,
} from '../constants/serversConstants';

export const serversListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case SERVERS_LIST_REQUEST:
      return { loading: true };
    case SERVERS_LIST_SUCCESS:
      return {
        loading: false,
        servers: action.payload,
      };
    case SERVERS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case SERVERS_LIST_SORT:
      return {
        servers: action.payload,
      };
    case SERVERS_LIST_RESET:
      return { loading: true };
    default:
      return state;
  }
};
