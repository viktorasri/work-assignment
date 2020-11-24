import axios from 'axios';
import {
  SERVERS_LIST_FAIL,
  SERVERS_LIST_REQUEST,
  SERVERS_LIST_SORT,
  SERVERS_LIST_SUCCESS,
} from '../constants/serversConstants';

export const getServersListStart = () => ({
  type: SERVERS_LIST_REQUEST,
});

export const getServersListSuccess = (payload) => ({
  type: SERVERS_LIST_SUCCESS,
  payload,
});

export const getServersListFail = (payload) => ({
  type: SERVERS_LIST_FAIL,
  payload,
});

//  Handle servers list API request
export const getServersList = () => async (dispatch, getState) => {
  try {
    dispatch(getServersListStart());

    //  Get user infro from app state
    const {
      userLogin: { userInfo },
    } = getState();

    //  Add authorization token to request header
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/servers`, config);

    dispatch(getServersListSuccess(data));
  } catch (error) {
    const errorMessage = error.response && error.response.data.message ? error.response.data.message : error.message;
    dispatch(getServersListFail(errorMessage));
  }
};

//  Handle servers list sorting
export const sortServersList = (key, sort) => (dispatch, getState) => {
  //  Get servers list from app state
  const {
    serversList: { servers },
  } = getState();

  //    Sort numbers and strings
  const sortFn = {
    asc: (a, b) => {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return a[key] - b[key];
      } else {
        return a[key].localeCompare(b[key]);
      }
    },
    deasc: (a, b) => {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return b[key] - a[key];
      } else {
        return b[key].localeCompare(a[key]);
      }
    },
  };

  //    Make a copy of servers and sort
  const sortedServers = [...servers].sort(sortFn[sort]);

  dispatch({
    type: SERVERS_LIST_SORT,
    payload: sortedServers,
  });
};
