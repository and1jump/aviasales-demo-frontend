import React from "react";
import styled from "styled-components";
import Inner from "./Inner";
import Bottom from "./Bottom";

const Footer = styled.footer`
  background: #fff;
  color: #4a4a4a;
`;

export default function() {
  return (
    <Footer>
      <Inner />
      <Bottom />
    </Footer>
  );
}
