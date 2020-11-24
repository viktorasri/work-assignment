import axios from 'axios';
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/userConstants';
import { SERVERS_LIST_RESET } from '../constants/serversConstants';

export const loginStart = () => ({
  type: USER_LOGIN_REQUEST,
});

export const loginSuccess = (payload) => ({
  type: USER_LOGIN_SUCCESS,
  payload,
});

export const loginFail = (payload) => ({
  type: USER_LOGIN_FAIL,
  payload,
});

//  Handle user login action
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/tokens', { username, password }, config);

    dispatch(loginSuccess(data));

    //  On login success save user login info and token to localstorage
    localStorage.setItem('userLogin', JSON.stringify({ success: true, userInfo: data }));
  } catch (error) {
    const errorMessage = error.message && error.response.data.message ? error.response.data.message : error.message;
    dispatch(loginFail(errorMessage));
  }
};

//  Handle user logout action
export const logout = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });

  dispatch({
    type: SERVERS_LIST_RESET,
  });

  //  On logout remove save user login info from localstorage
  localStorage.removeItem('userLogin');
};
