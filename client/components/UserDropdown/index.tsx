'use client';

import React from 'react';
import * as S from './styles';
import Dropdown from '../Dropdown';
import {
	RiAccountCircleLine,
	RiArrowDownSLine,
	RiHeart3Line,
	RiLogoutCircleRLine
} from '@remixicon/react';
import { signOut } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export type UserDropwdownProps = {
	username: string;
	className?: string;
	isOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
};

const UserDropdown = ({
	username,
	className = '',
	isOpen,
	onOpenChange,
}: UserDropwdownProps) => {
	const handleLogout = async () => {
		try {
			await signOut({ redirect: false });
			window.location.assign(DEFAULT_LOGIN_REDIRECT);
		} catch (error) {
			console.error('Logout failed:', error);
			window.location.assign(DEFAULT_LOGIN_REDIRECT);
		}
	};

	return (
		<S.UserDropdownContainer className={className}>
			<Dropdown
				title={
					<>
						<RiAccountCircleLine size={24} />
						<S.Username>{username}</S.Username>
						<RiArrowDownSLine size={24} className="arrow-down" />
					</>
				}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			>
				<S.Nav>
					<S.UserDropdownLink href="/profile/me" title="Profile">
						<RiAccountCircleLine />
						<S.LinkLabel>My profile</S.LinkLabel>
					</S.UserDropdownLink>
					<S.UserDropdownLink href="/wishlist" title="Wishlist">
						<RiHeart3Line />
						<S.LinkLabel>Wishlist</S.LinkLabel>
					</S.UserDropdownLink>
					<S.UserDropdownLogout
						type="button"
						title="Sign out"
						onClick={handleLogout}
					>
						<RiLogoutCircleRLine />
						<S.LinkLabel>Sign out</S.LinkLabel>
					</S.UserDropdownLogout>
				</S.Nav>
			</Dropdown>
		</S.UserDropdownContainer>
	);
};

export default UserDropdown;
