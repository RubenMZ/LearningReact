import React from 'react';

import { BrowserRouter as Router, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import FullCalendar from '../components/FullCalendar.js'
// import Week from '../components/Week.js'
import Loading from '../components/Loading.js'

import EventsService from '../services/api/events.js'

function CalendarHeader() {
  const { t } = useTranslation();

  return (
    <div class="btn-toolbar justify-content-between m-3" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group" role="group" aria-label="First group">
        <Link to="/" class="btn btn-light">{t('calendar.title')}</Link>
      </div>
      <div class="input-group">
        <Link to="/event/new"  class="btn btn-success">{t('events.new')}</Link>
      </div>
    </div>
  );
}

async function getEvents() {
  const {data} = await EventsService.index()
  return data
}

class Calendar extends React.Component {
  constructor() {
    super()

    this.state = {
      events: getEvents()
    }
  }

  render() {
    return (
      <Router>
        <CalendarHeader/>
        <FullCalendar/>
        {/* {this.state.events.length > 0 ? <FullCalendar events={this.state.events}/> : <Loading/>} */}
      </Router>
    )
  }
}

export default Calendar;
