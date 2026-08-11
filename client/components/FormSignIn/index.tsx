'use client';

import React, { useState } from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import * as S from './styles';
import Button from '../Button';
import TextField from '../TextField';
import { Controller, useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelope,
	faLock,
	faCircleExclamation,
	faCheck
} from '@fortawesome/free-solid-svg-icons';
import { LoginSchema } from '@/schemas/authSchema';
import { login } from '@/actions/login';
import {
	FormError,
	FormLink,
	FormLoading,
	FormSuccess,
	FormWrapper
} from '../Form';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { resolvePostAuthRedirect } from '@/helpers/auth-redirect';

const FormSignIn = () => {
	const searchParams = useSearchParams();
	const { update } = useSession();
	const callbackUrl = searchParams.get('callbackUrl');

	const [error, setError] = useState<string | undefined>('');
	const [success, setSuccess] = useState<string | undefined>('');
	const [isPending, setIsPending] = useState(false);

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	});

	const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
		setError('');
		setSuccess('');
		setIsPending(true);

		try {
			const result = await login(values);

			if (result?.error) {
				setError(result.error);
				setIsPending(false);
				return;
			}

			setSuccess('Signed in successfully!');

			// Sync client SessionProvider with the cookie set by the server action.
			await update();

			// Full navigation so Root Providers re-run auth() with the new session.
			// Soft router.push/refresh alone often leaves the UI on a stale null session.
			window.location.assign(
				resolvePostAuthRedirect(callbackUrl, DEFAULT_LOGIN_REDIRECT)
			);
		} catch (error) {
			console.error('Error in login', error);
			setError('Something went wrong!');
			setIsPending(false);
		}
	};

	return (
		<FormWrapper>
			{!!error && (
				<FormError>
					<FontAwesomeIcon icon={faCircleExclamation} />
					{error}
				</FormError>
			)}
			{!!success && (
				<FormSuccess>
					<FontAwesomeIcon icon={faCheck} />
					{success}
				</FormSuccess>
			)}

			<form method="POST" onSubmit={form.handleSubmit(onSubmit)}>
				<Controller
					control={form.control}
					name="email"
					render={({ field, fieldState }) => (
						<TextField
							{...field}
							type="email"
							placeholder="Email"
							icon={<FontAwesomeIcon icon={faEnvelope} />}
							error={fieldState.error?.message}
							disabled={isPending}
						/>
					)}
				/>
				<Controller
					control={form.control}
					name="password"
					render={({ field, fieldState }) => (
						<TextField
							{...field}
							type="password"
							placeholder="Password"
							icon={<FontAwesomeIcon icon={faLock} />}
							error={fieldState.error?.message}
							disabled={isPending}
						/>
					)}
				/>

				<S.ForgotPassword href="/forgot-password">
					Forgot your password?
				</S.ForgotPassword>

				<Button
					type="submit"
					size="large"
					fullWidth
					disabled={isPending}
				>
					{isPending ? (
						<FormLoading
							src="/img/dots.svg"
							alt="Loading"
							width={20}
							height={20}
						/>
					) : (
						<span>Sign in now</span>
					)}
				</Button>

				<FormLink>
					Don’t have an account? <Link href="/sign-up">Sign up</Link>
				</FormLink>
			</form>
		</FormWrapper>
	);
};

export default FormSignIn;
