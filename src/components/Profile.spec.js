import React from 'react';
import { mount } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', () => {
  let wrapper;
  const data = {
    first: 'Michael',
    last: 'Jordan',
    position: 'Shooting Guard',
    about: 'GOAT'
  };

  beforeEach(() => {
    wrapper = mount(<Profile bio={data} />);
  });

  it('should contain correct props', () => {
    expect(wrapper.getElement().props.bio).toBe(data);
  });

  it('should have avatar', () => {
    expect(wrapper.find('img').length).toBe(1);
  });

  it('should have name', () => {
    expect(
      wrapper
        .find('h1')
        .text()
        .trim()
    ).toBe(`${data.first} ${data.last}`);
  });

  it('should have position', () => {
    expect(
      wrapper
        .find('h3')
        .text()
        .trim()
    ).toBe(data.position);
  });
});
