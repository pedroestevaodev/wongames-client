'use client';

import React from 'react';
import * as S from './styles';
import Container from '@/components/Container';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import { useSession } from "next-auth/react";

export type BaseLayoutProps = {
	children: React.ReactNode;
};

const Base = ({ children }: BaseLayoutProps) => {
	const { data, status } = useSession();

	return (
		<S.BaseContainer>
			<Container>
				<Menu username={data?.user?.name} loading={status === "loading"} />
			</Container>

			<S.Content>{children}</S.Content>

			<S.SectionFooter>
				<Container>
					<Footer />
				</Container>
			</S.SectionFooter>
		</S.BaseContainer>
	);
};

export default Base;
