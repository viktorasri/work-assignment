import React from 'react';
import { shallow } from 'enzyme';
import FormInput from '../FormInput';

describe('<FormInput />', () => {
  const mockOnchange = jest.fn();
  const mockProps = {
    onChange: mockOnchange,
    value: 'test',
    placeholder: 'Form input',
  };

  const wrapper = shallow(<FormInput {...mockProps} />);

  it('expect to render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expect to call onChange', () => {
    wrapper.find('input').simulate('change');
    expect(mockOnchange).toHaveBeenCalled();
  });
});
