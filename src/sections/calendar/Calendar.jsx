import { EventCard } from "../../components/cards/event";
import "./Calendar.css";

function Calendar() {
    let events = {
        "EC1": {
            title: "Event 1",
            type: "Meeting",
            date: "2021-01-01",
            time: "10:00",
            location: "Room 1"
        },
        "EC2": {
            title: "Event 2",
            type: "Presentation",
            date: "2021-01-02",
            time: "11:00",
            location: "Room 2"
        },
        "EC3": {
            title: "Event 3",
            type: "Workshop",
            date: "2021-01-03",
            time: "12:00",
            location: "Room 3"
        },
        "EC4": {
            title: "Event 4",
            type: "Seminar",
            date: "2021-01-04",
            time: "13:00",
            location: "Room 4"
        },
        "EC5": {
            title: "Event 5",
            type: "Conference",
            date: "2021-01-05",
            time: "14:00",
            location: "Room 5"
        }
    };

    return (
        <section className="calendar">
            <ul className="event-list">
                {
                    Object.keys(events).map((event) => {
                        return (
                            <li key={event} className="event-list-item">
                                <EventCard
                                    title={events[event].title}
                                    type={events[event].type}
                                    date={events[event].date}
                                    time={events[event].time}
                                    location={events[event].location}
                                />
                            </li>
                        );
                    })
                }
            </ul>

            <div className="event-details">
            </div>
        </section>
    );
}

export default Calendar;