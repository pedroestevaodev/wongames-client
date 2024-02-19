import React from 'react';
import * as S from './styles';
import Link from 'next/link';
import GameItem, { GameItemProps } from '../GameItem';
import Button from '../Button';

export type CartListProps = {
	items: GameItemProps[];
	total: string;
	hasButton?: boolean;
};

const CartList = ({ items, total, hasButton = false }: CartListProps) => {
	return (
		<S.CartListContainer>
			{items.map((item) => (
				<GameItem key={item.title} {...item} />
			))}

			<S.Footer>
				{!hasButton && <S.FooterLabel>Total:</S.FooterLabel>}
				<S.Total>{total}</S.Total>

				{hasButton && <Button as={Link}>Buy it now</Button>}
			</S.Footer>
		</S.CartListContainer>
	);
};

export default CartList;
