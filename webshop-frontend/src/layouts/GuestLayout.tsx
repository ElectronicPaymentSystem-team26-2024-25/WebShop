import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.tsx";

const GuestLayout = () => {
  const { token } = useStateContext();
  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default GuestLayout;
