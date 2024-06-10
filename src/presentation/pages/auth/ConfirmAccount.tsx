import {
	TypographyH2,
	TypographyP,
} from '@/presentation/components/typography';
import { CheckCircle2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ConfirmAccount = () => {
	return (
		<div className='flex flex-col gap-4 p-4 sm:px-8 sm:py-5 '>
			<header className='flex flex-col gap-2'>
				<TypographyH2>¡Tu cuenta ha sido autenticada con éxito!</TypographyH2>
				<TypographyP className='text-[#202446]'>
					Ahora tienes acceso completo a todas tus funciones en [logo_empresa].
					¡Explora, crea y disfruta de tus proyectos y compras favoritas!
				</TypographyP>
			</header>

			<div className='bg-green-200 border-l-4 border-green-500 p-3 flex items-center gap-2 text-green-500'>
				<CheckCircle2Icon />

				<TypographyP>Usuario confirmado correctamente</TypographyP>
			</div>

			<Link
				to='/'
				type='submit'
				className='bg-[#366EFF] p-3 hover:bg-[#366EFF]/90 text-center text-white rounded-lg'>
				Volver a la pagina principal
			</Link>
		</div>
	);
};
