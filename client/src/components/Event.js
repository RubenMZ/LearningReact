import React from 'react';

function Event(eventInfo) {
  // $('[data-toggle="popover"]').popover()
  return (
    <div>
        <span class="fc-event-time">{eventInfo.timeText}</span>
        <span class="fc-event-title fc-sticky">{eventInfo.event.title}</span>
    </div>
  )
};

export default Event;
