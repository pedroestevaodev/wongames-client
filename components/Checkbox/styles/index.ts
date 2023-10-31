'use client';

import styled, { css } from 'styled-components';
import { CheckboxProps } from '..';

export const CheckboxContainer = styled.div``;

export const Input = styled.input`
	${() => css`
		position: relative;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		appearance: none;
		width: 1.8rem;
		height: 1.8rem;
		border: 0.2rem solid #2e2f42;
		border-radius: 0.2rem;
		transition: background-color border 0.1s ease-in-out;
		outline: none;

		&::before {
			content: '';
			width: 0.6rem;
			height: 0.9rem;
			border: 0.2rem solid #fafafa;
			border-top: 0;
			border-left: 0;
			transform: rotate(45deg);
			position: absolute;
			top: 0.1rem;
			opacity: 0;
			transition: 0.1s ease-in-out;
		}

		&:focus {
			box-shadow: 0 0 0.5rem #f231a5;
		}

		&:checked {
			border-color: #f231a5;
			background: #f231a5;

			&:before {
				opacity: 1;
			}
		}
	`}
`;

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
	${({ labelColor }) => css`
		cursor: pointer;
		padding-left: 0.8rem;
		color: ${labelColor === 'white' ? '#FAFAFA' : '#030517'};
		line-height: 1.8rem;
	`}
`;
