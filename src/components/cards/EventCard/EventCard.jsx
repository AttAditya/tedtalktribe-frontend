import "./EventCard.css";

function EventCard({ title, type, date, time, location }) {
    return (
        <div className="event-card">
            <h2>{title}</h2>
            <p>{type}</p>
            <p>{date} at {time}</p>
            <p>{location}</p>
        </div>
    );
}

export default EventCard;