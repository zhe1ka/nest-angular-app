export interface IWeather {
  current_weather: {
    is_day: number;
    temperature: number;
    time: string;
    weathercode: number;
    winddirection: number;
    windspeed: number;
  };
  elevation: number;
  generationtime_ms: number;
  hourly: {
    temperature_2m: [number];
    time: [string];
  };
  hourly_units: {
    temperature_2m: string;
    time: string;
  };
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}
