'use client';

import React from 'react';
import Link from 'next/link';
import * as S from './styles';
import TextField from '../TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const FormSignUp = () => {
	return (
		<S.FormSignUpContainer>
			<form>
				<TextField
					name="name"
					placeholder="Name"
					type="name"
					icon={<FontAwesomeIcon icon={faUser} />}
				/>
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
				<TextField
					name="confirm-password"
					placeholder="Confirm password"
					type="password"
					icon={<FontAwesomeIcon icon={faLock} />}
				/>

				<Button size="large" fullWidth>
					Sign up now
				</Button>

				<S.FormLink>
					Already have an account? <Link href="/sign-in">Sign in</Link>
				</S.FormLink>
			</form>
		</S.FormSignUpContainer>
	);
};

export default FormSignUp;
