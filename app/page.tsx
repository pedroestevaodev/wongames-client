import React from 'react';
import Home from // HomeLayoutProps
'@/components/Layouts/Home';
import bannerSliderItems from '@/components/BannerSlider/mocks/mock';
import gameCardSliderItems from '@/components/GameCardSlider/mocks/mock';
import highlightItems from '@/components/Highlight/mocks/mock';
// import { getClient } from "@/lib/apolloClient";
// import { gql } from "@apollo/client";

// const query = gql`
// 	query getGames {
// 		games {
// 			data {
// 				attributes {
// 					name
// 				}
// 			}
// 		}
// 	}
// `;

const Index = async () => {
	// const { data, loading, error } = await getClient().query({ query });

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
				banners={bannerSliderItems}
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
