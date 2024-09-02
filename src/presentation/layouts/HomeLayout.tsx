import { Outlet } from "react-router-dom";
import { Header } from "../components/home/Header";

export const HomeLayout = () => {
  return (
    <div className="bg-home-50 min-h-dvh">
      <Header />
      <main className="bg-home-50 first-line:md:px-24 px-4 sm:px-8 min-h-dvh mt-5">
        <Outlet />
      </main>
    </div>
  );
};
