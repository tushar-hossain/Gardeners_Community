import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { users, isLoading } = use(AuthContext);
  const location = useLocation();

  if (isLoading) return <Loading />;

  if (!users) {
    return <Navigate state={location.pathname} to="/login" />;
  }

  return children;
};

export default PrivateRoute;
