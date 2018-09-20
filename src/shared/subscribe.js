import React from "react";
import { compose, withState, withHandlers } from 'recompose';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import isEmail from 'is-email';

import styled from "styled-components";
import 'formdata-polyfill';

import Panel from "./panel";

const SubTitle = styled.h3`
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
  @media(min-width: 375px) {
    font-size: 20px;
  }
  @media(min-width: 800px) {
    font-size: 22px;
  }
`;

const Email = styled.input`
  border: 1px solid #bbb;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
  font-size: 15px;
  @media(min-width: 800px) {
    width: 35%;
  }
`;

const SubscribeButton = styled.button`
  margin-top: 10px;
  border: 1px solid #bbb;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  background-color: #e9e9e9;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SUBSCRIBE = gql`
  mutation($email: Email!) {
    subscribe(email: $email) {
      id
      active
      email
    }
  }
`;

const Error = styled.div`
  margin-top: 10px;
  min-height: 20px;
  color: #333;
`;

const Subscribe = ({ onSubmit, onChange, localError, data, loading, error }) => {
  const disabled = !!loading;

  if (data) {
    return (
      <Panel>
        <SubTitle>Ingeschreven</SubTitle>
        <p>Je krijgt een seintje als we een nieuw bericht plaatsen!</p>
      </Panel>
    );
  }

  return (
    <Panel>
      <SubTitle>Wil je een seintje als we een nieuw bericht plaatsen?</SubTitle>
      <form onSubmit={onSubmit}>
        <Email disabled={disabled} type="email" name="email" placeholder="je emailadres" onChange={onChange} />
        <SubscribeButton disabled={disabled} type="submit">Hou me op de hoogte</SubscribeButton>
      </form>
      <Error>{error || localError}</Error>
    </Panel>
  );
};

const SubscribeContainer = compose(
  withState('localError', 'setLocalError', null),
  withHandlers({
    onClick: ({ expand }) => () => expand(true),
    onSubmit: ({ subscribe, setLocalError }) => (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const email = formData.get('email');

      if (!email) {
        setLocalError('Vul een emailadres in.');
        return;
      }

      if (!isEmail(email)) {
        setLocalError('Vul een geldig emailadres in.');
        return;
      }

      subscribe({ variables: { email } });
    },
    onChange: ({ setLocalError }) => () => setLocalError(null),
  })
)(Subscribe);

export default () => {
  return (
    <Mutation mutation={SUBSCRIBE}>
      {(subscribe, { loading, error, data }) =>
        <SubscribeContainer
          subscribe={subscribe}
          loading={loading}
          error={error && error.message}
          data={data}
        />
      }
    </Mutation>
  );
};
