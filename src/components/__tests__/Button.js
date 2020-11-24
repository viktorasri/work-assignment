import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {
  const wrapper = shallow(<Button variant='primary'>button</Button>);

  it('expect to render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expect to render without variant', () => {
    expect(shallow(<Button>button</Button>)).toMatchSnapshot();
  });

  it('expect to pass a variant of "primary"', () => {
    expect(wrapper.find('.button--primary')).toHaveLength(1);
  });
});
