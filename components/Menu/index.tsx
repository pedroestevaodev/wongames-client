'use client';

import React from 'react';
import * as S from './styles';
import Logo from '../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
	return (
		<S.MenuContainer className="relative flex items-center justify-between px-0 py-small">
			<div className="flex items-center justify-center text-white w-[2.4rem] h-[2.4rem]">
				<FontAwesomeIcon icon={faBars} aria-label="Open menu" />
			</div>
			<div className="max-md:absolute max-md:left-[50%] max-md:translate-x-[-50%]">
				<Logo hideOnMobile />
			</div>
			<div className="flex items-center gap-[8px]">
				<div className="flex items-center justify-center text-white w-[2.4rem] h-[2.4rem]">
					<FontAwesomeIcon icon={faMagnifyingGlass} aria-label="Search" />
				</div>
				<div className="flex items-center justify-center text-white w-[2.4rem] h-[2.4rem]">
					<FontAwesomeIcon
						icon={faCartShopping}
						aria-label="Open Shopping Cart"
					/>
				</div>
			</div>

			<nav className="" aria-hidden="true"></nav>
		</S.MenuContainer>
	);
};

export default Menu;
