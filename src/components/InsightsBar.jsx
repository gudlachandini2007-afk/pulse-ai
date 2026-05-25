function InsightsBar({
  weather,
  market,
  tasks,
  github,
  calendarCount,
}) {
  const insights = [];

  if (weather) {
    insights.push({
      icon: "🌤",
      text: `Current weather in ${weather.city} is ${weather.temperature} with ${weather.description}.`,
    });
  }

  if (market?.bitcoin) {
    insights.push({
      icon: "₿",
      text: `Bitcoin moved ${market.bitcoin.change} in the last 24 hours.`,
    });
  }

  if (tasks?.length > 0) {
    insights.push({
      icon: "📝",
      text: `You currently have ${tasks.length} active tasks requiring attention.`,
    });
  }

  if (github) {
    insights.push({
      icon: "</>",
      text: `${github.public_repos} repositories and ${github.followers} followers on GitHub.`,
    });
  }

  if (calendarCount > 0) {
    insights.push({
      icon: "📅",
      text: `You have ${calendarCount} upcoming calendar events.`,
    });
  }

  return (
    <div className="dashboard-card insights-main">
      <div className="insights-header">
        <div className="card-title">
          AI INSIGHTS & RECOMMENDATIONS
        </div>
        <span className="live-badge">LIVE</span>
      </div>

      <div className="insight-grid">
        {insights.length === 0 ? (
          <div style={{ padding: "20px", color: "#aaa" }}>
            Generating live insights...
          </div>
        ) : (
          insights.map((item, index) => (
            <div key={index} className="insight-pill">
              <div className="insight-icon">{item.icon}</div>
              <div>{item.text}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default InsightsBar;