'use client';

import React from 'react';
import * as S from './styles';
import { useWindowSize } from 'usehooks-ts';
import Heading from '../Heading';
import { RiWindowsFill, RiAppleFill, RiUbuntuFill } from '@remixicon/react';

type PlatformProps = 'windows' | 'linux' | 'mac';

type RatingProps = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

export type GameDetailsProps = {
	developer: string;
	publisher: string;
	platforms: PlatformProps[];
	releaseDate: string;
	rating: RatingProps;
	genres: string[];
};

const GameDetails = ({
	developer,
	publisher,
	releaseDate,
	platforms,
	rating,
	genres
}: GameDetailsProps) => {
	const { width } = useWindowSize();

	const platformIcons = {
		windows: <RiWindowsFill size={18} />,
		linux: <RiUbuntuFill size={18} />,
		mac: <RiAppleFill size={18} />
	};

	return (
		<S.GameDetailsContainer>
			{width > 575 && (
				<Heading lineLeft lineColor="secondary">
					Game Details
				</Heading>
			)}

			<S.Content>
				<S.Block>
					<S.Label>Developer</S.Label>
					<S.Description>{developer}</S.Description>
				</S.Block>

				<S.Block>
					<S.Label>Release Date</S.Label>
					<S.Description>
						{new Intl.DateTimeFormat('en-US', {
							day: 'numeric',
							month: 'short',
							year: 'numeric'
						}).format(new Date(releaseDate))}
					</S.Description>
				</S.Block>

				<S.Block>
					<S.Label>Platforms</S.Label>
					<S.IconsWrapper>
						{platforms.map((icon: PlatformProps) => (
							<S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
						))}
					</S.IconsWrapper>
				</S.Block>

				<S.Block>
					<S.Label>Publisher</S.Label>
					<S.Description>{publisher}</S.Description>
				</S.Block>

				<S.Block>
					<S.Label>Rating</S.Label>
					<S.Description>
						{rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
					</S.Description>
				</S.Block>

				<S.Block>
					<S.Label>Genres</S.Label>
					<S.Description>{genres.join(' / ')}</S.Description>
				</S.Block>
			</S.Content>
		</S.GameDetailsContainer>
	);
};

export default GameDetails;
