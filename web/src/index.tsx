import "./styles/global.css";

import ReactDOM from "react-dom/client"; // Importação alterada
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";

// Substitua ReactDOM.render() por ReactDOM.createRoot()
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
); // Criação do root
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
