import React from 'react';
import { shallow, mount } from 'enzyme';
import SkillsList from './SkillsList';

describe('<SkillsList />', () => {
  let wrapper;
  const data = ['', ''];

  it('should return empty <div> if no data passed', () => {
    const wrapper = mount(<SkillsList />);
    expect(wrapper.find('div').length).toBe(1);
  });

  it('should render <ul> list', () => {
    const wrapper = mount(<SkillsList list={data} />);
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('should render list <li> elements', () => {
    const wrapper = mount(<SkillsList list={data} />);
    expect(wrapper.find('li').length).toBe(2);
  });
});
