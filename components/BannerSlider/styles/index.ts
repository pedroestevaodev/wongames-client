'use client';

import styled, { css } from 'styled-components';
import * as BannerStyles from '@/components/Banner/styles';

export const BannerSliderContainer = styled.section`
	${() => css`
		.slick-dots {
			list-style: none;
			display: flex !important;
			align-items: center;
			justify-content: center;
			margin-top: 1.4rem;

			li {
				background: #fafafa;
				width: 1.2rem;
				height: 1.2rem;
				border-radius: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 0 0.8rem;
				cursor: pointer;
				&.slick-active {
					background: #f231a5;
				}
			}
			button {
				opacity: 0;
				width: 1.2rem;
				height: 1.2rem;
				cursor: pointer;
			}
		}

		@media (min-width: 1200px) {
			${BannerStyles.BannerContainer} {
				max-width: 104rem;
				margin: 0 auto;
			}

			.slick-dots {
				position: absolute;
				right: 0;
				flex-direction: column;
				height: 100%;
				top: 0;
				margin: 0;

				li {
					margin: 0.8rem 0;
				}
			}
		}
	`}
`;
