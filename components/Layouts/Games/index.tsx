'use client';

import React from 'react';
import * as S from './styles';
import Base from '../Base';
import GameCard, { GameCardProps } from '@/components/GameCard';
import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar';
import Grid from '@/components/Grid';
import { RiArrowDownSLine } from '@remixicon/react';
import { useQuery } from "@apollo/client";
import { GetGamesQuery, GetGamesQueryVariables } from "@/graphql/generated/graphql";
import { GET_GAMES } from "@/graphql/queries/games";

export type GamesLayoutProps = {
	games?: GameCardProps[];
	filterItems: ItemProps[];
};

const Games = ({ filterItems }: GamesLayoutProps) => {
	const { loading, error, data } = useQuery<GetGamesQuery, GetGamesQueryVariables>(GET_GAMES, { 
		variables: { limit: 15 }, 
	});

	const handleFilter = () => {
		return;
	};

	const handleShowMore = () => {
		return;
	};

	if (loading) return <p>Loading...</p>;
	if (error) return null;

	console.log(data);

	return (
		<Base>
			<code>
				<pre>
					{JSON.stringify(data, null, 2)}
				</pre>
			</code>
			<S.Main>
				<ExploreSidebar items={filterItems} onFilter={handleFilter} />

				<section>
					<Grid>
						{(data?.games as GameCardProps[] | undefined)?.map((game) => (
							<GameCard 
								key={game.title}
								title={game.title}
								slug={game.slug}
								developer={game.developer}
								img={`${process.env.API_URL}${game.img}`}
								price={game.price}
							/>
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
