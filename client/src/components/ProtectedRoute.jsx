import { Route, Redirect } from "react-router-dom";
import { useUserStore } from "../state/store";

const ProtectedRoute = ({ path, component: Component, ...rest }) => {
  const isLoggedIn = useUserStore((state) => state.user.isLoggedIn);

  return (
    <Route
      {...rest}
      path={path}
      render={(props) =>
        isLoggedIn ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
