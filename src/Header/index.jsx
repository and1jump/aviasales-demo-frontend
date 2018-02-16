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

const Logo = styled.img`
  margin-top: 12px;
`;

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
  margin-bottom: 2rem;
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
  border-radius: 0.5rem;
  color: #4a4a4a;
  background: #ffffff;
  position: relative;
  margin: 1px;
`;

const PlaceInput = styled.input`
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

const IATACode = styled.span`
  margin-right: 1rem;
  color: #a0b0b9;
`;

const InputButton = styled.button`
  margin-right: 1rem;
  border: none;
  background-position: center no-repeat;
  width: 20px;
  height: 24px;
  padding: 0;
`;

const DownButton = styled.button`
  background: #ffffff;
  color: inherit;
  border-radius: inherit;
  border: none;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  position: relative;
`;

const PaxAdditional = styled.span`
  color: #a0b0b9;
`;

const DownMark = styled.img`
  position: absolute;
  right: 1rem;
  top: 2rem;
  padding-top: 1rem;
  padding-right: 1rem;
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <Logo src={logo} alt="aviasales logo" />
        <Title>Поиск дешевых авиабилетов</Title>
        <Form>
          <InputOrigin>
            <InputInner>
              <PlaceInput value="Москва" placeholder="Город вылета" />
              <InputButton src={arrow} />
              <IATACode>REN</IATACode>
            </InputInner>
          </InputOrigin>

          <InputOrigin>
            <InputInner>
              <PlaceInput value="" placeholder="Город прибытия" />
              <IATACode />
            </InputInner>
          </InputOrigin>

          <InputSmall>
            <InputInner>
              <PlaceInput value="" placeholder="Туда" />
              <InputButton src={IconeDepart} />
            </InputInner>
          </InputSmall>
          <InputSmall>
            <InputInner>
              <PlaceInput value="" placeholder="Обратно" />
              <InputButton src={IconeDepart} />
            </InputInner>
          </InputSmall>

          <InputOrigin>
            <InputInner>
              <DownButton>
                1 пассажир, <PaxAdditional>эконом</PaxAdditional>
                <DownMark src={downarrow} />
              </DownButton>
            </InputInner>
          </InputOrigin>

          <Button>Найти билеты <img src={airplane} /></Button>
        </Form>
      </div>
    </Header>
  );
}
