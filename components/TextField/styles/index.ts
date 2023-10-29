'use client';

import styled, { css } from 'styled-components';

export const TextFieldContainer = styled.div``;

export const InputWrapper = styled.div`
	${() => css`
		display: flex;
		background: #eaeaea;
		border-radius: 0.2rem;
		padding: 0 1.6rem;
		border: 0.2rem solid;
		border-color: #eaeaea;

		&:focus-within {
			box-shadow: 0 0 0.5rem #f231a5;
		}
	`}
`;

export const Input = styled.input`
	${() => css`
		color: #030517;
		font-family: 'Poppins', sans-serif;
		font-size: 3.2rem;
		padding: 0.8rem 0;
		background: transparent;
		border: 0;
		outline: none;
		width: 100%;
	`}
`;

export const Label = styled.label`
	${() => css`
		font-size: 2.4rem;
		color: #030517;
		cursor: pointer;
	`}
`;
