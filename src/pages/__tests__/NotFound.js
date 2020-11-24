import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../NotFound';

describe('Page <NotFound />', () => {
  const wrapper = shallow(<NotFound />);

  it('expect to render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
