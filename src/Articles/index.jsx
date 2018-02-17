import React from "react";
import styled from "styled-components";
import plane from "../assets/article-plane.png";
import dog from "../assets/dog-link.png";
import list from "../assets/help-list.png";

const Articles = styled.section`
  font-famaly: "Roboto", Helvetica Neue, Open Sans, sans-serif;
  background-color: #fff;
  padding-top: 4px;
  padding-bottom: 24px;

  @media (min-width: 768px) {
    padding-bottom: 48px;
  }

  @media (min-width: 1200px) {
    padding-bottom: 40px;
  }
`;

const Title = styled.h2`
  margin: 16px 0 12px 0;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  text-transform: uppercase;
  text-align: left;
  color: #4a4a4a;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media (min-width: 1200px) {
    margin-top: 24px;
  }
`;

const TitleImg = styled.img`
  margin-right: 8px;
  width: 16px;
  vertical-align: -2px;
`;

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0px;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  text-align: left;
  color: #4a4a4a;
`;

const LinkMore = styled.a`
  color: #00ace2;
  text-decoration: none;
  line-height: 20px;
  font-size: 14px;
  cursor: pointer;

  :hover {
    color: #ff9d1b;
  }
`;

export default function() {
  return (
    <Articles>
      <div className="container">
        <div className="row center-lg">
          <div className="col-xs-12 col-lg-10">
            <Title>
              <TitleImg src={plane} />КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?
            </Title>
            <Text>
              Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на
              самолет по сотням авиакомпаний и находим за считанные минуты самые
              дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь
              нашим поиском, который совершенно бесплатно сравнивает цены на
              авиабилеты онлайн и находит самые дешевые перелеты. Больше нет
              смысла ходить в авиакассы, обзванивать агентства — дешевый билет
              находится на расстоянии клика. На нашем сайте вы можете подобрать
              дешевые билеты на самолет в Европу, Азию и на другие континенты.
              Мы написали для вас простую инструкцию о том, как пользоваться
              поиском и экономить на перелетах от 1000 до 20 000 руб в год.{" "}
              <LinkMore href="#">Подробнее</LinkMore>
            </Text>
            <Title>
              <TitleImg src={dog} />ЭЛЕКТРОННЫЙ АВИАБИЛЕТ
            </Title>
            <Text>
              Электронный авиабилет — это, по сути, обычный билет на самолет, но
              только в менее привычном для путешественника виде. Вся информация
              об авиаперелете (данные пассажира, маршрут следования) хранится в
              электронной базе, а пассажир получает на руки маршрут-квитанцию.
              Некоторые пассажиры, купив авиабилет онлайн и получив
              маршрут-квитанцию, удивлены ее видом — это обыкновенный лист
              формата А4, на котором распечатана вся информация о предстоящем
              перелете. Однако это действительно официальный документ,
              подтверждающий договор между авиаперевозчиком и пассажиром. При
              регистрации на рейс пассажир должен предъявить маршрут-квитанцию
              вместе с удостоверением личности точно так же, как предъявляют
              обыкновенный бумажный билет. Следует отметить, что электронный
              билет, приобретенный онлайн, стоит дешевле своего бумажного
              аналога. <LinkMore href="#">Подробнее</LinkMore>
            </Text>
            <Title>
              <TitleImg src={list} />20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ
            </Title>
            <Text>
              Есть масса путеводителей по странам, но ни одного о том, как
              провести время в самолете. Для того, чтобы сделать ваш перелет
              максимально комфортным, мы написали 20 советов о подготовке к
              путешествию. Ведь настоящее путешествие начинается со слов «Добро
              пожаловать на борт нашего самолета»!{" "}
              <LinkMore href="#">Подробнее</LinkMore>
            </Text>
          </div>
        </div>
      </div>
    </Articles>
  );
}
