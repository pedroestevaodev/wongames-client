'use client';

import styled, { css } from 'styled-components';

export const IconButton = styled.button`
	${({ theme }) => css`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: ${theme.spacings.small};
		height: ${theme.spacings.small};
		padding: 0;
		border: 0;
		background: transparent;
		color: ${theme.colors.white};
		cursor: pointer;
	`}
`;

export const SearchForm = styled.form`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: 0.8rem;
		min-width: min(28rem, 70vw);
		padding: 0.6rem 1rem;
		border-radius: ${theme.border.radius};
		background: rgba(255, 255, 255, 0.12);
	`}
`;

export const SearchInput = styled.input`
	${({ theme }) => css`
		flex: 1;
		min-width: 0;
		border: 0;
		outline: none;
		background: transparent;
		color: ${theme.colors.white};
		font-size: ${theme.font.sizes.small};

		&::placeholder {
			color: rgba(255, 255, 255, 0.55);
		}

		&::-webkit-search-cancel-button {
			display: none;
		}
	`}
`;
