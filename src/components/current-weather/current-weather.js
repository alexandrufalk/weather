import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CurrentWeather = ({ data }) => {
  return (
    <Container className="shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <Row>
        <Col>
          <div className="top shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div>
              <p className="city fs-3 text">{data.city}</p>
              <p className="weather-description">{data.weather[0].description}</p>
            </div>
            <img
              alt="weather"
              className="weather-icon"
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            />
          </div>
        </Col>
         
        <Col>
          <div className=" bottom text-primary opacity-75 shadow p-3 mb-5 bg-body-tertiary rounded">
              <p className="temperature fs-3 text">{Math.round(data.main.temp)}°C</p>
              <div className="details">
                <div className="parameter-row p-1">
                  <span className="parameter-label p-1">Details:</span>
                </div>
                <div className="parameter-row p-1">
                  <span className="parameter-label p-1">Feels like</span>
                  <span className="parameter-value">
                    {Math.round(data.main.feels_like)}°C
                  </span>
                </div>
                <div className="parameter-row p-1">
                  <span className="parameter-label p-1">Wind</span>
                  <span className="parameter-value">{data.wind.speed} m/s</span>
                </div>
                <div className="parameter-row p-1">
                  <span className="parameter-label p-1">Humidity</span>
                  <span className="parameter-value">{data.main.humidity}%</span>
                </div>
                <div className="parameter-row p-1">
                  <span className="parameter-label p-1">Pressure</span>
                  <span className="parameter-value">{data.main.pressure} hPa</span>
                </div>
              </div>
            </div>
        </Col>
      </Row>
    </Container>
    
  );
};

export default CurrentWeather;