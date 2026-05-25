import { useEffect, useState } from "react";

function IPLCard() {
  const [ipl, setIpl] = useState(null);
  const [message, setMessage] = useState("Fetching live match...");

  useEffect(() => {
    fetch("https://api.cricapi.com/v1/currentMatches?apikey=demo&offset=0")
      .then((res) => res.json())
      .then((data) => {
        const iplMatch = data.data?.find(
          (match) =>
            match.name &&
            match.name.toLowerCase().includes("ipl")
        );

        if (iplMatch) {
          setIpl({
            team1: iplMatch.teams?.[0] || "Team 1",
            team2: iplMatch.teams?.[1] || "Team 2",
            score1:
              iplMatch.score?.[0]
                ? `${iplMatch.score[0].r}/${iplMatch.score[0].w}`
                : "Yet to bat",
            score2:
              iplMatch.score?.[1]
                ? `${iplMatch.score[1].r}/${iplMatch.score[1].w}`
                : "Yet to bat",
            status: iplMatch.status || "Live Match",
            result: "IPL Match",
          });
        } else {
          setMessage("No live IPL match right now");
        }
      })
      .catch(() => {
        setMessage("Unable to load IPL data");
      });
  }, []);

  if (!ipl) {
    return (
      <div className="dashboard-card ipl-card">
        <div className="card-header-row">
          <div className="card-title">IPL LIVE</div>
          <span className="live-badge">LIVE</span>
        </div>

        <div style={{ padding: "20px", textAlign: "center" }}>
          {message}
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-card ipl-card">
      <div className="card-header-row">
        <div className="card-title">IPL LIVE</div>
        <span className="live-badge">LIVE</span>
      </div>

      <div className="ipl-score-box">
        <div className="match-status">{ipl.status}</div>

        <div className="teams-row">
          <div className="team-block">
            <div className="team-name">{ipl.team1}</div>
            <div className="team-score">{ipl.score1}</div>
          </div>

          <div className="vs-text">VS</div>

          <div className="team-block">
            <div className="team-name">{ipl.team2}</div>
            <div className="team-score">{ipl.score2}</div>
          </div>
        </div>

        <div className="winner-text">{ipl.result}</div>
      </div>
    </div>
  );
}

export default IPLCard;