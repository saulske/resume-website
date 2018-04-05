import React from 'react';
import { mount } from 'enzyme';
import Title from './Title';
import Icon from './Icon';

describe('<Title />', () => {
  let wrapper;
  const data = {
    icon: 'Test icon',
    title: 'GOAT'
  };

  beforeEach(() => {
    wrapper = mount(<Title icon={data.icon} title={data.title} />);
  });

  it('should have correct props', () => {
    expect(wrapper.getElement().props.icon).toBe(data.icon);
    expect(wrapper.getElement().props.title).toBe(data.title);
  });

  it('should render <h2> element', () => {
    expect(wrapper.find('h2').length).toBe(1);
  });

  it('should render title text', () => {
    expect(wrapper.text().trim()).toBe(data.title);
  });

  it('should render <Icon /> element', () => {
    expect(wrapper.find(Icon).length).toBe(1);
  });
});
