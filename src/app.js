import React, { Fragment } from "react";

import Header from "./header";
import Footer from "./footer";
import Article from "./article";
import Crew from "./crew";
import Bess from "./bess";
import RoutePage from "./route";
import Archive from "./archive";

import { HashRouter as Router, Route } from "react-router-dom";

import styled from "styled-components";

import { latestArticle, articles } from "./data";

const Content = styled.div`
  max-width: 740px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`;

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Content>
          <Route exact path="/" render={()=>{
            return <Article article={latestArticle} />;
          }} />
          <Route exact path="/crew" component={Crew} />
          <Route exact path="/bess" component={Bess} />
          <Route exact path="/route" component={RoutePage} />
          <Route exact path="/archief" component={Archive} />
          <Route exact path="/archief/:id" render={(props) => {
            const articleId = props.match.params.id;
            const article = articles.find(({ id }) => id === articleId);

            return article
              ? <Article article={article} />
              : null;
          }}/>
        </Content>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
