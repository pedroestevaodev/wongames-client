'use client';

import styled, { css } from 'styled-components';

export const Badge = styled.div`
	${({ theme }) => css`
		display: inline-flex;
		align-items: center;
		gap: 0.8rem;
		max-width: 100%;
		margin-bottom: ${theme.spacings.small};
		padding: 0.6rem 0.8rem 0.6rem 1.2rem;
		border-radius: ${theme.border.radius};
		background: rgba(242, 49, 165, 0.16);
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.small};
	`}
`;

export const Label = styled.span`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	strong {
		font-weight: 600;
	}
`;

export const ClearButton = styled.button`
	${({ theme }) => css`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.4rem;
		height: 2.4rem;
		flex-shrink: 0;
		border: 0;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.12);
		color: ${theme.colors.white};
		cursor: pointer;
		transition: background ${theme.transition.fast};

		&:hover {
			background: rgba(255, 255, 255, 0.22);
		}
	`}
`;
