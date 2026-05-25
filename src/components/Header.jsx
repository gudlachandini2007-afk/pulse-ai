import { useEffect, useState } from "react";

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const time = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
  });

  const fullDate = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const updatedTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <header className="dashboard-header">
      <div className="brand">
        <div className="brand-icon">⚡</div>

        <div>
          <h1>PULSE AI</h1>
          <p>Your AI Command Center</p>
        </div>
      </div>

      <div className="header-center">
        <h2>{time}</h2>
        <p>{fullDate}</p>
      </div>

      <div className="header-right">
        <div className="location-weather">
          <div>📍 Hyderabad, India</div>
          <div>☀️ 31°C</div>
        </div>

        <div className="last-updated">
          <span>Last updated : </span>
          <strong>{updatedTime}</strong>
        </div>
      </div>
    </header>
  );
}

export default Header;