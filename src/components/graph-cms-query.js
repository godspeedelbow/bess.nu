import React from "react";

import { Query } from "react-apollo";

import client from "../lib/apollo-graphcms-client";

export default props => <Query client={client} {...props} />;
