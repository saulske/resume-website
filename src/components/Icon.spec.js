import React from 'react';
import { mount } from 'enzyme';
import Icon from './Icon';

describe('<Icon />', () => {
  let wrapper;
  const icon = 'pablo';

  beforeEach(() => {
    wrapper = mount(<Icon icon={icon} />);
  });

  it('should render icon', () => {
    expect(wrapper.find('i.fa-pablo').length).toBe(1);
  });
});
