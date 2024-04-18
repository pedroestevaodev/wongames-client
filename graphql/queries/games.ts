import { gql, QueryHookOptions } from '@apollo/client';
import { GameFragment } from './fragments/games';
import { GetGamesQuery, GetGamesQueryVariables } from "../generated/graphql";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export const GET_GAMES = gql`
	query GetGames($limit: Int!, $start: Int!) {
		games(pagination: { limit: $limit, start: $start }) {
			data {
				attributes {
					...GameFragment
				}
			}
		}
	}

	${GameFragment}
`;

export const GET_GAME_BY_SLUG = gql`
	query GetGameBySlug($slug: String!) {
		games(filters: { slug: { eq: $slug } }) {
			data {
				attributes {
					name
					short_description
					description
					price
					rating
					release_date
					gallery {
						data {
							attributes {
								url
								alternativeText
							}
						}
					}
					cover {
						data {
							attributes {
								url
							}
						}
					}
					developers {
						data {
							attributes {
								name
							}
						}
					}
					publisher {
						data {
							attributes {
								name
							}
						}
					}
					categories {
						data {
							attributes {
								name
							}
						}
					}
					platforms {
						data {
							attributes {
								name
							}
						}
					}
				}
			}
		}
	}
`;

export const useQueryGames = (options?: QueryHookOptions<GetGamesQuery, GetGamesQueryVariables>) => {
	return useQuery<GetGamesQuery, GetGamesQueryVariables>(GET_GAMES, options);
};
