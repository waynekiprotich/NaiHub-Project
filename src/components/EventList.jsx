import EventCard from './EventCard.jsx';

function EventList({ events, category }) {
  
 
  let filteredEvents;
      if (category === "All") {
        filteredEvents = events;
      } else {
        filteredEvents = events.filter(event => event.category === category);
      }

  return (
    <div className="event-grid">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      ) : (
        <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>No events found for this category.</p>
      )}
    </div>
  );
}

export default EventList;