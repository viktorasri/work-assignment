import * as types from '../../constants/serversConstants';
import * as actions from '../serversActions';

const mockServers = [
  { name: 'a', distance: 1 },
  { name: 'b', distance: 2 },
  { name: 'c', distance: 3 },
];

describe('getServersList action', () => {
  it('creates SERVERS_LIST_REQUEST action', () => {
    expect(actions.getServersListStart().type).toEqual(types.SERVERS_LIST_REQUEST);
  });

  it('creates SERVERS_LIST_SUCCESS action', () => {
    const action = actions.getServersListSuccess(mockServers);

    expect(action.type).toEqual(types.SERVERS_LIST_SUCCESS);
    expect(action.payload).toEqual(mockServers);
  });

  it('creates SERVERS_LIST_FAIL action', () => {
    const error = 'error!';
    const action = actions.getServersListFail(error);

    expect(action.type).toEqual(types.SERVERS_LIST_FAIL);
    expect(action.payload).toEqual(error);
  });
});
