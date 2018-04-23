import React from "react";

import styled from "styled-components";

const NavBar = styled.div`
  margin: 0;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
  height: 30px;
`;

const NavBarContent = styled.div`
  max-width: 740px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;

const MenuItem = styled.a`
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px;
  color: #777;
`;

const Title = styled(MenuItem)`
  font-weight: 500;
  padding-left: 0;
`;

const Header = () => (
  <NavBar>
    <NavBarContent>
      <Title>bess.nu</Title>
      <MenuItem>archief</MenuItem>
      <MenuItem>schip</MenuItem>
      <MenuItem>bemanning</MenuItem>
    </NavBarContent>
  </NavBar>
);

export default Header;
