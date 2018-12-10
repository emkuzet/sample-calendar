import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import  {Calendar} from '../../components/calendar/calendar'


Enzyme.configure({ adapter: new Adapter() })

function setup() {

    const props = {
      calendarItem: [],
      createCalendarOnInit: jest.fn(),
      updateCalendar: jest.fn()
    }
  
    const enzymeWrapper = shallow(<Calendar {...props} />)
  
    return {
      props,
      enzymeWrapper
    }
  }

describe('<Calendar />', () => {
    it('Render calendar component', () => {
     const {enzymeWrapper} = setup()
     expect(enzymeWrapper.exists('.calendar')).toEqual(true);
    });
})