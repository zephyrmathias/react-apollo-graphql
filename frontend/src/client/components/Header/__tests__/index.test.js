import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

describe('components: <Header />', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
