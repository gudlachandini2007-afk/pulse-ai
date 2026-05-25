import "./App.css";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/cards.css";
import "./styles/header.css";
import "./styles/sections.css";
import "./styles/insights.css";

import { useEffect, useState } from "react";

import Header from "./components/Header";
import Briefing from "./components/Briefing";
import WeatherCard from "./components/WeatherCard";
import MarketCard from "./components/MarketCard";
import IPLCard from "./components/IPLCard";
import NewsCard from "./components/NewsCard";
import CalendarCard from "./components/CalendarCard";
import GithubCard from "./components/GithubCard";
import TasksCard from "./components/TasksCard";
import InsightsBar from "./components/InsightsBar";

const WEATHER_API_KEY = "185971c52527be6f3c3e8aff9334fbb4";

function App() {
  const [dashboardData, setDashboardData] = useState({
    weather: null,
    market: null,
    ipl: {
      team1: "RCB",
      team2: "CSK",
      score1: "187/5",
      score2: "181/7",
      status: "Match Complete",
      result: "RCB won by 6 wickets",
    },
    news: [],
    briefing: "Loading dashboard...",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        const marketResponse = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"
        );

        const weatherData = await weatherResponse.json();
        const marketData = await marketResponse.json();

        setDashboardData((prev) => ({
          ...prev,
          weather: {
            temperature: `${Math.round(weatherData.main.temp)}°C`,
            description: weatherData.weather[0].description,
            humidity: `${weatherData.main.humidity}%`,
            wind: `${weatherData.wind.speed} m/s`,
            city: weatherData.name,
          },

          market: {
            bitcoin: {
              value: `$${marketData.bitcoin.usd.toLocaleString()}`,
              change: `${marketData.bitcoin.usd_24h_change.toFixed(2)}%`,
            },
            ethereum: {
              value: `$${marketData.ethereum.usd.toLocaleString()}`,
              change: `${marketData.ethereum.usd_24h_change.toFixed(2)}%`,
            },
          },

          briefing: `Weather in ${weatherData.name} is ${Math.round(
            weatherData.main.temp
          )}°C. Bitcoin moved ${marketData.bitcoin.usd_24h_change.toFixed(
            2
          )}% in 24h. IPL score available.`,
        }));
      } catch (error) {
        console.error("Weather/Market Error:", error);
      }
    });

    fetch("http://localhost:5678/webhook/pulse-news", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((newsData) => {
        console.log("NEWS RESPONSE:", newsData);

        setDashboardData((prev) => ({
          ...prev,
          news: newsData.news || newsData.output?.news || [],
        }));
      })
      .catch((err) => {
        console.error("Tech news workflow failed:", err);
      });
  }, []);

  return (
    <div className="app-shell">
      <Header />

      <main className="dashboard">
        <section className="top-grid">
          <Briefing briefing={dashboardData.briefing} />
          <WeatherCard weather={dashboardData.weather} />
          <MarketCard market={dashboardData.market} />
          <IPLCard />
        </section>

        <section className="middle-grid">
          <NewsCard news={dashboardData.news} />
          <CalendarCard />
          <GithubCard />
        </section>

        <section className="bottom-grid">
          <TasksCard />
        </section>

        <section className="insights-grid">
          <InsightsBar
  weather={dashboardData.weather}
  market={dashboardData.market}
  tasks={dashboardData.tasks}
  github={dashboardData.github}
  calendarCount={dashboardData.calendarCount}
/>
        </section>
      </main>
    </div>
  );
}

export default App;