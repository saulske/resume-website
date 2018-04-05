import React from 'react';
import { shallow } from 'enzyme';
import ExperienceList from './ExperienceList';
import Experience from './Experience';

describe('<ExperienceList />', () => {
  const data = [{}];

  it('should render <Experience /> component', () => {
    const wrapper = shallow(<ExperienceList list={data} />);
    expect(wrapper.first(Experience).length).toBe(1);
  });
});
