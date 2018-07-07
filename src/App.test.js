import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import Title from './Title';

// shallow
// mount
// render -- cheerio (jQuery like)

describe('App', () => {
  const wrapper = mount(<App />);

  it('element [name="test"] exist', () => {
    expect(
      wrapper.contains(
        <Title counter={3} fontSize={30}>
          123
        </Title>,
      ),
    ).toBeTruthy();
  });

  it('state', () => {
    expect(wrapper.state()).toEqual({
      test: '',
      counter: 3,
    });
  });

  it('check handleChange', () => {
    wrapper
      .find('[name="test"]')
      .simulate('change', {
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
    const TitleWrapper = wrapper.find(
      'Title',
    );

    expect(TitleWrapper.props()).toEqual({
      counter: 3,
      fontSize: 30,
      children: '123',
    });
  });
});
