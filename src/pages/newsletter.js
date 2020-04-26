import React, { Fragment } from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import styled from "styled-components";
import { Authenticate } from "./index";
import {
  Button,
  Input,
  Panel,
  Paragraph,
  SubTitle,
  Title,
} from "../shared/index";
import { getPreview } from "../lib";

const UnsubscribeButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const NOTIFY_SUBSCRIBERS = gql`
  mutation(
    $url: String!
    $title: String! # teaser: String!
  ) {
    notifySubscribers(
      url: $url
      title: $title # teaser: $teaser
    ) {
      email
      active
    }
  }
`;

const Newsletter = ({ latestArticle, authenticated, onAuthenticated }) => {
  console.log(`*** latestArticle`, latestArticle);
  console.log(`*** authenticated`, authenticated);
  if (!authenticated) {
    return <Authenticate onAuthenticated={onAuthenticated} />;
  }

  return (
    <Mutation mutation={NOTIFY_SUBSCRIBERS}>
      {(notifySubscribers, { loading, error, data }) => {
        console.log(`*** data`, data);
        console.log(`*** loading`, loading);
        if (error) {
          console.log(`*** error`, error);
          console.log(`*** error.extensions`, error.extensions);
          return (
            <Fragment>
              <Title>Oeps</Title>
              <p>Er ging iets fout: {error.message}</p>
            </Fragment>
          );
        }
        if (data) {
          return (
            <Fragment>
              <Title>Verstuurd</Title>
              <p>Verstuurd naar {[].length} mensen!</p>
            </Fragment>
          );
        }

        const url = `https://bess.nu/#/archief/${latestArticle.id}`;
        const title = latestArticle.title;
        const teaser = `${getPreview(latestArticle)}…`;

        const variables = {
          url,
          title,
          teaser,
        };
        console.log(`*** variables`, variables);
        const onSubmit = (event) => {
          console.log(`*** event`, event);
          event.preventDefault();
          // notifySubscribers({ variables });
          notifySubscribers();
        };

        return (
          <Fragment>
            <Title>Nieuwsbrief versturen</Title>
            <Panel>
              <SubTitle>{title}</SubTitle>
              <Paragraph>{teaser}</Paragraph>
            </Panel>
            <Button type="submit" disabled={!!loading} onClick={onSubmit}>
              Verstuur de nieuwsbrief
            </Button>
          </Fragment>
        );
      }}
    </Mutation>
  );
};

const NewsletterContainer = compose(
  withStateHandlers(
    {
      authenticated: true,
    },
    {
      onAuthenticated: () => () => ({
        authenticated: true,
      }),
    }
  )
)(Newsletter);

export default NewsletterContainer;
