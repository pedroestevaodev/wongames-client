import { gql } from '@apollo/client';

export const HighlightFragment = gql`
	fragment HighlightFragment on ComponentPageHighlight {
		title
		subTitle
		background {
			data {
				attributes {
					url
				}
			}
		}
		floatImage {
			data {
				attributes {
					url
				}
			}
		}
		buttonLabel
		buttonLink
		alignment
	}
`;
