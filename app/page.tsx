import React from 'react';
import Home from '@/components/Layouts/Home';
import gameCardSliderItems from '@/components/GameCardSlider/mocks/mock';
import highlightItems from '@/components/Highlight/mocks/mock';
import { GET_HOME } from '@/graphql/queries/home';
import { getClient } from '@/lib/apolloClient';
import { Query } from '@/graphql/graphql';
import { BannerProps } from '@/components/Banner';
import { RibbonColorsProps, RibbonSizeProps } from '@/components/Ribbon';

const Index = async () => {
	const { data } = await getClient().query<Query>({
		query: GET_HOME,
		context: {
			fetchOptions: {
				next: { revalidate: 10 }
			}
		}
	});

	const bannersData = data.banners?.data.map((banner) => ({
		img: `http://localhost:1338${banner.attributes?.Image?.data?.attributes?.url}`,
		title: banner.attributes?.Title || '',
		subTitle: banner.attributes?.SubTitle || '',
		buttonLabel: banner.attributes?.Button?.Label || '',
		buttonLink: banner.attributes?.Button?.Link || '',
		...(banner.attributes?.Ribbon && {
			ribbon: (banner.attributes.Ribbon.Text as React.ReactNode) || null,
			ribbonColor:
				(banner.attributes.Ribbon.Color as RibbonColorsProps) || null,
			ribbonSize: (banner.attributes.Ribbon.Size as RibbonSizeProps) || null
		})
	}));

	return (
		<>
			{/* {loading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{data && (
				<p className="text-[#ffffff]">
					{JSON.stringify(data, null, 2)}
				</p>
			)} */}
			<Home
				banners={bannersData as BannerProps[]}
				newGames={gameCardSliderItems}
				mostPopularHighlight={highlightItems}
				mostPopularGames={gameCardSliderItems}
				upcommingGames={gameCardSliderItems}
				upcommingMoreGames={gameCardSliderItems}
				upcommingHighligth={highlightItems}
				freeHighligth={highlightItems}
				freeGames={gameCardSliderItems}
				// {...data as HomeLayoutProps}
			/>
		</>
	);
};

export default Index;
