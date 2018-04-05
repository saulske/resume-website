import React from 'react';
import { mount } from 'enzyme';
import Reference from './Reference';

describe('<Reference />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Reference />);
  });

  it('should contain <a> element', () => {
    expect(wrapper.find('a').length).toBe(1);
  });

  it('should contain static text', () => {
    expect(wrapper.find('a').text()).toBe('Read here');
  });
});
