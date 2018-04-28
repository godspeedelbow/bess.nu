import React, { Fragment } from "react";

import styled from "styled-components";

import SubTitle from "./sub-title";
import Paragraph from "./paragraph";

const Meta = styled(Paragraph)`
  font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva,
    Arial, sans-serif;
  --x-height-multiplier: 0.375;
  --baseline-multiplier: 0.17;
  letter-spacing: 0.01rem;
  font-weight: 400;
  font-style: normal;
  font-size: 0.9em;
  line-height: 1.58;
  letter-spacing: -0.005em;
  color: #333;
  margin: 0;
`;

const MetaContainer = props => {
  const { created, author = "Lex", location, gelocation } = props;
  return (
    <Meta>
      <strong>datum</strong> {created}
      {" / "}
      <strong>locatie</strong> {location}
      {" / "}
      <strong>tekst</strong> {author}
    </Meta>
  );
};

export default MetaContainer;
