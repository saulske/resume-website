import React from 'react';
import { mount } from 'enzyme';
import Education from './Education';
import SideTitle from './SideTitle';

describe('<Education />', () => {
  let wrapper;
  const data = [
    {
      degree: 'yolo',
      location: 'Chicago',
      timeperiod: '1960s'
    }
  ];

  beforeEach(() => {
    wrapper = mount(<Education education={data} />);
  });

  describe('if correct data is passed', () => {
    it('should contain <SideTitle> component', () => {
      expect(wrapper.find(SideTitle).length).toBe(1);
    });

    it('should contain education list item', () => {
      expect(wrapper.find('h4').length).toBe(1);
      expect(wrapper.find('h4').text()).toBe(data[0].degree);
      expect(wrapper.find('span').length).toBe(2);
      expect(
        wrapper
          .find('span')
          .at(0)
          .text()
      ).toBe(data[0].location);
      expect(
        wrapper
          .find('span')
          .at(1)
          .text()
      ).toBe(data[0].timeperiod);
    });
  });

  describe('if incorrect data is passed', () => {
    it('should return empty <div /> if data is empty', () => {
      const shallowWrapper = mount(<Education education={[]} />);
      expect(shallowWrapper.find('div').length).toBe(1);
    });
  });
});
