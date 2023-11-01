'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const MenuContainer = styled.menu``;

export const MenuLink = styled(Link)`
	&:hover {
		&::after {
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

export const CreateAccount = styled(Link)`
	text-decoration: none;
	color: #f231a5;
	border-bottom: 0.2rem solid #f231a5;
`;
