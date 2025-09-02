import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home/Home.tsx";
// import Section from "./pages/Section/Section.tsx";
// import Project from "./pages/Project/Project.tsx";
// import NotFound from "./pages/NotFound/NotFound.tsx";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
     /* {
        path: "/:section",
        element: <Section />,
      },
      {
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
