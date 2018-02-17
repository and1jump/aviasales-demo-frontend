import React from "react";
import styled from "styled-components";
import compass from "../assets/Compass.svg";
import pancel from "../assets/Pancel.svg";
import planet from "../assets/Planet.svg";
import palm from "../assets/palm.svg";
import backet from "../assets/Backet.svg";
import musem from "../assets/musem.svg";
import martini from "../assets/martini.svg";
import babycar from "../assets/babycar.svg";
import card from "../assets/krasnodar.png";
import CategoryButton from "./CategoryButton";
import FlagRu from "../assets/flag-ru.png";
import FlagAm from "../assets/flag-am.png";
import FlagEs from "../assets/flag-es.png";
import FlagMd from "../assets/flag-md.png";
import Krasnodar from "../assets/krasnodar.png";
import Sochi from "../assets/sochi.jpeg";
import SaintP from "../assets/saint-p.jpeg";
import Minvod from "../assets/min-vod.jpeg";
import Simferopol from "../assets/simf.jpeg";
import Bacelona from "../assets/bcn.jpeg";

const Destinations = styled.section`
  background: linear-gradient(-180deg, #f8fcff 0%, #ffffff 100%);
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Icon = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 64px;
  height: 64px;
`;

const Title = styled.h2`
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  color: #4a4a4a;
  margin: 24px 0 32px 0;
  padding: 0 16px;
  text-align: center;
`;

const CityChange = styled.button`
  display: inline;
  color: #00ace2;
  font-size: 18px;
  line-height: 24px;
  position: relative;
  margin: 0;
  text-align: center;
`;

const CityCard = styled.a`
  display: block;
  margin-top: 12px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 75, 93, 0.12);
  text-decoration: none;

  @media (min-width: 768px) {
    margin-top: 24px;
  }
  @media (min-width: 1200px) {
    margin-top: 32px;
  }
`;

const CityFoto = styled.img`
  background-color: #eee;
  display: block;
  height: 128px;
  width: 100%;
  border: none;
  object-fit: cover;
  border-radius: 8px 8px 0 0;

  @media (min-width: 768px) {
    height: 212px;
  }
`;

const CityCardFooter = styled.div`
  display: flex;
  padding: 16px;

  @media (min-width: 768px) {
    padding-top: 12px;
  }
  @media (min-width: 1200px) {
    padding-right: 24px;
  }
`;

const Location = styled.div`
  flex: 1;
  min-width: 0;
`;

const Flag = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    align-text: center;
    margin-left: 8px;
    margin-right: 16px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 0.2px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 8px rgba(38, 38, 38, 0.1);
  }
`;

const City = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #5b5b5c;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-grow: 1;
  margin: 0 0 4px;
  text-align: left;

  @media (min-width: 768px) {
    line-height: 32px;
    font-size: 22px;
  }
`;

const Contry = styled.p`
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #a0b0b9;
  white-space: nowrap;
  text-overflow: ellipsis;
  verflow: hidden;
  max-width: 0;
  flex-grow: 1;
  margin: 0;
  font-weight: 500;
  text-align: left;
`;

const Details = styled.div`
  margin-left: 8px;
`;

const Price = styled.p`
  white-space: nowrap;
  color: #00bae8;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 4px;
  text-align: right;

  @media (min-width: 768px) {
    line-height: 32px;
    font-size: 22px;
  }
`;

const Data = styled.p`
  white-space: nowrap;
  color: #a0b0b9;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  margin: 0;
  text-align: right;
`;

export default () => {
  return (
    <Destinations>
      <div className="container">
        <Icon src={compass} alt="compass" />
        <Title>
          Популярные направления перелетов из города
          <CityChange>
            Москва <img src={pancel} />
          </CityChange>
        </Title>

        <div className="row center-md">
          <div className="col-xs-4 col-md-2 col-lg-1">
            <CategoryButton img={planet}>
              КУДА<br />УГОДНО
            </CategoryButton>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <CategoryButton img={palm}>
              СОЛНЦЕ<br />И МОРЕ
            </CategoryButton>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <CategoryButton img={backet}>
              ШОПИНГ,<br />ГОРОД
            </CategoryButton>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <CategoryButton img={musem}>
              КУЛЬТУРА<br />И ИСТОРИЯ
            </CategoryButton>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <CategoryButton img={martini}>
              НОЧНАЯ<br />ЖИЗНЬ
            </CategoryButton>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <CategoryButton img={babycar}>
              ОТДЫХ<br />С ДЕТЬМИ
            </CategoryButton>
          </div>
        </div>

        <div className="row center-md">
          <div className="col-xs-12 col-md-10 col-lg-5">
            <CityCard>
              <CityFoto src={Krasnodar} />
              <CityCardFooter>
                <Flag src={FlagRu} />
                <Location>
                  <City>Краснодар</City>
                  <Contry>Россия</Contry>
                </Location>
                <Details>
                  <Price>Найти от 1 212 ₽</Price>
                  <Data>18 марта</Data>
                </Details>
              </CityCardFooter>
            </CityCard>
          </div>
          <div className="col-xs-12 col-md-10 col-lg-5">
            <CityCard>
              <CityFoto src={Sochi} />
              <CityCardFooter>
                <Flag src={FlagRu} />
                <Location>
                  <City>Сочи</City>
                  <Contry>Россия</Contry>
                </Location>
                <Details>
                  <Price>Найти от 1 334 ₽</Price>
                  <Data>27 марта</Data>
                </Details>
              </CityCardFooter>
            </CityCard>
          </div>
          <div className="col-xs-12 col-md-10 col-lg-5">
            <CityCard>
              <CityFoto src={SaintP} />
              <CityCardFooter>
                <Flag src={FlagRu} />
                <Location>
                  <City>Санкт-Петербург</City>
                  <Contry>Россия</Contry>
                </Location>
                <Details>
                  <Price>Найти от 1 508 ₽</Price>
                  <Data>10 февраля</Data>
                </Details>
              </CityCardFooter>
            </CityCard>
          </div>
          <div className="col-xs-12 col-md-10 col-lg-5">
            <CityCard>
              <CityFoto src={Minvod} />
              <CityCardFooter>
                <Flag src={FlagRu} />
                <Location>
                  <City>Минеральные Воды</City>
                  <Contry>Россия</Contry>
                </Location>
                <Details>
                  <Price>Найти от 2 074 ₽</Price>
                  <Data>10 февраля</Data>
                </Details>
              </CityCardFooter>
            </CityCard>
          </div>
          <div className="col-xs-12 col-md-10 col-lg-5">
            <CityCard>
              <CityFoto src={Simferopol} />
              <CityCardFooter>
                <Flag src={FlagRu} />
                <Location>
                  <City>Симферополь (Крым)</City>
                  <Contry>Россия</Contry>
                </Location>
                <Details>
                  <Price>Найти от 2 074 ₽</Price>
                  <Data>10 марта</Data>
                </Details>
              </CityCardFooter>
            </CityCard>
          </div>
          <div className="col-xs-12 col-md-10 col-lg-5">
            <CityCard>
              <CityFoto src={Bacelona} />
              <CityCardFooter>
                <Flag src={FlagEs} />
                <Location>
                  <City>Барселона</City>
                  <Contry>Испания</Contry>
                </Location>
                <Details>
                  <Price>Найти от 4 212 ₽</Price>
                  <Data>24 марта</Data>
                </Details>
              </CityCardFooter>
            </CityCard>
          </div>
        </div>
      </div>
    </Destinations>
  );
};
