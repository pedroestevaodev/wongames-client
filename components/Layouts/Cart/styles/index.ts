'use client';

import styled from 'styled-components';

export const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 4rem;
	margin: 4rem 0;

	@media (min-width: 768px) {
		grid-template-columns: 2fr 1fr;
	}
`;
