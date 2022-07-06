import { ApolloProvider } from "@apollo/client";
import { CssBaseline } from "@mui/material";
import { client } from "./client";
import { Repos } from "./repos";

export function App() {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <Repos />
    </ApolloProvider>
  );
}
