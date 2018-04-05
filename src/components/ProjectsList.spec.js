import React from 'react';
import { shallow } from 'enzyme';
import ProjectsList from './ProjectsList';
import Project from './Project';

describe('<ProjectList />', () => {
  let wrapper;
  const data = [{}, {}];

  it('should render two <Project /> components', () => {
    const wrapper = shallow(<ProjectsList list={data} />);
    expect(wrapper.first(Project).length).toBe(2);
  });
});
