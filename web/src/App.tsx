import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "./lib/query-client";
import { AppRoutesProvider } from "./providers/AppRoutesProvider";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutesProvider />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
