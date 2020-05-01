import styled from "styled-components";

const Text = styled.p`
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  --x-height-multiplier: 0.375;
  --baseline-multiplier: 0.17;
  letter-spacing: 0.01rem;
  font-weight: 400;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: -0.005em;
  color: #444444;

  font-size: 16px;
  @media (min-width: 375px) {
    font-size: 17px;
  }
  @media (min-width: 800px) {
    font-size: 21px;
  }
`;

export default Text;
