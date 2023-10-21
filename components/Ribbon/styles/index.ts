'use client';

import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { RibbonColorsProps, RibbonProps } from '..';

const ribbonModifiers = {
	color: (color: RibbonColorsProps) => css`
		&::before {
			border-left-color: ${darken(
				0.2,
				color === 'primary' ? '#F231A5' : '#3CD3C1'
			)};
			border-top-color: ${darken(
				0.2,
				color === 'primary' ? '#F231A5' : '#3CD3C1'
			)};
		}
	`
};

export const RibbonContainer = styled.div<RibbonProps>`
	${({ color }) => css`
		${!!color && ribbonModifiers.color(color)};
	`}
`;
