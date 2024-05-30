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

import { Input } from '@/presentation/components/ui/input';
import { Button } from '@/presentation/components/ui/button';
import { registerSchema } from '@/presentation/validations/userSchema';
import { TypographyH2,TypographyP } from '@/presentation/components/typography';

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
			<TypographyH2 className='uppercase text-center'>Register</TypographyH2>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col gap-4'>
					<FormField
						control={form.control}
						name='name'
						render={({ field, formState: { errors } }) => (
							<FormItem>
								<FormLabel>Nombre</FormLabel>
								<FormControl>
									<Input
										placeholder='Jon doe'
										className={`border ${
											errors.name?.message
												? 'border-red-500'
												: 'border-blue-600'
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
						name='email'
						render={({ field, formState: { errors } }) => (
							<FormItem>
								<FormLabel>Correo</FormLabel>
								<FormControl>
									<Input
										placeholder='example@gmail.com'
										className={`border ${
											errors.email?.message
												? 'border-red-500'
												: 'border-blue-600'
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
						name='password'
						render={({ field, formState: { errors } }) => (
							<FormItem>
								<FormLabel>Contraseña</FormLabel>
								<FormControl>
									<Input
										placeholder='**********'
										className={`border ${
											errors.password?.message
												? 'border-red-500'
												: 'border-blue-600'
										}`}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type='submit'
						className='w-full'
						variant='gradient'>
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
