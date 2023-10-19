'use client';

import styled, { css } from 'styled-components';

type ImageProps = {
	src: string;
};

export const BannerContainer = styled.div``;

export const Image = styled.div<ImageProps>`
	${({ src }) => css`
		background-image: url(${src});
		background-position: center center;
		background-size: cover;
	`}
`;
