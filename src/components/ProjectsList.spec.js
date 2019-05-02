import React from 'react';
import { mount } from 'enzyme';
import ProjectsList from './ProjectsList';
import Project from './Project';

describe('<ProjectList />', () => {
  let wrapper;
  const data = [{}, {}];

  it('should render two <Project /> components', () => {
    const wrapper = mount(<ProjectsList list={data} />);
    expect(wrapper.find(Project).length).toBe(2);
  });
});
