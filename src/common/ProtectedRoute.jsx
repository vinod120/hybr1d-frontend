import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ children, ...rest }) {
  const token = localStorage?.getItem("auth-token");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token && token.length > 0 ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
