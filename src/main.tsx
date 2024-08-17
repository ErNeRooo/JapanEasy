import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DictionaryPage } from "./pages/DictionaryPage/DictionaryPage.tsx";
import WordPage from "./pages/WordPage/WordPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
