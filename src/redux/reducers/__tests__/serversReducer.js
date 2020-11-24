import {
  SERVERS_LIST_REQUEST,
  SERVERS_LIST_SUCCESS,
  SERVERS_LIST_FAIL,
  SERVERS_LIST_RESET,
  SERVERS_LIST_SORT,
} from '../../constants/serversConstants';

import { serversListReducer } from '../serversReducer';

describe('serversListReducer', () => {
  const initialState = { loading: true };

  const mockServers = [
    { name: 'a', distance: 1 },
    { name: 'b', distance: 2 },
    { name: 'c', distance: 3 },
  ];

  it('should return initial state', () => {
    expect(serversListReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SERVERS_LIST_REQUEST action', () => {
    expect(
      serversListReducer(initialState, {
        type: SERVERS_LIST_REQUEST,
      })
    ).toEqual({ loading: true });
  });

  it('should handle SERVERS_LIST_SUCCESS action', () => {
    expect(
      serversListReducer(initialState, {
        type: SERVERS_LIST_SUCCESS,
        payload: mockServers,
      })
    ).toEqual({ loading: false, servers: mockServers });
  });

  it('should handle SERVERS_LIST_FAIL action', () => {
    const error = 'opps something went wrong!';

    expect(
      serversListReducer(initialState, {
        type: SERVERS_LIST_FAIL,
        payload: error,
      })
    ).toEqual({ loading: false, error });
  });

  it('should handle SERVERS_LIST_RESET action', () => {
    expect(
      serversListReducer(initialState, {
        type: SERVERS_LIST_RESET,
      })
    ).toEqual(initialState);
  });

  it('should handle SERVERS_LIST_SORT action', () => {
    expect(
      serversListReducer(
        { loading: false, servers: mockServers },
        {
          type: SERVERS_LIST_SORT,
          payload: mockServers,
        }
      )
    ).toEqual({ servers: mockServers });
  });
});
