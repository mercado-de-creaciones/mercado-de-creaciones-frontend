import { Router } from './app/Router';
import { Header, Main, Footer } from './app/components/';

export const App = () => {
	const $root = document.querySelector('#root');

	if (!$root) throw new Error('Fallo al rendirizar la app');

	$root.innerHTML = ''; //Reset

	//Componentes

	$root.appendChild(Header());
	$root.appendChild(Main());
	$root.appendChild(Footer());

	//Router

	Router();

	//TODO:Funcionalidades de la pagina
};
