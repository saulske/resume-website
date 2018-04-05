import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';
import Section from '../components/Section';
import Details from '../components/Details';
import ExperienceList from '../components/ExperienceList';
// import ProjectsList from '../components/ProjectsList';
import Reference from '../components/Reference';
import SkillsList from '../components/SkillsList';

describe('<MainContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainContainer />);
  });

  it('should render <Section /> components', () => {
    expect(wrapper.find(Section).length).toBe(4);
  });

  it('should render <Details /> component', () => {
    expect(wrapper.find(Details).length).toBe(1);
  });

  it('should render <ExperienceList /> component', () => {
    expect(wrapper.find(ExperienceList).length).toBe(1);
  });

  // it('should render <ProjectsList /> component', () => {
  //   expect(wrapper.find(ProjectsList).length).toBe(1);
  // });

  it('should render <Reference /> component', () => {
    expect(wrapper.find(Reference).length).toBe(1);
  });

  it('should render <SkillsList /> component', () => {
    expect(wrapper.find(SkillsList).length).toBe(1);
  });
});
