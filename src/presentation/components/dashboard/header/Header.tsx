import { useLoginMutation, useProfile } from "@/presentation/hooks";

import { AvatarMenu } from "../../shared/AvatarMenu";

import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, MenuIcon, PackageSearch, ShoppingBasket, User } from "lucide-react";
import { useState } from "react";
import NavTab from "./NavTab";

export const Header = () => {
  const location = useLocation();

  const routes = {
    dashboard: "/dashboard",
    products: "/dashboard/products",
    customers: "/dashboard/customers",
    orders: "/dashboard/orders"
  };

  const isActiveRoute = (path: string) => location.pathname === path;


  const isDashboard = isActiveRoute(routes.dashboard);
  const isProducts = isActiveRoute(routes.products);
  const isCustomers = isActiveRoute(routes.customers);
  const isOrders = isActiveRoute(routes.orders);



  const { token, logout } = useLoginMutation();
  const { queryProfile } = useProfile(token!);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="bg-white relative flex-col">
      <div className="bg-white relative flex justify-between items-center py-2 px-8 border-b-2">
        <img src="/logo.png" className="w-48 hidden lg:block" alt="Logo" />
        <img src="/Vector.png" className="w-10 lg:hidden" alt="Logo" />

        <div
          className={`absolute top-12 p-4 ${
            isOpenMenu
              ? "translate-y-0 opacity-100 visible"
              : "translate-y-[-5rem] opacity-0 invisible"
          } left-0 bg-white w-full md:p-0 md:top-0 md:flex items-center md:relative gap-6 justify-end transition-all duration-300 md:translate-y-0 md:opacity-100 md:visible`}
        >
          <AvatarMenu
            user={queryProfile.data!}
            isLoading={queryProfile.isLoading}
            logout={logout}
          />
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <MenuIcon className="size-8" />
        </button>
      </div>
      <nav className="flex gap-8 mb-4 md:m-0 justify-around items-center py-6 px-8">
        <NavTab to="/dashboard" isActive={isDashboard} label="Dashboard" Icon={LayoutDashboard} />
        <NavTab to="/dashboard/products" isActive={isProducts} label="Productos" Icon={PackageSearch } />
        <NavTab to="/dashboard/customers" isActive={isCustomers} label="Usuarios" Icon={User} />
        <NavTab to="/dashboard/orders" isActive={isOrders} label="Usuarios" Icon={ShoppingBasket } />

        <NavLink
          to="/"
          className="relative before:content-[''] before:bg-home-100 
          before:w-full before:h-1 before:absolute before:-bottom-1 before:scale-0 md:hover:before:scale-100 before:origin-left before:transition-all hover:before:duration-500"
        >
          Pedidos
        </NavLink>
      </nav>
    </header>
  );
};
