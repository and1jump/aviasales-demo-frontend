import React from "react";
import styled from "styled-components";
import OffersCard from "./OffersCard";

const Offers = styled.section`
  font-famaly: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  background: linear-gradient(to left, #196ebd, #01b0dd);
  padding: 16px 0 24 0;
`;

const OffersWrapper = styled.div``;

const Title = styled.h1`
  font-weight: 500;
  line-height: 33px;
  font-size: 28px;
  color: #ffffff;
  margin: 0 0 24px 0;
  padding-top: 16px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 24px 0;
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
        <Title>Спецпредложения на авиабилеты</Title>
        <div className="row">
          <OffersCard />
          <OffersCard />
          <OffersCard />
        </div>
        <Footer className="center-xs">
          <AllOffers>Смотреть все спецпредложения</AllOffers>
          <OffersPrice>* средняя цена по направлению</OffersPrice>
        </Footer>
      </div>
    </Offers>
  );
}
