import { useEffect, useState } from "react";

const USERNAME = "gudlachandini2007-afk";

function GithubCard() {
  const [profile, setProfile] = useState(null);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });

    fetch(`https://api.github.com/users/${USERNAME}/events/public`)
      .then((res) => res.json())
      .then((data) => {
        const recent = data.slice(0, 4).map((event) => {
          const repo = event.repo?.name || "Unknown repo";

          let action = "Activity";

          if (event.type === "PushEvent") {
            action = `Pushed commits to ${repo}`;
          } else if (event.type === "PullRequestEvent") {
            action = `Pull request in ${repo}`;
          } else if (event.type === "IssuesEvent") {
            action = `Issue activity in ${repo}`;
          } else if (event.type === "WatchEvent") {
            action = `Starred ${repo}`;
          }

          return action;
        });

        setActivities(recent);
      });
  }, []);

  if (!profile) {
    return (
      <div className="dashboard-card github-card">
        <div style={{ padding: "20px" }}>Loading GitHub...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-card github-card">
      <div className="card-top-line">
        <div className="card-top-left">
          <div className="card-title">GITHUB ACTIVITY</div>
          <span className="live-badge">LIVE</span>
        </div>

        <a
          href={profile.html_url}
          target="_blank"
          rel="noreferrer"
          className="top-link"
        >
          View profile
        </a>
      </div>

      <div className="github-user">
        <div className="avatar">
          {profile.login?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h3>{profile.login}</h3>
          <p>{profile.bio || "Active developer"}</p>
        </div>
      </div>

      <div className="github-stats">
        <div>
          <strong>{profile.public_repos}</strong>
          <span>Repositories</span>
        </div>

        <div>
          <strong>{profile.followers}</strong>
          <span>Followers</span>
        </div>

        <div>
          <strong>{profile.following}</strong>
          <span>Following</span>
        </div>

        <div>
          <strong>{activities.length}</strong>
          <span>Activities</span>
        </div>
      </div>

      <div className="activity-title">Recent Activity</div>

      <div className="activity-list">
        {activities.map((item, index) => (
          <div key={index} className="activity-item">
            • {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GithubCard;