import React, { Fragment } from "react";
import { withProps } from 'recompose';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import styled from "styled-components";

import Title from "../shared/title";

const UnsubscribeButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  pointer: cursor;
`;

const UNSUBSCRIBE = gql`
  mutation($email: Email!) {
    unsubscribe(email: $email) {
      id
      active
      email
    }
  }
`;

const Unsubscribe = ({ email }) => {
  return (
    <Mutation mutation={UNSUBSCRIBE}>
      {(unsubscribe, { loading, error, data }) => {
        if (error) {
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
              <Title>Uitgeschreven</Title>
              <p>Je krijgt geen email meer van ons op <strong>{email}</strong>.</p>
            </Fragment>
          );
        }

        return (
          <Fragment>
            <Title>Uitschrijven voor ons blog</Title>
            { email
              ? (
                <Fragment>
                  <p>Je staat ingeschreven op ons blog met <strong>{email}</strong>. Wil je je uitschrijven?</p>
                  <UnsubscribeButton
                    onClick={() => unsubscribe({ variables: { email } })}
                    disabled={!!loading}
                  >
                    Uitschrijven
                  </UnsubscribeButton>
                </Fragment>
              )
              : <p>Emailadres ontbreekt.</p>
            }
          </Fragment>
        );
      }}
    </Mutation>
  );
};

const UnsubscribeContainer = withProps(
  () => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');

    return {
      email,
    };
  }
)(Unsubscribe);

export default UnsubscribeContainer;
