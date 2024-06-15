import { Outlet } from "react-router-dom";
import { Header } from "../components/home/Header";

export const HomeLayout = () => {
  return (
    <div className="bg-home-50 h-fit">
      <Header />
      <main className="bg-home-50">
        <Outlet />
      </main>
    </div>
  );
};
