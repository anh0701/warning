import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../shared/layouts/MainLayout";
import HomePage from "../features/home/pages/HomePage";
import ChapterPage from "../features/chapters/pages/ChapterPage";
import GamePage from "../features/game/pages/GamePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "chapters/:chapterId",
        element: <ChapterPage />,
      },
    ],
  },
  {
    path: "/game/:chapterId",
    element: <GamePage />,
  },
]);
