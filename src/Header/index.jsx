import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Button from "../common/Button";
import airplane from "../assets/rectangle.svg";
import arrow from "../assets/arrow.svg";
import IconeDepart from "../assets/Icone-Depart.svg";
import downarrow from "../assets/downarrow.svg";

const Header = styled.header`
  display: flex;
  font-famaly: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
  padding: 12px 0 88px 0;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  line-height: 23px;
  font-weight: 700;
  text-align: center;
  margin-top: 47px;
`;

const Logotype = styled.div`
  margin-top: 12px;
  display: flex;
  aling-items: center;
`;

const LogoText = styled.p`
  margin: 0 0 0 12px;
  font-size: 20px;
  line-height: 25px;
  color: #fff;
  font-weight: 300;
`;

const Logo = styled.img``;

const Airplane = styled.img`
  width: 26px;
  height: 21px;
  position: absolute;
  top: 50%;
  right: 50%;
  display: block;
  margin-right: -115px;
  margin-top: -10px;
`;

const Form = styled.div`
  font-size: 16px;
  margin-bottom: 48px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const InputOrigin = styled.div`
  flex-basis: 100%;
  @media screen and (min-width: 768px) {
    flex-basis: 50%;
  }
  @media screen and (min-width: 1200px) {
    flex-basis: 20%;
  }
`;

const InputSmall = styled.div`
  flex-basis: 50%;
  @media screen and (min-width: 768px) {
    flex-basis: 25%;
  }
  @media screen and (min-width: 1200px) {
    flex-basis: 12%;
  }
`;

const InputInner = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px 4px 0 0;
  color: #4a4a4a;
  background: #ffffff;
  position: relative;
  margin: 1px;
  @media (min-width: 768px) {
    border-radius: 4px 0 0 0;
  }

  @media (min-width: 1200px) {
    border-radius: 4px 0 0 4px;
  }
`;

const PlaceInput = styled.input`
  border-radius: 3px 0 0 3px;
  color: inherit;
  padding: 18px 0 16px 18px;
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  border: none;
  border-radius: inherit;
  ::placeholder {
    color: #a0b0b9;
  }
`;

const City = styled.span`
  margin-right: 52px;
  color: #a0b0b9;
`;

const InputButton = styled.button`
  position: absolute;
  margin-right: 17px;
  right: 0;
  height: 24px;
  padding: 0;
`;

const DropDownButton = styled.button`
  background: #ffffff;
  color: inherit;
  border-radius: inherit;
  border: none;
  padding: 17px;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  position: relative;
`;

const Comfort = styled.span`
  color: #a0b0b9;
`;

const DownMark = styled.img`
  position: absolute;
  right: 6px;
  top: 9px;
  padding-top: 16px;
  padding-right: 16px;
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <Logotype>
          <Logo src={logo} alt="aviasales logo" />
          <LogoText className="hidden-xs hidden-sm">aviasales</LogoText>
        </Logotype>
        <Title>Поиск дешевых авиабилетов</Title>
        <Form>
          <InputOrigin>
            <InputInner>
              <PlaceInput value="Москва" placeholder="Город вылета" />
              <City>MOW</City>
              <InputButton>
                <img src={arrow} />
              </InputButton>
            </InputInner>
          </InputOrigin>

          <InputOrigin>
            <InputInner>
              <PlaceInput value="" placeholder="Город прибытия" />
              <City />
            </InputInner>
          </InputOrigin>

          <InputSmall>
            <InputInner>
              <PlaceInput value="" placeholder="Туда" />
              <InputButton>
                <img src={IconeDepart} />
              </InputButton>
            </InputInner>
          </InputSmall>
          <InputSmall>
            <InputInner>
              <PlaceInput value="" placeholder="Обратно" />
              <InputButton>
                <img src={IconeDepart} />
              </InputButton>
            </InputInner>
          </InputSmall>

          <InputOrigin>
            <InputInner>
              <DropDownButton>
                1 пассажир, <Comfort>эконом</Comfort>
                <DownMark src={downarrow} />
              </DropDownButton>
            </InputInner>
          </InputOrigin>
        </Form>

        <div className="row center-xs">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Button>
              Найти билеты <img src={airplane} />
            </Button>
          </div>
        </div>
      </div>
    </Header>
  );
}
