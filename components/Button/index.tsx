'use client';

import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
	| AnchorHTMLAttributes<HTMLAnchorElement>
	| ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
	size?: 'small' | 'medium' | 'large';
	fullWidth?: boolean;
	icon?: React.ReactNode;
	as?: React.ElementType;
} & ButtonTypes;

const Button = ({
	children,
	icon,
	size = 'medium',
	fullWidth = false,
	...props
}: ButtonProps) => {
	return (
		<S.ButtonContainer
			className={`inline-flex items-center justify-center bg-gradient-to-b from-orange to-pink text-[white] border-0 rounded-4 p-xxsmall no-underline
                ${
									size === 'small'
										? 'h-[3rem] text-xsmall'
										: size === 'medium'
										? 'h-[4rem] text-small px-medium py-xxsmall'
										: 'h-[5rem] text-medium px-xlarge py-xxsmall'
								}
                ${fullWidth ? 'w-full' : 'w-fit'}
            `}
			hasIcon={!!icon}
			{...props}
		>
			{!!icon && icon}
			{!!children && <span className="leading-normal">{children}</span>}
		</S.ButtonContainer>
	);
};

export default Button;
