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
    {photos.map(photo => {
      const { title, src, srcOriginal, mimeType = "" } = photo;
      return (
        <Fragment>
          {mimeType.includes("video") ? (
            <video width="100%" controls>
              <source src={srcOriginal} type="video/mp4" />
            </video>
          ) : (
            <Photo src={src} alt={title} title={title} />
          )}
          <Title>{title}</Title>
        </Fragment>
      );
    })}
  </Fragment>
);

export default Photos;
