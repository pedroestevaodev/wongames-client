import React from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export type CartIconProps = {
	quantity?: number;
};

const CartIcon = ({ quantity = 0 }: CartIconProps) => {
	return (
		<S.CartIconContainer>
			{quantity > 0 && <S.Badge aria-label="Cart Items">{quantity}</S.Badge>}
			<FontAwesomeIcon icon={faCartShopping} aria-label="Shopping Cart" />
		</S.CartIconContainer>
	);
};

export default CartIcon;
