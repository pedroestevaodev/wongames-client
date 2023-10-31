'use client';

import React from 'react';
import * as S from './styles';

export type HeadingProps = {
	children: React.ReactNode;
	color?: 'white' | 'black';
	lineLeft?: boolean;
	lineBottom?: boolean;
	lineColor?: 'primary' | 'secondary';
	size?: 'small' | 'medium' | 'huge';
	className?: string;
};

const Heading = ({
	children,
	color = 'white',
	lineLeft = false,
	lineBottom = false,
	lineColor = 'primary',
	size = 'medium',
	className
}: HeadingProps) => {
	return (
		<S.HeadingContainer
			className={`font-bold 
                ${color === 'white' ? 'text-[#FAFAFA]' : 'text-[#030517]'} 
                ${
									lineLeft
										? `pl-xxsmall border-l-[0.7rem] ${
												lineColor === 'primary'
													? 'border-l-primary'
													: 'border-l-secondary'
										  }`
										: 'no-left-line'
								} 
                ${
									lineBottom
										? `relative mb-medium after:absolute after:left-0 after:bottom-[-1rem] after:w-[5rem] after:border-[0.38rem] ${
												lineColor === 'primary'
													? 'after:border-primary'
													: 'after:border-secondary'
										  }`
										: 'no-bottom-line'
								}
				${
					size === 'small'
						? 'text-medium after:w-[3rem]'
						: size === 'medium'
						? 'text-xlarge md:text-xxlarge'
						: 'text-huge'
				}
				${className}
            `}
		>
			{children}
		</S.HeadingContainer>
	);
};

export default Heading;
