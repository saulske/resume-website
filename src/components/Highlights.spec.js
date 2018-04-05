import React from 'react';
import { shallow, mount } from 'enzyme';
import Highlights from './Highlights';

describe('<Highlights />', () => {
  const data = ['You"re good', 'I"m awesome'];

  it('should render <ul> list', () => {
    const wrapper = mount(<Highlights highlights={data} />);
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('should contain highlights array', () => {
    const wrapper = mount(<Highlights highlights={data} />);
    expect(wrapper.getElement().props.highlights).toBe(data);
  });

  it('should render highlights', () => {
    const wrapper = shallow(<Highlights highlights={data} />);
    expect(wrapper.find('li').length).toBe(2);
  });
});
