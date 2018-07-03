import React, { Fragment } from "react";

import Subscribe from "../shared/subscribe";

import Meta from "./meta";
import Photos from "./photos";

import Title from "../shared/title";
import Paragraph from "../shared/paragraph";
import TransparentLink from "../shared/transparent-link";

export default Article;

function Article({ article }) {
  const {
    id,
    title = "Geen titel",
    created,
    location,
    geolocation,
    paragraphs = [],
    photos = []
  } = article;
  return (
    <Fragment>
      <TransparentLink to={`/archief/${id}`}>
        <Title>{title}</Title>
      </TransparentLink>
      <Meta created={created} location={location} geolocation={geolocation} />

      {paragraphs.map(p => <Paragraph>{p}</Paragraph>)}

      <Photos photos={photos} />
      <Subscribe />
    </Fragment>
  );
}
