import React from "react";
import styled from "styled-components";
import calendar from "../assets/calendar.svg";
import pancel from "../assets/Pancel.svg";
import flag from "../assets/flag-ru.png";

const PopularDirections = styled.section`
  background: linear-gradient(-180deg, #f8fcff 0%, #ffffff 100%);
  padding: 40px 0;
`;

const EditableOrigin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  color: #4a4a4a;
  margin: 25px 0 0 0;
  padding: 0 16px;
`;

const MainPopular = styled.div``;

const PopularCard = styled.div`
  border-bottom: 1px dashed #e4e7e8;
  padding-bottom: 8px;
  margin: 0 auto 24px;
`;

const Header = styled.div`
  margin-bottom: 24px;
  padding-left: 7px;
`;

const FlagCover = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 12px;
  margin-top: 5px;
`;

const Flag = styled.div`
  background-image: url(${flag});
  display: inline-block;
  width: 30px;
  height: 30px;
  background-size: cover;
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const HeaderTitle = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const City = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: #5b5b5c;
  margin: 0;
  line-height: 32px;
`;

const Country = styled.div`
  margin: 0;
  line-height: 20px;
  font-size: 12;
  text-transform: uppercase;
  color: #a0b0b9;
`;

const TopRoute = styled.div``;

const Route = styled.div`
  color: inherit;
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: hidden;
  padding-bottom: 16px;
  text-decoration: none;
`;

const RouteCity = styled.a`
  color: #4a4a4a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 20px;
  text-decoration: none;
  flex: 1;
`;

const RoutePrice = styled.a`
  padding-left: 10px;
  color: #00ace2;
  white-space: nowrap;
`;

const AdvertiseText = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 24px 0;
  padding: 0 20px;
`;

const OfferText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #a0b0b9;
  margin: 0;
  padding: 0;
`;

export default function() {
  return (
    <PopularDirections>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <EditableOrigin className="center-xs">
              <img src={calendar} alt="calendar" />
              <Title>Лучшие цены на авиабилеты за последний месяц</Title>
            </EditableOrigin>
          </div>
          <div className="col-xs-12 col-md-4">
            <MainPopular>
              <PopularCard>
                <Header>
                  <FlagCover>
                    <Flag />
                  </FlagCover>
                  <HeaderTitle>
                    <City>Симферополь (Крым)</City>
                    <Country>Крым</Country>
                  </HeaderTitle>
                </Header>
                <TopRoute>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                </TopRoute>
              </PopularCard>
            </MainPopular>
          </div>
          <div className="col-xs-12 col-md-4">
            <MainPopular>
              <PopularCard>
                <Header>
                  <FlagCover>
                    <Flag />
                  </FlagCover>
                  <HeaderTitle>
                    <City>Симферополь (Крым)</City>
                    <Country>Крым</Country>
                  </HeaderTitle>
                </Header>
                <TopRoute>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                </TopRoute>
              </PopularCard>
            </MainPopular>
          </div>
          <div className="col-xs-12 col-md-4">
            <MainPopular>
              <PopularCard>
                <Header>
                  <FlagCover>
                    <Flag />
                  </FlagCover>
                  <HeaderTitle>
                    <City>Симферополь (Крым)</City>
                    <Country>Крым</Country>
                  </HeaderTitle>
                </Header>
                <TopRoute>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                  <Route>
                    <RouteCity>из Москвы</RouteCity>
                    <RoutePrice>от 4 813 ₽</RoutePrice>
                  </Route>
                </TopRoute>
              </PopularCard>
            </MainPopular>
          </div>

          <div className="row center-xs">
            <AdvertiseText>
              Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
              стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств
              и 728 авиакомпаний.
            </AdvertiseText>
          </div>

          <div className="row center-xs">
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
