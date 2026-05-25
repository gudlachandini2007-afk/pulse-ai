function MarketCard({ market }) {
  if (!market) {
    return (
      <div className="dashboard-card market-card">
        <div className="card-header-row">
          <div className="card-title">MARKET SNAPSHOT</div>
          <span className="live-badge">LIVE</span>
        </div>

        <div className="metric">Loading...</div>
      </div>
    );
  }

  const markets = [
    {
      name: "Bitcoin (BTC)",
      value: market.bitcoin.value,
      change: market.bitcoin.change,
    },
    {
      name: "Ethereum (ETH)",
      value: market.ethereum.value,
      change: market.ethereum.change,
    },
  ];

  return (
    <div className="dashboard-card market-card">
      <div className="card-header-row">
        <div className="card-title">MARKET SNAPSHOT</div>
        <span className="live-badge">LIVE</span>
      </div>

      <div className="market-list">
        {markets.map((item, index) => (
          <div key={index} className="market-item">
            <div>
              <h4>{item.name}</h4>
            </div>

            <div className="market-values">
              <strong>{item.value}</strong>
              <span>{item.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="source-label">Live CoinGecko API</div>
    </div>
  );
}

export default MarketCard;