import React from 'react';
import { mount } from 'enzyme';
import Keywords from './Keywords';
import { keyframes } from 'styled-components';

describe('<Keywords />', () => {
  let wrapper;
  const keywords = ['spam', 'rice'];

  beforeEach(() => {
    wrapper = mount(<Keywords keywords={keywords} />);
  });

  it('should render "Used" text', () => {
    expect(
      wrapper
        .find('b')
        .text()
        .trim()
    ).toBe('Used:');
  });

  it('should contain correct props', () => {
    expect(wrapper.getElement().props.keywords).toBe(keywords);
  });

  it('should render correct props', () => {
    expect(
      wrapper
        .find('span')
        .at(1)
        .text()
        .trim()
    ).toBe('spam,');
  });
});
