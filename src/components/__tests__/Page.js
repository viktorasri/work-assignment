import React from 'react';
import { shallow } from 'enzyme';
import Page from '../Page';

describe('<Page />', () => {
  it('expect to render component', () => {
    expect(shallow(<Page />)).toMatchSnapshot();
  });

  it('renders page with passed title prop', () => {
    expect(shallow(<Page title='home' />)).toMatchSnapshot();
  });
});
