import { gql } from '@apollo/client';

export const BannerFragment = gql`
	fragment BannerFragment on Banner {
		title
		subTitle
		image {
			data {
				attributes {
					url
				}
			}
		}
		button {
			label
			link
		}
		ribbon {
			text
			color
			size
		}
	}
`;
