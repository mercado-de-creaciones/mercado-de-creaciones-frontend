import { useLoginMutation } from "@/presentation/hooks";

import { NavLink } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { TypographyH4 } from "../shared";

export const Header = () => {
  const { token } = useLoginMutation();
  return (
    <header className="bg-white flex justify-between items-center p-2">
      <p>Logo</p>
      <div className="flex gap-3">
        <NavLink to="/" className={buttonVariants({ variant: "link" })}>
          Home
        </NavLink>
        <NavLink to="/" className={buttonVariants({ variant: "link" })}>
          Categorias
        </NavLink>
        <NavLink to="/" className={buttonVariants({ variant: "link" })}>
          Sobre nosotros
        </NavLink>
        {token ? (
          <TypographyH4 className="flex items-center text-sky-700">Usuario Autenticado</TypographyH4>
        ) : (
          <>
            <NavLink
              to="/auth/"
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
