import styled from "styled-components";

const Button = styled.button`
  display: block;
  position: relative;
  line-height: 28px;
  font-famaly: font-family: 'Roboto', Helvetica Neue, Open Sans, sans-serif;
  font-size: 24px;
  margin-top: 16px;
  color: #fff;
  letter-spacing: normal;
  border-radius: 4px;
  background: #ff9241;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 56px;
  @media only screen and (min-width: 576px) {
    height: 56px;
  }
`;

export default Button;
