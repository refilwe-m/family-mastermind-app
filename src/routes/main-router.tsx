import { createBrowserRouter } from "react-router-dom";
import {
  CreateGamePage,
  GameLayout,
  IndexPage,
  JoinGamePage,
} from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <>Error: 404 Page Not Found</>,
    /*  loader: rootLoader, */
    children: [
      {
        path: "team",
        element: <></>,
        /* loader: teamLoader, */
      },
    ],
  },
  {
    path: "game",
    element: <GameLayout />,
    children: [
      {
        path: "create",
        element: <CreateGamePage />,
        /* loader: createGameLoader, */
      },
      {
        path: "join",
        element: <JoinGamePage />,
        /* loader: joinGameLoader, */
      },
    ],
  },
]);
