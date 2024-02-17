import React from 'react';
import * as S from './styles';
import GameItem, { GameItemProps } from '../GameItem';

export type CartListProps = {
	items: GameItemProps[];
	total: string;
};

const CartList = ({ items, total }: CartListProps) => {
	return (
		<S.CartListContainer>
			{items.map((item) => (
				<GameItem key={item.title} {...item} />
			))}

			<S.Footer>
				Total <S.Total>{total}</S.Total>
			</S.Footer>
		</S.CartListContainer>
	);
};

export default CartList;
