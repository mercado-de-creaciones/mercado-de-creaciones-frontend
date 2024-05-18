import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/presentation/components/ui/form';

import { Button } from '@/presentation/components/ui/button';
import { Input } from '@/presentation/components/ui/input';
import { loginSchema } from '@/presentation/validations/userSchema';
import { HeaderAuth, Divider } from '@/presentation/components/auth';
import { TypographyP } from '@/presentation/components/ui/TypographyP';

export const Login = () => {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	function onSubmit(values: z.infer<typeof loginSchema>) {
		console.log(values);
	}

	return (
		<div className='w-full p-4 sm:px-8 sm:py-5 flex flex-col gap-4'>
			<HeaderAuth title='Login' />

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col gap-4'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Correo</FormLabel>
								<FormControl>
									<Input
										placeholder='example@gmail.com'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Contraseña</FormLabel>
								<FormControl>
									<Input
										placeholder='**********'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Link
						to='/auth/olvide-password'
						className='text-[#366EFF] text-sm'>
						¿Olvidaste tu contraseña?
					</Link>

					<Button
						type='submit'
						className='
						bg-gradient-to-r from-[#6993FF] 
						via-[#CE67FF] to-[#FFC760] w-full 
						text-base py-[22px] rounded-xl'>
						Ingresar
					</Button>

					<Divider />

					<Button
						type='button'
						className='
						bg-[#EFEFEF] w-full 
						text-base py-[22px] rounded-xl text-[#1E1E1E] font-bold'>
						Ingresar
					</Button>

					<TypographyP className='text-sm'>
						¿No tienes cuenta?
						<Link
							to='/registrar'
							className='text-[#366EFF] ml-2 font-medium'>
							registrate
						</Link>
					</TypographyP>
				</form>
			</Form>
		</div>
	);
};
