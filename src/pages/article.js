import React, { Fragment } from "react";

import ReactMarkdown from "react-markdown";

import {
  Meta,
  Photos,
  Title,
  Paragraph,
  Subscribe,
  TransparentLink,
  NeighborArticles,
} from "../components";

export default function Article({ articles, article }) {
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
