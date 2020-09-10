import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'

import Calendar from '../pages/calendar/Calendar'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => (<Redirect to="/calendar" />)}/>
      <Route path="/calendar">
        <Calendar/>
      </Route>
    </Switch>
  )
}

export default Routes
