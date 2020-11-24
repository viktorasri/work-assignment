import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from '../../constants/userConstants';
import { userLoginReducer } from '../userReducers';

describe('userLoginReducer', () => {
  const initialState = {};

  it('should return initial state', () => {
    expect(userLoginReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle USER_LOGIN_REQUEST action', () => {
    expect(
      userLoginReducer(initialState, {
        type: USER_LOGIN_REQUEST,
      })
    ).toEqual({ loading: true });
  });

  it('should handle USER_LOGIN_SUCCESS action', () => {
    const mockUser = { token: 'secrettoken' };

    expect(
      userLoginReducer(initialState, {
        type: USER_LOGIN_SUCCESS,
        payload: mockUser,
      })
    ).toEqual({ success: true, loading: false, userInfo: mockUser });
  });

  it('should handle USER_LOGIN_FAIL action', () => {
    const error = 'opps something went wrong!';

    expect(
      userLoginReducer(initialState, {
        type: USER_LOGIN_FAIL,
        payload: error,
      })
    ).toEqual({ loading: false, error });
  });

  it('should handle USER_LOGOUT action', () => {
    expect(
      userLoginReducer(initialState, {
        type: USER_LOGOUT,
      })
    ).toEqual(initialState);
  });
});
