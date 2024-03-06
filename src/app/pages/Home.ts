import { textUpperCase } from '../helpers';

export const Home = () => {
	const $h1: HTMLHeadingElement = document.createElement('h1');

	$h1.innerHTML = 'Componente de prueba: Hola mundo desde Page HOME';
	$h1.innerHTML = textUpperCase($h1.innerHTML);

	$h1.classList.add('text-3xl', 'text-center', 'my-8');

	return $h1;
};
