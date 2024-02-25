'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';

type MenuFullProps = {
	isOpen: boolean;
};

export const MenuContainer = styled.menu<MenuFullProps>`
	${({ isOpen }) => css`
		position: relative;
		display: flex;
		align-items: center;
		padding: 2.4rem 0;
		z-index: ${isOpen ? `20` : `calc(20 - 1)`};
	`}
`;

export const LogoWrapper = styled.div`
	@media (max-width: 767px) {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
`;

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fafafa;
	cursor: pointer;
	width: 2.4rem;
	height: 2.4rem;
`;

export const MenuNav = styled.div`
	@media (min-width: 768px) {
		margin-left: 2.4rem;
	}
`;

export const MenuLink = styled(Link)`
	position: relative;
	color: #fafafa;
	font-size: 1.6rem;
	margin: 0.3rem 2.4rem 0;
	text-decoration: none;
	text-align: center;

	&:hover {
		&::after {
			content: '';
			position: absolute;
			display: block;
			height: 0.3rem;
			background-color: #f231a5;
			animation: hoverAnimation 0.2s forwards;
		}

		@keyframes hoverAnimation {
			from {
				width: 0;
				left: 50%;
			}
			to {
				width: 100%;
				left: 0;
			}
		}
	}
`;

export const MenuGroup = styled.div`
	display: flex;
	flex-grow: 1;
	align-items: center;
	justify-content: flex-end;
	gap: 1.6rem;
	z-index: calc(20+1);
`;

export const MenuFull = styled.nav<MenuFullProps>`
	${({ isOpen }) => css`
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: #fafafa;
		height: 100%;
		width: 100%;
		overflow: hidden;
		transition: opacity 0.3s ease-in-out;
		opacity: ${isOpen ? 1 : 0};
		pointer-events: ${isOpen ? 'all' : 'none'};
		visibility: ${isOpen ? 'visible' : 'hidden'};
		z-index: 20;

		> svg {
			position: absolute;
			top: 0;
			right: 0;
			margin: 1.6rem;
			cursor: pointer;
			width: 2.4rem;
			height: 2.4rem;
		}

		${MenuNav} {
			display: flex;
			align-items: center;
			justify-content: center;
			flex: 1;
			flex-direction: column;
		}

		${MenuLink} {
			color: #030517;
			font-size: 2rem;
			font-weight: 600;
			margin-bottom: 2.4rem;
			transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
			transition: transform 0.3s ease-in-out;
		}

		${RegisterBox} {
			transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
			transition: transform 0.3s ease-in-out;
		}
	`};
`;

export const RegisterBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 4.8rem 4.8rem;
`;

export const CreateAccount = styled(Link)`
	text-decoration: none;
	color: #f231a5;
	border-bottom: 0.2rem solid #f231a5;
`;
