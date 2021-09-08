import React from "react";
import { Route, Redirect } from "react-router-dom";
import { hasToken } from "./services/userService";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (hasToken()) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
