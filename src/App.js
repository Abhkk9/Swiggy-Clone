import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantPage from "./components/RestaurantPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ThemeProvider } from "./utils/ThemeContext"; 
import { Provider } from "react-redux"; //provder  is a thing provided by react to // connect react with redux store
import apStore from "./utils/store/appStore";
import { AddressProvider } from "./utils/AddressContext";

const Instamart = React.lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  return (
    <Provider store={apStore}>
      <ThemeProvider>
        <AddressProvider>
          <div className="app">
            <Header />
            <Outlet />
          </div>
        </AddressProvider>
      </ThemeProvider>
    </Provider>
  )
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
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);