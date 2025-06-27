import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Register from "../Pages/shared/Register/Register";
import Home from "../Pages/Home/Home";
import ExploreGardeners from "../Pages/ExploreGardeners/ExploreGardeners";
import BrowseTips from "../Pages/BrowseTips/BrowseTips ";
import ShareGardenTip from "../Pages/Dashboard/ShareGardenTip/ShareGardenTip";
import Loading from "../components/Loading";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TipDetails from "../Pages/BrowseTips/TipDetails";
import ErrorPage from "../Pages/Error/ErrorPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import DashboardLayouts from "../layouts/DashboardLayouts";
import MyTips from "../Pages/Dashboard/MyTips/MyTips";
import Login from "../Pages/Login/Login";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import UpdateTips from "../Pages/Dashboard/UpdateTips/UpdateTips";
import AllGardeners from "../Pages/Dashboard/AllGardeners/AllGardeners";
import AddGardener from "../Pages/Dashboard/AddGardener/AddGardener";
import Contact from "../Pages/Contact/Contact";
import Support from "../Pages/Support/Support";
import DashboardHome from "../Pages/Dashboard/Home/DashboardHome";
import EventDetails from "../Pages/Home/EventDetails";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import GardenerDetails from "../Pages/Dashboard/GardenerDetails/GardenerDetails";

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
      },
      {
        path: "event/:id",
        Component: EventDetails,
        loader: ({ params }) =>
          fetch(
            `https://gardening-community-server-gamma.vercel.app/events/${params.id}`
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
      { path: "login", Component: Login },

      { path: "registration", Component: Register },
      { path: "about-us", Component: AboutUs },
      { path: "contact", Component: Contact },
      { path: "support", Component: Support },
    ],
  },
  { path: "reset-password", Component: ResetPassword },

  // dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayouts />
      </PrivateRoute>
    ),
    children: [
      { path: "", Component: DashboardHome },
      {
        path: "share-garden",
        element: (
          <PrivateRoute>
            <ShareGardenTip />
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
      {
        path: "my-tips",
        element: (
          <PrivateRoute>
            <MyTips />
          </PrivateRoute>
        ),
      },
      {
        path: "all-gardeners",
        element: (
          <PrivateRoute>
            <AllGardeners />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://gardening-community-server-gamma.vercel.app/all-gardeners"
          ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "add-gardener",
        element: (
          <PrivateRoute>
            <AddGardener />
          </PrivateRoute>
        ),
      },
      { path: "userProfile", Component: UserProfile },
      {
        path: "gardenerDetails/:id",
        Component: GardenerDetails,
        loader: ({ params }) =>
          fetch(
            `https://gardening-community-server-gamma.vercel.app/gardeners/${params.id}`
          ),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
]);
