
import React, { Fragment } from "react";

import styled from "styled-components";

import Title from "./article/title";
import SubTitle from "./article/sub-title";
import Meta from "./article/meta";
import Paragraph from "./article/paragraph";
import TransparentLink from './shared/transparent-link';

import { articles } from "./data";

const PreviewParagraph = styled(Paragraph)`
  font-size: 1.2em;
`;

const Archive = () => {
  return (
    <Fragment>
      <Title>Archief</Title>
      {articles.map(article => {
        const {
          id,
          title,
          author,
          created,
          location,
          geolocation,
          paragraphs,
        } = article;
        const [paragraph] = paragraphs;
        const preview = paragraph.substring(0, 200);

        return (
          <Fragment>
            <TransparentLink to={`/archief/${id}`}>
              <SubTitle>{title}</SubTitle>
            </TransparentLink>
            <Meta
              created={created}
              author={author}
              location={location}
              geolocation={geolocation}
            />
            <PreviewParagraph>{preview} &hellip;</PreviewParagraph>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Archive;
