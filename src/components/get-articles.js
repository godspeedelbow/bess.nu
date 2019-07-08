import React from "react";

import { articles } from "../data";
import { GraphCMSQuery, Loading } from "./";
import gql from "graphql-tag";

export default GetArticles;

const LATEST_ARTICLE_QUERY = gql`
  query {
    articles: blogPosts(
      orderBy: createdAt_DESC
      first: 100
      where: { status: PUBLISHED }
    ) {
      id
      created
      title
      body {
        markdown
      }
      geolocation: location {
        lat: latitude
        lng: longitude
      }
      location: locationName
      # rename to assets!
      photos(orderBy: title_ASC) {
        src: url(transformation: { image: { resize: { width: 800 } } })
        srcOriginal: url
        title
        mimeType
      }
    }
  }
`;

function GetArticles(props) {
  const { children } = props;

  return (
    <GraphCMSQuery query={LATEST_ARTICLE_QUERY}>
      {({ error, loading, data }) => {
        if (error) {
          return "Oeps, er is iets fout gegaan. Stuur een mail naar eelke@boezeman.com als het probleem zich voor blijft doen.";
        }
        if (loading) {
          return <Loading />;
        }
        const merged = [...data.articles.map(asStaticArticle), ...articles];
        const [latestArticle] = merged;
        return children({
          articles: merged,
          latestArticle
        });
      }}
    </GraphCMSQuery>
  );
}

function asStaticArticle(graphCMSArticle) {
  const paragraphs = graphCMSArticle.body.markdown.split("\n");
  const created = new Date(graphCMSArticle.created).toLocaleDateString(
    "nl-NL",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );

  const photos = (graphCMSArticle.photos || []).map(photo => {
    return {
      ...photo,
      src: removeExifData(photo.src)
    };
  });
  return {
    ...graphCMSArticle,
    created,
    paragraphs,
    photos
  };
}

// TODO: fix in graphql query once that's possible
function removeExifData(imageUrl) {
  return imageUrl.replace(
    "resize=width:800",
    "resize=width:800/rotate=deg:exif"
  );
}
