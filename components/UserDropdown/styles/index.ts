'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { DropdownContainer } from '@/components/Dropdown/styles';

export const UserDropdownContainer = styled.div`
	${DropdownContainer} {
		.arrow-down {
			margin-left: -5px;
		}
	}
`;

export const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	width: 26rem;

	a:not(:last-child) {
		border-bottom: 0.1rem solid #eaeaea;
	}
`;

export const Username = styled.span`
	padding: 0 0.8rem;
`;

export const UserDropdownLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	background: #fafafa;
	color: #030517;
	padding: 1.6rem 2.4rem;
	transition:
		background-color,
		color,
		0.3s ease-in-out;

	&:hover {
		background: #f231a5;
		color: #fafafa;
	}

	> svg {
		width: 2.4rem;
		height: 2.4rem;
	}

	> span {
		margin-left: 1.6rem;
	}
`;

export const LinkLabel = styled.span``;
