import React, { Fragment } from "react";

import Header from "./header";
import Article from "./article";

import styled from "styled-components";

import { latestArticle } from "./data";

const Content = styled.div`
  max-width: 740px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  return (
    <Fragment>
      <Header />
      <Content>
        <Article article={latestArticle} />
      </Content>
    </Fragment>
  );
};

export default App;
