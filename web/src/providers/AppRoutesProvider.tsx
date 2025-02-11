import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useAppRoutes } from "../routes";

export const AppRoutesProvider = () => {
  const { routes } = useAppRoutes();
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
