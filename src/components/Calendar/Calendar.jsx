import "./Calendar.css";

import { EventCard, Promo } from "../";
import { useState } from "react";

function Calendar() {
    let events = {
        "EC1": {
            title: "Event 1",
            date: "2021-01-01",
            time: "10:00",
            thumbnail: "https://picsum.photos/1280/721",
            location: "Room 1",
            description: "Event 1 Description",
            actions: [
                {
                    id: "action-1",
                    label: "Action Button 1",
                    handler: () => {
                        console.log("Action 1 Clicked");
                    }
                },
                {
                    id: "action-2",
                    label: "Action Button 2",
                    handler: () => {
                        console.log("Action 2 Clicked");
                    }
                }
            ]
        },
        "EC2": {
            title: "Event 2",
            date: "2021-01-02",
            time: "11:00",
            thumbnail: "https://picsum.photos/1280/722",
            location: "Room 2",
            description: "Event 2 Description",
            actions: [
                {
                    id: "action-1",
                    label: "Action Button 1",
                    handler: () => {
                        console.log("Action 1 Clicked");
                    }
                },
                {
                    id: "action-2",
                    label: "Action Button 2",
                    handler: () => {
                        console.log("Action 2 Clicked");
                    }
                }
            ]
        },
        "EC3": {
            title: "Event 3",
            date: "2021-01-03",
            time: "12:00",
            thumbnail: "https://picsum.photos/1280/723",
            location: "Room 3",
            description: "Event 3 Description",
            actions: [
                {
                    id: "action-1",
                    label: "Action Button 1",
                    handler: () => {
                        console.log("Action 1 Clicked");
                    }
                },
                {
                    id: "action-2",
                    label: "Action Button 2",
                    handler: () => {
                        console.log("Action 2 Clicked");
                    }
                }
            ]
        },
        "EC4": {
            title: "Event 4",
            date: "2021-01-04",
            time: "13:00",
            thumbnail: "https://picsum.photos/1280/724",
            location: "Room 4",
            description: "Event 4 Description",
            actions: [
                {
                    id: "action-1",
                    label: "Action Button 1",
                    handler: () => {
                        console.log("Action 1 Clicked");
                    }
                },
                {
                    id: "action-2",
                    label: "Action Button 2",
                    handler: () => {
                        console.log("Action 2 Clicked");
                    }
                }
            ]
        },
        "EC5": {
            title: "Event 5",
            date: "2021-01-05",
            time: "14:00",
            thumbnail: "https://picsum.photos/1280/725",
            location: "Room 5",
            description: "Event 5 Description",
            actions: [
                {
                    id: "action-1",
                    label: "Action Button 1",
                    handler: () => {
                        console.log("Action 1 Clicked");
                    }
                },
                {
                    id: "action-2",
                    label: "Action Button 2",
                    handler: () => {
                        console.log("Action 2 Clicked");
                    }
                }
            ]
        },
        "EC6": {
            title: "Event 6",
            date: "2021-01-06",
            time: "15:00",
            thumbnail: "https://picsum.photos/1280/726",
            location: "Room 6",
            description: "Event 6 Description",
            actions: [
                {
                    id: "action-1",
                    label: "Action Button 1",
                    handler: () => {
                        console.log("Action 1 Clicked");
                    }
                },
                {
                    id: "action-2",
                    label: "Action Button 2",
                    handler: () => {
                        console.log("Action 2 Clicked");
                    }
                }
            ]
        }
    };

    let [selectedEvent, setSelectedEvent] = useState(null);

    function switchEvent(eventId) {
        setSelectedEvent(eventId);
    }

    return (
        <section className="calendar">
            <div className="event-list-panel">
                <ul className="event-list">
                    {
                        Object.keys(events).map((event) => {
                            return (
                                <li key={event} className="event-list-item" onClick={() => switchEvent(event)}>
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
            </div>

            <div className="event-details">
                {
                    selectedEvent ? (
                        <Promo
                            title={events[selectedEvent].title}
                            thumbnail={events[selectedEvent].thumbnail}
                            date={events[selectedEvent].date}
                            time={events[selectedEvent].time}
                            location={events[selectedEvent].location}
                            description={events[selectedEvent].description}
                            actions={events[selectedEvent].actions}
                        />
                    ) : ""
                }
            </div>

            <div className="image-force-preload" style={{ display: "none" }}>
                {
                    Object.keys(events).map((event) => {
                        return (
                            <img key={event} src={events[event].thumbnail} alt="Event Thumbnail" />
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Calendar;