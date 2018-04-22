import React from "react";

import styled from "styled-components";

import heroImage from "./images/hero-example.jpg";

const HeroContainer = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  vertical-align: bottom;
`;

const Hero = () => (
  <HeroContainer>
    <HeroImage src={heroImage} alt="" />
  </HeroContainer>
);

export default Hero;
