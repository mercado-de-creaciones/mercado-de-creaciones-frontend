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
import { registerSchema } from '@/presentation/validations/userSchema';
import { HeaderAuth } from '@/presentation/components/auth';
import { TypographyP } from '@/presentation/components/ui/TypographyP';

export const Register = () => {
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: '',
			password: '',
			name: '',
		},
	});

	function onSubmit(values: z.infer<typeof registerSchema>) {
		console.log(values);
	}

	return (
		<div className='w-full p-4 sm:p-8 flex flex-col gap-4'>
			<HeaderAuth title='Registrarse' />

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col gap-4'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nombre</FormLabel>
								<FormControl>
									<Input
										placeholder='Jon doe'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

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

					<Button
						type='submit'
						className='
						bg-gradient-to-r from-[#6993FF] 
						via-[#CE67FF] to-[#FFC760] w-full 
						text-base py-[22px] rounded-xl'>
						Registrase
					</Button>

					<TypographyP className='text-sm'>
						¿Ya tienes cuenta?
						<Link
							to='/'
							className='text-[#366EFF] ml-2 font-medium'>
							Inicia Sesión
						</Link>
					</TypographyP>
				</form>
			</Form>
		</div>
	);
};
