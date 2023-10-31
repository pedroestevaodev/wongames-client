'use client';

import React, {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	forwardRef
} from 'react';
import * as S from './styles';

type ButtonTypes =
	| AnchorHTMLAttributes<HTMLAnchorElement>
	| ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
	size?: 'small' | 'medium' | 'large';
	fullWidth?: boolean;
	minimal?: boolean;
	icon?: React.ReactNode;
	as?: React.ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<S.ContainerProps, ButtonProps> = (
	{
		children,
		icon,
		size = 'medium',
		fullWidth = false,
		minimal = false,
		...props
	},
	ref
) => {
	return (
		<S.ButtonContainer
			className={`inline-flex items-center justify-center border-0 rounded-4 p-xxsmall no-underline
                ${
									size === 'small'
										? 'h-[3rem] text-xsmall'
										: size === 'medium'
										? 'h-[4rem] text-small px-medium py-xxsmall'
										: 'h-[5rem] text-medium px-xlarge py-xxsmall'
								}
				${minimal ? 'bg-none' : 'bg-gradient-to-b from-orange to-pink text-[white]'}
                ${fullWidth ? 'w-full' : 'w-fit'}
            `}
			hasIcon={!!icon}
			minimal={minimal}
			ref={ref}
			{...props}
		>
			{!!icon && icon}
			{!!children && <span className="leading-normal">{children}</span>}
		</S.ButtonContainer>
	);
};

export default forwardRef(Button);
