import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import Title from './Title';

// shallow
// mount
// render -- cheerio (jQuery like)

describe('App', () => {
  const wrapper = mount(<App />);

  it('handleChange valid work', () => {
    const testValue = '10';
    wrapper
      .instance()
      .handleChange({ target: { name: 'test', value: testValue } });

    expect(wrapper.state().test).toEqual(testValue);
  });

  it('input changeEvent change state.test value', () => {
    const testValue = '555';

    wrapper
      .find('input[name="test"]')
      .simulate('change', { target: { name: 'test', value: testValue } });

    expect(wrapper.state().test).toEqual(testValue);
  });

  it('has input with name "test"', () => {
    expect(wrapper.find('input[name="test"]')).toBeTruthy();
  });

  it('Title props counter eq state.counter', () => {
    const testValue = 20;
    wrapper.setState({ counter: testValue });
    expect(wrapper.find('Title').props().counter).toBe(testValue);
  });

  it('element [name="test"] exist', () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.contains(
        <Title counter={3} fontSize={30}>
          123
        </Title>,
      ),
    ).toBeTruthy();
  });

  // it('state', () => {
  //   expect(wrapper.state()).toEqual({
  //     test: '',
  //     counter: 3,
  //   });
  // });

  it('check handleChange', () => {
    const wrapper = shallow(<App />);
    wrapper.find('[name="test"]').simulate('change', {
      target: {
        name: 'test2',
        value: 'test2',
      },
    });

    expect(wrapper.state()).toEqual({
      test: '',
      counter: 3,
      test2: 'test2',
    });
  });

  it('It have component Title with props {counter: 3, fontSize: 30, children: 30}', () => {
    const wrapper = shallow(<App />);
    const TitleWrapper = wrapper.find('Title');

    expect(TitleWrapper.props()).toEqual({
      counter: 3,
      fontSize: 30,
      children: '123',
    });
  });
});
