import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/presentation/components/ui/form';
import { ButtonWithIcon, Divider } from '@/presentation/components/shared';
import { Input } from '@/presentation/components/ui/input';
import { Button } from '@/presentation/components/ui/button';
import Google from '@/presentation/components/icons/Google';
import { TypographyH2, TypographyP } from "@/presentation/components/shared";

import { loginSchema } from '@/presentation/validations/userSchema';
import { useLoginMutation } from '@/presentation/hooks';


export const Login = () => {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const { loginMutation } = useLoginMutation();

	async function onSubmit(values: z.infer<typeof loginSchema>) {
		loginMutation.mutateAsync(values);
	}

	return (
    <div className="w-full p-4 sm:px-8 sm:py-5 flex flex-col gap-4">
      <TypographyH2 className="uppercase text-center">
        Inicia sesión
      </TypographyH2>
      <TypographyP className="text-center">
        Inicia sesión y administra tus productos
      </TypographyP>

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

          <FormField
            control={form.control}
            name="password"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input
                    placeholder="*****************"
                    className={`border ${
                      errors.email?.message
                        ? "border-red-500"
                        : "border-blue-600"
                    }`}
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {loginMutation.error && loginMutation.error.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <Link to="/auth/olvide-password" className="text-[#366EFF] text-md">
            ¿Olvidaste tu contraseña?
          </Link>

          <Button type="submit" variant="gradient" className="w-full">
            Ingresar
          </Button>

          <Divider />

          <ButtonWithIcon type="button" className="hidden">
            <Google className="w-5 h-5" /> Ingresar
          </ButtonWithIcon>

          <TypographyP className="text-md">
            ¿No tienes cuenta?
            <Link to="/auth/registrar" className="text-[#366EFF] ml-2 font-medium">
              Crea una
            </Link>
          </TypographyP>
        </form>
      </Form>
    </div>
  );
};
