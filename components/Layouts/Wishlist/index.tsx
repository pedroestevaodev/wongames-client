import React from 'react';
import Base from '../Base';
import Heading from '@/components/Heading';
import Container from '@/components/Container';
import GameCard, { GameCardProps } from '@/components/GameCard';
import { HighlightProps } from '@/components/Highlight';
import ShowCase from '@/components/ShowCase';
import Grid from '@/components/Grid';
import Divider from '@/components/Divider';
import Empty from '@/components/Empty';

export type WishlistLayoutProps = {
	games?: GameCardProps[];
	recommendedTitle: string;
	recommendedGames: GameCardProps[];
	recommendedHighlight: HighlightProps;
};

const Wishlist = ({
	games = [],
	recommendedTitle,
	recommendedGames,
	recommendedHighlight
}: WishlistLayoutProps) => {
	return (
		<Base>
			<Container>
				<Heading lineLeft lineColor="secondary">
					Wishlist
				</Heading>

				{games.length ? (
					<Grid>
						{games?.map((game, index) => (
							<GameCard key={`wishlist-${index}`} {...game} />
						))}
					</Grid>
				) : (
					<Empty
						title="Your wishlist is empty"
						description="Games added to your wishlist will appear here"
						hasLink
					/>
				)}

				<Divider />
			</Container>

			<ShowCase
				title={recommendedTitle}
				games={recommendedGames}
				highlight={recommendedHighlight}
			/>
		</Base>
	);
};

export default Wishlist;
