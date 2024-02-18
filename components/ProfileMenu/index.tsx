import React from 'react';
import * as S from './styles';
import {
	RiAccountCircleLine,
	RiBankCard2Line,
	RiListUnordered,
	RiLogoutCircleRLine
} from '@remixicon/react';

export type ProfileMenuProps = {
	activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string;
};

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
	return (
		<S.ProfileMenuContainer>
			<S.Menu
				href="/profile/me"
				isActive={activeLink === '/profile/me'}
				title="My profile"
			>
				<RiAccountCircleLine size={24} />
				<S.MenuLabel>My profile</S.MenuLabel>
			</S.Menu>

			<S.Menu
				href="/profile/cards"
				isActive={activeLink === '/profile/cards'}
				title="My cards"
			>
				<RiBankCard2Line size={24} />
				<S.MenuLabel>My cards</S.MenuLabel>
			</S.Menu>

			<S.Menu
				href="/profile/orders"
				isActive={activeLink === '/profile/orders'}
				title="My orders"
			>
				<RiListUnordered size={24} />
				<S.MenuLabel>My orders</S.MenuLabel>
			</S.Menu>

			<S.Menu
				href="/logout"
				isActive={activeLink === '/logout'}
				title="Sign out"
			>
				<RiLogoutCircleRLine />
				<S.MenuLabel>Sign out</S.MenuLabel>
			</S.Menu>
		</S.ProfileMenuContainer>
	);
};

export default ProfileMenu;
