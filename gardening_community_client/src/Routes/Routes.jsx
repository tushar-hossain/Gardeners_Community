import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ResetPassword from "../Pages/ResetPassword";
import ExploreGardeners from "../Pages/ExploreGardeners";
import BrowseTips from "../Pages/BrowseTips ";
import ShareGardenTip from "../Pages/ShareGardenTip";
import MyTips from "../Pages/MyTips";
import Loading from "../components/Loading";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TipDetails from "../Pages/TipDetails";
import UpdateTips from "../Pages/UpdateTips";
import ErrorPage from "../Pages/ErrorPage";
import AboutUs from "../Pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch(
            "https://gardening-community-server-gamma.vercel.app/gardeners"
          ),
        hydrateFallbackElement: <Loading />,
      },

      {
        path: "explore-gardeners",
        Component: ExploreGardeners,
        loader: () =>
          fetch(
            "https://gardening-community-server-gamma.vercel.app/all-gardeners"
          ),
        hydrateFallbackElement: <Loading />,
      },

      {
        path: "browse-tips",
        Component: BrowseTips,
        loader: () =>
          fetch(
            "https://gardening-community-server-gamma.vercel.app/public-tips"
          ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "tip-details/:id",
        element: (
          <PrivateRoute>
            <TipDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "share-garden",
        element: (
          <PrivateRoute>
            <ShareGardenTip />
          </PrivateRoute>
        ),
      },

      {
        path: "my-tips",
        element: (
          <PrivateRoute>
            <MyTips />
          </PrivateRoute>
        ),
      },
      {
        path: "update-tips/:id",
        loader: ({ params }) =>
          fetch(
            `https://gardening-community-server-gamma.vercel.app/tips/${params.id}`
          ),
        hydrateFallbackElement: <Loading />,
        element: (
          <PrivateRoute>
            <UpdateTips />
          </PrivateRoute>
        ),
      },

      { path: "login", Component: Login },

      { path: "registration", Component: Register },
      { path: "about-us", Component: AboutUs },
    ],
  },
  { path: "reset-password", Component: ResetPassword },
]);
