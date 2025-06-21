import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantPage from "./components/RestaurantPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ThemeProvider } from "./utils/ThemeContext"; 

const Instamart = React.lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

const appRouter = createBrowserRouter([
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
        element: <AboutUs />,
      },
      {
        path: "/instamart",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <Instamart />
          </React.Suspense>
        ),
      },
      {
        path: "/restaurants/:restId",
        element: <RestaurantPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);