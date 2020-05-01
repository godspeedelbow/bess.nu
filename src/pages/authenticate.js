import React, { Fragment } from "react";
import { compose, withHandlers, withState } from "recompose";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import isEmail from "is-email";
import { get } from "lodash-es";

import styled from "styled-components";

import { Button, Input, Panel, SubTitle, Title } from "../shared/index";

function isAuthenticatedSession() {
  return !!sessionStorage.getItem("token");
}

const AUTHENTICATE = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Authenticate = ({
  isAuthenticated,
  children,
  error,
  localError,
  onChange,
  onSubmit,
}) => {
  if (isAuthenticated) {
    return React.Children.only(children);
  }

  return (
    <Fragment>
      <SubTitle>Inloggen</SubTitle>
      <form onSubmit={onSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="je emailadres"
          onChange={onChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="je wachtwoord"
          onChange={onChange}
        />
        <Button type="submit">Gaan met die banaan</Button>
      </form>
      <Error>{error || localError}</Error>
    </Fragment>
  );
};

const AuthenticateContainer = compose(
  withState("localError", "setLocalError", null),
  withState("isAuthenticated", "setAuthenticated", isAuthenticatedSession()),
  withHandlers({
    onClick: ({ expand }) => () => expand(true),
    onSubmit: ({ authenticate, setLocalError, setAuthenticated }) => async (
      event
    ) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const email = formData.get("email");
      const password = formData.get("password");

      if (!email) {
        setLocalError("Vul je emailadres in.");
        return;
      }

      if (!password) {
        setLocalError("Vul je wachtwoord in.");
        return;
      }

      if (!isEmail(email)) {
        setLocalError("Vul een geldig emailadres in.");
        return;
      }

      authenticate({
        variables: { email, password },
      })
        .then((response) => {
          const token = get(response, "data.login.token");

          sessionStorage.setItem("token", token);

          setAuthenticated(true);
        })
        .catch(console.error);
    },
    onChange: ({ setLocalError }) => () => setLocalError(null),
  })
)(Authenticate);

export default ({ children }) => {
  return (
    <Mutation mutation={AUTHENTICATE}>
      {(authenticate, { loading, error, data }) => (
        <AuthenticateContainer
          authenticate={authenticate}
          loading={loading}
          error={error && error.message}
          data={data}
        >
          {children}
        </AuthenticateContainer>
      )}
    </Mutation>
  );
};

const Error = styled.div`
  margin-top: 10px;
  min-height: 20px;
  color: #333;
`;
