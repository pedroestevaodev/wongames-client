'use client';

import React from 'react';
import * as S from './styles';
import Base from '../Base';
import GameCard, { GameCardProps } from '@/components/GameCard';
import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar';
import Grid from '@/components/Grid';
import { RiArrowDownSLine } from '@remixicon/react';

export type GamesLayoutProps = {
	games?: GameCardProps[];
	filterItems: ItemProps[];
};

const Games = ({ filterItems, games = [] }: GamesLayoutProps) => {
	const handleFilter = () => {
		return;
	};

	const handleShowMore = () => {
		return;
	};

	return (
		<Base>
			<S.Main>
				<ExploreSidebar items={filterItems} onFilter={handleFilter} />

				<section>
					<Grid>
						{games.map((item) => (
							<GameCard key={item.title} {...item} />
						))}
					</Grid>

					<S.ShowMore role="button" onClick={handleShowMore}>
						<p>Show More</p>
						<RiArrowDownSLine size={35} />
					</S.ShowMore>
				</section>
			</S.Main>
		</Base>
	);
};

export default Games;
