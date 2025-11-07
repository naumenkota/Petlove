import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, redirectTo = "/" }) {
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  if (!user || !isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}
