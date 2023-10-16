'use client';

import React from 'react';
import * as S from './styles';

export type ButtonProps = {
	children?: React.ReactNode;
	size?: 'small' | 'medium' | 'large';
	fullWidth?: boolean;
	icon?: React.ReactNode;
	onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
	children,
	icon,
	size = 'medium',
	fullWidth = false,
	...props
}: ButtonProps) => {
	return (
		<S.ButtonContainer
			className={`bg-gradient-to-b from-orange to-pink text-[white] border-0 rounded-4 p-xxsmall
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
