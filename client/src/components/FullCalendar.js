import React from 'react'
import PropTypes from 'prop-types'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

import Event from './Event'

class FullCalendarComponent extends React.Component {
  constructor(props) {
    super(props)

    this.handleEventClick = this.handleEventClick.bind(this)
  }

  handleEventClick(arg) {
    this.props.onEventClick(arg.event.id)
  }

  render() {
    return (
      <div className='calendar p-3'>
        <FullCalendar
          timeZone='UTC'
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          eventClick={this.handleEventClick}
          selectable={true}
          editable={true}
          selectMirror={true}
          dayMaxEvents={true}
          eventContent={Event}
          initialEvents={this.props.events}
          events={this.props.events}
          contentHeight="auto"
        />
      </div>
    )
  }
}

FullCalendarComponent.propTypes = {
  events: PropTypes.array.isRequired,
  onEventClick: PropTypes.func.isRequired,
}

export default FullCalendarComponent
