function Briefing({ briefing }) {
  if (!briefing) {
    return (
      <div className="dashboard-card briefing-card">
        <div className="briefing-content">
          <div className="briefing-left">
            <div className="card-title">AI EXECUTIVE BRIEFING ✨</div>
            <h2>Loading AI Briefing...</h2>
          </div>

          <div className="briefing-orb">
            <div className="orb"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-card briefing-card">
      <div className="briefing-content">
        <div className="briefing-left">
          <div className="card-title">AI EXECUTIVE BRIEFING ✨</div>

          <h2>Good Evening 👋</h2>

          <p>{briefing}</p>
        </div>

        <div className="briefing-orb">
          <div className="orb"></div>
        </div>
      </div>
    </div>
  );
}

export default Briefing;