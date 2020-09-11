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

    this.state = { render: false }

    this.handleEventClick = this.handleEventClick.bind(this)
  }

  componentDidMount() {
    // Wait for render to fix full-calendar loading issue
    setTimeout(() => {
      this.setState({ render: true })
    }, 500)
  }

  handleEventClick(arg) {
    this.props.onEventClick(arg.event.id)
  }

  render() {
    let calendar
    if (this.state.render) {
      calendar = <FullCalendar
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
    }
    return (
      <div className='calendar p-3'>
        {calendar}
      </div>
    )
  }
}

FullCalendarComponent.propTypes = {
  events: PropTypes.array.isRequired,
  onEventClick: PropTypes.func.isRequired,
}

export default FullCalendarComponent
