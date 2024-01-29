'use client';

import styled from 'styled-components';
import * as RibbonStyles from '@/components/Ribbon/styles';

export const GameInfoContainer = styled.div`
	position: relative;
	background: #fafafa;
	padding: 2.4rem;

	${RibbonStyles.RibbonContainer} {
		right: -1rem;

		&:before {
			border-right-width: 1rem;
		}
	}

	@media (min-width: 768px) {
		${RibbonStyles.RibbonContainer} {
			right: 2.4rem;
			top: 2.4rem;
			font-size: 1.8rem;

			&:before {
				border: none;
			}
		}
	}
`;

export const Description = styled.p`
	font-size: 1.4rem;
	color: #8f8f8f;
	margin-bottom: 2.4rem;

	@media (min-width: 768px) {
		max-width: 77rem;
	}
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> button {
		width: 100%;
		margin-bottom: 0.8rem;
	}

	@media (min-width: 768px) {
		flex-direction: row-reverse;

		> button {
			width: initial;
			margin-bottom: 0;
		}
	}
`;
