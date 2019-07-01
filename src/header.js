import React from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

const NavBar = styled.div`
  margin: 0;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
  height: 30px;
`;

const NavBarContent = styled.div`
  max-width: 800px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;

const MenuItem = styled(Link)`
  cursor: pointer;
  display: inline-block;
  padding: 10px;
  @media(min-width: 400px) {
    padding: 10px 15px;
  }
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
  color: #777;
  text-decoration: none;
`;

const Header = () => (
  <NavBar>
    <NavBarContent>
      {/* insert logo bess here */}
      <MenuItem to="/">home</MenuItem>
      <MenuItem to="/archief">archief</MenuItem>
      <MenuItem to="/crew">crew</MenuItem>
      <MenuItem to="/route">route</MenuItem>
      <MenuItem to="/bess">bess</MenuItem>
    </NavBarContent>
  </NavBar>
);

export default Header;
