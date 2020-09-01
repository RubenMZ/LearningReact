import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import Event from './Event.js'

export default class FullCalendarComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [
        { title: 'event 1', date: '2020-09-01' },
        { title: 'event 2', date: '2020-09-02' }
      ] // props.events
    };
  }

  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        dateClick={this.handleDateClick}
        selectable='true'
        eventContent={Event}
        events={this.state.events}
      />
    )
  }
  handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
    console.log(arg)
  }
}