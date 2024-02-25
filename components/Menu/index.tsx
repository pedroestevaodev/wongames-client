'use client';

import React, { useState } from 'react';
import * as S from './styles';
import Logo from '../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Button from '../Button';
import { useWindowSize } from 'usehooks-ts';
import CartDropdown from '../CartDropdown';
import UserDropdown from '../UserDropdown';

export type MenuProps = {
	username?: string | null;
	loading?: boolean;
};

const Menu = ({ username, loading }: MenuProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const { width } = useWindowSize();

	return (
		<S.MenuContainer isOpen={isOpen}>
			{width < 768 && (
				<S.IconWrapper onClick={() => setIsOpen(!isOpen)}>
					<FontAwesomeIcon icon={faBars} aria-label="Open Menu" />
				</S.IconWrapper>
			)}

			<S.LogoWrapper>
				<Link href="/">
					<Logo hideOnMobile />
				</Link>
			</S.LogoWrapper>

			{width > 767 ? (
				<S.MenuNav>
					<S.MenuLink href="/">Home</S.MenuLink>
					<S.MenuLink href="/games">Explore</S.MenuLink>
				</S.MenuNav>
			) : null}

			{!loading && (
				<>
					<S.MenuGroup>
						<S.IconWrapper>
							<FontAwesomeIcon icon={faMagnifyingGlass} aria-label="Search" />
						</S.IconWrapper>
						<S.IconWrapper>
							{width < 768 ? (
								<Link href="/cart">
									<FontAwesomeIcon
										icon={faCartShopping}
										aria-label="Open Shopping Cart"
									/>
								</Link>
							) : (
								<CartDropdown />
							)}
						</S.IconWrapper>
						{width > 767 &&
							(!username ? (
								<Button as={Link} href="/sign-in">
									Sign in
								</Button>
							) : (
								<UserDropdown username={username} />
							))}
					</S.MenuGroup>

					<S.MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
						<FontAwesomeIcon
							icon={faXmark}
							aria-label="Close Menu"
							onClick={() => setIsOpen(false)}
						/>

						<S.MenuNav>
							<S.MenuLink href="/">Home</S.MenuLink>
							<S.MenuLink href="/games">Explore</S.MenuLink>

							{!!username && (
								<>
									<S.MenuLink href="/profile/me">My Account</S.MenuLink>
									<S.MenuLink href="/wishlist">Wishlist</S.MenuLink>
								</>
							)}
						</S.MenuNav>

						{!username && (
							<S.RegisterBox>
								<Button as={Link} href="/sign-in" fullWidth size="large">
									Sign In
								</Button>
								<span className="block my-xxsmall mx-0 text-xsmall">or</span>
								<S.CreateAccount href="/sign-up" title="Sign Up">
									Sign Up
								</S.CreateAccount>
							</S.RegisterBox>
						)}
					</S.MenuFull>
				</>
			)}
		</S.MenuContainer>
	);
};

export default Menu;
