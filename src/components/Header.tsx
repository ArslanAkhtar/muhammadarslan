import React, { FunctionComponent } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  z-index: 99999;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-shadow: 0 0.125rem 0.3125rem rgba(34, 34, 34, 0.1);
  box-shadow: 0 0.125rem 0.3125rem rgba(34, 34, 34, 0.1);
  background: linear-gradient(45deg, #222, #2a2c2e);
  padding: 20px;
`;

const Header: FunctionComponent = () => {
  return <HeaderWrapper> This is test</HeaderWrapper>;
};

export default Header;
