import { User } from "@/core/entities/user.entity";

import { Button } from "@/presentation/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/presentation/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/presentation/components/ui/avatar";
import { Skeleton } from "../ui/skeleton";

import {
  Settings,
  LogOut,
  SquarePen,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Formatter } from "@/config/helpers/formatter";
import { useToggle } from "usehooks-ts";

interface Props {
  user: User;
  isLoading: boolean;
  logout: () => void;
}

export const AvatarMenu = ({ user, isLoading, logout }: Props) => {
  const [isOpen,,setValue] = useToggle(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={() => setValue(!isOpen)}>
      <DropdownMenuTrigger
        asChild
        className="focus-visible:ring-offset-0 focus-visible:ring-0 w-48"
      >
        <Button className="flex justify-between bg-light-blue hover:bg-light-blue/50 font-semibold">
          {isLoading ? (
            <Skeleton className="h-8 w-8 rounded-full" />
          ) : (
            <Avatar>
              <AvatarImage src={user?.img || ""} alt="Imagen usuario" />
              <AvatarFallback className="text-slate-800">
                {Formatter.getInitials(user?.name)}
              </AvatarFallback>
            </Avatar>
          )}

          {isLoading ? (
            <Skeleton className="h-4 w-[84px]" />
          ) : (
            <p>{user?.name}</p>
          )}

          {isOpen ? (
            <ChevronDown className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="relative w-60 h-60 border-none p-0 pb-4">
        <div className="bg-gradient-secondary h-5/6 px-4">
          <DropdownMenuLabel className="text-white text-center text-lg py-4">
            Menú de usuario
          </DropdownMenuLabel>

          <DropdownMenuGroup className="absolute bottom-3 w-[90%] bg-white border rounded-md shadow-md p-4">
            <DropdownMenuItem className="text-md cursor-pointer hidden">
              <SquarePen className="mr-2 h-5 w-5 text-light-blue" />
              <span className="text-slate-800">Editar perfil</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-300 mx-auto" />

            <DropdownMenuItem className="text-md cursor-pointer hidden">
              <Settings className="mr-2 h-5 w-5 text-light-blue" />
              <span className="text-slate-800">Configuraciones</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-300 mx-auto" />

            <DropdownMenuItem
              className="text-md cursor-pointer"
              onClick={() => logout()}
            >
              <LogOut className="mr-2 h-5 w-5 text-light-blue" />
              <span className="text-slate-800">Cerrar sesión</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-300 mx-auto" />
          </DropdownMenuGroup>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
