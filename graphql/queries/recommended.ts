import { gql } from '@apollo/client';
import { HighlightFragment } from "./fragments/highlight";
import { GameFragment } from "./fragments/games";

export const GET_RECOMMENDED = gql`
	query GetRecommended {
		recommended {
			data {
				attributes {
					section {
						title
						highlight {
							...HighlightFragment
						}
						games {
                            data {
                                attributes {
                                    ...GameFragment
                                }
                            }
						}
					}
				}
			}
		}
	}

    ${HighlightFragment}
    ${GameFragment}
`;
