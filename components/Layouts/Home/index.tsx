import React from 'react';
import * as S from '@/components/Layouts/Home/styles';
import Base from '../Base';
import Container from '@/components/Container';
import BannerSlider from '@/components/BannerSlider';
import ShowCase from '@/components/ShowCase';
import { BannerProps } from '@/components/Banner';
import { GameCardProps } from '@/components/GameCard';
import { HighlightProps } from '@/components/Highlight';
import bannerSliderItems from '@/components/BannerSlider/mocks/mock';
import gameCardSliderItems from '@/components/GameCardSlider/mocks/mock';
import highlightItems from '@/components/Highlight/mocks/mock';

export type HomeLayoutProps = {
	banners: BannerProps[];
	newGames: GameCardProps[];
	mostPopularHighlight: HighlightProps;
	mostPopularGames: GameCardProps[];
	upcommingGames: GameCardProps[];
	upcommingHighligth: HighlightProps;
	upcommingMoreGames: GameCardProps[];
	freeGames: GameCardProps[];
	freeHighligth: HighlightProps;
};

const Home = ({
	banners,
	newGames,
	mostPopularHighlight,
	mostPopularGames,
	upcommingGames,
	upcommingHighligth,
	upcommingMoreGames,
	freeHighligth,
	freeGames
}: HomeLayoutProps) => {
	console.log(banners);
	console.log(newGames);
	console.log(mostPopularHighlight);
	console.log(mostPopularGames);
	console.log(upcommingGames);
	console.log(upcommingHighligth);
	console.log(upcommingMoreGames);
	console.log(freeHighligth);
	console.log(freeGames);

	return (
		<Base>
			<Container>
				<S.SectionBanner>
					<BannerSlider items={bannerSliderItems} />
					{/* <BannerSlider items={banners} /> */}
				</S.SectionBanner>
			</Container>

			<S.SectionNews>
				<ShowCase title="News" games={gameCardSliderItems} />
				{/* <ShowCase title="News" games={newGames} /> */}
			</S.SectionNews>

			<ShowCase
				title="Most Popular"
				highlight={highlightItems}
				// highlight={mostPopularHighlight}
				games={gameCardSliderItems}
				// games={mostPopularGames}
			/>

			<S.SectionUpcoming>
				<ShowCase title="Upcoming" games={gameCardSliderItems} />
				{/* <ShowCase title="Upcoming" games={upcommingGames} /> */}
				<ShowCase highlight={highlightItems} games={gameCardSliderItems} />
				{/* <ShowCase highlight={upcommingHighligth} games={upcommingMoreGames} /> */}
			</S.SectionUpcoming>

			<ShowCase
				title="Free games"
				highlight={highlightItems}
				// highlight={freeHighligth}
				games={gameCardSliderItems}
				// games={freeGames}
			/>
		</Base>
	);
};

export default Home;
