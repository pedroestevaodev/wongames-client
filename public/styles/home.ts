'use client';

import styled, { css } from 'styled-components';
import * as HeadingStyles from '@/components/Heading/styles';
import * as GameCardSliderStyles from '@/components/GameCardSlider/styles';
import * as HighlightStyles from '@/components/Highlight/styles';

const Sections = styled.section`
	${() => css`
		${HeadingStyles.HeadingContainer},
		${GameCardSliderStyles.GameCardSliderContainer},
        ${HighlightStyles.HighlightContainer} {
			margin-bottom: calc(var(--medium) * 2);
		}

		${HeadingStyles.HeadingContainer} {
			@media (max-width: 767px) {
				margin-right: calc(var(--gutter) / 2);
				margin-left: calc(var(--gutter) / 2);
			}
		}

		${GameCardSliderStyles.GameCardSliderContainer} {
			@media (max-width: 1399px) {
				margin-right: calc(calc(var(--gutter) * -1) / 2);
			}
		}

		margin-bottom: calc(var(--large) * 2);
	`}
`;

export const HomeConstainer = styled.div``;

export const SectionBanner = styled.section`
	${() => css`
		margin: var(--large) calc(calc(var(--gutter) * -1) / 2);

		@media (min-width: 768px) {
			position: relative;
			margin: var(--large) 0;
			z-index: 10;
		}
	`}
`;

export const SectionNews = styled(Sections)`
	${() => css`
		margin-bottom: calc(var(--xxlarge) * 2);

		@media (min-width: 1200px) {
			margin-top: -13rem;
		}

		@media (min-width: 768px) {
			margin-bottom: 0;
			padding-top: 14rem;
			padding-bottom: 10rem;
			background-color: var(--lightBg);
			clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

			${HeadingStyles.HeadingContainer} {
				color: var(--black);
			}
		}
	`}
`;

export const SectionMostPopular = styled(Sections)``;

export const SectionUpcoming = styled(Sections)`
	${() => css`
		${HighlightStyles.HighlightContainer} {
			margin-top: calc(var(--xlarge) * 2);
		}
	`}
`;

export const SectionFreeGames = styled.section``;

export const SectionFooter = styled.section`
	${() => css`
		margin-top: var(--large);
		padding-bottom: var(--xsmall);
		padding-top: var(--xxlarge);
		background-color: var(--white);
		clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

		@media (min-width: 768px) {
			padding-top: calc(var(--xxlarge) * 2);
			clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
		}
	`}
`;
