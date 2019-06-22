import React from "react";

import Header from "./header";
import Article, { GraphCMSArticle } from "./article";
import Crew from "./pages/crew";
import Bess from "./pages/bess";
import RoutePage from "./pages/route";
import Archive from "./pages/archive";
import Unsubscribe from "./pages/unsubscribe";
import ScrollToTop from "./shared/scroll-to-top";

import { HashRouter as Router, Route } from "react-router-dom";

import styled from "styled-components";

import { latestArticle, articles } from "./data";
import ApolloProvider from "./components/apollo.provider";
import { GraphCMSQuery } from "./components";
import gql from "graphql-tag";

const Content = styled.div`
  max-width: 740px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`;

const LATEST_ARTICLE_QUERY = gql`
  query {
    blogPosts(orderBy: createdAt_DESC, first: 1) {
      id
      createdAt
      title
      body {
        markdown
      }
      location {
        latitude
        longitude
      }
      locationName
      photos(orderBy: title_ASC) {
        src: url(transformation: { image: { resize: { width: 800 } } })
        title
      }
    }
  }
`;

const App = () => {
  return (
    <ApolloProvider>
      <Router>
        <ScrollToTop>
          <Header />
          <Content>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <GraphCMSQuery query={LATEST_ARTICLE_QUERY}>
                    {({ error, loading, data }) => {
                      if (error) {
                        return "Oeps, er is iets fout gegaan. Stuur een mail naar eelke@boezeman.com als het probleem zich voor blijft doen.";
                      }
                      if (loading) {
                        return "Loading ...";
                      }
                      const article = data.blogPosts[0];
                      return <GraphCMSArticle article={article} />;
                    }}
                  </GraphCMSQuery>
                );
              }}
            />
            <Route exact path="/uitschrijven" component={Unsubscribe} />
            <Route exact path="/crew" component={Crew} />
            <Route exact path="/bess" component={Bess} />
            <Route exact path="/route" component={RoutePage} />
            <Route exact path="/archief" component={Archive} />
            <Route
              exact
              path="/archief/:id"
              render={props => {
                const articleId = props.match.params.id;
                const article = articles.find(({ id }) => id === articleId);

                return article ? <Article article={article} /> : null;
              }}
            />
          </Content>
        </ScrollToTop>
      </Router>
    </ApolloProvider>
  );
};

export default App;
