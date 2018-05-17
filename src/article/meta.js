import React from "react";
import styled from "styled-components";

import Paragraph from "../shared/paragraph";

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
  const { created, location, geolocation } = props;
  return (
    <Meta>
      <strong>datum</strong> {created}
      {" / "}
      <strong>locatie</strong> {location}
    </Meta>
  );
};

export default MetaContainer;
