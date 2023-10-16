'use client';

import styled, { css } from 'styled-components';
import { ButtonProps } from '..';

type ContainerModifiersProps = {
	hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth'>;

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
	`
};

export const ButtonContainer = styled.button<ContainerModifiersProps>`
	${({ hasIcon }) => css`
		${!!hasIcon && containerModifiers.withIcon};
	`}
`;
