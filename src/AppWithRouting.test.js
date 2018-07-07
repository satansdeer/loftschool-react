import React from 'react';
import AppWithRouting from './AppWithRouting';
import { mount } from 'enzyme';
import { StaticRouter } from 'react-router-dom';

const wrapper = mount(
  <StaticRouter location="/some-path" context={{}}>
    <AppWithRouting />
  </StaticRouter>,
);

it('contain p with text: i found you', () => {
  expect(wrapper.contains(<p>i found you</p>)).toBeTruthy()
})
