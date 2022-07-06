import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createClient, Provider } from "./client";
import { Repos } from "./repos";

export function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    createClient({
      url: "http://localhost:3001/trpc",
    })
  );

  return (
    <Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Repos />
      </QueryClientProvider>
    </Provider>
  );
}
