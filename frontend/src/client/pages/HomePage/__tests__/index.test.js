import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../index';

describe('pages: <HomePage />', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
