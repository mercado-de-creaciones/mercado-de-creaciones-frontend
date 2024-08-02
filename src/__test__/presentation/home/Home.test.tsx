import { expect, describe, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from '@/presentation/pages/home/Home';

vi.mock('@/presentation/components/home/simpleCarousel/HomeCarousel', () => ({
	HomeCarousel: () => <div>Carousel Mock</div>,
}));

describe('Pruebas el home page', () => {
	test('Debe de renderizar el Home y hacer match con el snapshot', () => {
		const { asFragment } = render(
			<MemoryRouter initialEntries={['/']}>
				<Home />
			</MemoryRouter>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
