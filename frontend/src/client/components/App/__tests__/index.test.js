import React from 'react';
import { shallow } from 'enzyme';
import App from '../index';

describe('components: <App />', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
