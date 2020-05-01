import React, { Fragment } from "react";

import ReactMarkdown from "react-markdown";

import Subscribe from "../components/subscribe";

import Meta from "./meta";
import Photos from "./photos";

import Title from "../components/title";
import Paragraph from "../components/paragraph";
import TransparentLink from "../components/transparent-link";
import NeighborArticles from "../components/neighbor-articles";

export default Article;

function Article({ articles, article }) {
  const {
    id,
    title = "Geen titel",
    created,
    location,
    geolocation,
    paragraphs = [],
    photos = [],
  } = article;
  return (
    <Fragment>
      <TransparentLink to={`/archief/${id}`}>
        <Title>{title}</Title>
      </TransparentLink>
      <Meta created={created} location={location} geolocation={geolocation} />

      {paragraphs.map((p) => (
        <Paragraph>
          <ReactMarkdown source={p} />
        </Paragraph>
      ))}

      <Photos photos={photos} />
      <NeighborArticles articles={articles} article={article} />
      <Subscribe />
    </Fragment>
  );
}
