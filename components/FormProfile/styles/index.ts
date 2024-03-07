'use client';

import styled from 'styled-components';

export const FormProfileContainer = styled.main``;

export const Form = styled.form`
	max-width: 100%;
	display: grid;
	gap: 1.6rem;

	> button {
		margin-top: 5.6rem;
	}

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		gap: 3.2rem;

		> button {
			grid-column: 2;
			justify-self: end;
			margin-top: 0;
		}
	}
`;
