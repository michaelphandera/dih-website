// app/services/weatherService.ts

import { districtData } from '@/app/districts/district-data';

// Define types for the weather API response
export interface WeatherApiResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  // Units information
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    apparent_temperature: string;
    is_day: string;
    precipitation: string;
    rain: string;
    showers: string;
    snowfall: string;
    weather_code: string;
    cloud_cover: string;
    pressure_msl: string;
    surface_pressure: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
    wind_gusts_10m: string;
  };

  // Current weather data
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    is_day: number;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    weather_code: number;
    cloud_cover: number;
    pressure_msl: number;
    surface_pressure: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    wind_gusts_10m: number;
  };

  // Hourly units information
  hourly_units: {
    time: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    apparent_temperature: string;
    precipitation_probability: string;
    precipitation: string;
    rain: string;
    showers: string;
    snowfall: string;
    weather_code: string;
    cloud_cover: string;
    visibility: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
    wind_gusts_10m: string;
  };

  // Hourly forecast data
  hourly: {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    apparent_temperature: number[];
    precipitation_probability: number[];
    precipitation: number[];
    rain: number[];
    showers: number[];
    snowfall: number[];
    weather_code: number[];
    cloud_cover: number[];
    visibility: number[];
    wind_speed_10m: number[];
    wind_direction_10m: number[];
    wind_gusts_10m: number[];
  };

  // Daily units information
  daily_units: {
    time: string;
    weather_code: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    sunrise: string;
    sunset: string;
    precipitation_sum: string;
    rain_sum: string;
    showers_sum: string;
    snowfall_sum: string;
    precipitation_hours: string;
    precipitation_probability_max: string;
    wind_speed_10m_max: string;
    wind_gusts_10m_max: string;
  };

  // Daily forecast data
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    sunrise: string[];
    sunset: string[];
    precipitation_sum: number[];
    rain_sum: number[];
    showers_sum: number[];
    snowfall_sum: number[];
    precipitation_hours: number[];
    precipitation_probability_max: number[];
    wind_speed_10m_max: number[];
    wind_gusts_10m_max: number[];
  };
}

// Weather code mapping to descriptions and icons
export const weatherCodeMap: Record<number, { description: string; icon: string }> = {
  0: { description: 'Clear sky', icon: '/img/weather/sunny.svg' },
  1: { description: 'Mainly clear', icon: '/img/weather/partly-cloudy.svg' },
  2: { description: 'Partly cloudy', icon: '/img/weather/partly-cloudy.svg' },
  3: { description: 'Overcast', icon: '/img/weather/cloudy.svg' },
  45: { description: 'Fog', icon: '/img/weather/fog.svg' },
  48: { description: 'Depositing rime fog', icon: '/img/weather/fog.svg' },
  51: { description: 'Light drizzle', icon: '/img/weather/partly-cloudy-rain.svg' },
  53: { description: 'Moderate drizzle', icon: '/img/weather/partly-cloudy-rain.svg' },
  55: { description: 'Dense drizzle', icon: '/img/weather/rain.svg' },
  56: { description: 'Light freezing drizzle', icon: '/img/weather/sleet.svg' },
  57: { description: 'Dense freezing drizzle', icon: '/img/weather/sleet.svg' },
  61: { description: 'Slight rain', icon: '/img/weather/partly-cloudy-rain.svg' },
  63: { description: 'Moderate rain', icon: '/img/weather/rain.svg' },
  65: { description: 'Heavy rain', icon: '/img/weather/rain.svg' },
  66: { description: 'Light freezing rain', icon: '/img/weather/sleet.svg' },
  67: { description: 'Heavy freezing rain', icon: '/img/weather/sleet.svg' },
  71: { description: 'Slight snow fall', icon: '/img/weather/snow.svg' },
  73: { description: 'Moderate snow fall', icon: '/img/weather/snow.svg' },
  75: { description: 'Heavy snow fall', icon: '/img/weather/snow.svg' },
  77: { description: 'Snow grains', icon: '/img/weather/snow.svg' },
  80: { description: 'Slight rain showers', icon: '/img/weather/partly-cloudy-rain.svg' },
  81: { description: 'Moderate rain showers', icon: '/img/weather/partly-cloudy-rain.svg' },
  82: { description: 'Violent rain showers', icon: '/img/weather/rain.svg' },
  85: { description: 'Slight snow showers', icon: '/img/weather/snow.svg' },
  86: { description: 'Heavy snow showers', icon: '/img/weather/snow.svg' },
  95: { description: 'Thunderstorm', icon: '/img/weather/thunderstorm.svg' },
  96: { description: 'Thunderstorm with slight hail', icon: '/img/weather/thunderstorm.svg' },
  99: { description: 'Thunderstorm with heavy hail', icon: '/img/weather/thunderstorm.svg' },
};

// Format day name from date
export const formatDayName = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
};

// No mock data generator - we'll use only live data

// Get weather data for a specific district
export const getDistrictWeather = async (districtId: string): Promise<WeatherApiResponse> => {
  try {
    // Get coordinates for the district
    const district = districtData[districtId as keyof typeof districtData] || districtData['port-louis'];
    const [latitude, longitude] = district.coordinates;

    console.log(`Fetching live weather data for ${district.name} at coordinates: [${latitude}, ${longitude}]`);

    // Direct API call to Open-Meteo
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weather_code,cloud_cover,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max&timezone=auto`;

    console.log('Sending API request to:', url);

    // We'll use AbortSignal.timeout instead of a separate timeout promise

    // Fetch data from the API with no caching to ensure fresh data
    const fetchPromise = fetch(url, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json'
      },
      // Add a signal to allow for request cancellation
      signal: AbortSignal.timeout(10000) // 10 second timeout
    });

    // Race the fetch against the timeout
    const response = await fetchPromise;

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Weather API error: Status ${response.status}, Response: ${errorText}`);
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Live weather data received successfully');

    return data as WeatherApiResponse;
  } catch (error: any) {
    // Handle aborted operations specifically
    if (error.name === 'AbortError' || error.message?.includes('aborted')) {
      console.error('Weather API request was aborted:', error);
      throw new Error('Weather data request was aborted. Please try again.');
    }

    // Re-throw other errors
    console.error('Error in getDistrictWeather:', error);
    throw error;
  }
};

// Get hourly rain chance for the next 7 hours
export const getHourlyRainChance = (weatherData: WeatherApiResponse): number[] => {
  if (!weatherData.hourly || !weatherData.hourly.precipitation_probability) {
    return [0, 0, 0, 0, 0, 0, 0];
  }

  // Get the current hour
  const now = new Date();

  // Find the index of the current hour in the API data
  const currentIndex = weatherData.hourly.time.findIndex(time => {
    const timeDate = new Date(time);
    // Compare year, month, date, and hour to find the closest match
    return timeDate.getFullYear() === now.getFullYear() &&
           timeDate.getMonth() === now.getMonth() &&
           timeDate.getDate() === now.getDate() &&
           timeDate.getHours() >= now.getHours();
  });

  // If we can't find the current hour, use the first available hour
  const startIndex = currentIndex === -1 ? 0 : currentIndex;

  // Get the next 7 hours of precipitation probability
  const rainChance = weatherData.hourly.precipitation_probability.slice(startIndex, startIndex + 7);

  // If we don't have 7 hours of data, pad with the last value
  while (rainChance.length < 7) {
    const lastValue = rainChance.length > 0 ? rainChance[rainChance.length - 1] : 0;
    rainChance.push(lastValue);
  }

  return rainChance;
};

// Get 4-day forecast from daily data
export const get4DayForecast = (weatherData: WeatherApiResponse) => {
  if (!weatherData.daily || !weatherData.daily.time || weatherData.daily.time.length === 0) {
    return [];
  }

  const forecast = [];

  // Get 4 days of forecast data (starting from today)
  for (let i = 0; i < 4 && i < weatherData.daily.time.length; i++) {
    const weatherCode = weatherData.daily.weather_code[i];
    const weatherInfo = weatherCodeMap[weatherCode] || {
      description: 'Unknown',
      icon: '/img/weather/partly-cloudy.svg'
    };

    forecast.push({
      day: formatDayName(weatherData.daily.time[i]),
      temperature: {
        high: Math.round(weatherData.daily.temperature_2m_max[i]),
        low: Math.round(weatherData.daily.temperature_2m_min[i])
      },
      icon: weatherInfo.icon,
      description: weatherInfo.description,
      // Add additional data that might be useful
      precipitation_probability: weatherData.daily.precipitation_probability_max[i],
      precipitation_sum: weatherData.daily.precipitation_sum[i]
    });
  }

  return forecast;
};
