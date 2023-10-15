'use client';

import React from 'react';
import * as S from './styles';

export type HeadingProps = {
	children: React.ReactNode;
	color?: 'white' | 'black';
	lineLeft?: boolean;
	lineBottom?: boolean;
};

const Heading = ({
	children,
	color = 'black',
	lineLeft = false,
	lineBottom = false
}: HeadingProps) => {
	return (
		<S.HeadingContainer
			className={`text-xlarge md:text-xxlarge 
                ${color === 'white' ? 'text-[#FAFAFA]' : 'text-[#030517]'} 
                ${
									lineLeft
										? 'pl-xxsmall border-l-[0.7rem] border-l-secondary'
										: 'no-left-line'
								} 
                ${
									lineBottom
										? 'relative mb-medium after:absolute after:left-0 after:bottom-[-1rem] after:w-[5rem] after:border-[0.5rem] after:border-primary'
										: 'no-bottom-line'
								}
            `}
		>
			{children}
		</S.HeadingContainer>
	);
};

export default Heading;
