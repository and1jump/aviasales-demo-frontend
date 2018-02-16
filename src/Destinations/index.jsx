import React from "react";
import styled from "styled-components";
import compass from "../assets/Compass.svg";
import pancel from "../assets/Pancel.svg";
import planet from "../assets/Planet.svg";
import palm from "../assets/palm.svg";
import backet from "../assets/Backet.svg";
import musem from "../assets/musem.svg";
import martini from "../assets/martini.svg";
import babycar from "../assets/babycar.svg";

import card from "../assets/backgroundImage.png";

const Destinations = styled.section`
  background: linear-gradient(-180deg, #f8fcff 0%, #ffffff 100%);
  padding: 40px 0;
`;

const EditableOrigin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  color: #4a4a4a;
  margin: 25px 0 0 0;
  padding: 0 16px;
`;

const Origin = styled.p`
  cursor: pointer;
  color: #00ace2;
  font-size: 18px;
  line-height: 24px;
  position: relative;
  margin: 0 0 0 16px;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 24px 16px;
  width: 72px;
`;

const Category = styled.div``;

const CategoryButton = styled.button`
  position: relative;
  padding: 12px;
  wight: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px rgba(74, 74, 74, 0.12);
`;

const CategoryText = styled.span`
  font-size: 12px;
  color: #00ace2;
  line-height: 20px;
  margin-top: 12px;
  text-transform: uppercase;
  max-wight: 72px;
`;

const CityCard = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px 0 rgba(0, 75, 93, 0.12);
  overflow: hidden;
  position: relative;
  background: #fff;
`;

const CityFotoCover = styled.div`
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  position: relative;
  z-index: 0;
  @media only screen and (max-width: 576px) {
    height: 126px;
  }
`;

const CityFoto = styled.div`
  background-image: url(${card});
  position: absolute;
  z-index: 0;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
`;

const CityCadrFooter = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 16px 16px 12px 16px;
`;

const Location = styled.div`
  padding-left: 0;
  padding-right: 10px;
  -ms-flex: 1;
  flex: 1;
  overflow: hidden;
`;

const Flag = styled.div`
  background-image: ;
  background-size: cover;
  border-radius: 100%;
  position: absolute;
  left: 25px;
  height: 30px;
  width: 30px;
  display: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;

const LocationCity = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #5b5b5c;
  white-space: nowrap;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const LocationContry = styled.div`
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #a0b0b9;
  letter-spacing: 0.03125rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
`;

const Details = styled.div`
  position: relative;
  text-align: right;
  z-index: 0;
`;

const Price = styled.div`
  display: block;
  color: #00ace2;
  font-size: 14px;
  line-height: 16px;
`;

const Data = styled.div`
  display: block;
  color: #a0b0b9;
  font-size: 12px;
  line-height: 20px;
`;

export default function() {
  return (
    <Destinations>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <EditableOrigin className="center-xs">
              <img src={compass} alt="compass" />
              <Title>Популярные направления перелетов из города</Title>
              <Origin>
                Москва <img src={pancel} />
              </Origin>
            </EditableOrigin>
            <Categories>
              <CategoryCard>
                <Category>
                  <CategoryButton>
                    <img src={planet} />
                  </CategoryButton>
                </Category>
                <CategoryText>КУДА УГОДНО</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <Category>
                  <CategoryButton>
                    <img src={palm} />
                  </CategoryButton>
                </Category>
                <CategoryText>СОЛНЦЕ И МОРЕ</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <Category>
                  <CategoryButton>
                    <img src={backet} />
                  </CategoryButton>
                </Category>
                <CategoryText>ШОПИНГ, ГОРОД</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <Category>
                  <CategoryButton>
                    <img src={musem} />
                  </CategoryButton>
                </Category>
                <CategoryText>КУЛЬТУРА И ИСТОРИЯ</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <Category>
                  <CategoryButton>
                    <img src={martini} />
                  </CategoryButton>
                </Category>
                <CategoryText>НОЧНАЯ ЖИЗНЬ</CategoryText>
              </CategoryCard>
              <CategoryCard>
                <Category>
                  <CategoryButton>
                    <img src={babycar} />
                  </CategoryButton>
                </Category>
                <CategoryText>ОТДЫХ С ДЕТЬМИ</CategoryText>
              </CategoryCard>
            </Categories>
          </div>
          <div className="col-xs-12">
            <CityCard>
              <CityFotoCover>
                <CityFoto />
              </CityFotoCover>
              <CityCadrFooter>
                <Location>
                  <Flag />
                  <LocationCity>Москва</LocationCity>
                  <LocationContry>Россия</LocationContry>
                </Location>
                <Details>
                  <Price>Найти от 1 212 ₽</Price>
                  <Data>18 марта</Data>
                </Details>
              </CityCadrFooter>
            </CityCard>

            <CityCard>
              <CityFotoCover>
                <CityFoto />
              </CityFotoCover>
              <CityCadrFooter>
                <Location>
                  <Flag />
                  <LocationCity>Москва</LocationCity>
                  <LocationContry>Россия</LocationContry>
                </Location>
                <Details>
                  <Price>Найти от 1 212 ₽</Price>
                  <Data>18 марта</Data>
                </Details>
              </CityCadrFooter>
            </CityCard>

            <CityCard>
              <CityFotoCover>
                <CityFoto />
              </CityFotoCover>
              <CityCadrFooter>
                <Location>
                  <Flag />
                  <LocationCity>Москва</LocationCity>
                  <LocationContry>Россия</LocationContry>
                </Location>
                <Details>
                  <Price>Найти от 1 212 ₽</Price>
                  <Data>18 марта</Data>
                </Details>
              </CityCadrFooter>
            </CityCard>

            <CityCard>
              <CityFotoCover>
                <CityFoto />
              </CityFotoCover>
              <CityCadrFooter>
                <Location>
                  <Flag />
                  <LocationCity>Москва</LocationCity>
                  <LocationContry>Россия</LocationContry>
                </Location>
                <Details>
                  <Price>Найти от 1 212 ₽</Price>
                  <Data>18 марта</Data>
                </Details>
              </CityCadrFooter>
            </CityCard>

            <CityCard>
              <CityFotoCover>
                <CityFoto />
              </CityFotoCover>
              <CityCadrFooter>
                <Location>
                  <Flag />
                  <LocationCity>Москва</LocationCity>
                  <LocationContry>Россия</LocationContry>
                </Location>
                <Details>
                  <Price>Найти от 1 212 ₽</Price>
                  <Data>18 марта</Data>
                </Details>
              </CityCadrFooter>
            </CityCard>

            <CityCard>
              <CityFotoCover>
                <CityFoto />
              </CityFotoCover>
              <CityCadrFooter>
                <Location>
                  <Flag />
                  <LocationCity>Москва</LocationCity>
                  <LocationContry>Россия</LocationContry>
                </Location>
                <Details>
                  <Price>Найти от 1 212 ₽</Price>
                  <Data>18 марта</Data>
                </Details>
              </CityCadrFooter>
            </CityCard>
          </div>
        </div>
      </div>
    </Destinations>
  );
}
