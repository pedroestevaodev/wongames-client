'use client';

import React from 'react';
import Link from 'next/link';
import * as S from './styles';
import Button from '../Button';
import TextField from '../TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const FormSignIn = () => {
	return (
		<S.FormSignInContainer>
			<form>
				<TextField
					name="email"
					placeholder="Email"
					type="email"
					icon={<FontAwesomeIcon icon={faEnvelope} />}
				/>
				<TextField
					name="password"
					placeholder="Password"
					type="password"
					icon={<FontAwesomeIcon icon={faLock} />}
				/>
				<S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

				<Button size="large" fullWidth>
					Sign in now
				</Button>

				<S.FormLink>
					Don’t have an account? <Link href="/sign-up">Sign up</Link>
				</S.FormLink>
			</form>
		</S.FormSignInContainer>
	);
};

export default FormSignIn;
