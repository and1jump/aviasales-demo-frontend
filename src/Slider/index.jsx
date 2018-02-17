import React from "react";
import styled from "styled-components";
import leftarrow from "../assets/left-arrow.svg";
import rightarrow from "../assets/right-arrow.svg";
import airoflot from "../assets/Airoflot.png";
import elairlines from "../assets/el-airlines.png";
import koreanair from "../assets/korean-air.png";
import triplogo from "../assets/one-two-trip.png";
import sevenlogo from "../assets/s7-airlines.png";
import colorline from "../assets/color-line.png";

const Slider = styled.div``;

const Title = styled.h2`
  line-height: 40px;
  font-size: 32px;
  text-align: center;
  color: #5c5c5c;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const Carousel = styled.div`
  display: flex;
  margin: 0;
`;

const Button = styled.button`
  border: none;
  background: transparent;
`;

const Firms = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
  padding: 12px 0;
`;

const Logotype = styled.img`
  max-height: 50px;
  margin: 16px 10px; 
`;



export default function() {
  return (
    <Slider className="hidden-xs hidden-sm">
      <div className="container">
        <div className="row center-md">
          <div className="col-md-10">
            <Title>
              Дешевые авиабилеты от крупнейших авиакомпаний и агентств
            </Title>
            <Carousel>
              <Button>
                <img src={leftarrow} />
              </Button>
              <Firms>
                <Logotype src={airoflot} />
                <Logotype src={elairlines} />
                <Logotype src={koreanair} />
                <Logotype src={triplogo} />
                <Logotype src={sevenlogo} />
              </Firms>
              <Button>
                <img src={rightarrow} />
              </Button>
            </Carousel>
          </div>
        </div>
      </div>
    </Slider>
  );
}
