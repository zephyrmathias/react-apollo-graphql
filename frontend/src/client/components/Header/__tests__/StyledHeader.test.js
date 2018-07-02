import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import StyledHeader from '../StyledHeader';

describe('components: <StyledHeader />', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<StyledHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
