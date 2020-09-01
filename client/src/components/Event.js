import React from 'react';

function Event(eventInfo) {
  return (
    <div>
      <b>{eventInfo.timeText}</b>
      <b>{eventInfo.event.title}{eventInfo.event.date}</b>
    </div>
  )
};

export default Event;
