function NewsCard({ news }) {
  if (!news || news.length === 0) {
    return (
      <div className="dashboard-card news-card">
        <div className="card-top-line">
          <div className="card-top-left">
            <div className="card-title">TECH NEWS</div>
            <span className="live-badge">LIVE</span>
          </div>
        </div>

        <div className="news-list">
          <div className="news-item">
            <div className="news-icon">📰</div>
            <div className="news-content">
              <h4>Loading tech news...</h4>
              <p>PULSE AI</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-card news-card">
      <div className="card-top-line">
        <div className="card-top-left">
          <div className="card-title">TECH NEWS</div>
          <span className="live-badge">LIVE</span>
        </div>
      </div>

      <div className="news-list">
        {news.map((item, index) => (
          <div className="news-item" key={index}>
            <div className="news-icon">{item.icon || "📰"}</div>

            <div className="news-content">
              <h4>{item.title}</h4>
              <p>
                {item.time || "Now"} • {item.source || "AI News"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsCard;