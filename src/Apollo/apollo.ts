import {
  gql,
  makeVar,
  InMemoryCache,
  ApolloLink,
  Operation,
  HttpLink,
  NormalizedCacheObject,
  split,
  ApolloClient,
  concat
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { onError } from "@apollo/client/link/error";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem("Bearer"));

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          }
        }
      }
    }
  }
});

const authMiddle = new ApolloLink((operation: Operation, forward: any): any => {
  operation.setContext({
    headers: {
      Authorization: localStorage.getItem("Bearer") || ""
    }
  });
  return forward(operation);
});

const subClient = new SubscriptionClient("ws://localhost:4000/subscription", {
  connectionParams: {
    "Authorization Bearer": localStorage.getItem("Bearer")
  },
  reconnect: true
});

const wsLink = new WebSocketLink(subClient);

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql"
});

const errLink = onError(({ graphqlErrors, networkError }: any) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }: any) =>
      console.log("net work graphql error :", message)
    );
  }
});

const linkComb = split(
  ({ query }) => {
    const { kind, operation }: any = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: ApolloLink.from([errLink, concat(authMiddle, linkComb)]),
  headers: {
    authorization: localStorage.getItem("Bearer") || ""
  },
  typeDefs
});

export default client;
