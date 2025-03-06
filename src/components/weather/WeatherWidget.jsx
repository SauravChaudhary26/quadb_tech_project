// src/components/Weather/WeatherWidget.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux/weatherSlice';

function WeatherWidget() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(fetchWeather({ lat: latitude, lon: longitude }));
      },
      (err) => {
        console.error("Error obtaining geolocation:", err);
      }
    );
  }, [dispatch]);

  if (loading) {
    return <div>Loading weather...</div>;
  }

  if (error) {
    // Display error.message if available, else the error value.
    return <div>Error: {error.message || error}</div>;
  }

  if (!data) {
    return <div>No weather data available</div>;
  }

  return <div>🌡️ {data.main.temp}°C</div>;
}

export default WeatherWidget;
