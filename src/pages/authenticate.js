import React, { Fragment, useCallback, useState } from "react";
import gql from "graphql-tag";
import isEmail from "is-email";
import { get } from "lodash-es";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";

import { Button, Input, SubTitle } from "../shared";
import { useAuthentication } from "../hooks";

const AUTHENTICATE = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export default function Authenticate({ children }) {
  const [localError, setLocalError] = useState(null);
  const onChange = useCallback(() => setLocalError(null), [setLocalError]);
  const { isAuthenticated, logIn } = useAuthentication();
  const [authenticate, { error }] = useMutation(AUTHENTICATE);

  const onSubmit = useCallback(
    (event) => {
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

          logIn();
        })
        .catch(console.error);
    },
    [authenticate, logIn, setLocalError]
  );

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
      <Error>{error?.message || localError}</Error>
    </Fragment>
  );
}

const Error = styled.div`
  margin-top: 10px;
  min-height: 20px;
  color: #333;
`;
