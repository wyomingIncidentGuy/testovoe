import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from '@apollo/client';
import App from "./App";
import { client } from './apollo/client';

const rootNodeId = "root";

const container = document.getElementById(rootNodeId);

if (!container) {
  throw new Error(`Не найден Dom элемент с ${rootNodeId} `);
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
