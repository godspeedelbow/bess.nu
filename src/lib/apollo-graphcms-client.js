import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: "https://api-euwest.graphcms.com/v1/cjwiutz3s028s01dpvq7v6nd9/master",
});

const apolloGraphCmsClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default apolloGraphCmsClient;
