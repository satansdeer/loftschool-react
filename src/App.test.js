import React from 'react';
import App from './App';

import { mount } from 'enzyme';

describe('Компонента App', () => {
  const wrapper = mount(<App var1={1} var2={2} />);

  describe('Содержит:', () => {
    // it('div', () => {
    //   expect(
    //     wrapper.find('div'),
    //   ).toHaveLength(1);
    // });
    // it('div > Title', () => {
    //   expect(
    //     wrapper.find('div > Title'),
    //   ).toHaveLength(1);
    // });
    // it('div > input', () => {
    //   expect(
    //     wrapper.find('div > input'),
    //   ).toHaveLength(1);
    // });
    [
      'div',
      'div > Title',
      'div > input',
    ].forEach(selector => {
      it(selector, () => {
        expect(
          wrapper.find(selector).length,
        ).toBeGreaterThanOrEqual(1)
      });
    });
  });

  describe('State', () => {
    it('По умолчанию содержит {test: ""}', () => {
      expect(wrapper.state()).toEqual({
        test: '',
        counter: 3
      });
    });

    it('При вызове handleChange меняется стейт', () => {
      const input = wrapper.find('input');

      input.simulate('change', {
        target: {
          name: 'test',
          value: 'test_2',
        },
      });

      expect(wrapper.state()).toEqual({
        test: 'test_2',
        counter: 3
      });
    });
  });

  describe('Методы компоненты', () => {
    it('handleChange', () => {
      expect(
        wrapper.instance().handleChange,
      ).toBeDefined();
    });
  });
});
