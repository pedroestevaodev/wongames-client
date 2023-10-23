'use client';

import styled, { css } from 'styled-components';

const Container = styled.div`
	${() => css`
		max-width: 130rem;
		margin-left: auto;
		margin-right: auto;
		padding-left: calc(3.2rem / 2);
		padding-right: calc(3.2rem / 2);
	`}
`;

export default Container;
