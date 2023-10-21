'use client';

import React from 'react';
import * as S from './styles';

export type RibbonColorsProps = 'primary' | 'secondary';

export type RibbonSizeProps = 'normal' | 'small';

export type RibbonProps = {
	children: React.ReactNode;
	color?: RibbonColorsProps;
	size?: RibbonSizeProps;
	className?: string;
};

const Ribbon = ({
	children,
	color = 'primary',
	size = 'normal',
	className
}: RibbonProps) => {
	return (
		<S.RibbonContainer
			className={`absolute top-xsmall flex items-center font-bold text-white z-10 before:absolute before:right-0 before:border-l-[0rem] before:border-r-transparent before:border-b-transparent before:border-b-[1rem]
                ${color === 'primary' ? 'bg-primary' : 'bg-secondary'}
                ${
									size === 'normal'
										? 'text-small py-0 px-small h-[3.6rem] right-[-2rem] before:top-[3.6rem] before:border-t-[1rem] before:border-r-[2rem]'
										: 'text-xsmall py-0 px-xsmall h-[2.6rem] right-[-1.5rem] before:top-[2.6rem] before:border-t-[0.7rem] before:border-r-[1.5rem]'
								}
				${className}
            `}
			color={color}
		>
			{children}
		</S.RibbonContainer>
	);
};

export default Ribbon;
