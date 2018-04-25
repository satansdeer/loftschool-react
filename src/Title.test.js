import React from 'react';
import Title from './Title';
import { shallow } from 'enzyme';

// shallow
// mount
// render -- cheerio (jQuery like)

describe('Title component', () => {
  const wrapper = shallow(<Title />);

  it('Contains one p', () => {
    expect(wrapper.find('p')).toHaveLength(1)
  })
});
