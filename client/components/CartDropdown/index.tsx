import React from 'react';
import * as S from './styles';
import Dropdown from '../Dropdown';
import CartIcon from '../CartIcon';
import CartList from '../CartList';

export type CartDropdownProps = {
	className?: string;
	isOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
};

const CartDropdown = ({
	className = '',
	isOpen,
	onOpenChange,
}: CartDropdownProps) => {
	return (
		<S.CartDropdownContainer className={className}>
			<Dropdown
				title={<CartIcon />}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			>
				<CartList hasButton />
			</Dropdown>
		</S.CartDropdownContainer>
	);
};

export default CartDropdown;
