import React from 'react';
import { notFound } from 'next/navigation';
import Game from '@/components/Layouts/Game'; // GameLayoutProps
import { Enum_Game_Rating, GameEntityResponseCollection, GetRecommendedQuery, GetRecommendedQueryVariables, GetUpcomingQuery, GetUpcomingQueryVariables, HighlightFragmentFragment, Query } from '@/graphql/generated/graphql';
import { getClient } from '@/lib/apolloClient';
import { GET_GAME_BY_SLUG } from '@/graphql/queries/games';
import { PlatformProps, RatingProps } from '@/components/GameDetails';
import { GalleryImageProps } from '@/components/Gallery';
import { GET_RECOMMENDED } from "@/graphql/queries/recommended";
import { gamesMapper, highlightMapper } from "@/utils/mappers";
import { GET_UPCOMING } from "@/graphql/queries/upcoming";

const Index = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;

	const { data, error } = await getClient().query<Query>({
		query: GET_GAME_BY_SLUG,
		variables: { slug: slug },
		context: {
			fetchOptions: {
				next: { revalidate: 60 }
			}
		}
	});

	if (!data.games?.data.length) return notFound();

	if (error) return notFound();

	const { 
		data: { recommended } 
	} = await getClient().query<GetRecommendedQuery, GetRecommendedQueryVariables>({
		query: GET_RECOMMENDED,
		context: {
			fetchOptions: {
				next: { revalidate: 60 }
			}
		}
	});

	const {
		data: { upcomingGames, showcase }
	} = await getClient().query<GetUpcomingQuery, GetUpcomingQueryVariables>({
		query: GET_UPCOMING,
		variables: { date: new Date().toISOString().slice(0, 10) },
		context: {
			fetchOptions: {
				next: { revalidate: 10 }
			}
		}
	});

	return (
		<Game
			cover={
				`${process.env.NEXT_PUBLIC_API_URL}${data.games?.data[0]?.attributes?.cover?.data?.attributes?.url}` ||
				''
			}
			gameInfo={{
				title: data.games?.data[0]?.attributes?.name || '',
				price: data.games?.data[0]?.attributes?.price || 0,
				description: data.games?.data[0]?.attributes?.short_description || ''
			}}
			gallery={
				(data.games?.data[0]?.attributes?.gallery?.data.map((image) => ({
					src: `${process.env.NEXT_PUBLIC_API_URL}${image.attributes?.url}`,
					label: image.attributes?.alternativeText
				})) as unknown as GalleryImageProps[]) ?? []
			}
			description={data.games?.data[0]?.attributes?.description || ''}
			details={{
				developer:
					data.games?.data[0]?.attributes?.developers?.data[0]?.attributes
						?.name || '',
				releaseDate: data.games?.data[0]?.attributes?.release_date || '',
				platforms:
					(data.games?.data[0]?.attributes?.platforms?.data.map(
						(platform) => platform.attributes?.name
					) as PlatformProps[]) ?? [],
				publisher:
					data.games?.data[0]?.attributes?.publisher?.data?.attributes?.name ||
					'',
				rating:
					(data.games?.data[0]?.attributes?.rating as RatingProps) ||
					Enum_Game_Rating.Br18,
				genres:
					(data.games?.data[0].attributes?.categories?.data.map(
						(category) => category.attributes?.name
					) as string[]) ?? []
			}}
			upcomingTitle={showcase?.data?.attributes?.upcomingGames?.title || "Upcoming games"}
			upcomingGames={gamesMapper(upcomingGames as GameEntityResponseCollection)}
			upcomingHighlight={highlightMapper(showcase?.data?.attributes?.upcomingGames?.highlight as HighlightFragmentFragment)}
			recommendedTitle={recommended?.data?.attributes?.section.title || "You may like these games"}
			recommendedGames={gamesMapper(recommended?.data?.attributes?.section.games as GameEntityResponseCollection)}
		/>
	);
};

export default Index;
