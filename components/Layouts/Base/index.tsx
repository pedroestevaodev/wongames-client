'use client';

import React from 'react';
import * as S from './styles';
import Container from '@/components/Container';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

export type BaseLayoutProps = {
	children: React.ReactNode;
};

const Base = ({ children }: BaseLayoutProps) => {
	return (
		<section>
			<Container>
				<Menu />
			</Container>

			{children}

			<S.SectionFooter>
				<Container>
					<Footer />
				</Container>
			</S.SectionFooter>
		</section>
	);
};

export default Base;
