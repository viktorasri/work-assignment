import React from 'react';
import { shallow, mount } from 'enzyme';
import * as redux from 'react-redux';
import Login from '../Login';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import Message from '../../components/Message';

describe('Page <Login />', () => {
  const useSelectorSpy = jest.spyOn(redux, 'useSelector');
  const useDispatchSpy = jest.spyOn(redux, 'useDispatch');

  const mockHistory = {
    push: jest.fn(),
  };

  it('expect to render component for not signed in user', () => {
    useSelectorSpy.mockReturnValue({});
    expect(shallow(<Login />)).toMatchSnapshot();
  });

  it('expect to show spinner then loading', () => {
    useSelectorSpy.mockReturnValue({ loading: true });
    expect(shallow(<Login />).find(Spinner).length).toEqual(1);
  });

  it('expect to show error message on login fail', () => {
    useSelectorSpy.mockReturnValue({ error: 'unauthorized' });
    expect(shallow(<Login />).find(Message).length).toEqual(1);
  });

  it('should call history.push when user login successfully', () => {
    const mockProps = {
      history: mockHistory,
    };
    useSelectorSpy.mockReturnValue({ success: true });
    const wrapper = mount(<Login {...mockProps} />);
    expect(mockHistory.push).toHaveBeenCalledTimes(1);
  });
});
