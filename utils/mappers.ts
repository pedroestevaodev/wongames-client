import { BannerProps } from '@/components/Banner';
import { GameCardProps } from '@/components/GameCard';
import { HighlightProps } from '@/components/Highlight';
import {
	BannerEntity,
	BannerEntityResponseCollection,
	BannerFragmentFragment,
	GameEntityResponseCollection,
	GameFragmentFragment,
	HighlightFragmentFragment
} from '@/graphql/generated/graphql';

export const bannerMapper = (banners: BannerEntityResponseCollection) => {
	return (
		(banners?.data?.map((banner: BannerEntity) => ({
			img: `${process.env.NEXT_PUBLIC_API_URL}${(
				banner.attributes as BannerFragmentFragment
			)?.image?.data?.attributes?.url}`,
			title: (banner.attributes as BannerFragmentFragment)?.title || '',
			subTitle: (banner.attributes as BannerFragmentFragment)?.subTitle || '',
			buttonLabel:
				(banner.attributes as BannerFragmentFragment)?.button?.label || '',
			buttonLink:
				(banner.attributes as BannerFragmentFragment)?.button?.link || '',
			...((banner.attributes as BannerFragmentFragment)?.ribbon && {
				ribbon:
					(banner.attributes as BannerFragmentFragment)?.ribbon?.text || null,
				ribbonColor:
					(banner.attributes as BannerFragmentFragment)?.ribbon?.color || null,
				ribbonSize:
					(banner.attributes as BannerFragmentFragment)?.ribbon?.size || null
			})
		})) as BannerProps[]) || []
	);
};

export const gamesMapper = (games: GameEntityResponseCollection) => {
	return (
		(games?.data.map((game) => ({
			title: (game.attributes as GameFragmentFragment).name,
			slug: (game.attributes as GameFragmentFragment).slug,
			developer: (game.attributes as GameFragmentFragment).developers?.data[0]
				.attributes?.name,
			img: `${process.env.NEXT_PUBLIC_API_URL}${(game.attributes as GameFragmentFragment)
				.cover?.data?.attributes?.url}`,
			price: (game.attributes as GameFragmentFragment).price
		})) as GameCardProps[]) || []
	);
};

export const staticGamesParams = (games: GameEntityResponseCollection) => {
	return (
		(games?.data.map((game) => ({
			title: (game.attributes as GameFragmentFragment).name,
			slug: (game.attributes as GameFragmentFragment).slug,
			developer: (game.attributes as GameFragmentFragment).developers?.data[0]
				.attributes?.name,
			img: `${process.env.NEXT_PUBLIC_API_URL}${(game.attributes as GameFragmentFragment)
				.cover?.data?.attributes?.url}`,
			price: (game.attributes as GameFragmentFragment).price
		})) as GameCardProps[]) || []
	);
};

export const highlightMapper = (highlight: HighlightFragmentFragment) => {
	return (
		highlight &&
		({
			title: highlight.title,
			subTitle: highlight.subTitle,
			backgroundImage: `${process.env.NEXT_PUBLIC_API_URL}${highlight.background?.data?.attributes?.url}`,
			floatImage: `${process.env.NEXT_PUBLIC_API_URL}${highlight.floatImage?.data?.attributes?.url}`,
			buttonLabel: highlight.buttonLabel,
			buttonLink: highlight.buttonLink,
			alignment: highlight.alignment
		} as HighlightProps)
	);
};
