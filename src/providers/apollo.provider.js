import React from "react";

import { ApolloProvider } from "react-apollo";

import client from "../lib/apollo";

export default props => (
  <ApolloProvider client={client}>{props.children}</ApolloProvider>
);
