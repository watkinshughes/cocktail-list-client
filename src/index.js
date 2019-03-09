import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./styles.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri: "https://cocktail-list-api.herokuapp.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.register();
