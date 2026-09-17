import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // here even if you don't write .js extension react will treat as javascript file.
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // createBrowserRouter will create a routing configurations for us.

const AppLayout = () => {
  return (
    /* 
     <div className="app">
       <Header />
       <Body />
     </div>
    */
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// Creating Configurations for routes.
// But just creating configurations can't work.
// We need to provide this routing configurations to the Router Provider.
const appRouter = createBrowserRouter([
  /* This below code works but the issue here is when you header is not fixed for all routes.
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
*/
  // To fix the header for all routes you should use children routes.
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestuarantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />); // Here we are just rendering AppLayout directly.
root.render(<RouterProvider router={appRouter} />);
