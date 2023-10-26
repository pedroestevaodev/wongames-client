'use client';

import styled, { css } from 'styled-components';
import { ButtonProps } from '..';
import { darken } from 'polished';

type ContainerModifiersProps = {
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
	`
};

export const ButtonContainer = styled.button<ContainerModifiersProps>`
	${({ hasIcon, minimal }) => css`
		${!!hasIcon && containerModifiers.withIcon};
		${!!minimal && containerModifiers.minimal};
	`}
`;
