'use client';

import styled, { css } from 'styled-components';

export const Title = styled.div`
	cursor: pointer;
	color: #fafafa;
	position: relative;
	display: flex;
	align-items: center;
	padding-right: 2.4rem;
`;

export const Content = styled.div`
	position: absolute;
	right: 0;
	display: flex;
	flex-direction: column;
	background: #fafafa;
	color: #030517;
	margin-top: 2.4rem;

	&::before {
		content: '';
		position: absolute;
		top: -1.2rem;
		right: 2.4rem;
		border-right: 1.2rem solid transparent;
		border-left: 1.2rem solid transparent;
		border-bottom: 1.2rem solid #fafafa;
	}
`;

type DropdownContainerProps = {
	isOpen?: boolean;
};

const wrapperModifiers = {
	open: () => css`
		opacity: 1;
		pointer-events: auto;
		transform: translateY(0);
	`,
	close: () => css`
		opacity: 0;
		pointer-events: none;
		transform: translateY(-2rem);
	`
};

export const DropdownContainer = styled.div<DropdownContainerProps>`
	${({ isOpen }) => css`
		position: relative;
		width: max-content;

		${Content} {
			transition:
				transform 0.2s ease-in,
				opacity 0.3s ease-in-out;

			${isOpen && wrapperModifiers.open()}
			${!isOpen && wrapperModifiers.close()}
		}
	`}
`;
