import React from "react";
import styled from "styled-components";
import raiting from "../assets/raiting.svg";
import phone_sm from "../assets/phone-sm.png";
import phone_lg from "../assets/phone-lg.png";
import apple from "../assets/apple.svg";
import android from "../assets/android.svg";
import windowsphone from "../assets/windowsphone.svg";

const MobileApp = styled.section`
  background: linear-gradient(to left, #196ebd, #01b0dd);
  color: #fff;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;
const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Phone = styled.picture`
height: 213px;
  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    }
  }

  @media (min-width: 768px) {
    height: 312px;
  }

  @media (min-width: 1200px) {
    left: 9%;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  color: #ffffff;

  @media (min-width: 768px) {
    line-height: 40px;
    font-size: 32px;
    text-align: left;
  }
`;

const Rating = styled.div`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 56px;
  line-height: 20px;
  font-size: 14px;
  color: #ffffff;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 40px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  padding-top: 24px;
  padding-bottom: 56px;

  @media (min-width: 1200px) {
    padding-top: 66px;
    padding-bottom: 68px;
  }
`;

const Stars = styled.img`
  margin-right: 8px;
`;

const AppList = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AppLink = styled.a`
  display: block;
  margin-top: 12px;
  margin-bottom: 12px;
  line-height: 24px;
  font-size: 14px;
  color: #ffffff;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    margin: 0 40px 0 0;
  }
`;

const Link = styled.img`
  margin-right: 8px;
  vertical-align: middle;
`;

export default function() {
  return (
    <MobileApp>
      <div className="container">
        <Wrapper>
          <Phone>
            <source srcSet={phone_lg} media="(min-width: 768px)" />
            <Img src={phone_sm} alt="" />
          </Phone>
          <div className="row">
            <div className="col-xs-12 col-md-offset-4 col-md-8">
              <Title>Скачай мобильное приложение Aviasales.ru</Title>
              <Rating>
                <img src={raiting} /> Более 103 000 оценок
              </Rating>
            </div>
            <div className="col-xs-offset-6 col-xs-6 col-md-offset-4 col-md-8">
              <AppList>
                <AppLink href="#">
                  <Link src={apple} alt="" /> iPhone или iPad
                </AppLink>
                <AppLink href="#">
                  <Link src={android} alt="" /> Android
                </AppLink>
                <AppLink href="#">
                  <Link src={windowsphone} alt="" /> Windows Phone
                </AppLink>
              </AppList>
            </div>
          </div>
        </Wrapper>
      </div>
    </MobileApp>
  );
}
