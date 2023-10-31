'use client';

import styled, { css } from 'styled-components';
import Image from 'next/image';
import { HighlightProps } from '..';

type HighlightStyleProps = Pick<
	HighlightProps,
	'backgroundImage' | 'alignment'
>;

const highlightModifiers = {
	right: () => css`
		grid-template-areas: 'floatimage content';
		grid-template-columns: 1.3fr 2fr;

		${Content} {
			text-align: right;
		}
	`,
	left: () => css`
		grid-template-areas: 'content floatimage';
		grid-template-columns: 2fr 1.3fr;

		${Content} {
			text-align: left;
		}

		${FloatImage} {
			justify-self: end;
		}
	`
};

export const HighlightContainer = styled.section<HighlightStyleProps>`
	${({ backgroundImage, alignment }) => css`
		background-image: url(${backgroundImage});
		background-position: center center;
		background-size: cover;

		${highlightModifiers[alignment!]()};
	`}
`;

export const FloatImage = styled(Image)`
	grid-area: floatimage;
`;

export const Content = styled.div`
	grid-area: content;
`;

export const Title = styled.h2``;

export const SubTitle = styled.h3``;
