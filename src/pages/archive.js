import React, { Fragment } from "react";

import styled from "styled-components";

import Title from "../shared/title";
import SubTitle from "../shared/sub-title";
import Meta from "../article/meta";
import Paragraph from "../shared/paragraph";
import TransparentLink from "../shared/transparent-link";

import { articles } from "../data";

const PreviewTitle = styled(SubTitle)`
  margin-top: 0;
`;

const PreviewParagraph = styled(Paragraph)``;

const Archive = () => {
  return (
    <Fragment>
      <Title>Archief</Title>
      {articles.map(article => {
        const {
          id,
          title,
          created,
          location,
          paragraphs
        } = article;
        const [paragraph] = paragraphs;
        const preview = paragraph.substring(0, 200);

        return (
          <Fragment>
            <TransparentLink to={`/archief/${id}`}>
              <PreviewTitle>{title}</PreviewTitle>
            </TransparentLink>
            <Meta
              created={created}
              location={location}
            />
            <PreviewParagraph>{preview} &hellip;</PreviewParagraph>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Archive;
