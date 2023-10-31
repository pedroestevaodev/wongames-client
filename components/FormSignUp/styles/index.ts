'use client';

import styled from 'styled-components';
import * as TextFieldStyles from '@/components/TextField/styles';
import * as ButtonStyles from '@/components/Button/styles';
import { darken } from 'polished';

export const FormSignUpContainer = styled.div`
	${TextFieldStyles.TextFieldContainer} {
		margin: 0.8rem 0;
	}

	${ButtonStyles.ButtonContainer} {
		margin: 3.2rem auto 1.6rem;
	}
`;

export const FormLink = styled.div`
	font-size: 1.4rem;
	color: #030517;
	text-align: center;

	a {
		color: #3cd3c1;
		text-decoration: none;
		border-bottom: 0.1rem solid #3cd3c1;
		transition:
			color,
			border,
			0.1s ease-in-out;

		&:hover {
			color: ${darken(0.1, '#3CD3C1')};
			border-bottom: 0.1rem solid ${darken(0.1, '#3CD3C1')};
		}
	}
`;
