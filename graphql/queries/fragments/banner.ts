import { gql } from '@apollo/client';

export const BannerFragment = gql`
	fragment BannerFragment on Banner {
		Title
		SubTitle
		Image {
			data {
				attributes {
					url
				}
			}
		}
		Button {
			Label
			Link
		}
		Ribbon {
			Text
			Color
			Size
		}
	}
`;
