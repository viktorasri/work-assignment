import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';
import Header from '../Header';
import Button from '../Button';

describe('<Header />', () => {
  let wrapper;
  const useSelectorSpy = jest.spyOn(redux, 'useSelector');
  const useDispatchSpy = jest.spyOn(redux, 'useDispatch');

  it('expect to render component for not signed in user', () => {
    useSelectorSpy.mockReturnValue({});
    expect(shallow(<Header />)).toMatchSnapshot();
  });

  it('expect to render component for signed user', () => {
    useSelectorSpy.mockReturnValue({ success: true });
    expect(shallow(<Header />)).toMatchSnapshot();
  });

  it('expect to render logout button for signed in user', () => {
    useSelectorSpy.mockReturnValue({ success: true });
    expect(
      shallow(<Header />)
        .find(Button)
        .exists()
    ).toBe(true);
  });

  it('should call logout when button is clicked', () => {
    const mockDispatch = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatch);
    useSelectorSpy.mockReturnValue({ success: true });

    shallow(<Header />)
      .find(Button)
      .simulate('click');

    expect(mockDispatch).toHaveBeenCalledTimes(1);

    useDispatchSpy.mockClear();
  });
});
