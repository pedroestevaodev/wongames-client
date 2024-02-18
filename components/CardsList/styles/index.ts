import styled from 'styled-components';

export const CardsListContainer = styled.div``;

export const Card = styled.div`
	display: flex;
	align-items: center;
	background: #eaeaea;
	color: #030517;
	padding: 1.3rem 1.6rem;

	&:not(:last-child) {
		margin-bottom: 1.6rem;
	}
`;

export const CardLabel = styled.span`
	margin-left: 0.8rem;
`;
