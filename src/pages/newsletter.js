import React, { Fragment, useCallback } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { Authenticate } from "./index";
import { Button, Panel, Paragraph, SubTitle, Title } from "../components/index";
import { getPreview } from "../lib";

export default function Newsletter({ latestArticle }) {
  const [notifySubscribers, { loading, error, data }] = useMutation(
    NOTIFY_SUBSCRIBERS
  );

  const url = `https://bess.nu/#/archief/${latestArticle.id}`;
  const title = latestArticle.title;
  const teaser = `${getPreview(latestArticle)}…`;

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const variables = {
        url,
        title,
        teaser,
      };

      console.log(`*** variables`, variables);
      notifySubscribers({
        variables,
      })
        .then(console.log)
        .catch(console.error);
    },
    [notifySubscribers, url, title, teaser]
  );

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
        <p>Verstuurd naar {data?.notifySubscribers?.length} mensen!</p>
      </Fragment>
    );
  }

  return (
    <Authenticate>
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
    </Authenticate>
  );
}

const NOTIFY_SUBSCRIBERS = gql`
  mutation($url: String!, $title: String!, $teaser: String!) {
    notifySubscribers(url: $url, title: $title, teaser: $teaser) {
      email
      active
    }
  }
`;
