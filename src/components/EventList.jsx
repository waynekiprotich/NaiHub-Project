import EventCard from './EventCard.jsx';
import eventData from '../Data/events.json';

function EventList() {
  return (
    <div className="event-grid">
      {eventData.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;