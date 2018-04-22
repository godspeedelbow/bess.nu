import React, { Fragment } from "react";

import Title from "./title";
import Meta from "./meta";
import Paragraph from "./paragraph";
import Photos from "./photos";

export default article;

function article({ article }) {
  const {
    title = "Geen titel",
    author,
    created,
    location,
    geolocation,
    paragraphs = [],
    photos = []
  } = article;
  return (
    <Fragment>
      <Title>{title}</Title>
      <Meta
        created={created}
        author={author}
        location={location}
        geolocation={geolocation}
      />

      {paragraphs.map(p => <Paragraph>{p}</Paragraph>)}

      <Photos photos={photos} />
    </Fragment>
  );
}
