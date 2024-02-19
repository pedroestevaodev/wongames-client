import React from 'react';
import * as S from './styles';
import Dropdown from '../Dropdown';
import CartIcon from '../CartIcon';
import { GameItemProps } from '../GameItem';
import CartList from '../CartList';

export type CartDropdownProps = {
	items: GameItemProps[];
	total: string;
};

const CartDropdown = ({ items, total }: CartDropdownProps) => {
	return (
		<S.CartDropdownContainer>
			<Dropdown title={<CartIcon quantity={items.length} />}>
				<CartList items={items} total={total} hasButton />
			</Dropdown>
		</S.CartDropdownContainer>
	);
};

export default CartDropdown;
