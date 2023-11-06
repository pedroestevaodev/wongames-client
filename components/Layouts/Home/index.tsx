import React from 'react';
import Container from '@/components/Container';
import Menu from '@/components/Menu';
import BannerSlider from '@/components/BannerSlider';
import Footer from '@/components/Footer';
// import { BannerProps } from '@/components/Banner';
// import { GameCardProps } from '@/components/GameCard';
import bannerSliderItems from '@/components/BannerSlider/mocks/mock';
import gameCardSliderItems from '@/components/GameCardSlider/mocks/mock';
import highlightItems from '@/components/Highlight/mocks/mock';
import * as S from '@/components/Layouts/Home/styles';
import ShowCase from '@/components/ShowCase';

// export type HomeProps = {
// 	banners: BannerProps[]
// 	newGames: GameCardProps[]
// 	mostPopularHighlight: HighlightProps
// 	mostPopularGames: GameCardProps[]
// 	upcommingGames: GameCardProps[]
// 	upcommingHighligth: HighlightProps
// 	upcommingMoreGames: GameCardProps[]
// 	freeGames: GameCardProps[]
// 	freeHighligth: HighlightProps
// }

const Home = () =>
	// 	{
	// 	banners,
	// 	newGames,
	// 	mostPopularHighlight,
	// 	mostPopularGames,
	// 	upcommingGames,
	// 	upcommingHighligth,
	// 	upcommingMoreGames,
	// 	freeGames,
	// 	freeHighligth
	// }: HomeProps
	{
		return (
			<section>
				<Container>
					<Menu />
					<S.SectionBanner>
						<BannerSlider items={bannerSliderItems} />
					</S.SectionBanner>
				</Container>

				<S.SectionNews>
					<ShowCase title="News" games={gameCardSliderItems} />
				</S.SectionNews>

				<ShowCase
					title="Most Popular"
					highlight={highlightItems}
					games={gameCardSliderItems}
				/>

				<S.SectionUpcoming>
					<ShowCase title="Upcoming" games={gameCardSliderItems} />
					<ShowCase highlight={highlightItems} games={gameCardSliderItems} />
				</S.SectionUpcoming>

				<ShowCase
					title="Free games"
					highlight={highlightItems}
					games={gameCardSliderItems}
				/>

				<S.SectionFooter>
					<Container>
						<Footer />
					</Container>
				</S.SectionFooter>
			</section>
		);
	};

export default Home;
