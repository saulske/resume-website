import React from 'react';
import { mount, shallow } from 'enzyme';
import SideTitle from './SideTitle';

describe('<SideTitle />', () => {
  it('should render <h2> element', () => {
    const wrapper = mount(<SideTitle />);
    expect(wrapper.find('h2').length).toBe(1);
  });

  it('should render <h2> element', () => {
    const wrapper = mount(
      <SideTitle>
        <div />
      </SideTitle>
    );
    expect(
      wrapper
        .find('h2')
        .childAt(0)
        .type()
    ).toBe('div');
  });
});
