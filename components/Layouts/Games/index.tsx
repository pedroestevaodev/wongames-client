'use client';

import React, { useTransition } from 'react';
import * as S from './styles';
import Base from '../Base';
import GameCard from '@/components/GameCard';
import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar';
import Grid from '@/components/Grid';
import { RiArrowDownSLine } from '@remixicon/react';
import { 
	GameEntityResponseCollection
} from "@/graphql/generated/graphql";
import { useQueryGames } from "@/graphql/queries/games";
import { gamesMapper } from "@/utils/mappers";
import SkeletonContainer from "@/components/Skeleton";

export type GamesLayoutProps = {
	filterItems: ItemProps[];
};

const Games = ({
	filterItems 
}: GamesLayoutProps) => {
	const [isPending, startTransition] = useTransition();

	const { error, data, loading, fetchMore } = useQueryGames({
		variables: { limit: 15, start: 0 }
	});

	const handleFilter = () => {
		return;
	};

	const handleShowMore = () => {
		startTransition(() => {
			fetchMore({
				variables: {
					limit: 15,
					start: data?.games?.data?.length ?? 0 + 1,
				},
			});
		});
	};

	// if (loading) return <p>Loading...</p>;

	if (error) {
		return (
			<code style={{ color: "white" }}>
				<pre>
					{JSON.stringify(data, null, 2)}
				</pre>
			</code>
		);
	}

	return (
		<Base>
			<S.Main>
				<ExploreSidebar 
					items={filterItems} 
					onFilter={handleFilter} 
				/>

				<section>
					<Grid>
						{loading ? (
							<SkeletonContainer numberOfElements={9}>
								<div className="relative flex flex-col w-full h-full rounded-[6px] overflow-hidden bg-white">
									<div className="h-[14rem] min-h-[14rem] overflow-hidden rounded-t-[6px] rounded-b-[0px] w-full">
										<div className="w-full h-full bg-[rgb(209,213,219)] animate-pulse" />
									</div>
									<div className="relative flex flex-col justify-between h-full p-xsmall gap-[8px]">
										<div className="flex items-center flex-col justify-between gap-[5px] w-full">
											<div className="flex items-center gap-2 w-full">
												<div className="w-full h-[24px] bg-[rgb(209,213,219)] rounded-[6px] animate-pulse" />
												<div className="w-[28px] h-[24px] bg-[rgb(209,213,219)] rounded-[50%] animate-pulse" />
											</div>
											<div className="w-full h-[21px] bg-[rgb(209,213,219)] rounded-[6px] animate-pulse" />
										</div>
										<div className="flex items-center justify-end gap-2 w-full">
											<div className="w-[70px] h-[30px] bg-[rgb(209,213,219)] rounded-[6px] animate-pulse" />
											<div className="w-[30px] h-[30px] bg-[rgb(209,213,219)] rounded-[6px] animate-pulse" />
										</div>
									</div>
								</div>
							</SkeletonContainer>
						) : (
							gamesMapper(data?.games as GameEntityResponseCollection).map((game) => (
								<GameCard 
									key={game.slug}
									title={game.title}
									slug={game.slug}
									developer={game.developer || 'Desconhecido'}
									img={game.img}
									price={game.price}
								/>
							))
						)}
					</Grid>

					<S.ShowMore 
						role="button" 
						onClick={handleShowMore}
						style={{
							marginTop: '1rem',
							padding: '1rem',
							border: isPending ? '1px solid red' : 'none',
						}}
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
