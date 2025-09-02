import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/Home/Home.tsx";
import SectionPage from "./pages/Section/Section.tsx";
// import Section from "./pages/Section/Section.tsx";
// import Project from "./pages/Project/Project.tsx";
// import NotFound from "./pages/NotFound/NotFound.tsx";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
     {
        path: "/:section",
        element: <SectionPage />,
      },
    /*  {
        path: "/:section/:project",
        element: <Project/>,
      },
      { path: "*", element: <NotFound /> }, // Route 404 */
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
