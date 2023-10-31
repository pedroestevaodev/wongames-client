'use client';

import styled, { css } from 'styled-components';

type PriceProps = {
	isPromotional?: boolean;
};

const priceModifiers = {
	default: () => css`
		color: #fafafa;
		padding: 0 0.8rem;
		background-color: #3cd3c1;
		border-radius: 0.4rem;
		margin-right: calc(0.8rem / 2);
	`,

	promotional: () => css`
		color: #8f8f8f;
		text-decoration: line-through;
		margin-right: 1.6rem;
	`
};

export const GameCardContainer = styled.article``;

export const ImageBox = styled.div`
	background-color: #f6f7f8;
	background-image: linear-gradient(
		to right,
		#f6f7f8 0%,
		#edeef1 20%,
		#f6f7f8 40%,
		#f6f7f8 100%
	);
	background-size: 80rem 14rem;
	animation: placeholderShimmer 1s linear infinite forwards;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@keyframes placeholderShimmer {
		0% {
			background-position: -40rem 0;
		}
		100% {
			background-position: 40rem 0;
		}
	}
`;

export const Content = styled.div``;

export const Info = styled.div`
	max-width: calc(100% - 2.5rem);
`;

export const Title = styled.h3`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const Developer = styled.h4`
	word-wrap: break-word;
	overflow: hidden;
`;

export const FavButton = styled.div``;

export const BuyBox = styled.div``;

export const Price = styled.div<PriceProps>`
	${({ isPromotional }) => css`
		display: inline-flex;
		font-weight: 600;
		height: 3rem;
		align-items: center;

		${!isPromotional && priceModifiers.default};
		${isPromotional && priceModifiers.promotional};
	`}
`;
