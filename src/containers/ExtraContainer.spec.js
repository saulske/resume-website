import React from 'react';
import { shallow } from 'enzyme';
import ExtraContainer from './ExtraContainer';
import Education from '../components/Education';
import Hobbies from '../components/Hobbies';

describe('<ExtraContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ExtraContainer />);
  });

  it('should render <Education /> component', () => {
    expect(wrapper.find(Education).length).toBe(1);
  });

  it('should render <Hobbies /> component', () => {
    expect(wrapper.find(Hobbies).length).toBe(1);
  });
});
