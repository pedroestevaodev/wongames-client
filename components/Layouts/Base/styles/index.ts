'use client';

import styled from 'styled-components';

export const BaseContainer = styled.div``;

export const SectionFooter = styled.section`
	margin-top: 4rem;
	padding-bottom: 1.6rem;
	padding-top: 5.6rem;
	background-color: #fafafa;
	clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

	@media (min-width: 768px) {
		padding-top: calc(5.6rem * 2);
		clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
	}
`;
