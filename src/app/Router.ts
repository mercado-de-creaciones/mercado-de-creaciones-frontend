import { Loading } from './functions';
import { Home } from './pages';

export const Router = () => {
	const { hash } = location;

	const $main = document.querySelector<HTMLElement>('#main');

	if (!$main) throw new Error('Fallo al renderizar la pagina');

	$main.innerHTML = '';

	if (!hash || hash === '#/') {
		$main.appendChild(Home());
		$main.appendChild(Loading());
	}

	//TODO: Más paginas ....
};
