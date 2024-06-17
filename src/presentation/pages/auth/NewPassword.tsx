import {
  useChangePasswordMutation,
  useCheckUserToken,
} from "@/presentation/hooks";

import { TypographyH2 } from "@/presentation/components/shared/typography/TypographyH2";
import { TypographyP } from "@/presentation/components/shared/typography/TypographyP";

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
import { Alert, AlertTitle } from "@/presentation/components/ui/alert";
import { Skeleton } from "@/presentation/components/ui/skeleton";
import { newPasswordSchema } from "@/presentation/validations/userSchema";

import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UserCheck, UserX } from "lucide-react";


export const NewPassword = () => {
  const params = useParams();

  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const { queryCheckToken } = useCheckUserToken(params.token as string);
  const changePasswordMutation = useChangePasswordMutation(
    params.token as string
  );

  const onSubmit = (values: z.infer<typeof newPasswordSchema>) => {
    changePasswordMutation.mutate({
      newPassword: values.password,
    });
  };
  console.log(changePasswordMutation.data);
  console.log(changePasswordMutation.error);

  return (
    <div className="flex flex-col gap-4 p-4 sm:px-8 sm:py-5 ">
      <header>
        <TypographyH2 className="uppercase text-center">
          Restablecer contraseña
        </TypographyH2>
        <TypographyP className="text-[#202446] text-center">
          Restablece tu contraseña y no pierdas acceso a tu cuenta.
        </TypographyP>
      </header>

      {changePasswordMutation.data && (
        <Alert variant="success" className="flex items-center gap-3 py-2">
          <span>
            <UserCheck />
          </span>
          <AlertTitle className="m-0">{changePasswordMutation.data.message}</AlertTitle>
        </Alert>
      )}

      {changePasswordMutation.error && (
        <Alert variant="destructive" className="flex items-center gap-3 py-2">
          <span>
            <UserX />
          </span>
          <AlertTitle className="m-0">{changePasswordMutation.error.message}</AlertTitle>
        </Alert>
      )}

      {queryCheckToken.isLoading ? (
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      ) : queryCheckToken.isError ? (
        <Alert variant="destructive" className="flex items-center gap-3 py-2">
          <span>
            <UserX />
          </span>
          <AlertTitle className="m-0">{queryCheckToken.error.message}</AlertTitle>
        </Alert>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field, formState: { errors } }) => (
                <FormItem>
                  <FormLabel>Nueva contraseña</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="************"
                      className={`border ${
                        errors.password?.message
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
              Guardar nueva contraseña
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};
