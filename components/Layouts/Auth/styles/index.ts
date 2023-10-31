'use client';

import styled, { css } from 'styled-components';
import * as HeadingStyles from '@/components/Heading/styles';
import * as LogoStyles from '@/components/Logo/styles';

export const AuthContainer = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	height: 100vh;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export const BannerBlock = styled.div`
	position: relative;
	background-image: url('/img/auth-bg.jpg');
	background-size: cover;
	background-position: center center;
	padding: 5.6rem 5.6rem 4rem;

	@media (max-width: 767px) {
		display: none;
	}

	&:after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #030517;
		opacity: 0.85;
	}
`;

export const BannerContent = styled.div`
	color: #fafafa;
	display: grid;
	grid-template-columns: 1fr;
	justify-content: space-between;
	height: 100%;
	position: relative;
	z-index: 10;

	a {
		width: fit-content;
		height: fit-content;
	}
`;

export const Subtitle = styled.h3`
	font-size: 5.6rem;
	font-weight: 300;
	margin-top: 0.8rem;

	strong {
		color: #f231a5;
	}
`;

export const Footer = styled.p`
	font-size: 1.2rem;
	text-align: center;
	align-self: end;
`;

export const Content = styled.div`
	background: #fafafa;
	display: grid;
	align-items: center;
	justify-content: center;
`;

export const ContentWrapper = styled.div`
	${() => css`
		width: 30rem;

		@media (min-width: 768px) {
			width: 36rem;
		}

		${LogoStyles.LogoContainer} {
			margin: 0 auto 5.6rem;
		}

		${HeadingStyles.HeadingContainer} {
			margin-bottom: 3.2rem;
		}
	`}
`;
