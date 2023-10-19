'use client';

import React from 'react';
import * as S from './styles';
import Button from '../Button';

export type BannerProps = {
	img: string;
	title: string;
	subTitle: string;
	buttonLabel: string;
	buttonLink: string;
};

const Banner = ({
	img,
	title,
	subTitle,
	buttonLabel,
	buttonLink
}: BannerProps) => {
	return (
		<S.BannerContainer className="relative md:shadow-[0_0.4rem_0.5rem_0_rgba(0,0,0,0.2)]">
			<S.Image
				src={img}
				className="bg-lightGray w-full h-[23rem] md:h-[58rem]"
				role="img"
				aria-label={title}
			/>

			<div className="w-full bg-[rgba(0,0,0,0.7)] p-small md:rounded-t-0 md:rounded-r-0 md:rounded-b-4 md:rounded-l-4 md:p-large md:absolute md:bottom-0 md:left-0">
				<h2 className="text-large font-bold text-white md:text-xxlarge">
					{title}
				</h2>
				<h3
					className="text-white text-small font-normal mb-xsmall md:text-large"
					dangerouslySetInnerHTML={{ __html: subTitle }}
				/>
				<Button as="a" href={buttonLink} size="large">
					{buttonLabel}
				</Button>
			</div>
		</S.BannerContainer>
	);
};

export default Banner;
