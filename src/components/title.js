import styled from "styled-components";

const Title = styled.h1`
  --x-height-multiplier: 0.342;
  --baseline-multiplier: 0.22;
  font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva,
    Arial, sans-serif;
  letter-spacing: -0.02em;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 0;
  margin-left: -2.63px;
  margin-bottom: 12px;
  line-height: 1.04;
  letter-spacing: -0.015em;

  font-size: 25px;
  @media (min-width: 375px) {
    font-size: 30px;
  }
  @media (min-width: 800px) {
    font-size: 42px;
  }
`;

export default Title;
