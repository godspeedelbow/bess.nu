import React, { Fragment } from "react";

import styled from "styled-components";

import Title from "../components/title";
import SubTitle from "../components/sub-title";
import Meta from "../article/meta";
import Paragraph from "../components/paragraph";
import TransparentLink from "../components/transparent-link";

import { getPreview } from "../lib";

const PreviewTitle = styled(SubTitle)`
  margin-top: 0;
`;

const PreviewParagraph = styled(Paragraph)``;

const Archive = ({ articles }) => {
  return (
    <Fragment>
      <Title>Archief</Title>
      {articles.map((article) => {
        const { id, title, created, location } = article;
        const preview = getPreview(article);

        return (
          <Fragment>
            <TransparentLink to={`/archief/${id}`}>
              <PreviewTitle>{title}</PreviewTitle>
            </TransparentLink>
            <Meta created={created} location={location} />
            <PreviewParagraph>{preview} &hellip;</PreviewParagraph>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Archive;
