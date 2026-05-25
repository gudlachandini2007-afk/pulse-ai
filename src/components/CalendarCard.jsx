import { useEffect, useState } from "react";

const API_KEY = "AIzaSyA8CcwkCifUO6H4yA30SwBZ2uTDdDBwRcw";
const CALENDAR_ID = "gudla.chandini2007@gmail.com";


function CalendarCard() {
  const [events, setEvents] = useState([]);

  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        CALENDAR_ID
      )}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${new Date().toISOString()}&maxResults=4`
    )
      .then((res) => res.json())
      .then((data) => {
        const colors = ["purple", "violet", "blue", "red"];

        const liveEvents =
          data.items?.map((event, index) => {
            const start = new Date(
              event.start?.dateTime || event.start?.date
            );

            const end = new Date(
              event.end?.dateTime || event.end?.date
            );

            return {
              title:
                event.summary ||
                event.description ||
                "Scheduled Event",

              time: start.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              }),

              sub: `${start.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })} – ${end.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}`,

              color: colors[index % 4],
            };
          }) || [];

        setEvents(liveEvents);
      })
      .catch((err) => {
        console.error("Calendar Error:", err);
      });
  }, []);

  return (
    <div className="dashboard-card calendar-card">
      <div className="card-top-line">
        <div className="card-title">CALENDAR & EVENTS</div>
        <span className="top-link">Google Calendar</span>
      </div>

      <div className="calendar-date">
        Today • {today}
      </div>

      <div className="calendar-events">
        {events.length === 0 ? (
          <div style={{ padding: "20px", color: "#aaa" }}>
            No scheduled events
          </div>
        ) : (
          events.map((event, index) => (
            <div className="calendar-item" key={index}>
              <div className={`timeline-bar ${event.color}`}></div>

              <div className="calendar-time">
                {event.time}
              </div>

              <div className="calendar-info">
                <h4>{event.title}</h4>
                <p>{event.sub}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="more-events">
        {events.length} live events
      </div>
    </div>
  );
}

export default CalendarCard;