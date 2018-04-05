import React from 'react';
import { mount } from 'enzyme';
import Experience from './Experience';

describe('<Experience />', () => {
  let wrapper;
  const data = {
    company: 'Chicago Bulls',
    position: 'Point Guard',
    timeperiod: 'Draft Class 2003',
    highlights: [],
    keywords: []
  };

  beforeEach(() => {
    wrapper = mount(<Experience data={data} />);
  });

  it('should render header', () => {
    expect(wrapper.find('h3').text()).toBe(data.position);
    expect(
      wrapper
        .find('span')
        .at(0)
        .text()
    ).toBe(data.timeperiod);
    expect(
      wrapper
        .find('span')
        .at(1)
        .text()
    ).toBe(data.company);
  });
});
