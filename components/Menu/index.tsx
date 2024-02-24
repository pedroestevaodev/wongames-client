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
	username?: string;
};

const Menu = ({ username }: MenuProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const { width } = useWindowSize();

	return (
		<S.MenuContainer className="relative flex items-center justify-between px-0 py-small z-menu">
			{width < 768 && (
				<div className="flex items-center justify-center text-white w-[2.4rem] h-[2.4rem]">
					<FontAwesomeIcon
						icon={faBars}
						onClick={() => setIsOpen(true)}
						className="cursor-pointer"
						aria-label="Open Menu"
					/>
				</div>
			)}

			<div className="max-md:absolute max-md:left-[50%] max-md:translate-x-[-50%]">
				<Link href="/">
					<Logo hideOnMobile />
				</Link>
			</div>

			<div
				className={`hidden md:flex ml-small text-white mr-auto ${
					isOpen ? 'flex-1 justify-center' : 'justify-between'
				}`}
			>
				<S.MenuLink
					href="/"
					className={`relative text-medium my-0 mx-small mb-0 no-underline text-center hover:after:absolute hover:after:block hover:after:h-[0.3rem] hover:after:bg-primary ${
						isOpen ? 'text-black font-bold text-xlarge mb-small' : 'isClosed'
					}`}
				>
					Home
				</S.MenuLink>
				<S.MenuLink
					href="/games"
					className={`relative text-medium my-0 mx-small mb-0 no-underline text-center hover:after:absolute hover:after:block hover:after:h-[0.3rem] hover:after:bg-primary ${
						isOpen ? 'text-black font-bold text-xlarge mb-small' : 'isClosed'
					}`}
				>
					Explore
				</S.MenuLink>
			</div>

			<div className="flex items-center gap-[8px]">
				<div className="flex items-center justify-center text-white w-[2.4rem] h-[2.4rem]">
					<FontAwesomeIcon icon={faMagnifyingGlass} aria-label="Search" />
				</div>
				<div className="flex items-center justify-center text-white w-[2.4rem] h-[2.4rem]">
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
				</div>
				<div className="hidden md:block">
					{!username ? (
						<Link
							href="/sign-in"
							className="no-underline text-white text-medium hover:text-primary transition-all"
							passHref
						>
							Sign in
						</Link>
					) : (
						<UserDropdown username={username} />
					)}
				</div>
			</div>

			<nav
				className={`flex items-center justify-center flex-1 flex-col bg-white top-0 bottom-0 left-0 right-0 h-[100vh] overflow-hidden transition-all z-[20] ${
					isOpen
						? 'fixed translate-x-0 visible'
						: 'absolute translate-x-[-100%] invisible pointer-events-none'
				}`}
				aria-hidden={!isOpen}
			>
				<FontAwesomeIcon
					icon={faXmark}
					aria-label="Close Menu"
					className="cursor-pointer absolute top-0 right-0 m-xsmall w-[2.4rem] h-[2.4rem]"
					onClick={() => setIsOpen(false)}
				/>

				<div
					className={`flex flex-col ${
						isOpen ? 'flex-1 justify-center' : 'justify-between'
					}`}
				>
					<S.MenuLink
						href="/"
						className={`relative text-medium my-[0.3rem] mx-small mb-0 no-underline text-center hover:after:absolute hover:after:block hover:after:h-[0.3rem] hover:after:bg-primary ${
							isOpen ? 'text-black font-bold text-xlarge mb-small' : 'isClosed'
						}`}
					>
						Home
					</S.MenuLink>
					<S.MenuLink
						href="/games"
						className={`relative text-medium my-[0.3rem] mx-small mb-0 no-underline text-center hover:after:absolute hover:after:block hover:after:h-[0.3rem] hover:after:bg-primary ${
							isOpen ? 'text-black font-bold text-xlarge mb-small' : 'isClosed'
						}`}
					>
						Explore
					</S.MenuLink>

					{!!username && (
						<>
							<S.MenuLink
								href="/profile/me"
								className={`relative text-medium my-[0.3rem] mx-small mb-0 no-underline text-center hover:after:absolute hover:after:block hover:after:h-[0.3rem] hover:after:bg-primary ${
									isOpen
										? 'text-black font-bold text-xlarge mb-small'
										: 'isClosed'
								}`}
							>
								My Account
							</S.MenuLink>
							<S.MenuLink
								href="/profile/wishlist"
								className={`relative text-medium my-[0.3rem] mx-small mb-0 no-underline text-center hover:after:absolute hover:after:block hover:after:h-[0.3rem] hover:after:bg-primary ${
									isOpen
										? 'text-black font-bold text-xlarge mb-small'
										: 'isClosed'
								}`}
							>
								Wishlist
							</S.MenuLink>
						</>
					)}
				</div>

				{!username && (
					<div className="flex flex-col items-center py-0 px-xlarge pb-xlarge">
						<Link href="/sign-in" passHref>
							<Button fullWidth size="large">
								Log in now
							</Button>
						</Link>
						<span className="block my-xxsmall mx-0 text-xsmall">or</span>
						<S.CreateAccount
							href="/sign-up"
							className="no-underline text-primary border-b-[0.2rem] border-b-primary"
							passHref
							title="Sign Up"
						>
							Sign up
						</S.CreateAccount>
					</div>
				)}
			</nav>
		</S.MenuContainer>
	);
};

export default Menu;
