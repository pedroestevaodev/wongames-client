'use client';

import styled from 'styled-components';
import { tint } from 'polished';
import * as ButtonStyles from '@/components/Button/styles';

export const PaymentOptionsContainer = styled.div`
	background-color: #fafafa;
`;

export const Body = styled.div`
	padding: 2.4rem;
`;

export const Footer = styled.div`
	background: ${tint(0.2, '#EAEAEA')};
	color: #030517;
	font-weight: 600;
	padding: 2.4rem;
	display: flex;
	align-items: center;

	${ButtonStyles.ButtonContainer} {
		padding-left: 0.8rem;
		padding-right: 0.8rem;
		outline: 0;
	}
`;

export const CardsList = styled.div`
	display: flex;
	flex-direction: column;
`;

const ItemStyles = () => `
    background: #EAEAEA;
    border-radius: 0.2rem;
    color: #030517;
    padding: 0 0.8rem;
    height: 5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const CardItem = styled.div`
	${ItemStyles()};

	justify-content: space-between;

	&:not(:last-child) {
		margin-bottom: 0.8rem;
	}
`;

export const CardInfo = styled.div`
	display: flex;
	align-items: center;

	img {
		margin-right: 0.8rem;
	}
`;

export const AddCard = styled.div`
	${ItemStyles()};

	svg {
		margin-left: 0.8rem;
		margin-right: 1.6rem;
		width: 2.4rem;
	}
`;
