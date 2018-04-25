import React from 'react';
import App from './App';

import { render } from 'enzyme';

const wrapper = render(<App />);

it('', () => {
  expect(wrapper.find('p').text()).toBe('123')
});
