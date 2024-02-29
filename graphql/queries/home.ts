import { gql } from '@apollo/client';
import { BannerFragment } from './fragments/banner';

export const GET_HOME = gql`
	query GetHome {
		banners {
			data {
				attributes {
					...BannerFragment
				}
			}
		}

		newGames: games(
			filters: { release_date: { lte: "2024-02-29" } }
			sort: "release_date:desc"
			pagination: { limit: 8 }
		) {
			data {
				attributes {
					...GameFragment
				}
			}
		}

		upcomingGames: games(
			filters: { release_date: { gt: "2024-02-29" } }
			sort: "release_date:asc"
			pagination: { limit: 8 }
		) {
			data {
				attributes {
					...GameFragment
				}
			}
		}

		freeGames: games(
			filters: { price: { eq: 0 } }
			sort: "release_date:desc"
			pagination: { limit: 8 }
		) {
			data {
				attributes {
					...GameFragment
				}
			}
		}
	}

	${BannerFragment}
`;
