import React from 'react';
import App from './App';

import { render } from 'enzyme';

const wrapper = render(<App var1={1} var2={2} />);

it('', () => {
  console.log(wrapper.html())
  expect(wrapper.find('p').text()).toBe('123')
});
