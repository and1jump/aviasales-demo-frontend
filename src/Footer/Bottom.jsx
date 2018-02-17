import React from "react";
import styled from "styled-components";
import vk from "../assets/vk-footer.svg";
import facebook from "../assets/facebook-footer.svg";
import instagram from "../assets/instagram-footer.svg";
import twitter from "../assets/twitter-footer.svg";
import viber from "../assets/viber.svg";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/google-play.png";
import winphone from "../assets/windows-store.png";

const Bottom = styled.div`
  padding: 24px 0 24px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

const Link = styled.a`
  color: #5b5b5c;
  text-decoration: none;
  font-size: 12px;
  line-height: 16px;
  margin: 0 18px 18px 0;
  &:hover {
    color: #fd8a27;
  }
`;

const LinkSearch = styled.a`
  color: #5b5b5c;
  text-decoration: none;
  font-size: 12px;
  line-height: 16px;
  margin: 0 18px 18px 0;
  &:hover {
    color: #fd8a27;
  }
`;

const AppsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Apps = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 24px;
  @media only screen and (min-width: 992px) {
    flex-wrap: nowrap;
  }
`;

const Icon = styled.img`
  vertical-align: middle;
  margin-right: 8px;
`;

const AppLink = styled.a`
  display: block;
  align: flex;
`;

const GooglePlay = styled.img`
  margin: 8px;
`;

const DateOfBirth = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <Bottom>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <Wrapper>
              <Link href="#">О компании</Link>
              <Link href="#">Партнёрская программа</Link>
              <Link href="#">Реклама</Link>
              <Link href="#">Вакансии</Link>
              <Link href="#">Помощь</Link>
              <Link href="#">Правила</Link>
              <Link href="#">White Label авиабилеты</Link>
            </Wrapper>
            <Wrapper>
              <Link href="#">
                <Icon src={vk} />Вконтакте
              </Link>
              <Link href="#">
                <Icon src={facebook} />Фейсбук
              </Link>
              <Link href="#">
                <Icon src={instagram} />Инстаграм
              </Link>
              <Link href="#">
                <Icon src={twitter} />Твиттер
              </Link>
              <Link href="#">
                <Icon src={viber} />Вайбер
              </Link>
            </Wrapper>
            <div className="center-xs start-sm">
              <LinkSearch href="#">Поиск и бронирование отелей</LinkSearch>
            </div>
          </div>
          <AppsList className="col-lg-5">
            <Apps className="center-xs start-sm end-lg">
              <AppLink href="#">
                <img src={appstore} alt="App Store" />
              </AppLink>
              <AppLink href="#">
                <GooglePlay src={googleplay} alt="Google Play" />
              </AppLink>
              <AppLink href="#">
                <img src={winphone} alt="Windows Phone" />
              </AppLink>
            </Apps>
            <DateOfBirth className="bottom-lg">
              <div className="start-sm end-lg center-xs">
                &copy; 2007–2018, Aviasales — дешевые авиабилеты
              </div>
            </DateOfBirth>
          </AppsList>
        </div>
      </div>
    </Bottom>
  );
};
