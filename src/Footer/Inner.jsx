import React from "react";
import styled from "styled-components";

const Inner = styled.div`
  padding: 16px 0 24px 0;
  border-bottom: 2px solid #E0E6E8;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  margin: 32px 0 16px 0;
  text-transform: uppercase;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 12px;
  line-height: 16px;
  padding-top: 12px;
  color: #5b5b5c;
  transition: color 0.3s;
  &:hover {
    color: #fd8a27;
  }
`;

const LinkAll = styled.a`
  text-decoration: none;
  font-size: 12px;
  line-height: 16px;
  padding-top: 16px;
  font-weight: 600;
  color: #4a4a4a;
`;

export default function() {
  return (
    <Inner>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-3 col-lg-2">
            <LinkList>
              <Title>СТРАНЫ</Title>
              <Link href="#">Россия</Link>
              <Link href="#">Таиланд</Link>
              <Link href="#">Черногория</Link>
              <Link href="#">Кипр</Link>
              <Link href="#">Болгария</Link>
              <Link href="#">Грузия</Link>
              <LinkAll href="#">Все страны →</LinkAll>
            </LinkList>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <Title>ГОРОДА</Title>
            <LinkList>
              <Link href="#">Москва</Link>
              <Link href="#">Санкт-Петербург</Link>
              <Link href="#">Симферополь</Link>
              <Link href="#">Адлер</Link>
              <Link href="#">Екатеринбург</Link>
              <Link href="#">Лондон</Link>
              <LinkAll href="#">Все города →</LinkAll>
            </LinkList>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <Title>АВИАКОМПАНИИ</Title>
            <LinkList>
              <Link href="#">Air Berlin</Link>
              <Link href="#">Air France</Link>
              <Link href="#">Alitalia</Link>
              <Link href="#">Air Baltic</Link>
              <Link href="#">Emirates</Link>
              <Link href="#">KLM</Link>
              <LinkAll href="#">Все авиакомпании →</LinkAll>
            </LinkList>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <Title>АЭРОПОРТЫ</Title>
            <LinkList>
              <Link href="#">Шереметьево</Link>
              <Link href="#">Курумоч</Link>
              <Link href="#">Домодедово</Link>
              <Link href="#">Толмачево</Link>
              <Link href="#">Владивосток</Link>
              <Link href="#">Гамбург</Link>
              <LinkAll href="#">Все аэропорты →</LinkAll>
            </LinkList>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <Title>НАПРАВЛЕНИЯ</Title>
            <LinkList>
              <Link href="#">MOW – SIP</Link>
              <Link href="#">MOW – AER</Link>
              <Link href="#">MOW – TIV</Link>
              <Link href="#">MOW – MRV</Link>
              <Link href="#">LED – MOW</Link>
              <Link href="#">MOW – BKK</Link>
            </LinkList>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <Title>СЕРВИСЫ</Title>
            <LinkList>
              <Link href="#">Горящие авиабилеты</Link>
              <Link href="#">Календарь низких цен</Link>
              <Link href="#">Карта низких цен</Link>
              <Link href="#">Спецпредложения</Link>
              <Link href="#">Таблица цен</Link>
              <Link href="#">Блог</Link>
              <Link href="#">Помощь</Link>
            </LinkList>
          </div>
        </div>
      </div>
    </Inner>
  );
}
