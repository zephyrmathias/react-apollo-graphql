import React from 'react';
import { shallow } from 'enzyme';
import AppRoutes from '../index';

describe('routes: <AppRoutes />', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<AppRoutes />);
    expect(wrapper).toMatchSnapshot();
  });
});
