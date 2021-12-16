import { Redirect, Route } from "react-router-dom";
import { authSelectors } from "../Redux/auth";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children, ...routeProps }) {
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLogedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}