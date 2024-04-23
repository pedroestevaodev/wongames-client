import { gql } from '@apollo/client';
import { GameFragment } from './fragments/games';
import { HighlightFragment } from './fragments/highlight';

export const GET_UPCOMING = gql`
	query GetUpcoming($date: Date!) {
		upcomingGames: games(
			filters: { release_date: { gt: $date } }
			sort: "release_date:asc"
			pagination: { limit: 8 }
		) {
			data {
				attributes {
					...GameFragment
				}
			}
		}

		showcase: home {
			data {
				attributes {
					upcomingGames {
						title
						highlight {
							...HighlightFragment
						}
					}
				}
			}
		}
	}

	${GameFragment}
	${HighlightFragment}
`;
