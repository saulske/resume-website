import React from 'react';
import { mount, shallow } from 'enzyme';
import Hobbies from './Hobbies';
import SideTitle from './SideTitle';

describe('<Hobbies />', () => {
  let wrapper;
  const data = ['Play with Pablito'];

  beforeEach(() => {
    wrapper = mount(<Hobbies list={data} />);
  });

  it('should render <Experience /> component', () => {
    expect(wrapper.first(SideTitle).length).toBe(1);
  });

  it('should contain highlights array', () => {
    expect(wrapper.getElement().props.list).toBe(data);
  });

  it('should render <ul> list', () => {
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('should render highlights', () => {
    expect(wrapper.find('li').length).toBe(1);
  });
});
