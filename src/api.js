const X_RapidAPI_Key = process.env.REACT_APP_X_RapidAPI_Key;
const EnvWEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": X_RapidAPI_Key,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = EnvWEATHER_API_KEY;
export const WEATHER_API_POLLUTION_URL =
  " http://api.openweathermap.org/data/2.5/";
