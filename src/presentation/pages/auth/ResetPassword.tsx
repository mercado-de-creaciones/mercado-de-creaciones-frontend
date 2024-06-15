import { useResetPasswordMutation } from "@/presentation/hooks";

import { TypographyH2, TypographyP } from "@/presentation/components/shared";
import { Button } from "@/presentation/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form";
import { Input } from "@/presentation/components/ui/input";
import { resetPasswordSchema } from "@/presentation/validations/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { AlertCircle, LucideMailCheck } from "lucide-react";
import { Alert, AlertTitle } from "@/presentation/components/ui/alert";

export const ResetPassword = () => {
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const resetPasswordMutation = useResetPasswordMutation();

  const onSubmit = (values: z.infer<typeof resetPasswordSchema>) => {
    resetPasswordMutation.mutate(values);
  };

  return (
    <div className="flex flex-col gap-4 p-4 sm:px-8 sm:py-5 ">
      <header>
        <TypographyH2 className="uppercase text-center">
          Recuperar contraseña
        </TypographyH2>
        <TypographyP className="text-center">
          Recupera tu cuenta para acceder a tus productos
        </TypographyP>
      </header>

      {resetPasswordMutation.data && (
        <Alert variant="success" className="flex items-center gap-3 py-2">
          <span>
            <LucideMailCheck />
          </span>
          <AlertTitle className="m-0">
            {resetPasswordMutation.data.message}
          </AlertTitle>
        </Alert>
      )}

      {resetPasswordMutation.error && (
        <Alert variant="destructive" className="flex items-center gap-3 py-2">
          <span>
            <AlertCircle />
          </span>
          <AlertTitle className="m-0">
            {resetPasswordMutation.error.message}
          </AlertTitle>
        </Alert>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <FormLabel>Correo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    className={`border ${
                      errors.email?.message
                        ? "border-red-500"
                        : "border-blue-600"
                    }`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            variant="blue"
            className="hover:bg-[#366EFF]/90"
          >
            Recuperar
          </Button>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <TypographyP className="text-md text-balance">
              ¿Ya tienes cuenta?
              <Link to="/" className="text-[#366EFF] ml-2 font-medium">
                Inicia sesion
              </Link>
            </TypographyP>

            <TypographyP className="text-md">
              ¿No tienes cuenta?
              <Link to="/registrar" className="text-[#366EFF] ml-2 font-medium">
                registrate
              </Link>
            </TypographyP>
          </div>
        </form>
      </Form>
    </div>
  );
};
