import { useLoginMutation, useProfile } from "@/presentation/hooks";

import { buttonVariants } from "../ui/button";
import { AvatarMenu } from "./AvatarMenu";

import { NavLink } from "react-router-dom";

export const Header = () => {
  const { token,logout } = useLoginMutation();

  const { queryProfile } = useProfile(token!);
  
  return (
    <header className="bg-white flex justify-between items-center py-2 px-8">
      <img src="/logo.svg" alt="Logo" />

      <div className="flex gap-6">
        <nav className="flex">
          <NavLink to="/" className={buttonVariants({ variant: "link" })}>
            Home
          </NavLink>
          <NavLink to="/" className={buttonVariants({ variant: "link" })}>
            Categorias
          </NavLink>
          <NavLink to="/" className={buttonVariants({ variant: "link" })}>
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
          <>
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
          </>
        )}
      </div>
    </header>
  );
};
