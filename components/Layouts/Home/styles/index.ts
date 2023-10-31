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
			margin-bottom: calc(3.2rem * 2);
		}

		${HeadingStyles.HeadingContainer} {
			@media (max-width: 767px) {
				margin-right: calc(3.2rem / 2);
				margin-left: calc(3.2rem / 2);
			}
		}

		${GameCardSliderStyles.GameCardSliderContainer} {
			@media (max-width: 1399px) {
				margin-right: calc(-3.2rem / 2);
			}
		}

		margin-bottom: calc(4rem * 2);
	`}
`;

export const HomeConstainer = styled.div``;

export const SectionBanner = styled.section`
	${() => css`
		margin: 4rem calc(-3.2rem / 2);

		@media (min-width: 768px) {
			position: relative;
			margin: 4rem 0;
			z-index: 10;
		}
	`}
`;

export const SectionNews = styled(Sections)`
	${() => css`
		margin-bottom: calc(5.6rem * 2);

		@media (min-width: 1200px) {
			margin-top: -13rem;
		}

		@media (min-width: 768px) {
			margin-bottom: 0;
			padding-top: 14rem;
			padding-bottom: 10rem;
			background-color: #f2f2f2;
			clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

			${HeadingStyles.HeadingContainer} {
				color: #030517;
			}
		}
	`}
`;

export const SectionMostPopular = styled(Sections)``;

export const SectionUpcoming = styled(Sections)`
	${() => css`
		${HighlightStyles.HighlightContainer} {
			margin-top: calc(4.8rem * 2);
		}
	`}
`;

export const SectionFreeGames = styled(Sections)``;

export const SectionFooter = styled.section`
	${() => css`
		margin-top: 4rem;
		padding-bottom: 1.6rem;
		padding-top: 5.6rem;
		background-color: #fafafa;
		clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

		@media (min-width: 768px) {
			padding-top: calc(5.6rem * 2);
			clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
		}
	`}
`;
