import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import Panel from "./panel";
import { previousArticle, nextArticle } from "../data";

const Title = styled.h3`
  --x-height-multiplier: 0.342;
  --baseline-multiplier: 0.22;
  font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva,
    Arial, sans-serif;
  letter-spacing: -0.02em;
  font-weight: 500;
  color: #555;
  font-style: normal;
  letter-spacing: 0;
  margin-left: -2.63px;
  margin-top: 0;
  margin-bottom: 10px;
  letter-spacing: -0.015em;

  font-size: 18px;
  @media (min-width: 375px) {
    font-size: 20px;
  }
  @media (min-width: 800px) {
    font-size: 22px;
  }
`;

const NeighborArticles = ({ article }) => {
  const previous = previousArticle(article);
  const next = nextArticle(article);

  return (
    <Panel>
      <Title>Dit al gelezen?</Title>
      <ul>
        {previous && (
          <li>
            {previous.created}
            {": "}
            <Link to={`/archief/${previous.id}`}>{previous.title}</Link>
          </li>
        )}
        {next && (
          <li>
            {next.created}
            {": "}
            <Link to={`/archief/${next.id}`}>{next.title}</Link>
          </li>
        )}
      </ul>
    </Panel>
  );
};

export default NeighborArticles;
