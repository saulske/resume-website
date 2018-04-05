import React from 'react';
import { shallow } from 'enzyme';
import ProfileContainer from './ProfileContainer';
import Profile from '../components/Profile';
import Contacts from '../components/Contacts';

describe('<ProfileContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProfileContainer />);
  });

  it('should render <Profile /> components', () => {
    expect(wrapper.find(Profile).length).toBe(1);
  });

  it('should render <Contacts /> component', () => {
    expect(wrapper.find(Contacts).length).toBe(1);
  });
});
