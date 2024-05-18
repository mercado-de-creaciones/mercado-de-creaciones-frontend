import { TypographyH2 } from '../ui/TypographyH2';

export const HeaderAuth = ({ title }: { title: string }) => {
	return (
		<header className='flex flex-col items-center justify-center w-full'>
			<TypographyH2 className='uppercase '>{title}</TypographyH2>
		</header>
	);
};
