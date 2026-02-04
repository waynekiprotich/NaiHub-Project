
function EventCard({ event }) {
  return (
    <div className="event-card">

      <div className="image-container">
        <img src={event.image} alt={event.title} className="event-image" />
      </div>

      <div className="event-details">
        <p>LOCATION: {event.location}</p>
        <p>Date: {event.date}</p>
        <p>{event.category}</p>
        <p>ENTRANCE:{event.price}</p>
        <p><a href={event.contact}>EVENT LINK </a></p>
      </div>
    </div>
  );
}

export default EventCard