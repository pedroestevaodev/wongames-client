'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const ProfileMenuContainer = styled.nav`
	display: flex;
	border-bottom: 0.1rem solid #eaeaea;

	@media (min-width: 768px) {
		flex-direction: column;
		border: 0;

		a:not(:last-child) {
			border-bottom: 0.1rem solid #eaeaea;
		}
	}
`;

const menuModifiers = {
	default: () => `
        background-color: #FAFAFA;
        color: #030517;
    `,
	active: () => `
        background-color: #F231A5;
        color: #FAFAFA;
    `
};

type MenuProps = {
	isActive?: boolean;
};

export const Menu = styled(Link)<MenuProps>`
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 1.6rem 2.4rem;
	transition:
		background-color,
		color,
		0.3s ease-in-out;

	&:hover {
		background: #f231a5;
		color: #fafafa;
	}

	> span {
		margin-left: 1.6rem;
	}

	@media (max-width: 767px) {
		justify-content: center;
		flex: 1;

		> span {
			display: none;
		}
	}

	${({ isActive }) =>
		isActive ? menuModifiers.active() : menuModifiers.default()}
`;

export const MenuLabel = styled.span``;
