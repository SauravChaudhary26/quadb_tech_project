import { useState, useEffect } from "react";
import { getWeather } from "../../services/Api";

function WeatherWidget({ location }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather(location).then((data) => setWeather(data));
  }, [location]);

  return weather ? <div>🌡️ {weather.main.temp}°C</div> : <div>Loading...</div>;
}

export default WeatherWidget;
