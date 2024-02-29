import React from 'react';
import { notFound } from 'next/navigation';
import Game from '@/components/Layouts/Game'; // GameLayoutProps
import gamePageMock from '@/components/Layouts/Game/mocks/mock';
import { Enum_Game_Rating, Query } from '@/graphql/generated/graphql';
import { getClient } from '@/lib/apolloClient';
import { GET_GAME_BY_SLUG } from '@/graphql/queries/games';
import { PlatformProps, RatingProps } from '@/components/GameDetails';
import { GalleryImageProps } from '@/components/Gallery';

const Index = async ({ params }: { params: { slug: string } }) => {
	const { data, error } = await getClient().query<Query>({
		query: GET_GAME_BY_SLUG,
		variables: { slug: params.slug },
		context: {
			fetchOptions: {
				next: { revalidate: 60 }
			}
		}
	});

	if (!data.games?.data.length) return notFound();

	if (error) return notFound();

	return (
		<Game
			cover={
				`${process.env.API_URL}${data.games?.data[0]?.attributes?.cover?.data?.attributes?.url}` ||
				''
			}
			gameInfo={{
				title: data.games?.data[0]?.attributes?.name || '',
				price: data.games?.data[0]?.attributes?.price || 0,
				description: data.games?.data[0]?.attributes?.short_description || ''
			}}
			gallery={
				(data.games?.data[0]?.attributes?.gallery?.data.map((image) => ({
					src: `${process.env.API_URL}${image.attributes?.url}`,
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
			upcomingGames={gamePageMock.upcomingGames}
			upcomingHighlight={gamePageMock.upcomingHighlight}
			recommendedGames={gamePageMock.recommendedGames}
			// {...props}
		/>
	);
};

export default Index;
