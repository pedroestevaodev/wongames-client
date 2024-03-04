'use client';

import styled from 'styled-components';

export const TextContentContainer = styled.div`
	color: #fafafa;

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: #fafafa;
		margin: 1.6rem 0;

		@media (min-width: 768px) {
			color: #030517;
		}
	}

	p {
		margin-bottom: 1.6rem;
	}

	a {
		color: #f231a5;
	}

	img {
		max-width: minmax(70rem, 100%);
		margin-bottom: 1.6rem;
	}

	ul,
	ol {
		padding: 1.6rem 2.4rem;
	}

	hr {
		margin: 2.4rem 0;
	}

	.text-content {
		ul {
			list-style: inherit;
		}
	}

	@media (min-width: 768px) {
		background-color: #fafafa;
		color: #030517;
		padding: 3.2rem;
	}
`;
