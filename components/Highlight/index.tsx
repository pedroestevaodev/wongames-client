'use client';

import React from 'react';
import * as S from './styles';
import Button from '../Button';

export type HighlightProps = {
	title: string;
	subTitle: string;
	backgroundImage: string;
	floatImage: string;
	buttonLabel: string;
	buttonLink: string;
	alignment?: 'right' | 'left';
};

const Highlight = ({
	title,
	subTitle,
	backgroundImage,
	floatImage,
	buttonLabel,
	buttonLink,
	alignment = 'right'
}: HighlightProps) => {
	return (
		<S.HighlightContainer
			className="relative h-[23rem] grid md:h-[32rem] after:absolute after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)]"
			backgroundImage={backgroundImage}
			alignment={alignment}
		>
			{!!floatImage && (
				<S.FloatImage
					src={floatImage}
					className="self-end z-10 max-h-[23rem] max-w-full md:max-h-[32rem]"
					width={266}
					height={311}
					alt={title}
				/>
			)}
			<S.Content className="z-10 p-xsmall md:self-end md:p-xlarge">
				<S.Title className="text-large font-bold text-white md:text-xxlarge">
					{title}
				</S.Title>
				<S.SubTitle className="text-small font-light text-white mb-medium md:text-large">
					{subTitle}
				</S.SubTitle>
				<Button as="a" href={buttonLink}>
					{buttonLabel}
				</Button>
			</S.Content>
		</S.HighlightContainer>
	);
};

export default Highlight;
