import { expect, describe, test, vi, afterEach, beforeEach } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Login } from '@/presentation/pages/auth/Login';
import { QueryClientProvider } from '@tanstack/react-query';
import { createTestQueryClient } from '@/__mocked__/query-mocker';

const mockLoginMutation = vi.fn();

vi.mock('@/core/use-cases/auth/login.use-case', () => ({
	loginUserUseCase: vi.fn(),
}));

vi.mock('@/presentation/hooks/auth/useLoginMutation', () => ({
	useLoginMutation: () => ({
		loginMutation: {
			mutateAsync: mockLoginMutation,
		},
		isLoadingLogin: false,
	}),
}));

describe('Pruebas en Login Page', () => {
	const testQueryClient = createTestQueryClient();

	beforeEach(() => {
		render(
			<QueryClientProvider client={testQueryClient}>
				<MemoryRouter initialEntries={['/auth/login']}>
					<Login />
				</MemoryRouter>
			</QueryClientProvider>,
		);
	});

	afterEach(() => {
		cleanup();
		vi.clearAllMocks();
	});

	test('Debe renderizar el componente Login', () => {
		expect(screen.getByText('Inicia sesión')).toBeTruthy();
	});

	test('Debe de hacer el submit del formulario con datos validos', async () => {
		const emailInput = screen.getByTestId('email-input');
		const passwordInput = screen.getByTestId('password-input');

		fireEvent.change(emailInput, { target: { value: 'qKqXG@example.com' } });
		fireEvent.change(passwordInput, { target: { value: '123456' } });

		fireEvent.click(screen.getByTestId('login-button'));

		await waitFor(() => {
			expect(mockLoginMutation).toHaveBeenCalledWith({
				email: 'qKqXG@example.com',
				password: '123456',
			});
		});
	});

	test('Debe de mostrar errores si los datos son invalidos', async () => {
		const emailInput = screen.getByTestId('email-input');
		const passwordInput = screen.getByTestId('password-input');

		fireEvent.change(emailInput, { target: { value: 'qKqXG' } });
		fireEvent.change(passwordInput, { target: { value: '1234' } });

		fireEvent.click(screen.getByTestId('login-button'));

		await waitFor(() => {
			expect(mockLoginMutation).not.toHaveBeenCalled();
			expect(
				screen.getByText('Por favor ingresa un correo valido'),
			).toBeTruthy();
			expect(
				screen.getByText('La contraseña debe tener minimo 6 caracteres'),
			).toBeTruthy();
		});
	});
});
