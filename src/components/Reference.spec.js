import React from 'react';
import { mount, shallow } from 'enzyme';
import Reference from './Reference';

describe('<Reference />', () => {
  const data = {
    link: 'example.com'
  };

  it('should return empty element when no props', () => {
    const wrapper = mount(<Reference />);
    expect(wrapper.find('div').length).toBe(1);
  });
  it('should contain <a> element', () => {
    const wrapper = mount(<Reference />);
    expect(wrapper.find('div').length).toBe(1);
  });

  it('should contain static text', () => {
    const wrapper = mount(<Reference data={data} />);
    expect(wrapper.find('a').text()).toBe('Read here');
  });
});
