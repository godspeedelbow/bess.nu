import React, { Fragment } from "react";

import styled from "styled-components";

import SubTitle from "./sub-title";
import Paragraph from "./paragraph";
import Photo from '../shared/photo';

const Title = styled(Paragraph)`
  font-size: 1.0em;
  margin-top: 0;
  padding-bottom: 25px;
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
