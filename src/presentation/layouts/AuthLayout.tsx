import { Outlet } from "react-router-dom"
import { Button } from "../components/ui/button";

export const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
}
