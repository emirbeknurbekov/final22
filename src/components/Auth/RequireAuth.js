import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContextProvider";

const RequireAuth = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser.isAdmin) {
    // return <Navigate to="/" />;
  }
  return children;
};

export default RequireAuth;
