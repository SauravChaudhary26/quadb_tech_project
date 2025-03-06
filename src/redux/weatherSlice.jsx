// src/redux/slices/weatherSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWeatherByCoords } from '../services/Api';

// Asynchronous thunk action for fetching weather by coordinates
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ lat, lon }) => {
    const data = await getWeatherByCoords(lat, lon);
    return data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
