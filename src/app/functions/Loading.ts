export const Loading = () => {
	const $div: HTMLDivElement = document.createElement('div');

	const $p: HTMLParagraphElement = document.createElement('p');

	$p.innerHTML = 'loading...';

	$p.classList.add('text-3xl', 'text-center', 'my-8');

	$div.appendChild($p);
	return $div;
};
