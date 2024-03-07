import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import {
	faCartShopping,
	faHeart as heartSolid
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import Ribbon, { RibbonColorsProps, RibbonSizeProps } from '../Ribbon';
import { formatPrice } from '@/utils/formats';

export type GameCardProps = {
	slug: string;
	title: string;
	developer: string;
	img: string;
	price: number | bigint;
	promotionalPrice?: number | bigint;
	favorite?: boolean;
	ribbon?: React.ReactNode;
	ribbonColor?: RibbonColorsProps;
	ribbonSize?: RibbonSizeProps;
	onFav?: () => void;
};

const GameCard = ({
	slug,
	title,
	developer,
	img,
	price,
	promotionalPrice,
	favorite = false,
	ribbon,
	ribbonColor = 'primary',
	ribbonSize = 'small',
	onFav
}: GameCardProps) => {
	return (
		<>
			<S.GameCardContainer
				className="relative flex flex-col w-full h-full rounded-[6px] overflow-hidden"
				href={`/game/${slug}`}
			>
				{!!ribbon && (
					<Ribbon color={ribbonColor} size={ribbonSize}>
						{ribbon}
					</Ribbon>
				)}
				<S.ImageBox className="h-[14rem] min-h-[14rem] overflow-hidden rounded-t-[6px] rounded-b-[0px] w-full">
					<Image src={img} width={300} height={140} alt={title} priority />
				</S.ImageBox>
				<S.Content className="relative flex flex-col justify-between h-full p-xsmall bg-white">
					<S.Info>
						<S.Title className="text-medium leading-medium font-bold text-black">
							{title}
						</S.Title>
						<S.Developer className="text-small font-bold text-gray">
							{developer}
						</S.Developer>
					</S.Info>
					<S.FavButton
						onClick={(e) => {
							e.preventDefault();
							onFav;
						}}
						className="absolute text-primary top-[1.6rem] cursor-pointer right-[1.2rem]"
						role="button"
					>
						{favorite ? (
							<FontAwesomeIcon
								icon={heartSolid}
								className="w-[2.5rem]"
								aria-label="Remove from Wishlist"
							/>
						) : (
							<FontAwesomeIcon
								icon={heartRegular}
								className="w-[2.5rem]"
								aria-label="Add to Wishlist"
							/>
						)}
					</S.FavButton>
					<S.BuyBox className="flex items-center justify-end mt-xxsmall">
						{!!promotionalPrice && (
							<S.Price isPromotional>{formatPrice(price)}</S.Price>
						)}
						<S.Price>
							{price === 0 ? 'FREE' : formatPrice(promotionalPrice || price)}
						</S.Price>
						<Button
							icon={<FontAwesomeIcon icon={faCartShopping} />}
							size="small"
						/>
					</S.BuyBox>
				</S.Content>
			</S.GameCardContainer>
		</>
	);
};

export default GameCard;
