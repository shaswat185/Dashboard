// FullCalendarComponent.jsx
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for drag and drop
// import '@fullcalendar/common/main.css'; 
// import '@fullcalendar/daygrid/main.css'; 
// import '@fullcalendar/timegrid/main.css'; 

const FullCalendarComponent = () => {
  const handleDateClick = (arg) => {
    alert(`Date clicked: ${arg.dateStr}`);
  };

  const handleEventClick = (clickInfo) => {
    alert(`Event: ${clickInfo.event.title}`);
  };

  const events = [
    {
      title: 'Board meeting',
      date: '2024-10-22',
    },
    {
      title: 'Team lunch',
      start: '2024-10-23T12:00:00',
      end: '2024-10-23T13:00:00',
    },
  ];

  return (
    <div className="full-calendar-container container">
      <h2>Full Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true} // Enable drag-and-drop functionality
      />
    </div>
  );
};

export default FullCalendarComponent;
