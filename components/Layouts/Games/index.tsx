'use client';

import React from 'react';
import * as S from './styles';
import Base from '../Base';
// import GameCard from '@/components/GameCard';
import { GameCardProps } from '@/components/GameCard';
import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar';
import Grid from '@/components/Grid';
import { RiArrowDownSLine } from '@remixicon/react';
import { 
	// GameEntityResponseCollection, 
	GetGamesQuery, 
	GetGamesQueryVariables 
} from "@/graphql/generated/graphql";
import { GET_GAMES } from "@/graphql/queries/games";
// import { gamesMapper } from "@/utils/mappers";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export type GamesLayoutProps = {
	games?: GameCardProps[];
	filterItems: ItemProps[];
};

const Games = ({ filterItems }: GamesLayoutProps) => {
	const { error, data, fetchMore } = useSuspenseQuery<GetGamesQuery, GetGamesQueryVariables>(GET_GAMES, { 
		variables: { limit: 15, start: 0 },
	});

	const handleFilter = () => {
		return;
	};

	const handleShowMore = () => {
		fetchMore({
			variables: {
				limit: 15,
				start: 15,
			},
		});
	};

	// if (loading) return <p>Loading...</p>;
	if (error) return null;

	return (
		<Base>
			<S.Main>
				<ExploreSidebar 
					items={filterItems} 
					onFilter={handleFilter} 
				/>

				<section>
					<Grid>
						{/* {gamesMapper(data?.games as GameEntityResponseCollection).map((game) => (
							<GameCard 
								key={game.slug}
								title={game.title}
								slug={game.slug}
								developer={game.developer || 'Desconhecido'}
								img={game.img}
								price={game.price}
							/>
						))} */}
						<code style={{ color: "white" }}>
							<pre>
								{JSON.stringify(data, null, 2)}
							</pre>
						</code>
					</Grid>

					<S.ShowMore 
						role="button" 
						onClick={handleShowMore}
						// style={{ display: isPending ? 'none' : 'flex' }}
					>
						<p>Show More</p>
						<RiArrowDownSLine size={35} />
					</S.ShowMore>
				</section>
			</S.Main>
		</Base>
	);
};

export default Games;
