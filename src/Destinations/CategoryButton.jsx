import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
  background: ${props => `url(${props.icon}) no-repeat center`};
`;

const CategoryButton = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border: none;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: #00ace2;
`;

export default props => {
  return (
    <CategoryButton>
      <Icon icon={props.img} />
      {props.children}
    </CategoryButton>
  );
};
