'use client';

import styled, { css } from 'styled-components';
import { ButtonProps } from '..';
import { darken } from 'polished';

export type ContainerProps = {
	hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>;

const containerModifiers = {
	withIcon: () => css`
		display: flex;
		align-items: center;
		justify-content: center;

		svg {
			width: 1.5rem;

			& + span {
				margin-left: 0.8rem;
			}
		}
	`,
	minimal: () => css`
		background: none;
		color: #f231a5;

		&:hover {
			color: ${darken(0.1, '#F231A5')};
		}
	`,
	disabled: () => css`
		&:disabled {
			cursor: not-allowed;
			filter: saturate(50%);
		}
	`
};

export const ButtonContainer = styled.button<ContainerProps>`
	${({ hasIcon, minimal, disabled }) => css`
		${!!hasIcon && containerModifiers.withIcon};
		${!!minimal && containerModifiers.minimal};
		${disabled && containerModifiers.disabled};
	`}
`;
