'use client';

import React, { useState } from 'react';
import * as S from './styles';
import Heading from '../Heading';
import Radio from '../Radio';
import Button from '../Button';
import Link from 'next/link';
import Image from 'next/image';
import { RiAddLine } from '@remixicon/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export type PaymentCard = {
	number: string;
	flag: string;
	img: string;
};

export type PaymentOptionsProps = {
	cards?: PaymentCard[];
	handlePayment: () => void;
};

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
	const [checked, setChecked] = useState(false);

	return (
		<S.PaymentOptionsContainer>
			<S.Body>
				<Heading color="black" size="small" lineBottom>
					Payment
				</Heading>

				<S.CardsList>
					{cards?.map((card) => (
						<S.CardItem key={card.number}>
							<S.CardInfo>
								<Image src={card.img} width={38} height={24} alt={card.flag} />
								{card.number}
							</S.CardInfo>
							<Radio
								name="credit-card"
								id={card.number}
								value={card.number}
								onCheck={() => setChecked(true)}
							/>
						</S.CardItem>
					))}

					<S.AddCard role="button">
						<RiAddLine size={14} /> Add a new credit card
					</S.AddCard>
				</S.CardsList>
			</S.Body>
			<S.Footer>
				<Button as={Link} href="/" fullWidth minimal>
					Continue shopping
				</Button>
				<Button
					fullWidth
					icon={<FontAwesomeIcon icon={faCartShopping} />}
					onClick={handlePayment}
					disabled={!checked}
				>
					Buy now
				</Button>
			</S.Footer>
		</S.PaymentOptionsContainer>
	);
};

export default PaymentOptions;
