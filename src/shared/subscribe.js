import React from "react";
import { compose, withState, withHandlers, withProps } from "recompose";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import isEmail from "is-email";
import Toggle from "react-toggle";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import Panel from "./panel";

import "formdata-polyfill";
import "react-toggle/style.css"; // for ES6 modules

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
  @media (min-width: 375px) {
    font-size: 20px;
  }
  @media (min-width: 800px) {
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
  @media (min-width: 800px) {
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

const StyledToggle = styled(Toggle)`
  margin-right: 9px;
  top: 5px;

  &.react-toggle--checked {
    .react-toggle-track {
      background-color: #777;
    }

    .react-toggle-thumb {
      border-color: #333;
      &:hover {
        border-color: #19ab27;
      }
    }
  }
`;

const Error = styled.div`
  margin-top: 10px;
  min-height: 20px;
  color: #333;
`;

const Subscribe = ({
  toggle,
  setToggle,
  onSubmit,
  onChange,
  localError,
  data,
  loading,
  error
}) => {
  const disabled = !!loading;

  if (data) {
    return (
      <Panel>
        <SubTitle>Ingeschreven</SubTitle>
        <p>Je krijgt een seintje als we een nieuw bericht plaatsen!</p>
      </Panel>
    );
  }
  console.log(toggle);
  return (
    <Panel>
      <SubTitle>Wil je een seintje als we een nieuw bericht plaatsen?</SubTitle>
      <form onSubmit={onSubmit}>
        <Email
          disabled={disabled}
          type="email"
          name="email"
          placeholder="je emailadres"
          onChange={onChange}
        />
        <StyledToggle
          checked={toggle}
          onChange={event => {
            const value = event.target.checked;
            setToggle(value);
          }}
        />

        <SubscribeButton disabled={disabled} type="submit">
          {toggle ? "Hou me op de hoogte" : "Laat me met rust"}
        </SubscribeButton>
      </form>
      <Error>{error || localError}</Error>
    </Panel>
  );
};

const SubscribeContainer = compose(
  withRouter,
  withState("toggle", "setToggle", true),
  withState("localError", "setLocalError", null),
  withHandlers({
    onClick: ({ expand }) => () => expand(true),
    onSubmit: ({ history, subscribe, setLocalError, toggle }) => event => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const email = formData.get("email");

      if (!email) {
        setLocalError("Vul een emailadres in.");
        return;
      }

      if (!isEmail(email)) {
        setLocalError("Vul een geldig emailadres in.");
        return;
      }

      if (!toggle) {
        history.push(`/uitschrijven?email=${email}`);
      } else {
        subscribe({ variables: { email } });
      }
    },
    onChange: ({ setLocalError }) => () => setLocalError(null)
  })
)(Subscribe);

export default () => {
  return (
    <Mutation mutation={SUBSCRIBE}>
      {(subscribe, { loading, error, data }) => (
        <SubscribeContainer
          subscribe={subscribe}
          loading={loading}
          error={error && error.message}
          data={data}
        />
      )}
    </Mutation>
  );
};
