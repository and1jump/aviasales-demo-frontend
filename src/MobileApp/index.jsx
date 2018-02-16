import React from "react";
import styled from "styled-components";
import raiting from "../assets/raiting.svg";
import phone from "../assets/phone.png";
import apple from "../assets/apple.svg";
import android from "../assets/android.svg";
import windowsphone from "../assets/windowsphone.svg";

const MobileApp = styled.section`
  background: linear-gradient(to left, #196ebd, #01b0dd);
  color: #fff;
`;

const Title = styled.h2`
  font-size: 24;
  font-weight: 500;
  line-height: 28px;
  margin: 24px 0 19px 0;
  text-align: center;
  color: #fff;
`;

const Rating = styled.p`
  display: flex;
  justify-content: center;
  white-space: nowrap;
`;

const Stars = styled.img`
  margin-right: 8px;
`;

const App = styled.div`
  display: flex;
  justify-content: center;
`;

const Iphone = styled.img``;

const AppList = styled.div`
  display: flex-inline;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
`;

const AppItem = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const AppLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding-left: 8px;
  &:hover {
    text-decoration: underline;
  }
`;

const Apple = styled.img``;
const Android = styled.img``;
const Windowsphone = styled.img``;

export default function() {
  return (
    <MobileApp>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-10 col-lg-offset-1">
            <Title>Скачай мобильное приложение Aviasales.ru</Title>
          </div>
        </div>
      </div>
      <Rating>
        <Stars src={raiting} /> Более 103 000 оценок
      </Rating>
      <App>
        <div>
          <Iphone src={phone} />
        </div>

        <AppList>
          <AppItem>
            <Apple src={apple} />
            <AppLink href="#">iPhone или iPad</AppLink>
          </AppItem>

          <AppItem>
            <Android src={android} />
            <AppLink href="#">Android</AppLink>
          </AppItem>

          <AppItem>
            <Windowsphone src={windowsphone} />
            <AppLink href="#">Windows Phone</AppLink>
          </AppItem>
        </AppList>
      </App>
    </MobileApp>
  );
}
