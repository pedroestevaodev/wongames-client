import React from 'react';
import * as S from './styles';
import { PaymentCard } from '../PaymentOptions';
import Image from 'next/image';
import Heading from '../Heading';

export type CardsListProps = {
	cards?: PaymentCard[];
};

const CardsList = ({ cards }: CardsListProps) => {
	return (
		<>
			<Heading lineBottom color="black" size="small">
				My cards
			</Heading>

			{cards?.map((card) => (
				<S.Card key={card.number}>
					<Image src={card.img} width={38} height={24} alt={card.flag} />
					<S.CardLabel>{card.number}</S.CardLabel>
				</S.Card>
			))}
		</>
	);
};

export default CardsList;
