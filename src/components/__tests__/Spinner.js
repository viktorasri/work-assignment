import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../Spinner';

describe('<Spinner />', () => {
  const wrapper = shallow(<Spinner />);

  it('expect to render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
