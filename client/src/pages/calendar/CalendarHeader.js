import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function CalendarHeader({ onAddClick }) {
  const { t } = useTranslation()

  return (
    <div className="btn-toolbar justify-content-between p-3" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group" role="group" aria-label="First group">
        <Link to="/calendar" className="btn btn-light">
          {t('calendar.title')}
        </Link>
      </div>
      <div className="input-group">
        <button id="add-event-button" onClick={onAddClick} className="btn btn-success">
          {t('events.add')}
        </button>
      </div>
    </div>
  )
}

CalendarHeader.propTypes = {
  onAddClick: PropTypes.func.isRequired,
}

export default CalendarHeader
