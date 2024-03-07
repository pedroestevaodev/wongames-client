'use client';

import React from 'react';
import * as S from './styles';
import Heading from '../Heading';
import Ribbon from '../Ribbon';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { formatPrice } from '@/utils/formats';

export type GameInfoProps = {
	title: string;
	description: string;
	price: number | bigint;
};

const GameInfo = ({ title, description, price }: GameInfoProps) => {
	return (
		<S.GameInfoContainer>
			<Heading color="black" lineBottom>
				{title}
			</Heading>

			<Ribbon color="secondary">{price === 0 ? "FREE" : formatPrice(price)}</Ribbon>

			<S.Description>{description}</S.Description>

			<S.ButtonsWrapper>
				<Button icon={<FontAwesomeIcon icon={faCartShopping} />} size="large">
					Add to cart
				</Button>
				<Button icon={<FontAwesomeIcon icon={faHeart} />} size="large" minimal>
					Wishlist
				</Button>
			</S.ButtonsWrapper>
		</S.GameInfoContainer>
	);
};

export default GameInfo;
