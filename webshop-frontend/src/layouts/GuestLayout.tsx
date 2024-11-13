import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.tsx";
import { Toaster } from "@/components/ui/toaster.tsx";

const GuestLayout = () => {
  const { token } = useStateContext();
  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
      <Toaster />
    </div>
  );
};

export default GuestLayout;
