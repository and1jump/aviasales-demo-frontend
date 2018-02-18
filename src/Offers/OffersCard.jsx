import React from "react";
import styled from "styled-components";


const OffersCard = styled.div`
  font-weight: 500;
  line-height: 33px;
  font-size: 28px;
  color: #ffffff;
  margin-top: 12px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
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
  padding: 9px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  flex-grow: 1;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 208px;
  background-color: #fff;
  padding: 16px 8px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.img`
  max-width: 100%;
  align-self: center;
  object-fit: contain;
  min-width: 0;
`;
const OffersInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  white-space: nowrap;
  flex-grow: 1;
`;

const OffersPrice = styled.span`
  font-weight: 500;
  line-height: 15px;
  font-size: 20px;
  color: #5c5c5c;
  white-space: nowrap;
  text-align: right;
  margin-top: 0;
  margin-bottom: 10px;
`;
const OffersDays = styled.span`
  font-weight: 500;
  line-height: 15px;
  font-size: 12px;
  color: #d93633;
`;

const OffersTitle = styled.p`
  margin-top: 16px;
  line-height: 16px;
  font-size: 12px;
  text-align: left;
  color: #242424;
`;

const Button = styled.button`
  display: block;
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
  margin-top: auto;
`;

const MainOfferImg = styled.img``;

export default props => {
  return (
    <OffersCard>
      <Header>
        <MainOffer>{props.data.head}</MainOffer>
        <MainOfferImg src={props.data.headLogo} />
      </Header>
      <CardBody>
        <CardHeader>
          <Logo src={props.data.airLogo} />
          <OffersInfo>
            <OffersPrice>от {props.data.price}</OffersPrice>
            <OffersDays>{props.data.daysLeft}</OffersDays>
          </OffersInfo>
        </CardHeader>
        <OffersTitle>{props.data.info}</OffersTitle>
        <Button className="bottom-xs">Узнать подробности</Button>
      </CardBody>
    </OffersCard>
  );
};
