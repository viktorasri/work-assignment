import * as types from '../../constants/userConstants';
import * as actions from '../userActions';

const mockUser = {
  token: 'secretToken',
};

describe('login action', () => {
  it('creates USER_LOGIN_REQUEST action', () => {
    expect(actions.loginStart().type).toEqual(types.USER_LOGIN_REQUEST);
  });

  it('creates USER_LOGIN_SUCCESS action', () => {
    const action = actions.loginSuccess(mockUser);

    expect(action.type).toEqual(types.USER_LOGIN_SUCCESS);
    expect(action.payload).toEqual(mockUser);
  });

  it('creates USER_LOGIN_FAIL action', () => {
    const error = 'error!';
    const action = actions.loginFail(error);

    expect(action.type).toEqual(types.USER_LOGIN_FAIL);
    expect(action.payload).toEqual(error);
  });
});

describe('login action', () => {
  it('creates USER_LOGIN_REQUEST action', () => {
    expect(actions.loginStart().type).toEqual(types.USER_LOGIN_REQUEST);
  });

  it('creates USER_LOGIN_SUCCESS action', () => {
    const action = actions.loginSuccess(mockUser);

    expect(action.type).toEqual(types.USER_LOGIN_SUCCESS);
    expect(action.payload).toEqual(mockUser);
  });
});
