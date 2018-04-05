import React from 'react';
import { mount } from 'enzyme';
import FooterContainer from './FooterContainer';

describe('<FooterContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<FooterContainer />);
  });

  it('should contain correct text', () => {
    expect(
      wrapper
        .find('div')
        .text()
        .trim()
    ).toBe('Baked by saulske');
  });
});
