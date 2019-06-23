import React from "react";

import Header from "./header";
import Article from "./article";
import Crew from "./pages/crew";
import Bess from "./pages/bess";
import RoutePage from "./pages/route";
import Archive from "./pages/archive";
import Unsubscribe from "./pages/unsubscribe";
import ScrollToTop from "./shared/scroll-to-top";

import { HashRouter as Router, Route } from "react-router-dom";

import styled from "styled-components";

import ApolloProvider from "./components/apollo.provider";
import { GetArticles } from "./components";

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
    <ApolloProvider>
      <GetArticles>
        {({ articles, latestArticle }) => {
          return (
            <Router>
              <ScrollToTop>
                <Header />
                <Content>
                  <Route
                    exact
                    path="/"
                    render={() => {
                      return (
                        <Article article={latestArticle} articles={articles} />
                      );
                    }}
                  />
                  <Route exact path="/uitschrijven" component={Unsubscribe} />
                  <Route exact path="/crew" component={Crew} />
                  <Route exact path="/bess" component={Bess} />
                  <Route exact path="/route" component={RoutePage} />
                  <Route
                    exact
                    path="/archief"
                    render={() => <Archive articles={articles} />}
                  />
                  <Route
                    exact
                    path="/archief/:id"
                    render={props => {
                      const articleId = props.match.params.id;
                      const article = articles.find(
                        ({ id }) => id === articleId
                      );

                      return article ? (
                        <Article article={article} articles={articles} />
                      ) : null;
                    }}
                  />
                </Content>
              </ScrollToTop>
            </Router>
          );
        }}
      </GetArticles>
    </ApolloProvider>
  );
};

export default App;
