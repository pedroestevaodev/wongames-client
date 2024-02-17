'use client';

import { tint } from 'polished';
import styled from 'styled-components';

export const CartListContainer = styled.main`
	background: #fafafa;
	display: flex;
	flex-direction: column;
	align-self: start;
`;

export const Footer = styled.div`
	background: ${tint(0.2, '#EAEAEA')};
	color: #030517;
	font-weight: 600;
	font-size: 1.4rem;
	padding: 2rem;
	display: flex;
	justify-content: space-between;

	@media (min-width: 768px) {
		font-size: 1.6rem;
		padding: 2.4rem;
	}
`;

export const Total = styled.span`
	color: #f231a5;
`;
