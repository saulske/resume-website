import React from 'react';
import { mount } from 'enzyme';
import Contacts from './Contacts';

describe('<Contacts />', () => {
  let wrapper;
  const data = [
    {
      icon: 'jest',
      key: 'email',
      value: 'email@gmail.com'
    }
  ];

  beforeEach(() => {
    wrapper = mount(<Contacts data={data} />);
  });

  it('should render <ul> list ', () => {
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('should render <li> element', () => {
    expect(wrapper.find('li').length).toBe(1);
  });

  it('should render link <a> element with icon', () => {
    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('i.fa').length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('span').text()).toBe(data[0].value);
  });

  it('should return empty div if no data passed', () => {
    const emptyWrapper = mount(<Contacts data={[]} />);
    expect(emptyWrapper.find('div').length).toBe(1);
    expect(emptyWrapper.find('a').length).not.toBe(1);
    expect(emptyWrapper.find('i.fa').length).not.toBe(1);
    expect(emptyWrapper.find('span').length).not.toBe(1);
  });
});
