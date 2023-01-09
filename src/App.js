import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import {
  WEATHER_API_URL,
  WEATHER_API_KEY,
  WEATHER_API_POLLUTION_URL,
} from "./api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Pollution from "./components/pollution/pollution";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [pollution, setPollution] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    console.log("lat", lat, "lon", lon);

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const pollutionFetch = fetch(
      `${WEATHER_API_POLLUTION_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    Promise.all([currentWeatherFetch, forecastFetch, pollutionFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        const pollutionResponse = await response[2].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
        setPollution({ city: searchData.label, ...pollutionResponse });

        console.log("weatherResponse", weatherResponse);
        console.log("forcastResponse", forcastResponse);
        console.log("pollutionResponse", pollutionResponse);
      })
      .catch(console.log);
  };

  return (
    <Container>
      <Search onSearchChange={handleOnSearchChange} />
      <Row>
        <Col>
          {currentWeather && <CurrentWeather data={currentWeather} />}
          {pollution && <Pollution data={pollution} />}
        </Col>
        <Col>{forecast && <Forecast data={forecast} />}</Col>
      </Row>
    </Container>
  );
}

export default App;
