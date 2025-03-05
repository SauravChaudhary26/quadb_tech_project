// WeatherWidget.jsx
import { useState, useEffect } from "react";
import { getWeatherByCoords } from "../../services/Api";

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const data = await getWeatherByCoords(latitude, longitude);
          setWeather(data);
        } catch (err) {
          setError("Failed to fetch weather data");
        }
      },
      (error) => {
        setError("Unable to retrieve your location");
      }
    );
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return weather ? (
    <div>🌡️ {weather.main.temp}°C</div>
  ) : (
    <div>Loading...</div>
  );
}

export default WeatherWidget;