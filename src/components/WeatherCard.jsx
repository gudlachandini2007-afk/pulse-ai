function WeatherCard({ weather }) {
  if (!weather) {
    return (
      <div className="dashboard-card weather-card">
        <div className="card-header-row">
          <div className="card-title">WEATHER</div>
          <span className="live-badge">LIVE</span>
        </div>

        <div className="metric">Loading...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-card weather-card">
      <div className="card-header-row">
        <div className="card-title">WEATHER</div>
        <span className="live-badge">LIVE</span>
      </div>

      <div className="weather-main">
        <div>
          <div className="metric">{weather.temperature}</div>
          <div className="weather-condition">{weather.description}</div>
        </div>

        <div className="weather-icon">☀️</div>
      </div>

      <div className="weather-stats">
        <div>
          <span>Humidity</span>
          <strong>{weather.humidity}</strong>
        </div>

        <div>
          <span>Wind</span>
          <strong>{weather.wind}</strong>
        </div>

        <div>
          <span>City</span>
          <strong>{weather.city}</strong>
        </div>
      </div>

      <div className="source-label">Live Weather API</div>
    </div>
  );
}

export default WeatherCard;