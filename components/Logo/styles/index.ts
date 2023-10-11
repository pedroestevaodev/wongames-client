'use client';

import styled, { css } from 'styled-components';
import { LogoProps } from '..';
import media from 'styled-media-query';

const containerModifiers = {
	normal: () => css`
		width: 11rem;
		height: 3.3rem;
	`,
	large: () => css`
		width: 20rem;
		height: 5.2rem;
	`,
	hideOnMobile: () => css`
		${media.lessThan('medium')`
            width: 5.8rem;
            height: 4.5rem;

            svg {
                height: 4.5rem;
                pointer-events: none;
            }

            .logo-text {
                display: none;
            }
        `}
	`
};

export const LogoContainer = styled.div<LogoProps>`
	${({ size, hideOnMobile }) => css`
		${!!size && containerModifiers[size]}
		${!!hideOnMobile && containerModifiers.hideOnMobile}
	`}
`;
