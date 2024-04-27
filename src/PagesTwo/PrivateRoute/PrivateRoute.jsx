/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

import { AuthContext } from "../../AuthProvider/ContextProvider";
import Spinner from "../Spinner/Spinner";

export default function PrivateRoute({ children }) {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }

  if (user) return children;

  return <Navigate to="/login" state={location.pathname} />;
}
