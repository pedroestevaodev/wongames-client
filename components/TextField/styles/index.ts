'use client';

import styled, { css } from 'styled-components';
import { TextFieldProps } from '..';

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>;

type ContainerProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean };

const containerModifiers = {
	error: () => css`
		${InputWrapper} {
			border-color: #ff6347;
		}

		${Icon},
		${Label} {
			color: #ff6347;
		}
	`,
	disabled: () => css`
		${Label},
		${Input},
        ${Icon} {
			cursor: not-allowed;
			color: #8f8f8f;

			&::placeholder {
				color: currentColor;
			}
		}
	`
};

export const TextFieldContainer = styled.div<ContainerProps>`
	${({ disabled, error }) => css`
		${disabled && containerModifiers.disabled()}
		${error && containerModifiers.error()}
	`}
`;

export const InputWrapper = styled.div`
	${() => css`
		display: flex;
		background-color: #eaeaea;
		border-radius: 0.2rem;
		padding: 0 1.6rem;
		border: 0.2rem solid;
		border-color: #eaeaea;

		&:focus-within {
			box-shadow: 0 0 0.5rem #f231a5;
		}
	`}
`;

export const Input = styled.input<IconPositionProps>`
	${({ iconPosition }) => css`
		color: #030517;
		font-family: 'Poppins', sans-serif;
		font-size: 3.2rem;
		padding: 0.8rem 0;
        padding-${iconPosition}: 1.6rem;
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

export const Icon = styled.div<IconPositionProps>`
	${({ iconPosition }) => css`
		display: flex;
		width: 2.2rem;
		color: #8f8f8f;
		order: ${iconPosition === 'right' ? 1 : 0};

		& > svg {
			width: 100%;
		}
	`}
`;

export const Error = styled.p`
	${() => css`
		color: #ff6347;
		font-size: 1.6rem;
	`}
`;
