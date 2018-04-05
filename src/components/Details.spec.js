import React from 'react';
import { mount } from 'enzyme';
import Details from './Details';

describe('<Details />', () => {
  let wrapper;
  const text = 'Hello World';

  beforeEach(() => {
    wrapper = mount(<Details text={text} />);
  });

  it('should render <p> element', () => {
    expect(wrapper.find('p').length).toBe(1);
  });

  it('should render passed prop', () => {
    expect(wrapper.find('p').text()).toBe(text);
  });
});
