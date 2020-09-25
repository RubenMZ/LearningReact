import React from 'react'

function Event(eventInfo) {
  const { event } = eventInfo
  return (
    <div className={`event-${event.id}`}>
        {/* <span className="fc-event-time">{timeText}</span> */}
        <span className="fc-event-title fc-sticky">{event.title}</span>
    </div>
  )
}

export default Event
