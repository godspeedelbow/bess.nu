import styled from "styled-components";

const SubTitle = styled.h1`
  --x-height-multiplier: 0.342;
  --baseline-multiplier: 0.22;
  font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva,
    Arial, sans-serif;
  letter-spacing: -0.02em;
  font-weight: 500;
  color: #555;
  font-style: normal;
  letter-spacing: 0;
  margin-left: -2.63px;
  margin-top: 40px;
  letter-spacing: -0.015em;

  font-size: 22px;
  @media (min-width: 375px) {
    font-size: 26px;
  }
  @media (min-width: 800px) {
    font-size: 32px;
  }
`;

export default SubTitle;
