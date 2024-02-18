'use client';

import styled from 'styled-components';
import Container from '@/components/Container';

export const Main = styled(Container)`
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 26rem 1fr;
		gap: 3.2rem;
	}
`;

export const ShowMore = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: fit-content;
	margin: 5.2rem auto 0;
	padding: 0px;
	color: #fafafa;
	text-align: center;
	text-transform: uppercase;
	font-weight: bold;
	cursor: pointer;

	> svg {
		color: #f231a5;
	}
`;
