import React, { Fragment } from "react";

import styled from "styled-components";

import SubTitle from "./sub-title";
import Photo from '../shared/photo';

const Title = styled.h4`
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  --x-height-multiplier: 0.375;
  --baseline-multiplier: 0.17;
  letter-spacing: 0.01rem;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 1.58;
  letter-spacing: -0.005em;
  color: #444444;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const Photos = ({ photos }) => (
  <Fragment>
    {!!photos.length && <SubTitle>De gevoelige plaat</SubTitle>}
    {photos.map(photo => (
      <Fragment>
        <Photo src={photo.src} alt={photo.title} title={photo.title} />
        <Title>{photo.title}</Title>
      </Fragment>
    ))}
  </Fragment>
);

export default Photos;
