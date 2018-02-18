import React from "react";
import styled from "styled-components";
import calendar from "../assets/calendar.svg";
import pancel from "../assets/Pancel.svg";
import FlagRu from "../assets/flag-ru.png";
import FlagAm from "../assets/flag-am.png";
import FlagEs from "../assets/flag-es.png";
import FlagMd from "../assets/flag-md.png";

const PopularDirections = styled.section`
  background: linear-gradient(-180deg, #f8fcff 0%, #ffffff 100%);
  padding-top: 32px;
  padding-bottom: 40px;
`;

const Icon = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60px;
  height: 60px;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  color: #4a4a4a;

  @media (min-width: 768px) {
    line-height: 36px;
    font-size: 24px;
    margin-bottom: 60px;
  }
`;

const DashLine = styled.hr`
  border: none;
  border-bottom: 1px dashed #afbec6;
  margin: 24px 0;

  @media (min-width: 1200px) {
    border: none;
    border-left: 1px dashed #afbec6;
    height: 100%;
    width: 1px;
    margin: 0 auto;
  }
`;

const Header = styled.div`
  display: flex;
`;

const Flag = styled.img`
  align-self: center;
  margin-right: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
`;

const HeaderTitle = styled.div``;

const City = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: #5b5b5c;
  margin: 0;
  line-height: 32px;
  text-align: left;
`;

const Country = styled.div`
  text-align: left;
  margin-top: 2px;
  margin-bottom: 0;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-transform: uppercase;
  color: #a0b0b9;
`;

const TopRoute = styled.div`
  margin-top: 16px;
`;

const Route = styled.a`
  display: flex;
  padding: 8px 0;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  text-decoration: none;

  :hover {
    background-color: #f1fcff;
  }
`;

const RouteCity = styled.p`
  color: #4a4a4a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 20px;
  text-decoration: none;
  min-width: 0;
  white-space: nowrap;
  flex-grow: 1;
  margin: 0;
  font-size: 16px;
  text-align: left;

  :hover {
    color: #ff9d1b;
    text-decoration: underline;
  }
`;

const RoutePrice = styled.p`
  padding-left: 10px;
  white-space: nowrap;
  margin: 0;
  line-height: 20px;
  font-size: 16px;
  text-align: right;
  text-decoration: none;
  color: #00bae8;

  :hover {
    color: #ff9d1b;
  }
`;

const AdvertiseText = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-top: 40px;
  text-align: center;
  color: #4a4a4a;
`;

const OfferText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #a0b0b9;
  margin-top: 24px;
  text-align: center;
`;

export default function() {
  return (
    <PopularDirections>
      <div className="container">
        <Icon src={calendar} alt="calendar" />
        <Title>Лучшие цены на авиабилеты за последний месяц</Title>

        <div className="row center-xs">
          <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl-1" />
          <div className="col-xs-12 col-md-10 col-xl-3">
            <Header>
              <Flag src={FlagRu} />
              <HeaderTitle>
                <City>Симферополь (Крым)</City>
                <Country>Крым</Country>
              </HeaderTitle>
            </Header>
            <TopRoute>
              <Route>
                <RouteCity>Из Москвы</RouteCity>
                <RoutePrice>от 4 813 ₽</RoutePrice>
              </Route>
              <Route>
                <RouteCity>Из Санкт-Петербурга</RouteCity>
                <RoutePrice>от 7 857 ₽</RoutePrice>
              </Route>
              <Route>
                <RouteCity>Из Новосибирска</RouteCity>
                <RoutePrice>от 4 813 ₽</RoutePrice>
              </Route>
              <Route>
                <RouteCity>Из Екатеринбурга</RouteCity>
                <RoutePrice>от 9 275 ₽</RoutePrice>
              </Route>
              <Route>
                <RouteCity>Из Челябинска</RouteCity>
                <RoutePrice>от 9 148 ₽</RoutePrice>
              </Route>
            </TopRoute>
          </div>

          <div className="col-xs-12 col-md-10 col-xl">
            <DashLine />
          </div>

          <div className="col-xs-12 col-md-10 col-xl-3">
            <Header>
              <Flag src={FlagAm} />
              <HeaderTitle>
                <City>Ереван</City>
                <Country>Армения</Country>
              </HeaderTitle>
            </Header>
            <TopRoute>
              <Route>
                <RouteCity>из Москвы</RouteCity>
                <RoutePrice>от 6 758 ₽</RoutePrice>
              </Route>
              <Route>
                <RouteCity>Из Санкт-Петербурга</RouteCity>
                <RoutePrice>от 9 932 ₽</RoutePrice>
              </Route>
              <Route>
                <RouteCity>Из Сочи</RouteCity>
                <RoutePrice>от 4 813 ₽</RoutePrice>
              </Route>
              <Route>
                <RouteCity>Из Краснодара</RouteCity>
                <RoutePrice>от 11 741 ₽</RoutePrice>
              </Route>
              <Route>
                <RouteCity>Из Ростова-на-Дону</RouteCity>
                <RoutePrice>от 11 956 ₽</RoutePrice>
              </Route>
            </TopRoute>
          </div>

          <div className="col-xs-12 col-md-10 col-xl">
            <DashLine />
          </div>

          <div className="col-xs-12 col-md-10 col-xl-3">
            <Header>
              <Flag src={FlagMd} />
              <HeaderTitle>
                <City>Кишинёв</City>
                <Country>Молдавия</Country>
              </HeaderTitle>
            </Header>
            <TopRoute>
              <Route>
                <RouteCity>из Москвы</RouteCity>
                <RoutePrice>от 8 319 ₽</RoutePrice>
              </Route>
              <Route>
                <RouteCity>Из Санкт-Петербурга</RouteCity>
                <RoutePrice>от 10 800 ₽</RoutePrice>
              </Route>
              <Route>
                <RouteCity>Из Краснодара</RouteCity>
                <RoutePrice>от 12 098 ₽</RoutePrice>
              </Route>
              <Route>
                <RouteCity>Из Сургута</RouteCity>
                <RoutePrice>от 16 277 ₽</RoutePrice>
              </Route>
              <Route>
                <RouteCity>Из Нового Уренгоя</RouteCity>
                <RoutePrice>от 15 987 ₽</RoutePrice>
              </Route>
            </TopRoute>
          </div>

          <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl-1" />

          <div className="col-xs-12 col-md-10 col-xl-6">
            <AdvertiseText>
              Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
              стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств
              и 728 авиакомпаний.
            </AdvertiseText>
            <OfferText>
              Цены, найденные пользователями за последние 48 часов, не являются
              офертой.
            </OfferText>
          </div>
        </div>
      </div>
    </PopularDirections>
  );
}
