import React, { Fragment } from "react";

import styled from "styled-components";

const Container = styled.div`
  letter-spacing: 0.01rem;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 1.58;
  letter-spacing: 0.005em;

  padding-top: 1px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 1px;
  margin-left: auto;
  margin-right: auto;
  max-width: 740px;

  color: #fffeefcf;
  font-style: italic;
  letter-spacing: 0.01em;
  font-weight: 100;
`;

const Background = styled.div`
  background-color: #010e29;
`;

const Bottom = styled.div`
  border-top: 9px solid #d4a528;
  border-bottom: 6px solid #3c9a8c;
  background-color: #010e29;
  height: 9px;
`;

const Footer = () => (
  <div>
    <Background>
      <Container>
        <h3>Stap op!</h3>
        <p>
          Reis virtueel met ons mee op ons stoere schip Bess.<br />
          Boarding time ... wanneer het jou uitkomt.<br />
          Leef mee, geniet mee zonder zeeziek te worden.<br />
        </p>
        <p>
          Ineke van der Hoff<br />
          Lex Boezeman
        </p>
      </Container>
    </Background>
    <Bottom />
  </div>
);

export default Footer;
