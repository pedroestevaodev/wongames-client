import React from 'react';
import * as S from './styles';
import Link from 'next/link';
import GameItem, { GameItemProps } from '../GameItem';
import Button from '../Button';
import Empty from '../Empty';
import { formatPrice } from '@/utils/formats';

export type CartListProps = {
	items?: GameItemProps[];
	total?: number | bigint;
	hasButton?: boolean;
};

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => {
	return (
		<S.CartListContainer isEmpty={!items.length}>
			{items.length ? (
				<>
					{items.map((item) => (
						<GameItem key={item.title} {...item} />
					))}

					<S.Footer>
						{!hasButton && <S.FooterLabel>Total:</S.FooterLabel>}
						<S.Total>{formatPrice(total || 0)}</S.Total>

						{hasButton && (
							<Button as={Link} href="/">
								Buy it now
							</Button>
						)}
					</S.Footer>
				</>
			) : (
				<Empty
					title="Your cart is empty"
					description="Go back to the store and explore great games and offers."
					hasLink
				/>
			)}
		</S.CartListContainer>
	);
};

export default CartList;
