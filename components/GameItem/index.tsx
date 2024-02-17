import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { RiDownloadCloudFill } from '@remixicon/react';

export type PaymentInfoProps = {
	number: string;
	flag: string;
	img: string;
	purchaseDate: string;
};

export type GameItemProps = {
	img: string;
	title: string;
	price: string;
	downloadLink?: string;
	paymentInfo?: PaymentInfoProps;
};

const GameItem = ({
	img,
	title,
	price,
	downloadLink,
	paymentInfo
}: GameItemProps) => {
	return (
		<S.GameItemContainer>
			<S.GameContent>
				<S.ImageBox>
					<Image src={img} alt={title} />
				</S.ImageBox>

				<S.Content>
					<S.Title>
						{title}
						{!!downloadLink && (
							<S.DownloadLink
								href={downloadLink}
								target="_blank"
								aria-label={`Get ${title} here`}
							>
								<RiDownloadCloudFill size={22} />
							</S.DownloadLink>
						)}
					</S.Title>
					<S.Price>{price}</S.Price>
				</S.Content>
			</S.GameContent>

			{!!paymentInfo && (
				<S.PaymentContent>
					<p>{paymentInfo.purchaseDate}</p>
					<S.CardInfo>
						<span>{paymentInfo.number}</span>
						<Image src={paymentInfo.img} alt={paymentInfo.flag} />
					</S.CardInfo>
				</S.PaymentContent>
			)}
		</S.GameItemContainer>
	);
};

export default GameItem;
