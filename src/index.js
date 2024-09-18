import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, theme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// we are using this as a shorthand you can say . whenever we need to use the url we will use "server" instead of this long url

export const server = `https://api.coingecko.com/api/v3`;
