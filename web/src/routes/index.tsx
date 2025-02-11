import { RouteObject } from "react-router-dom";

import { ParkManager } from "../parkManager";

export const useAppRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <ParkManager />,
    },
  ];
  return { routes };
};
