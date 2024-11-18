import Menubar from "@/components/Menubar";
import { useStateContext } from "@/contexts/ContextProvider";
import { Navigate, Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const { token } = useStateContext();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Menubar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
