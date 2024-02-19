import React from 'react';
import * as S from './styles';
import Dropdown from '../Dropdown';
import {
	RiAccountCircleLine,
	RiArrowDownSLine,
	RiHeart3Line,
	RiLogoutCircleRLine
} from '@remixicon/react';

export type UserDropwdownProps = {
	username: string;
};

const UserDropdown = ({ username }: UserDropwdownProps) => {
	return (
		<S.UserDropdownContainer>
			<Dropdown
				title={
					<>
						<RiAccountCircleLine size={24} />
						<S.Username>{username}</S.Username>
						<RiArrowDownSLine size={24} className="arrow-down" />
					</>
				}
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
					<S.UserDropdownLink href="/logout" title="Sign out">
						<RiLogoutCircleRLine />
						<S.LinkLabel>Sign out</S.LinkLabel>
					</S.UserDropdownLink>
				</S.Nav>
			</Dropdown>
		</S.UserDropdownContainer>
	);
};

export default UserDropdown;
