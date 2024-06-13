import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
	return (
		<main className='w-full bg-auth-container p-4 sm:p-8 min-h-screen flex items-center justify-center'>
			<section className='w-full h-full max-w-[1280px] mx-auto grid md:grid-cols-2 xl:grid-cols-[1fr_2fr] bg-white'>
				<div className='flex items-center justify-center w-full'>
					<Outlet />
				</div>
				<figure className='hidden md:block'>
					<img
						className='object-cover object-left w-full h-[35rem] rounded-tr-lg rounded-br-lg'
						src='/frame-auth.png'
						alt='frame auth'
					/>
				</figure>
			</section>
		</main>
	);
};
