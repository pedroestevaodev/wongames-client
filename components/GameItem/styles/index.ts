'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const GameItemContainer = styled.div`
	padding: 2.4rem;
	border-bottom: 0.1rem solid #eaeaea;

	@media (min-width: 768px) {
		display: flex;
	}
`;

export const GameContent = styled.div`
	display: flex;
`;

export const ImageBox = styled.div`
	flex-shrink: 0;
	margin-right: 1.2rem;
	width: 9.6rem;
	height: 5.6rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (min-width: 768px) {
		margin-right: 1.6rem;
		width: 15rem;
		height: 7rem;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const Title = styled.h3`
	font-size: 1.4rem;
	line-height: 1.4rem;
	font-weight: 600;
	color: #030517;
	margin-bottom: 0.8rem;

	@media (min-width: 768px) {
		font-size: 2rem;
		line-height: 2rem;
	}
`;

export const Price = styled.p`
	color: #fafafa;
	padding: 0.2rem 0.8rem;
	background-color: #3cd3c1;
	border-radius: 0.4rem;
	font-size: 1.4rem;
	font-weight: 600;
`;

export const DownloadLink = styled(Link)`
	color: #f231a5;
	margin-left: 0.8rem;
`;

export const PaymentContent = styled.div`
	color: #8f8f8f;
	font-size: 1.4rem;
	display: flex;
	flex-direction: column;
	min-width: 28rem;
	margin-top: 1.6rem;

	@media (min-width: 768px) {
		margin-top: 0;
		flex: 1;
		flex-direction: column-reverse;
		justify-content: space-between;
		align-items: flex-end;
	}
`;

export const CardInfo = styled.div`
	display: flex;
	align-items: center;

	img {
		margin-left: 0.8rem;
	}

	@media (max-width: 767px) {
		margin-top: 1.6rem;
	}
`;
