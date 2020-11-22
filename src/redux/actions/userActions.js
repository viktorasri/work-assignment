import axios from 'axios';
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/userConstants';

//  Handle user login action
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/tokens', { username, password }, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    //  On login success save user login info and token to localstorage
    localStorage.setItem('userLogin', JSON.stringify({ success: true, userInfo: data }));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

//  Handle user logout action
export const logout = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });

  //  On logout remove save user login info from localstorage
  localStorage.removeItem('userLogin');
};
