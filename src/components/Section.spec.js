import React from 'react';
import { shallow, mount } from 'enzyme';
import Section from './Section';
import Title from './Title';

describe('<Section />', () => {
  const icon = 'Test icon';
  const title = 'Test Title';

  it('should render styled <div> container', () => {
    const wrapper = shallow(<Section />);
    expect(wrapper.getElement().type.displayName).toBe('styled.div');
  });

  it('should contain correct props', () => {
    const wrapper = mount(<Section icon={icon} title={title} />);
    expect(wrapper.prop('icon')).toBe(icon);
    expect(wrapper.prop('title')).toBe(title);
  });

  it('should render <Title /> component', () => {
    const wrapper = shallow(<Section icon={icon} title={title} />);
    expect(wrapper.find(Title).length).toBe(1);
  });

  it('should render children', () => {
    const wrapper = shallow(
      <Section>
        <div />
      </Section>
    );
    expect(wrapper.childAt(1).type()).toBe('div');
  });
});
