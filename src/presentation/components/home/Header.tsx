import { useLoginMutation, useProfile } from "@/presentation/hooks";

import { buttonVariants } from "../ui/button";
import { AvatarMenu } from "../shared/AvatarMenu";

import { NavLink } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const { token,logout } = useLoginMutation();
  const { queryProfile } = useProfile(token!);

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  
  return (
    <header className="bg-white relative flex justify-between items-center py-2 px-8">
      <img src="/logo.png" className="w-48 hidden lg:block" alt="Logo" />
      <img src="/Vector.png" className="w-10 lg:hidden" alt="Logo" />

      <div className={`absolute top-12 p-4 ${isOpenMenu ? "translate-y-0 opacity-100 visible" : "translate-y-[-5rem] opacity-0 invisible"} left-0 bg-white w-full md:p-0 md:top-0 md:flex items-center md:relative gap-6 justify-end transition-all duration-300 md:translate-y-0 md:opacity-100 md:visible`}>
        <nav className="flex flex-col md:flex-row gap-8 mb-4 md:m-0">
          <NavLink to="/" className="relative before:content-[''] before:bg-home-100 
          before:w-full before:h-1 before:absolute before:-bottom-1 before:scale-0 md:hover:before:scale-100 before:origin-left before:transition-all hover:before:duration-500">
            Home
          </NavLink>
          <NavLink to="/" className="relative before:content-[''] before:bg-home-100 
          before:w-full before:h-1 before:absolute before:-bottom-1 before:scale-0 md:hover:before:scale-100 before:origin-left before:transition-all hover:before:duration-500">
            Categorias
          </NavLink>
          <NavLink to="/" className="relative before:content-[''] before:bg-home-100 
          before:w-full before:h-1 before:absolute before:-bottom-1 before:scale-0 md:hover:before:scale-100 before:origin-left before:transition-all hover:before:duration-500">
            Sobre nosotros
          </NavLink>
        </nav>

        {token ? (
          <AvatarMenu
            user={queryProfile.data!}
            isLoading={queryProfile.isLoading}
            logout={logout}
          />
        ) : (
          <div className="space-x-4">
            <NavLink
              to="/auth/login"
              className={buttonVariants({ variant: "blue" })}
            >
              Iniciar sesión
            </NavLink>
            <NavLink
              to="/auth/registrar"
              className={buttonVariants({ variant: "outlineblue" })}
            >
              Registrarse
            </NavLink>
          </div>
        )}
      </div>

      <button className="md:hidden" onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <MenuIcon className="size-8"/>
      </button>
    </header>
  );
};
