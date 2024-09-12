import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DictionaryPage } from "./pages/DictionaryPage/DictionaryPage.tsx";
import WordPage from "./pages/WordPage/WordPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import KanaPage from "./pages/KanaPage/KanaPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <DictionaryPage />
      </App>
    ),
  },
  {
    path: "/word/:wordRank",
    element: (
      <App>
        <WordPage />
      </App>
    ),
  },
  {
    path: "/kana/",
    element: (
      <App>
        <KanaPage />
      </App>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
