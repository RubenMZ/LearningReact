import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import FullCalendar from '../../components/FullCalendar'
import EventModal from '../../components/EventModal'
import Loading from '../../components/Loading'
import CalendarHeader from './CalendarHeader'

import EventsService from '../../services/api/events'

function buildEvent(event) {
  return {
    ...event,
    start_date: new Date(event.start_date),
    end_date: new Date(event.end_date),
    start: event.start_date,
    end: event.end_date,
  }
}

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      selectedEvent: null,
      showEventModal: false,
      isReady: false,
    }

    this.openEventModal = this.openEventModal.bind(this)
    this.closeEventModal = this.closeEventModal.bind(this)
    this.showEvent = this.showEvent.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
  }

  componentDidMount() {
    this.getEvents()
  }

  get calendarEvents() {
    return this.state.events.map(event => buildEvent(event))
  }

  get readOnlyModal() {
    return !!this.state.selectedEvent
  }

  async getEvents() {
    this.setState({ isReady: false })
    const { data: { data } } = await EventsService.index()
    this.setState({ events: data, isReady: true })
  }

  showEvent(eventId) {
    const event = this.findEvent(eventId)
    this.setEvent(buildEvent(event))
    this.openEventModal()
  }

  setEvent(event) {
    this.setState({ selectedEvent: event })
  }

  findEvent(eventId) {
    return this.state.events.find(event => event.id.toString() === eventId)
  }

  openEventModal() {
    this.setState({ showEventModal: true })
  }

  closeEventModal() {
    this.setEvent(null)
    this.setState({ showEventModal: false })
  }

  handleSuccess() {
    this.closeEventModal()
    this.getEvents()
  }

  render() {
    const { selectedEvent, showEventModal, isReady } = this.state
    return (
      <Router>
        <CalendarHeader onAddClick={this.openEventModal}/>
        {isReady
          ? <FullCalendar
            events={this.calendarEvents}
            onEventClick={this.showEvent}
          />
          : <Loading/>
        }
        {showEventModal
          ? <EventModal
            data={selectedEvent}
            readOnly={this.readOnlyModal}
            onCancel={this.closeEventModal}
            onSuccess={this.handleSuccess}
          /> : null
        }
      </Router>
    )
  }
}

export default Calendar
