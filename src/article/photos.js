import React, { Fragment } from "react";
import styled from "styled-components";

import Paragraph from "../shared/paragraph";
import Photo from "../shared/photo";

const Title = styled(Paragraph)`
  font-size: 1em;
  margin-top: 0;
  padding-bottom: 25px;
`;

const Photos = ({ photos }) => (
  <Fragment>
    {photos.map(photo => (
      <Fragment>
        <Photo src={photo.src} alt={photo.title} title={photo.title} />
        <Title>{photo.title}</Title>
      </Fragment>
    ))}
  </Fragment>
);

export default Photos;
