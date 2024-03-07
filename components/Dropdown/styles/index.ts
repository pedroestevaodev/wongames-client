'use client';

import styled, { css } from 'styled-components';

type DropdownContainerProps = {
	isOpen?: boolean;
};

const wrapperModifiers = {
	open: () => css`
		opacity: 1;
		pointer-events: auto;
		margin-right: -2.2rem;
		transform: translateY(0);
		visibility: visible;
	`,
	close: () => css`
		opacity: 0;
		pointer-events: none;
		transform: translateY(-2rem);
		visibility: hidden;
	`
};

export const DropdownContainer = styled.div<DropdownContainerProps>`
	${({ isOpen }) => css`
		position: relative;
		width: max-content;

		${Content},
		${Overlay} {
			transition:
				transform 0.2s ease-in,
				opacity 0.3s ease-in-out;

			${isOpen && wrapperModifiers.open()}
			${!isOpen && wrapperModifiers.close()}
		}
	`}
`;

export const Title = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	cursor: pointer;
	color: #fafafa;
	padding-right: 2.4rem;
	z-index: 50;
`;

export const Content = styled.div`
	position: absolute;
	right: 0;
	display: flex;
	flex-direction: column;
	background-color: #fafafa;
	border-radius: 6px;
	color: #030517;
	cursor: auto;
	margin-top: 2.4rem;
	z-index: 50;

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

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 30;
`;
