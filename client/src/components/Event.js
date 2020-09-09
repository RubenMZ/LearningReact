import React from 'react';

function Event(eventInfo) {
  const {event, timeText} = eventInfo
  return (
    <div class={`event-${event.id}`}>
        <span class="fc-event-time">{timeText}</span>
        <span class="fc-event-title fc-sticky">{event.title}</span>
    </div>
  )
};

export default Event;
