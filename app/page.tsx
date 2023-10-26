import React from 'react';
import Container from '@/components/Container';
import Menu from '@/components/Menu';
import Heading from '@/components/Heading';
import Highlight from // HighlightProps
'@/components/Highlight';
import BannerSlider from '@/components/BannerSlider';
import GameCardSlider from '@/components/GameCardSlider';
import Footer from '@/components/Footer';
// import { BannerProps } from '@/components/Banner';
// import { GameCardProps } from '@/components/GameCard';
import bannerSliderItems from '@/components/BannerSlider/mocks/mock';
import gameCardSliderItems from '@/components/GameCardSlider/mocks/mock';
import highlightItems from '@/components/Highlight/mocks/mock';
import * as S from '@/public/styles/home';

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
					<Container>
						<Heading lineLeft lineColor="secondary" color="black">
							News
						</Heading>

						<GameCardSlider items={gameCardSliderItems} color="black" />
					</Container>
				</S.SectionNews>

				<Container>
					<S.SectionMostPopular>
						<Heading lineLeft lineColor="secondary">
							Most Popular
						</Heading>

						<Highlight {...highlightItems} />
						<GameCardSlider items={gameCardSliderItems} />
					</S.SectionMostPopular>

					<S.SectionUpcoming>
						<Heading lineLeft lineColor="secondary">
							Upcomming
						</Heading>

						<GameCardSlider items={gameCardSliderItems} />
						<Highlight {...highlightItems} />
						<GameCardSlider items={gameCardSliderItems} />
					</S.SectionUpcoming>

					<S.SectionFreeGames>
						<Heading lineLeft lineColor="secondary">
							Free Games
						</Heading>

						<Highlight {...highlightItems} />
						<GameCardSlider items={gameCardSliderItems} />
					</S.SectionFreeGames>
				</Container>

				<S.SectionFooter>
					<Container>
						<Footer />
					</Container>
				</S.SectionFooter>
			</section>
		);
	};

export default Home;
