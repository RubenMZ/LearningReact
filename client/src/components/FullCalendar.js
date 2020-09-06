import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import Event from './Event.js'

export default class FullCalendarComponent extends React.Component {
  constructor(props) {
    super(props)

    // [{ title: 'event 1', date: '2020-09-01', start: ..., end: ...}]
    this.state = {events: props.events}
    this.handleEventClick = this.handleEventClick.bind(this)
  }

  handleEventClick(arg) {
    this.props.onEventClick(arg.event.id)
  }

  render() {
    return (
      <div class='p-3'>
        <FullCalendar
          timeZone='UTC'
          plugins={[ dayGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          eventClick={this.handleEventClick}
          selectable='true'
          editable='true'
          eventContent={Event}
          events={this.state.events}
        />
      </div>
    )
  }
}