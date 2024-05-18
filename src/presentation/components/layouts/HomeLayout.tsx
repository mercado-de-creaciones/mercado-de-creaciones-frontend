import { Outlet } from 'react-router-dom';

export const HomeLayout = () => {
    return (
        <div className='bg-home-50 h-fit'>
            <header></header>
            <main className="bg-home-50">
					<Outlet />
            </main>
        </div>
    )
}