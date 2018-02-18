import React from "react";
import styled from "styled-components";
import colorline from "../assets/color-line.png";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import vk from "../assets/vk.svg";
import rss from "../assets/RSS.svg";

const EmailForm = styled.div`
  padding: 0 0 24px 0;
  background: #fff;
`;

const Title = styled.h2`
  font-weight: 600;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
  margin-top: 0px;
  margin-bottom: 0px;

  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const ColorLine = styled.div`
  display: block;
  background: url(${colorline});
  height: 7px;
  border: none;
  margin-bottom: 24px;

  @media (min-width: 1200px) {
    margin-bottom: 32px;
  }
`;

const Text = styled.p`
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
  margin-top: 4px;
  margin-bottom: 8px;

  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const Subscription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 1200px) {
    margin-top: 0;
    flex-direction: row;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -4px;

  @media (min-width: 1200px) {
    display: inline-flex;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  min-width: 0;
  margin-top: 24px;

  @media (min-width: 1200px) {
    display: inline-flex;
    margin-top: 0;
    margin-left: 16px;
  }
`;

const SocialIcon = styled.a`
  display: block;
  margin: 0 4px;
`;

const Input = styled.input`
  flex-grow: 1;
  line-height: 20px;
  font-size: 16px;
  color: #5c5c5c;
  padding: 7px 0 7px 12px;
  background: #ffffff;
  border: 1px solid #a0b0b9;
  border-right: none;
  border-radius: 2px 0 0 2px;
  min-width: 0;

  ::placeholder {
    color: #a0b0b9;
  }

  @media (min-width: 1200px) {
    display: inline-flex;
  }
`;

const Button = styled.button`
  background: #ff8e41;
  border-radius: 0 2px 2px 0;
  border: none;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  padding: 8px 16px;
`;

export default function() {
  return (
    <EmailForm>
      <ColorLine />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-xl-4 col-xl-offset-1">
            <Title>Хотите знать всё о скидках на авиабилеты?</Title>
            <Text>
              Вы можете подписаться на нашу рассылку через соцсети или по
              электронной почте.
            </Text>
          </div>
          <div className="col-md-6 col-md-offset-3 col-xl-5 col-xl-offset-1">
            <Subscription>
              <Social>
                <SocialIcon href="#">
                  <img src={twitter} />
                </SocialIcon>
                <SocialIcon href="#">
                  <img src={facebook} />
                </SocialIcon>
                <SocialIcon href="#">
                  <img src={vk} />
                </SocialIcon>
                <SocialIcon href="#">
                  <img src={rss} />
                </SocialIcon>
              </Social>
              <Form>
                <Input placeholder="Ваш email" />
                <Button>Подписаться</Button>
              </Form>
            </Subscription>
          </div>
        </div>
      </div>
    </EmailForm>
  );
}
