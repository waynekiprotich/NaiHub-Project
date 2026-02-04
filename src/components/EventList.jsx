import EventCard from './EventCard.jsx';

function EventList({ events, category }) {
 
  const filteredEvents = category === "All" 
    ? events 
    : events.filter(event => event.category === category);

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