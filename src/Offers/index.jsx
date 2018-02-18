import React from "react";
import styled from "styled-components";
import company from "../assets/company.png";
import alliance from "../assets/alliance.png";
import lufthansa from "../assets/lufthansa.png";
import OffersCard from "./OffersCard";

const сardData = [
  {
    head: "Билеты от 499 рублей!",
    headLogo: "",
    airLogo: company,
    price: "499 ₽",
    daysLeft: "Осталось 45 дней",
    info: 
    "Билеты от 499 рублей! Специальное предложение от авиакомпании Победа"
  },
  {
    head: "В Нью-Йорк от 20 680 ₽",
    headLogo: alliance,
    airLogo: lufthansa,
    price: "20 680 ₽",
    daysLeft: "Осталось 19 дней",
    info:
      "Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa"
  },
  {
    head: "В Лос-Анджелес от 20 360 ₽",
    headLogo: alliance,
    airLogo: lufthansa,
    price: "20 360 ₽",
    daysLeft: "Осталось 19 дней",
    info:
      "Из Москвы в США от 22360 рублей! Специальное предложение от авиакомпании Lufthansa"
  }
];

const Offers = styled.section`
  font-famaly: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  background: linear-gradient(to left, #196ebd, #01b0dd);
  padding-bottom: 24px;
  padding-top: 16px;
`;

const Title = styled.h1`
  font-weight: 500;
  line-height: 33px;
  font-size: 28px;
  color: #ffffff;
  margin: 0 0 20px 0;
  padding-top: 8px;
  text-align: left;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 24px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
`;

const AllOffers = styled.a`
  color: #fff;
  text-decoration: underline;
  line-height: 20px;
`;

const OffersPrice = styled.span`
  color: #fff;
  line-height: 20px;
`;

export default function() {
  return (
    <Offers>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-xl-10">
            <Title>Спецпредложения на авиабилеты</Title>
          </div>
        </div>

        <div className="row center-xs">
          <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl-1" />
          <div className="col-xs-12 col-md-4 col-xl-3">
            <OffersCard data={сardData[0]} />
          </div>
          <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl" />
          <div className="col-xs-12 col-md-4 col-xl-3">
            <OffersCard data={сardData[1]} />
          </div>
          <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl" />
          <div className="col-xs-12 col-md-4 col-xl-3">
            <OffersCard data={сardData[2]} />
          </div>
          <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl-1" />

          <div className="col-xs-12 col-xl-10">
            <Footer className="center-xs">
              <AllOffers>Смотреть все спецпредложения</AllOffers>
              <OffersPrice>* средняя цена по направлению</OffersPrice>
            </Footer>
          </div>
        </div>
      </div>
    </Offers>
  );
}
