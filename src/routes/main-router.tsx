import { createBrowserRouter } from "react-router-dom";
import {
  CreateGamePage,
  Game,
  GameLayout,
  IndexPage,
  JoinGamePage,
} from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GameLayout />,
    errorElement: <>Error: 404 Page Not Found</>,
    /*  loader: rootLoader, */
    children: [
      {
        path: "/",
        element: <IndexPage />,
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
      {
        path: "play",
        element: <Game />,
      },
    ],
  },
]);
