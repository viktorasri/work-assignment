import React from 'react';
import { shallow } from 'enzyme';
import Message from '../Message';

describe('<Message />', () => {
  const wrapper = shallow(<Message>hello</Message>);

  it('expect to render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expect to pass a variant of "blue" and render string', () => {
    const wrapperBlue = shallow(<Message variant='blue'>hello</Message>);
    expect(wrapperBlue.find('.message--blue')).toHaveLength(1);
    expect(wrapperBlue.text()).toEqual('hello');
  });
});
