import React from 'react';
import * as S from '@/components/Layouts/Home/styles';
import Base from '../Base';
import Container from '@/components/Container';
import BannerSlider from '@/components/BannerSlider';
import ShowCase from '@/components/ShowCase';
import { BannerProps } from '@/components/Banner';
import { GameCardProps } from '@/components/GameCard';
import { HighlightProps } from '@/components/Highlight';

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
	return (
		<Base>
			<Container>
				<S.SectionBanner>
					<BannerSlider items={banners} />
				</S.SectionBanner>
			</Container>

			<S.SectionNews>
				<ShowCase title="News" games={newGames} />
			</S.SectionNews>

			<ShowCase
				title="Most Popular"
				highlight={mostPopularHighlight}
				games={mostPopularGames}
			/>

			<S.SectionUpcoming>
				<ShowCase title="Upcoming" games={upcommingGames} />
				<ShowCase highlight={upcommingHighligth} games={upcommingMoreGames} />
			</S.SectionUpcoming>

			<ShowCase
				title="Free games"
				highlight={freeHighligth}
				games={freeGames}
			/>
		</Base>
	);
};

export default Home;
