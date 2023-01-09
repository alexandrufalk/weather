import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Pollution= ({ data }) => {
  return (
    <Container className="shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <Row>
        <Col>
          <div className="top shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div>
            <span className="parameter-label">Pollution</span>
            </div>
            
          </div>
        </Col>
         
        <Col>
          <div className=" bottom text-primary opacity-75 shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="details">
                <div className="parameter-row">
                  <span className="parameter-label">Details:</span>
                </div>
                <div className="parameter-row p-1">
                  <span className="parameter-label p-1">co:</span>
                  <span className="parameter-value p-1">
                    {data.list[0].components.co}
                  </span>
                </div>
                <div className="parameter-row p-1">
                  <span className="parameter-label p-1">nh3:</span>
                  <span className="parameter-value p-1">
                    {data.list[0].components.nh3}
                  </span>
                </div>
                <div className="parameter-row p-1">
                  <span className="parameter-label p-1">no:</span>
                  <span className="parameter-value p-1">
                    {data.list[0].components.no}
                  </span>
                </div>
                <div className="parameter-row p-1">
                  <span className="parameter-label p-1">no2:</span>
                  <span className="parameter-value p-1">
                    {data.list[0].components.no2}
                  </span>
                </div>
                <div className="parameter-row p-1">
                  <span className="parameter-label p-1">o3:</span>
                  <span className="parameter-value p-1">
                    {data.list[0].components.o3}
                  </span>
                </div>
                <div className="parameter-row p-1">
                  <span className="parameter-label p-1">pm2_5:</span>
                  <span className="parameter-value p-1">
                    {data.list[0].components.pm2_5}
                  </span>
                </div>
                <div className="parameter-row p-1">
                  <span className="parameter-label p-1">pm10:</span>
                  <span className="parameter-value p-1">
                    {data.list[0].components.pm10}
                  </span>
                </div>
                <div className="parameter-row p-1">
                  <span className="parameter-label p-1">so2:</span>
                  <span className="parameter-value p-1">
                    {data.list[0].components.so2}
                  </span>
                </div>
                
              </div>
            </div>
        </Col>
      </Row>
    </Container>
    
  );
};

export default Pollution;