import React from "react";
import styled from "styled-components";
import company from "../assets/company.png";
import alliance from "../assets/alliance.png";

const OffersCard = styled.div`
  font-weight: 500;
  line-height: 33px;
  font-size: 28px;
  color: #ffffff;
  margin: 0 0 12px 0;
  min-width: 233px;
  ${"" /* ToDO: медиазапросами сделать отступы */} padding: 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 22px 16px;
  background-color: #cd2027;
`;

const MainOffer = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  color: #ffffff;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardBody = styled.div`
  padding: 22px 8px 16px 8px;
  background-color: #ffffff;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const OffersLogo = styled.img`
  wight: auto;
  height: 30px;
`;
const OffersInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  white-space: nowrap;
`;

const OffersPrice = styled.span`
  font-weight: 500;
  line-height: 15px;
  font-size: 12px;
  color: #5c5c5c;
`;
const OffersDays = styled.span`
  font-weight: 500;
  line-height: 15px;
  font-size: 12px;
  color: #d93633;
`;

const OffersTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  color: #242424;
  font-size: 12px;
  line-height: 16px;
  margin: 17px 0 0 0;
  padding-bottom: 44px;
  max-height: 76px;
`;

const Button = styled.button`
  color: #242424;
  font-size: 16px;
  line-height: 20px;
  color: #d93533;
  background-color: #ffffff;
  border: 2px solid #cd1f27;
  border-radius: 3px;
  text-align: center;
  padding: 10px;
  width: 100%;
`;

const MainOfferImg = styled.img``;

export default function() {
  return (
    <div className="col-xs-12 col-md-4">
      <OffersCard>
        <Header>
          <MainOffer>Билеты от 499 рублей!</MainOffer>
          <MainOfferImg src={alliance} />
        </Header>
        <CardBody>
          <CardHeader>
            <OffersLogo src={company} />
            <OffersInfo>
              <OffersPrice>от 8 499 ₽</OffersPrice>
              <OffersDays>Осталось 45 дней</OffersDays>
            </OffersInfo>
          </CardHeader>
          <OffersTitle>
            Из Москвы в США от 22360 рублей! Специальное предложение от
            авиакомпании Lufthansa
          </OffersTitle>
          <Button bottom-xs>Узнать подробности</Button>
        </CardBody>
      </OffersCard>
    </div>
  );
}
