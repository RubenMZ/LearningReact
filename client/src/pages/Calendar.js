import React, { Component } from 'react';

import { BrowserRouter as Router, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import FullCalendar from '../components/FullCalendar.js'
import EventModal from '../components/EventModal.js'
import Loading from '../components/Loading.js'

import EventsService from '../services/api/events.js'

function CalendarHeader(props) {
  const { t } = useTranslation();

  return (
    <div class="btn-toolbar justify-content-between m-3" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group" role="group" aria-label="First group">
        <Link to="/" class="btn btn-light">{t('calendar.title')}</Link>
      </div>
      <div class="input-group">
        <button onClick={props.onAddClick} class="btn btn-success">{t('events.add')}</button>
      </div>
    </div>
  );
}

async function getEvents() {
  const {data: {data}} = await EventsService.index()
  return data
}

class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      selectedEvent: null,
      showEventModal: false
    }

    this.openEventModal = this.openEventModal.bind(this)
    this.closeEventModal = this.closeEventModal.bind(this)
    this.showEvent = this.showEvent.bind(this)
    getEvents().then(events => this.setState({events}))
  }

  get calendarEvents() {
    return this.state.events.map(event => this.buildEvent(event))
  }

  get readOnlyModal() {
    return !!this.state.selectedEvent
  }

  buildEvent(event) {
    return {
      ...event,
      start_date: new Date(event.start_date),
      end_date: new Date(event.end_date),
      start: event.start_date,
      end: event.end_date,
    }
  }

  showEvent(eventId) {
    const event = this.findEvent(eventId)
    this.setEvent(this.buildEvent(event))
    this.openEventModal()
  }

  setEvent(event) {
    this.setState({selectedEvent: event})
  }

  findEvent(eventId) {
    return this.state.events.find(event => event.id.toString() === eventId)
  }

  openEventModal() {
    this.setState({showEventModal: true})
  }

  closeEventModal() {
    this.setEvent(null)
    this.setState({showEventModal: false})
  }

  render() {
    const {selectedEvent, showEventModal} = this.state
    return (
      <Router>
        <CalendarHeader onAddClick={this.openEventModal}/>
        {this.calendarEvents.length > 0 ? <FullCalendar events={this.calendarEvents} onEventClick={this.showEvent}/> : <Loading/>}
        {showEventModal ? <EventModal data={selectedEvent} readOnly={this.readOnlyModal} close={this.closeEventModal}/> : null }
      </Router>
    )
  }
}

export default Calendar;
