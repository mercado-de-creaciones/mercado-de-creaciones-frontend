import { NavLink } from "react-router-dom";
import { buttonVariants } from "../ui/button";

export const Header = () => {
    return (
        <header className="bg-white flex justify-between p-2">
            <p>Logo</p>
            <div className="flex gap-3">
            <NavLink to="/" className={buttonVariants({ variant: "link" })}>Home</NavLink>
            <NavLink to="/" className={buttonVariants({ variant: "link" })}>Categorias</NavLink>
            <NavLink to="/" className={buttonVariants({ variant: "link" })}>Sobre nosotros</NavLink>
            <NavLink to="/" className={buttonVariants({ variant: "blue" })}>Iniciar sesión</NavLink>
            <NavLink to="/" className={buttonVariants({ variant: "outlineblue" })}>Registrarse</NavLink>

            </div>

        </header>
    )
}