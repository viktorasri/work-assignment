import React from 'react';
import { shallow, mount } from 'enzyme';
import * as redux from 'react-redux';
import Servers from '../Servers';

import Spinner from '../../components/Spinner';
import Message from '../../components/Message';

describe('Page <Servers />', () => {
  const useSelectorSpy = jest.spyOn(redux, 'useSelector');
  const useDispatchSpy = jest.spyOn(redux, 'useDispatch');

  const mockServers = [
    { name: 'a', distance: 1 },
    { name: 'b', distance: 2 },
    { name: 'c', distance: 3 },
  ];

  it('expect to render component', () => {
    useSelectorSpy.mockReturnValue({ servers: mockServers, success: true });
    expect(shallow(<Servers />)).toMatchSnapshot();
  });

  it('expect to show spinner then loading', () => {
    useSelectorSpy.mockReturnValue({ loading: true });
    expect(shallow(<Servers />).find(Spinner).length).toEqual(1);
  });

  it('expect to show error message on login fail', () => {
    useSelectorSpy.mockReturnValue({ error: 'unauthorized' });
    expect(shallow(<Servers />).find(Message).length).toEqual(1);
  });

  it('should call history.push when user is not signed in', () => {
    const mockHistory = {
      push: jest.fn(),
    };
    const mockProps = {
      history: mockHistory,
    };
    useSelectorSpy.mockReturnValue({ success: false, servers: [] });
    const wrapper = mount(<Servers {...mockProps} />);
    expect(mockHistory.push).toHaveBeenCalledTimes(1);
  });
});
