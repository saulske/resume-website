import React from 'react';
import { mount } from 'enzyme';
import Project from './Project';

describe('<Project />', () => {
  let wrapper;
  const data = {
    link: 'http://example.com/',
    title: 'example',
    description: 'Example Description'
  };

  beforeEach(() => {
    wrapper = mount(<Project data={data} />);
  });

  it('should contain correct props', () => {
    expect(wrapper.getElement().props.data).toBe(data);
  });

  it('should be rendered in <p> element', () => {
    expect(wrapper.childAt(0).type()).toBe('p');
  });

  it('should have link element', () => {
    expect(wrapper.find('a').instance().href).toBe(data.link);
    expect(wrapper.find('a').text()).toBe(data.title);
  });

  it('should have description', () => {
    expect(wrapper.contains(data.description)).toBe(true);
  });
});
