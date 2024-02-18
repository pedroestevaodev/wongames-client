import React from 'react';
import * as S from './styles';
import GameItem, { GameItemProps } from '../GameItem';
import Heading from '../Heading';
import Empty from '../Empty';

export type OrdersListProps = {
	items?: GameItemProps[];
};

const OrdersList = ({ items = [] }: OrdersListProps) => {
	return (
		<S.OrdersListContainer>
			<Heading lineBottom lineColor="primary" color="black" size="small">
				My orders
			</Heading>

			{items.length ? (
				items.map((item) => <GameItem key={item.downloadLink} {...item} />)
			) : (
				<Empty
					title="You have no orders yet"
					description="Go back to the store and explore great games and offers"
					hasLink
				/>
			)}
		</S.OrdersListContainer>
	);
};

export default OrdersList;
